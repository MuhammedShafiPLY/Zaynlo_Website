import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, GradientTexture, Float, Environment } from "@react-three/drei";

const AnimatedBlob = () => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={2.5}> {/* Slightly larger scale for impact */}
        
        {/* OPTIMIZATION: Reduced segments from 128 to 64 for better performance */}
        <sphereGeometry args={[1, 64, 64]} />
        
        <MeshDistortMaterial
          speed={4}
          distort={0.4} // Smooth distortion
          radius={1}
        >
          <GradientTexture
            stops={[0, 0.5, 1]}
            // Kept your Lime/Purple theme but tweaked for better contrast
            colors={["#dbe11d", "#8b5cf6", "#dbe11d"]} 
          />
        </MeshDistortMaterial>
      </mesh>
    </Float>
  );
};

const Hero3D = ({ className }) => {
  return (
    <div className={`w-full h-full min-h-[500px] pointer-events-none ${className}`}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }} // Optimized Camera Angle
        dpr={[1, 2]} // OPTIMIZATION: Limits pixel ratio to save battery/performance on mobiles
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
            {/* Lighting Setup */}
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#dbe11d" />
            
            <AnimatedBlob />
            
            {/* Adds subtle reflections to make it look 'expensive' */}
            <Environment preset="city" /> 
        </Suspense>
      </Canvas>
    </div>
  );
};

export default React.memo(Hero3D);