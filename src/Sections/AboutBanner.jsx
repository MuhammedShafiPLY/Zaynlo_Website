import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutBanner = () => {
  // Stagger animation container for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child by 0.2s
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } // Custom easing for premium feel
    },
  };

  return (
    <section className="w-full h-screen min-h-[600px] bg-black relative flex items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND ELEMENTS (Optimized) */}
      
      {/* Right-side image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:bg-gradient-to-l z-10" />
        <img
          src="/about_banner.webp"
          alt="about banner"
          className="w-full h-full object-cover opacity-60 md:opacity-80 will-change-transform"
        />
      </motion.div>

      {/* Decorative Lights - GPU Accelerated */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px] animate-pulse will-change-transform transform-gpu opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-[#dbe11d] rounded-full blur-[150px] will-change-transform transform-gpu opacity-10" />
      </div>

      {/* 2. CENTERED CONTENT */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-20 px-6 text-center max-w-5xl mx-auto flex flex-col items-center"
      >
        
        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black leading-[0.9] text-white uppercase italic tracking-tighter"
        >
          About <span className="text-[#dbe11d]">Us.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-zinc-400 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          We craft premium digital products, brand experiences, and growth strategies for ambitious teams who want to define the future.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <Link to="/contact" className="group relative w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#dbe11d] to-[#fae635] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200 will-change-transform" />
            <button className="relative w-full sm:w-auto px-10 py-4 bg-[#dbe11d] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors duration-300">
              Get Us Now
            </button>
          </Link>

          <Link to="/work" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 hover:border-white transition-all duration-300">
              Our Work
            </button>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default AboutBanner;