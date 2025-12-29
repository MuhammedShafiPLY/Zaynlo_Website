import React from "react";
import { motion } from "framer-motion";
import { Rocket, Cpu, Globe, Zap, Fingerprint, Layers } from "lucide-react";

const ServicesHeroLoop = () => {
  const services = [
    { name: "Brand Identity", icon: <Fingerprint size={18} /> },
    { name: "UI/UX Design", icon: <Cpu size={18} /> },
    { name: "Web Development", icon: <Globe size={18} /> },
    { name: "Digital Strategy", icon: <Rocket size={18} /> },
    { name: "Motion Graphics", icon: <Layers size={18} /> },
    { name: "Optimization", icon: <Zap size={18} /> },
  ];

  return (
    <div className="absolute -bottom-10 -left-[10vw] w-[120vw] h-[80px] flex items-center overflow-hidden bg-[#dbe11d] z-[100] border-y-2 border-black/10 -rotate-3 origin-center">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 25, // Adjust for speed
          repeat: Infinity,
        }}
      >
        {/* Render twice for seamless looping */}
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-zinc-950 font-black uppercase text-[20px] tracking-[0.2em] px-5"
          >
            <span className="flex items-center justify-center bg-black text-[#dbe11d] p-1.5 rounded-full">
              {service.icon}
            </span>
            {service.name}
            <span className="ml-10 w-1.5 h-1.5 bg-black/20 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesHeroLoop;