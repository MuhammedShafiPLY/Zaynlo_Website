import React from "react";
import { motion } from "framer-motion";

const FloatingAsset = ({ 
  imgSrc, 
  alt = "Zaynlo Asset",
  className = "", 
  flipX = false, 
  flipY = false,
  duration = 5 
}) => {
  return (
    // UPDATED: 'hidden md:block' hides the container on mobile and shows it on desktop/tablet
    <div className={`pointer-events-none z-0 hidden md:block ${className}`}>
      <motion.img
        src={imgSrc}
        alt={alt}
        // Flip and Floating Logic
        style={{ 
          scaleX: flipX ? -1 : 1, 
          scaleY: flipY ? -1 : 1,
          filter: "drop-shadow(0 0 50px rgba(219, 225, 29, 0.2))" 
        }}
        animate={{
          y: [0, -20, 0], // Smooth floating
          rotate: [0, 2, 0], // Subtle 3D rotation
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        // UPDATED: Removed 'sm:hidden' (which was incorrect) and added 'will-change-transform'
        className="w-full h-auto object-contain opacity-80 will-change-transform"
      />
    </div>
  );
};

export default FloatingAsset;