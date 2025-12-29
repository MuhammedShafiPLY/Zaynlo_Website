import React from "react";
import { motion } from "framer-motion";

const ClientMarquee = () => {
  // 1. ADD YOUR CLIENT NAMES HERE
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

  // 2. DUPLICATE ARRAY FOR SEAMLESS LOOP
  // We repeat the list 4 times to ensure it fills wide screens comfortably before looping
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="bg-black py-10 border-y border-white/5 overflow-hidden relative z-20">
      
      {/* Gradient Masks (Fades the edges) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Scrolling Container */}
      <div className="flex">
        <motion.div
          className="flex flex-nowrap gap-16 md:gap-24"
          animate={{
            x: "-50%", // Moves half the distance (because we duplicated content)
          }}
          transition={{
            duration: 35, // Adjust speed: Higher = Slower
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div key={index} className="flex items-center gap-16 md:gap-24 shrink-0">
              
              {/* The Client Name */}
              <h3 className="text-3xl md:text-4xl font-black uppercase text-white/40 whitespace-nowrap hover:text-white transition-colors cursor-default">
                {client}
              </h3>

              {/* The Separator (Accent Star) */}
              <span className="text-[#dbe11d] text-2xl">★</span>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientMarquee;