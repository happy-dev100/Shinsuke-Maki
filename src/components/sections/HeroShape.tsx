'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/* ── Neural nodes orbiting the core ── */
function NeuralNode({ radius, speed, offset, size }: {
  radius: number; speed: number; offset: number; size: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.7) * radius * 0.5,
      Math.sin(t) * radius
    );
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={2} roughness={0} metalness={0.2} />
    </mesh>
  );
}

/* ── Connection lines between core and nodes ── */
function ConnectionLines({ nodeCount }: { nodeCount: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { geometry } = useMemo(() => {
    const positions = new Float32Array(nodeCount * 6);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return { geometry: geo };
  }, [nodeCount]);

  useFrame(({ clock }) => {
    if (!groupRef.current || !linesRef.current) return;
    const positions = linesRef.current.geometry.attributes.position.array as Float32Array;
    groupRef.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      positions[i * 6 + 0] = 0;
      positions[i * 6 + 1] = 0;
      positions[i * 6 + 2] = 0;
      positions[i * 6 + 3] = mesh.position.x;
      positions[i * 6 + 4] = mesh.position.y;
      positions[i * 6 + 5] = mesh.position.z;
    });
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    void clock;
  });

  return (
    <group>
      <group ref={groupRef}>
        {Array.from({ length: nodeCount }).map((_, i) => (
          <NeuralNode
            key={i}
            radius={1.4 + (i % 3) * 0.25}
            speed={0.35 + i * 0.08}
            offset={(i / nodeCount) * Math.PI * 2}
            size={0.055 + (i % 3) * 0.025}
          />
        ))}
      </group>
      <lineSegments ref={linesRef} geometry={geometry}>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

/* ── Outer wireframe sphere ── */
function WireframeSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.12;
    ref.current.rotation.x = clock.elapsedTime * 0.07;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.65, 1]} />
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

/* ── Rotating outer ring ── */
function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.elapsedTime * 0.25;
    ref.current.rotation.x = 1.1;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.9, 0.008, 8, 80]} />
      <meshStandardMaterial color="#93c5fd" emissive="#3b82f6" emissiveIntensity={1.5} transparent opacity={0.6} />
    </mesh>
  );
}

/* ── Second ring at different angle ── */
function OrbitRing2() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = -clock.elapsedTime * 0.18;
    ref.current.rotation.x = 0.4;
    ref.current.rotation.y = clock.elapsedTime * 0.1;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.1, 0.005, 8, 80]} />
      <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={1} transparent opacity={0.35} />
    </mesh>
  );
}

/* ── Central glowing AI core ── */
function AICore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.2;
    ref.current.rotation.x = clock.elapsedTime * 0.13;
    const scale = 1 + Math.sin(clock.elapsedTime * 1.2) * 0.04;
    ref.current.scale.setScalar(scale);
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.75, 4]} />
      <meshStandardMaterial
        color="#1d4ed8"
        emissive="#3b82f6"
        emissiveIntensity={0.8}
        roughness={0.05}
        metalness={0.95}
      />
    </mesh>
  );
}

/* ── Particle field ── */
function Particles({ count = 120 }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.8 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.06;
    ref.current.rotation.x = clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#93c5fd" size={0.025} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

/* ── Scene ── */
function Scene() {
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
      <AICore />
      <WireframeSphere />
      <OrbitRing />
      <OrbitRing2 />
      <ConnectionLines nodeCount={8} />
      <Particles count={120} />
    </Float>
  );
}

export function HeroShape() {
  return (
    <div style={{ width: 320, height: 320 }}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#60a5fa" />
        <pointLight position={[-3, -2, -3]} intensity={1} color="#3b82f6" />
        <pointLight position={[0, 0, 4]} intensity={0.5} color="#ffffff" />
        <Scene />
      </Canvas>
    </div>
  );
}
