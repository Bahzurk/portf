// TechBall.jsx
// A single rotating 3D sphere with a tech-icon texture on it, plus a subtle
// floating animation. Falls back gracefully — see SkillsSection.jsx for the
// flat/2D version shown alongside it or on unsupported devices.


import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useCursor,
  useTexture,
} from "@react-three/drei";


// react-three-fiber v9 no longer auto-registers Three.js classes as JSX tags
// (e.g. <meshStandardMaterial>, <icosahedronGeometry>) — this makes them
// available. Without this line you'll see "Unknown property found" errors,
// since React falls back to treating them as literal (invalid) HTML tags.
extend(THREE);


function Ball({ iconUrl, hoverIconUrl }) {
  const iconTexture = useTexture(iconUrl);
  const hoverTexture = useTexture(hoverIconUrl || iconUrl);
  const activeTexture = hoverIconUrl ? hoverTexture : iconTexture;

  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Turns the cursor into a pointer when hovering the ball.
  useCursor(hovered);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    if (hovered) {
      // Smoothly rotate so the front decal faces the camera (+Z).
      // Normalize current angle to [-π, π] to avoid spinning multiple
      // full turns before settling.
      let y = meshRef.current.rotation.y;
      y = y % (2 * Math.PI);
      if (y > Math.PI) y -= 2 * Math.PI;
      if (y < -Math.PI) y += 2 * Math.PI;

      meshRef.current.rotation.y = THREE.MathUtils.lerp(y, 0, 0.15);
    } else {
      // Resume continuous spin.
      meshRef.current.rotation.y += delta * 0.7;
    }

    // Smoothly scale up on hover, back down on leave.
    const targetScale = hovered ? 3.05 : 2.75;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.12
    );
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={hovered ? 0.45 : 0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={hovered ? "#ffffff" : "#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* Front decal — visible when +Z face is toward camera */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.6}
          map={hoverIconUrl ? activeTexture : iconTexture}
        />

        {/* Back decal — visible when -Z face is toward camera */}
        <Decal
          position={[0, 0, -1]}
          rotation={[2 * Math.PI, Math.PI, 6.25]}
          scale={0.6}
          map={hoverIconUrl ? activeTexture : iconTexture}
        />
      </mesh>
    </Float>
  );
}


// iconUrl: path to a PNG/SVG icon, e.g. "/tech-icons/react.png"
// hoverIconUrl: optional — a different icon shown on hover. If omitted, the
//   same icon is used and the hover effect is purely visual (scale + lighting).
export default function TechBall({ iconUrl, hoverIconUrl }) {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "140px" }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball iconUrl={iconUrl} hoverIconUrl={hoverIconUrl} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}