import React from "react";
import { motion } from "framer-motion";
import Gradient from "../Components/Gradient";
import ServicesHeroLoop from "../Components/ServicesHeroLoop";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <section className="relative min-h-screen bg-zinc-950 text-white flex flex-col justify-center overflow-hidden will-change-transform">
      {/* 1. BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Gradient location="absolute transparent h-0 w-[30rem] shadow-[10px_50px_900px_20px_#cfcfcf] rotate-[30deg] z-0 top-[100px] -left-5" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="w-full h-full flex items-center relative z-10 min-h-screen">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full min-h-screen">
          {/* LEFT SIDE: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center px-6 lg:pl-24 lg:pr-12 pt-32 pb-32 lg:py-0 relative z-20 order-2 lg:order-1"
          >
            {/* Tagline */}
            <motion.h6
              variants={itemVariants}
              className="inline-block bg-gradient-to-l from-[#dbe11d] to-[#f3f948] text-zinc-950 text-xs md:text-sm font-black uppercase tracking-widest px-6 py-2 rounded-sm w-fit mb-6"
            >
              Hello!
            </motion.h6>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6"
            >
              Boring is a choice.
              <br />
              <span className="text-[#dbe11d]">Don't make it.</span>
              <span className="sr-only"> Advertising & Digital Agency Kerala</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed font-light"
            >
              A borderless creative studio engineering culture-defining brands
              through strategy, chaos, and pixels.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE: Full Screen Image */}
          <div className="relative w-full h-[50vh] lg:h-full lg:min-h-screen order-1 lg:order-2 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full absolute inset-0"
            >
              <img
                src="/frotimg.webp"
                alt="Zaynlo - Creative Advertising & Digital Agency Kerala workspace image"
                // --- CHANGED HERE ---
                // 1. Kept 'absolute bottom-10' (your gap)
                // 2. Changed 'h-full' to 'h-[85%]' (decreased size)
                className="absolute bottom-15 w-full h-[85%] object-cover object-center lg:object-left scale-x-[-1]"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent lg:w-1/2" />

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent lg:hidden" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* SERVICE LOOP */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <ServicesHeroLoop />
      </div>
    </section>
  );
};

export default Hero;