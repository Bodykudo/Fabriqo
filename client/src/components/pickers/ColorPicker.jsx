import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../../store';
import { presetColors } from '../../config/constants';

function ColorPicker() {
  const snap = useSnapshot(state);

  return (
    <div className="glassmorphism absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={presetColors}
      />
    </div>
  );
}

export default ColorPicker;
