"use client";

import React, { useRef, useState, useEffect, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function Brain({ onPointerDown, ...props }: { onPointerDown?: () => void } & any) {
  const group = useRef<THREE.Group>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { scene } = useGLTF(`${basePath}/brain.glb`);

  // Clone the scene once so React Three Fiber owns the object
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  // Mouse tracking
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (group.current) {
      const targetRotationX = -(mouse.current.y * Math.PI) / 3;
      const targetRotationY = (mouse.current.x * Math.PI) / 3;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, 0.04);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.04);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive 
        object={clonedScene} 
        scale={6} 
        onPointerDown={(e: any) => {
          e.stopPropagation();
          onPointerDown?.();
        }}
      />
    </group>
  );
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
useGLTF.preload(`${basePath}/brain.glb`);

export function BrainModel({ onBrainClick }: { onBrainClick?: () => void }) {
  return (
    <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          // Attempt to restore context if lost
          const canvas = gl.domElement;
          canvas.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            console.warn("WebGL context lost — will attempt restore");
          });
          canvas.addEventListener("webglcontextrestored", () => {
            console.log("WebGL context restored");
          });
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Brain onPointerDown={onBrainClick} />
        </Suspense>
      </Canvas>
    </div>
  );
}
