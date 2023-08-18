import { useState } from 'react';
import { useSnapshot } from 'valtio';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

import state from '../store';
import config from '../config/config';
import { DecalTypes, EditorTabs, FilterTabs } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { models } from '../config/models';
import {
  downloadCanvasToImage,
  downloadGeneratedImage,
  reader,
} from '../utils/fileUtils';

import AIPicker from '../components/pickers/AIPicker';
import FilePicker from '../components/pickers/FilePicker';
import ColorPicker from '../components/pickers/ColorPicker';
import Button from '../components/Button';
import Tab from '../components/Tab';
import { download } from '../assets';

function Customizer() {
  const snap = useSnapshot(state);
  const [file, setFile] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    logo: true,
    texture: false,
  });

  function handleActiveFilterTab(tabName) {
    switch (tabName) {
      case 'logo':
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case 'texture':
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    setActiveFilterTab((prevState) => {
      return { ...prevState, [tabName]: !prevState[tabName] };
    });
  }

  function handleDecals(type, result) {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  }

  function readFile(type) {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab('');
    });
  }

  async function handleSubmitPrompt(type) {
    if (!prompt) {
      toast.error("You didn't enter a prompt!");
      return;
    }
    try {
      const environment = import.meta.env.VITE_ENVIRONMENT;

      // Remove in case of final product instead of demo
      if (environment === 'production') {
        setTimeout(() => {
          toast.error("You can't use use AI in this demo version.");
        }, 1500);
        return;
      }

      setGeneratingImg(true);
      const response = await fetch(
        environment === 'development'
          ? config.development.backendUrl + '/api/v1/dalle'
          : config.production.backendUrl + '/api/v1/dalle',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        }
      );
      const data = await response.json();

      // // Set the generated image as either logo or texture
      handleDecals(type, `data:image/png;base64,${data.photo}`);

      // // Save the generated image to user device
      downloadGeneratedImage(data.photo);
    } catch (error) {
      toast.error('An error occured ☹️.');
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab('');
    }
  }

  // Show tab content depending on the activeTab
  function generateTabContent() {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />;
      case 'filepicker':
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case 'aipicker':
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmitPrompt}
          />
        );
      default:
        return null;
    }
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute left-0 top-0 z-10 "
            {...slideAnimation('left')}
          >
            <div className="flex min-h-screen items-center">
              <div className="glassmorphism ml-1 flex w-16 flex-col items-center justify-center gap-8 rounded-lg border-2 py-4">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() =>
                      setActiveEditorTab((currentTab) =>
                        currentTab === tab.name ? '' : tab.name
                      )
                    }
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-5 top-5 z-10"
            {...fadeAnimation}
          >
            {snap.currentModel > 0 && (
              <Button
                type="filled"
                title={String.fromCharCode(8592)}
                styles="w-fit px-4 py-2.5 font-bold text-sm"
                handleClick={() => {
                  state.model = models[snap.currentModel - 1];
                  state.currentModel -= 1;
                }}
              />
            )}
            <Button
              type="filled"
              title="Go Back"
              styles="w-fit px-4 py-2.5 font-bold text-sm mx-1"
              handleClick={() => {
                setActiveEditorTab('');
                setTimeout(() => (state.intro = true), 10);
              }}
            />
            {snap.currentModel < 4 && (
              <Button
                type="filled"
                title={String.fromCharCode(8594)}
                styles="w-fit px-4 py-2.5 font-bold text-sm"
                handleClick={() => {
                  state.model = models[snap.currentModel + 1];
                  state.currentModel += 1;
                }}
              />
            )}
          </motion.div>

          <motion.div
            className="absolute bottom-5 left-0 right-0 z-10 flex w-full flex-wrap items-center justify-center gap-4"
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab) => {
              return (
                snap.model[tab.name] && (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    isFilterTab
                    isActiveTab={activeFilterTab[tab.name]}
                    handleClick={() => {
                      handleActiveFilterTab(tab.name);
                    }}
                  />
                )
              );
            })}
            <Tab
              tab={{ name: 'Download', icon: download }}
              isFilterTab
              handleClick={() => downloadCanvasToImage()}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Customizer;
