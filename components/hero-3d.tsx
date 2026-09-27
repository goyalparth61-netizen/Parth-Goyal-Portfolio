"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const positions = useMemo(() => {
    const count = 260;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2.7 + ((i * 29) % 140) / 100;
      const theta = ((i * 171.3) % 360) * (Math.PI / 180);
      const phi = (((i * 97.2) % 165) + 7) * (Math.PI / 180);

      data[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      data[i * 3 + 1] = radius * Math.cos(phi);
      data[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    return data;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.035;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.11) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        color="#a8ff4a"
        size={0.013}
        sizeAttenuation
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  );
}

function Ring({
  scale,
  rotation,
  speed,
  color,
  opacity = 0.45,
}: {
  scale: number;
  rotation: [number, number, number];
  speed: number;
  color: string;
  opacity?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.z += speed;
  });

  return (
    <mesh ref={ref} rotation={rotation} scale={scale}>
      <torusGeometry args={[1.55, 0.008, 8, 160]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function HoloCore() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.y * 0.22 + Math.sin(t * 0.45) * 0.08,
      0.05
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.3 + t * 0.06,
      0.05
    );
  });

  return (
    <group ref={group}>
      <Float speed={1.05} rotationIntensity={0.12} floatIntensity={0.24}>
        <mesh>
          <icosahedronGeometry args={[0.92, 3]} />
          <meshBasicMaterial color="#b7ff3c" transparent opacity={0.08} wireframe />
        </mesh>

        <mesh scale={0.72}>
          <icosahedronGeometry args={[0.92, 2]} />
          <meshBasicMaterial color="#9a7cff" transparent opacity={0.12} wireframe />
        </mesh>

        <mesh scale={1.08}>
          <icosahedronGeometry args={[0.92, 2]} />
          <meshBasicMaterial color="#d9f7a8" transparent opacity={0.035} wireframe />
        </mesh>

        <mesh position={[0, 0, 0.83]} scale={0.11}>
          <sphereGeometry args={[1, 20, 20]} />
          <meshBasicMaterial color="#f1ffd0" />
        </mesh>

        <Ring scale={0.9} rotation={[0.9, 0.2, 0]} speed={0.0018} color="#b7ff3c" />
        <Ring scale={1.12} rotation={[-0.25, 0.75, 1.0]} speed={-0.0012} color="#8d72ff" />
        <Ring scale={1.28} rotation={[1.55, -0.15, -0.45]} speed={0.0009} color="#ffffff" opacity={0.22} />
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5.1]} fov={34} />
      <ambientLight intensity={0.2} />
      <pointLight position={[2, 2, 3]} intensity={5} color="#dfffaa" distance={6} />
      <pointLight position={[-2, -1, 2]} intensity={3} color="#6956ff" distance={5} />
      <Particles />
      <HoloCore />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d" aria-hidden="true">
      <Canvas
        dpr={[1, 1.35]}
        camera={{ position: [0, 0, 5.1], fov: 34 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
      <div className="hero-3d__vignette" />
    </div>
  );
}
