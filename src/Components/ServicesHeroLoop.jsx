import React from "react";
import { motion } from "framer-motion";
import { Rocket, Cpu, Globe, Zap, Fingerprint, Layers, Megaphone, CircleFadingPlus  } from "lucide-react";

const ServicesHeroLoop = () => {
  const services = [
    { name: "Brand Identity", icon: <Fingerprint size={20} /> },
    { name: "UI/UX Design", icon: <Cpu size={20} /> },
    { name: "Web Development", icon: <Globe size={20} /> },
    { name: "Digital Marketing", icon: <Rocket size={20} /> },
    { name: "E-Commerce Website", icon: <Layers size={20} /> },
    { name: "Search Engine Optimization", icon: <Zap size={20} /> },
    { name: "Advertising", icon: <Megaphone size={20} /> },
    { name: "Social Media Management", icon: <CircleFadingPlus  size={20} /> },
  ];

  // Duplicate 4 times to ensure seamless looping on Ultrawide monitors
  const loopData = [...services, ...services, ...services, ...services];

  return (
    // Container: Positioned absolute, wider than screen (120vw) to cover rotation gaps
    <div className="absolute bottom-[-10px] md:bottom-10 left-1/2 -translate-x-1/2 w-[120vw] h-[70px] md:h-[90px] flex items-center overflow-hidden bg-[#dbe11d] z-[30] border-y-4 border-black border-double shadow-[0_0_30px_rgba(219,225,29,0.3)] -rotate-2 origin-center select-none pointer-events-none">
      
      <motion.div
        className="flex whitespace-nowrap items-center will-change-transform"
        animate={{ x: "-50%" }} // Move exactly half the length (since we duplicated enough)
        initial={{ x: "0%" }}
        transition={{
          ease: "linear",
          duration: 30, // Slower, smoother speed
          repeat: Infinity,
        }}
      >
        {loopData.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-black font-black uppercase text-lg md:text-2xl tracking-[0.2em] px-8 md:px-12"
          >
            {/* Icon Circle */}
            <span className="flex items-center justify-center bg-black text-[#dbe11d] w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg">
              {service.icon}
            </span>
            
            {/* Text */}
            {service.name}
            
            {/* Separator Dot */}
            <span className="ml-8 md:ml-12 w-2 h-2 bg-black/20 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesHeroLoop;