import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../store';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn flex cursor-pointer items-center justify-center ${
        isFilterTab ? 'glassmorphism rounded-full' : 'rounded-4'
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab
            ? 'h-[4.2rem] w-[4.2rem]'
            : 'h-11/12 w-11/12 object-contain'
        }`}
      />
    </div>
  );
};

export default Tab;
