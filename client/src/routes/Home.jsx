import { useSnapshot } from 'valtio';
import { motion, AnimatePresence } from 'framer-motion';

import state from '../store';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';
import Button from '../components/Button';

function Home() {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div
          className="absolute z-10 flex w-fit flex-col items-start justify-start p-6 max-xl:gap-7 sm:p-8 xl:h-full xl:justify-between xl:px-36 xl:py-8"
          {...slideAnimation('left')}
        >
          <motion.header {...slideAnimation('down')}>
            <img
              src="/logo.png"
              alt="logo"
              className="h-20 w-20 object-contain"
            />
          </motion.header>

          <motion.div
            className="flex flex-1 flex-col justify-start gap-10 xl:justify-center"
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1 className="text-8xl font-black uppercase leading-xl text-black xl:text-10xl xl:leading-2xl">
                Your
                <br className="hidden xl:block" /> Style.
              </h1>
            </motion.div>
            <motion.div
              className="-mt-4 flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md text-base font-normal text-gray-600">
                Craft your distinct fashion statement with Fabriqo's 3D tool.
                Tailor T-shirts, pants, and hoodies to your taste using a
                palette of colors, textures, and logos. Let our AI inspire with
                new designs. <strong>Redefine fashion, your way.</strong>
              </p>

              <Button
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                styles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Home;
