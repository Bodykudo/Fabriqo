import { useSnapshot } from 'valtio';

import state from '../store';
import { adjustColor, getContrastingColor } from '../utils/colorUtils';

function Button({ type, title, styles, handleClick, disabled }) {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: adjustColor(snap.color),
        color: adjustColor(snap.color),
      };
    }
  };

  return (
    <button
      className={`flex-1 rounded-md px-2 py-1.5 ${styles} ${
        disabled ? 'cursor-default opacity-80' : 'cursor-pointer'
      }`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
