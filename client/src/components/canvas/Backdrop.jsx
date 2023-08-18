import React, { useRef } from 'react';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { easing } from 'maath';

import state from '../../store';

const Backdrop = () => {
  const shadows = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) =>
    easing.dampC(
      shadows.current.getMesh().material.color,
      snap.color,
      0.25,
      delta
    )
  );

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={snap.model.shadow.alpha}
      scale={snap.model.shadow.scale}
      rotation={[Math.PI / 2, 0, 0]}
      position={snap.model.shadow.position}
    >
      {snap.model.shadow.lights.map((light, i) => (
        <RandomizedLight
          key={i}
          amount={light.amount}
          radius={light.radius}
          intensity={light.intensity}
          ambient={light.ambient}
          position={light.position}
        />
      ))}
    </AccumulativeShadows>
  );
};

export default Backdrop;
