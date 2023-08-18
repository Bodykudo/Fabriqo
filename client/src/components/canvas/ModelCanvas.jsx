import { useSnapshot } from 'valtio';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import state from '../../store';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Model from './Model';

const ModelCanvas = () => {
  const snap = useSnapshot(state);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
      className="h-full w-full max-w-full transition-all ease-in"
      id="canvas"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <Model
            path={`/models/${snap.model.path}`}
            isGroup={snap.model.isGroup}
            nodesTitle={snap.model.node}
          />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default ModelCanvas;
