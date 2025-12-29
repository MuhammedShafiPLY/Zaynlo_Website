import React from "react";
import { motion } from "framer-motion";

const FloatingAsset = ({ 
  imgSrc, 
  className = "", 
  flipX = false, 
  flipY = false,
  duration = 5 
}) => {
  return (
    <div className={`pointer-events-none z-0 ${className}`}>
      <motion.img
        src={imgSrc}
        alt="Zaynlo Asset"
        // Flip and Floating Logic
        style={{ 
          scaleX: flipX ? -1 : 1, 
          scaleY: flipY ? -1 : 1,
          filter: "drop-shadow(0 0 50px rgba(219, 225, 29, 0.2))" 
        }}
        animate={{
          y: [0, -20, 0], // Melle ponganum thaazhanum
          rotate: [0, 2, 0], // Subtle rotation for 3D feel
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-auto object-contain opacity-80"
      />
    </div>
  );
};

export default FloatingAsset;