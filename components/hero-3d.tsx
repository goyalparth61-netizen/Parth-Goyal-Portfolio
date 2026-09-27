"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const points = useMemo(() => {
    const count = 420;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 3.4 + ((i * 17) % 160) / 100;
      const theta = ((i * 137.5) % 360) * (Math.PI / 180);
      const phi = (((i * 73.7) % 170) + 5) * (Math.PI / 180);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    return positions;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.025;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.08) * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={points}
          count={points.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#b7ff3c"
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

function OrbitRing({
  rotation,
  scale,
  speed,
  color,
}: {
  rotation: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.z += speed;
  });

  return (
    <mesh ref={ref} rotation={rotation} scale={scale}>
      <torusGeometry args={[1.65, 0.012, 12, 180]} />
      <meshBasicMaterial color={color} transparent opacity={0.38} />
    </mesh>
  );
}

function Core() {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;

    const time = clock.elapsedTime;
    const targetX = pointer.y * 0.3;
    const targetY = pointer.x * 0.45;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX + Math.sin(time * 0.34) * 0.12,
      0.045
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY + time * 0.12,
      0.045
    );

    if (shell.current) {
      shell.current.rotation.z = -time * 0.09;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.25} rotationIntensity={0.18} floatIntensity={0.36}>
        <mesh>
          <icosahedronGeometry args={[1.1, 4]} />
          <meshBasicMaterial
            color="#9dff25"
            transparent
            opacity={0.11}
            wireframe
          />
        </mesh>

        <mesh scale={0.86}>
          <icosahedronGeometry args={[1.1, 3]} />
          <meshStandardMaterial
            color="#0e120b"
            emissive="#5f8e17"
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.85}
          />
        </mesh>

        <mesh ref={shell} scale={1.16}>
          <icosahedronGeometry args={[1.1, 2]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.055}
            wireframe
          />
        </mesh>

        <mesh position={[0, 0, 0.92]} scale={0.18}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#d8ff9a" transparent opacity={0.8} />
        </mesh>

        <OrbitRing
          rotation={[0.9, 0.25, 0.2]}
          scale={1.12}
          speed={0.0022}
          color="#b7ff3c"
        />
        <OrbitRing
          rotation={[-0.25, 0.65, 1.15]}
          scale={1.31}
          speed={-0.0016}
          color="#8f76ff"
        />
        <OrbitRing
          rotation={[1.5, -0.35, -0.4]}
          scale={1.48}
          speed={0.00115}
          color="#ffffff"
        />
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5.7]} fov={38} />
      <ambientLight intensity={0.5} />
      <pointLight position={[2.5, 2.5, 4]} intensity={15} color="#dfff9b" distance={8} />
      <pointLight position={[-3, -1, 2]} intensity={10} color="#6556ff" distance={7} />

      <ParticleField />
      <Core />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.7], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
      <div className="hero-3d__vignette" />
    </div>
  );
}
