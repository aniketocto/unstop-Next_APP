"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import React, { Suspense, useEffect, useRef } from "react";

const MyModel = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/3D Model/source/astronot.glb");
  const { actions } = useAnimations(animations, group);
  const { viewport } = useThree();

  const leftX =
    viewport.width < 6 ? -viewport.width * 0.5 : -viewport.width * 0.15;

  useEffect(() => {
    if (actions?.floating) {
      actions.floating.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.9}
      position={[leftX, -2, 0]}
      rotation={[0, Math.PI / 3, 0]}
    />
  );
};

const Hero = () => {
  return (
    <div className=" w-full h-dvh z-10">
      {/* <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ toneMappingExposure: 1.5 }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} intensity={2} castShadow />
        <hemisphereLight intensity={1.6} groundColor="black" />

        <Suspense fallback={null}>
          <MyModel />
        </Suspense>
        <OrbitControls />
      </Canvas> */}
    </div>
  );
};

export default Hero;
