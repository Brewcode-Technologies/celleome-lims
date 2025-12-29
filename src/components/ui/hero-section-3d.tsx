import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BoxProps {
  position: [number, number, number];
  rotation: [number, number, number];
}

const Box = ({ position, rotation }: BoxProps) => {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const angleStep = Math.PI * 0.5;
    const radius = 1;

    shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
    shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
    shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
    shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 20,
      curveSegments: 20
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();
    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({ 
      color: '#00d4aa', 
      metalness: 0.3, 
      roughness: 0.4 
    });
  }, []);

  return (
    <mesh position={position} rotation={rotation} geometry={geometry} material={material} />
  );
};

const AnimatedBoxes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  const boxes = Array.from({ length: 50 }, (_, index) => ({
    position: [(index - 25) * 0.75, 0, 0] as [number, number, number],
    rotation: [
      (index - 10) * 0.1,
      Math.PI / 2,
      0
    ] as [number, number, number],
    id: index
  }));

  return (
    <group ref={groupRef}>
      {boxes.map((box) => (
        <Box key={box.id} position={box.position} rotation={box.rotation} />
      ))}
    </group>
  );
};

export const Scene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [5, 5, 20], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedBoxes />
      </Canvas>
    </div>
  );
};

export default Scene;
