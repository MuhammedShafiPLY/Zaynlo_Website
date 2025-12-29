import React from "react";
import { motion } from "framer-motion";

const ClientMarquee = () => {
  const clients = [
    "Nuorbit Studio",
    "Apex Digital",
    "Vortex AI",
    "Cyber Systems",
    "Nebula Corp",
    "Horizon Ventures",
    "Zenith Media",
    "Quantum Labs",
  ];

  return (
    <section className="bg-black py-8 md:py-12 border-y border-white/5 overflow-hidden relative z-20">
      
      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Scrolling Container */}
      <div className="flex overflow-hidden group">
        
        {/* We need TWO identical sets of children for a seamless infinite loop */}
        <MarqueeGroup clients={clients} />
        <MarqueeGroup clients={clients} />
        
      </div>
    </section>
  );
};

// Reusable Sub-Component for cleaner code
const MarqueeGroup = ({ clients }) => (
  <motion.div
    className="flex shrink-0 gap-16 md:gap-32 pr-16 md:pr-32 will-change-transform" // Added GPU hint
    initial={{ x: 0 }}
    animate={{ x: "-100%" }}
    transition={{
      duration: 40, // Adjust speed (Higher = Slower)
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {clients.map((client, index) => (
      <div key={index} className="flex items-center gap-16 md:gap-32">
        <h3 className="text-xl md:text-4xl font-black uppercase text-zinc-500 whitespace-nowrap hover:text-white transition-colors duration-300 cursor-default tracking-tight">
          {client}
        </h3>
        <span className="text-[#dbe11d] text-lg md:text-2xl">✦</span>
      </div>
    ))}
  </motion.div>
);

export default ClientMarquee;