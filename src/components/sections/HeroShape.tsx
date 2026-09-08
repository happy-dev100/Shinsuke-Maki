'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function createSeededRandom(seed: number) {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function CrystalCore() {
  const inner = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (inner.current) {
      inner.current.rotation.y = t * 0.7;
      inner.current.rotation.x = t * 0.35;
      inner.current.scale.setScalar(1 + Math.sin(t * 2.8) * 0.06);
    }
    if (shell.current) {
      shell.current.rotation.y = -t * 0.28;
      shell.current.rotation.z = t * 0.18;
    }
    if (halo.current) {
      halo.current.rotation.z = t * 0.4;
      halo.current.rotation.x = Math.PI / 2;
    }
  });

  return (
    <group>
      <mesh ref={inner}>
        <octahedronGeometry args={[0.48, 0]} />
        <meshStandardMaterial
          color="#f8fafc"
          emissive="#06b6d4"
          emissiveIntensity={2.6}
          roughness={0.05}
          metalness={0.85}
        />
      </mesh>
      <mesh ref={shell}>
        <octahedronGeometry args={[0.92, 0]} />
        <meshStandardMaterial
          color="#0f766e"
          emissive="#14b8a6"
          emissiveIntensity={1.1}
          roughness={0.12}
          metalness={0.95}
          wireframe
        />
      </mesh>
      <mesh ref={halo}>
        <torusGeometry args={[1.05, 0.012, 8, 64]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={2.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function HudFrames() {
  const a = useRef<THREE.Group>(null);
  const b = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (a.current) {
      a.current.rotation.y = t * 0.22;
      a.current.rotation.x = 0.35;
    }
    if (b.current) {
      b.current.rotation.y = -t * 0.16;
      b.current.rotation.z = 0.5;
    }
  });

  return (
    <group>
      <group ref={a}>
        <mesh>
          <torusGeometry args={[1.7, 0.018, 6, 4]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={2.2}
            roughness={0.15}
          />
        </mesh>
      </group>
      <group ref={b}>
        <mesh>
          <torusGeometry args={[2.05, 0.01, 6, 4]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={1.6}
            roughness={0.2}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>
    </group>
  );
}

function DataColumns({ count = 18 }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(() => {
    const random = createSeededRandom(4201);
    return Array.from({ length: count }, () => ({
      x: (random() - 0.5) * 3.4,
      z: (random() - 0.5) * 3.4,
      speed: 0.6 + random() * 1.4,
      offset: random() * 6,
      scale: 0.35 + random() * 0.7,
    }));
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    seeds.forEach((s, i) => {
      const y = ((clock.elapsedTime * s.speed + s.offset) % 4.4) - 2.2;
      dummy.position.set(s.x, y, s.z);
      dummy.scale.set(0.08, s.scale, 0.08);
      dummy.updateMatrix();
      ref.current?.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#67e8f9"
        emissive="#22d3ee"
        emissiveIntensity={3}
        roughness={0.1}
        transparent
        opacity={0.8}
      />
    </instancedMesh>
  );
}

function OrbitBits({ count = 10 }) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const t = clock.elapsedTime * (0.4 + (i % 3) * 0.12) + i;
      const r = 1.35 + (i % 4) * 0.18;
      child.position.set(
        Math.cos(t) * r,
        Math.sin(t * 1.4) * 0.35,
        Math.sin(t) * r,
      );
      child.rotation.y = t;
    });
  });

  return (
    <group ref={group}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i}>
          <octahedronGeometry args={[0.055 + (i % 3) * 0.015, 0]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#22d3ee' : '#fbbf24'}
            emissive={i % 2 === 0 ? '#22d3ee' : '#f59e0b'}
            emissiveIntensity={2.4}
            roughness={0.1}
            metalness={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function Dust({ count = 90 }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const random = createSeededRandom(771);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (random() - 0.5) * 4.4;
      arr[i * 3 + 1] = (random() - 0.5) * 4.4;
      arr[i * 3 + 2] = (random() - 0.5) * 4.4;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#99f6e4" size={0.022} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <group>
      <CrystalCore />
      <HudFrames />
      <OrbitBits />
      <DataColumns />
      <Dust />
    </group>
  );
}

export function HeroShape() {
  return (
    <div className="hero-ai-orb relative" style={{ width: 360, height: 360 }}>
      <div className="hero-ai-disk" />
      <div className="hero-ai-glow" />
      <Canvas
        camera={{ position: [0, 0.35, 5.8], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', position: 'relative', zIndex: 1 }}
      >
        <ambientLight intensity={0.22} />
        <pointLight position={[2.8, 2.4, 3]} intensity={3.4} color="#22d3ee" />
        <pointLight position={[-2.4, -1.6, 2]} intensity={2} color="#f59e0b" />
        <pointLight position={[0, 0, 4]} intensity={1.2} color="#ecfeff" />
        <Scene />
      </Canvas>
    </div>
  );
}
