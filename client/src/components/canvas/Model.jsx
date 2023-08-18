import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { easing } from 'maath';

import state from '../../store';

function Model({ path, isGroup, nodesTitle }) {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF(path);

  useEffect(() => {
    console.log(nodes, materials);
  }, []);

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    for (const material in materials) {
      if (!snap.model.exclude?.includes(material))
        easing.dampC(materials[material].color, snap.color, 0.25, delta);
    }
  });

  return isGroup ? (
    <group key={JSON.stringify(snap)}>
      {nodes[nodesTitle].children.map((mesh, i) => (
        <mesh
          key={i}
          castShadow
          geometry={mesh.geometry}
          material={materials[mesh.material.name]}
          rotation={snap.model.rotation ? snap.model.rotation : [0, 0, 0]}
          dispose={null}
        >
          {snap.model.texture &&
            snap.isFullTexture &&
            !snap.model.exclude?.includes(mesh.material.name) && (
              <Decal
                position={snap.model.texture?.position}
                rotation={snap.model.texture?.rotation || [0, 0, 0]}
                scale={snap.model.texture?.scale}
                map={fullTexture}
              />
            )}
          {snap.model.logo && snap.isLogoTexture && (
            <Decal
              position={snap.model.logo?.position}
              rotation={snap.model.logo?.rotation || [0, 0, 0]}
              scale={snap.model.logo?.scale}
              map={logoTexture}
              depthTest={false}
              depthWrite={true}
            />
          )}
        </mesh>
      ))}
    </group>
  ) : (
    <group key={JSON.stringify(snap)}>
      <mesh
        castShadow
        geometry={nodes[nodesTitle].geometry}
        material={materials[nodes[nodesTitle].material.name]}
        dispose={null}
        // rotation={[0, 0, 0]}
        rotation={snap.model.rotation ? snap.model.rotation : [0, 0, 0]}
      >
        {snap.model.texture &&
          snap.isFullTexture &&
          !snap.model.exclude?.includes(mesh.material.name) && (
            <Decal
              position={snap.model.texture?.position}
              rotation={snap.model.texture?.rotation || [0, 0, 0]}
              scale={snap.model.texture?.scale}
              map={fullTexture}
            />
          )}
        {snap.model.logo && snap.isLogoTexture && (
          <Decal
            position={snap.model.logo?.position}
            rotation={snap.model.logo?.rotation || [0, 0, 0]}
            scale={snap.model.logo?.scale}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
}

export default Model;
