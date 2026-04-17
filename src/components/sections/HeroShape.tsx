'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function Shape() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    mesh.current.rotation.y += 0.005;
    mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh} scale={1.8}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#888888"
          distort={0.35}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

export function HeroShape() {
  return (
    <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#ffffff" />
        <pointLight position={[0, 3, 2]} intensity={1} color="#aaaaaa" />
        <Shape />
      </Canvas>
    </div>
  );
}
