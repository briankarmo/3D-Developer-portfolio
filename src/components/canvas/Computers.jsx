import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  console.log("Computers component rendering, isMobile:", isMobile);
  
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log("Model loaded:", computer ? "success" : "failed");

  // Minimal scale and position
  const scale = isMobile ? 0.4 : 0.6;
  
  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} position={[0, 0, 0]} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={[0, -2, -1.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  console.log("ComputersCanvas rendering");

  useEffect(() => {
    // Check for mobile device
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    console.log("Initial mobile check:", mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      console.log("Media query changed:", event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Canvas
        camera={{
          position: [20, 3, 5],
          fov: 25,
          near: 1,
          far: 100,
        }}
        style={{
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
