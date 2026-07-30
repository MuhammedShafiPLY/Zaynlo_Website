import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"

const SEOHero = ({ 
  h1, 
  introText, 
  imageSrc,
  imageAlt = "Zaynlo – Digital marketing agency in Kerala"
}) => {

  // Stagger Animation Variants (Matched to PageBanner)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="w-full min-h-[60vh] md:h-screen bg-black relative flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      
      {/* 1. BACKGROUND IMAGE (Full Cover) */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        {/* Overlay: Uniform dark tint so text pops */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover will-change-transform"
        />
      </motion.div>

      {/* Decorative Lights (GPU Accelerated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-50">
         <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] animate-pulse will-change-transform transform-gpu" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#dbe11d]/5 rounded-full blur-[150px] will-change-transform transform-gpu" />
      </div>

      {/* 2. CENTERED CONTENT */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 px-6 text-center max-w-5xl mx-auto flex flex-col items-center"
      >
        
        {/* Dynamic H1 Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[60px] font-black leading-[0.9] text-white uppercase italic tracking-tighter drop-shadow-lg"
        >
          {/* If h1 contains the word 'Kerala', you can manually highlight it in the prop, 
              or we render it as passed. Here we render the raw H1 prop. */}
          {h1}
        </motion.h1>

        {/* Dynamic Intro Text */}
        {introText && (
          <motion.div
            variants={itemVariants}
            className="mt-8 text-zinc-200 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md whitespace-pre-line"
          >
            {introText}
          </motion.div>
        )}

        {/* CTA Buttons (Tailored for Conversions) */}
        <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
            {/* Primary Action */}
            <Link to="/contact" className="w-full sm:w-auto">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-10 py-4 bg-[#dbe11d] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors duration-300 shadow-[0_12px_40px_rgba(219,225,29,0.2)]"
                >
                    Get Free Audit
                </motion.button>
            </Link>

            {/* Secondary Action */}
            <Link to="/services" className="w-full sm:w-auto">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-10 py-4 border border-white/40 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                >
                    Our Services
                </motion.button>
            </Link>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default SEOHero;