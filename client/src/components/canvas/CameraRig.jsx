import React, { useRef } from 'react';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

import state from '../../store';

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = snap.model.position?.intro?.large;
    if (snap.intro) {
      if (isBreakpoint) targetPosition = snap.model.position?.intro?.medium;
      if (isMobile) targetPosition = snap.model.position?.intro?.small;
    } else {
      targetPosition = snap.model.position?.customize?.large;
      if (isBreakpoint) targetPosition = snap.model.position?.customize?.medium;
      if (isMobile) targetPosition = snap.model.position?.customize?.small;
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
