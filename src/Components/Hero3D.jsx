import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, GradientTexture, Float } from "@react-three/drei";

const AnimatedBlob = () => {
  const meshRef = useRef(null);

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#dbe11d" // Base color white to let the gradient shine
          speed={3}
          distort={0.5}
          radius={1}
          metalness={0.8}
          roughness={0.2}
        >
          <GradientTexture
            stops={[0, 0.5, 1]}
            // Using Lime to Purple gradient for that high-end look
            colors={["#dbe11d", "#8b5cf6", "#abe15d"]} 
          />
        </MeshDistortMaterial>
      </mesh>
    </Float>
  );
};

const Hero3D = ({ className }) => { // Changed 'location' to 'className' for standard naming
  return (
    <div className={`w-full h-full min-h-[500px] ${className}`}>
      <Canvas camera={{ position: [0, 4, 0] }}>
        {/* Lowered ambient light to allow shadows and depth */}
        <ambientLight intensity={9} /> 
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#dbe11d" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#a3e635" />
        <AnimatedBlob />
      </Canvas>
    </div>
  );
};

export default Hero3D;