import { useSnapshot } from 'valtio';

import state from '../../store';
import { adjustColor } from '../../utils/colorUtils';
import Button from '../Button';

function AIPicker({ prompt, setPrompt, generatingImg, handleSubmit }) {
  const snap = useSnapshot(state);

  return (
    <div className="glassmorphism absolute left-full ml-3 flex h-[16rem] w-[19rem] flex-col rounded-md p-3">
      <textarea
        className="text-md w-full flex-1 resize-none rounded-sm border bg-transparent p-2 text-gray-900 outline-none"
        placeholder="Prompt for AI Design..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ borderColor: adjustColor(snap.color) }}
      />
      <div className="mt-4 flex flex-wrap gap-3">
        {generatingImg ? (
          <Button
            type="filled"
            title="Asking AI..."
            styles="text-xs"
            disabled
          />
        ) : (
          <>
            <Button
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              styles="text-xs"
            />
            <Button
              type="filled"
              title="AI Texture"
              handleClick={() => handleSubmit('full')}
              styles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AIPicker;
