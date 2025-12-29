import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageBanner = ({ 
  title = "Page", 
  highlight = "Title", 
  description, 
  imageSrc, 
  primaryBtn,   // Expects object: { text: "Click Me", link: "/path" }
  secondaryBtn  // Expects object: { text: "Learn More", link: "/path" }
}) => {

  // Stagger Animation Variants
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
      
      {/* 1. BACKGROUND IMAGE (Optimized) */}
      {imageSrc && (
        <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 pointer-events-none"
        >
          {/* Gradient overlay for blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent md:bg-gradient-to-l z-10" />
          
          <img
            src={imageSrc}
            alt="Banner Visual"
            className="w-full h-full object-cover opacity-50 md:opacity-80 will-change-transform"
          />
        </motion.div>
      )}

      {/* Decorative Lights (GPU Accelerated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
        
        {/* Dynamic Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black leading-[0.9] text-white uppercase italic tracking-tighter"
        >
          {title} <br className="md:hidden"/> <span className="text-[#dbe11d]">{highlight}</span>
        </motion.h1>

        {/* Dynamic Description */}
        {description && (
          <motion.p
            variants={itemVariants}
            className="mt-8 text-zinc-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light"
          >
            {description}
          </motion.p>
        )}

        {/* Dynamic Buttons */}
        {(primaryBtn || secondaryBtn) && (
            <motion.div 
                variants={itemVariants}
                className="mt-10 flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
            
            {/* Primary Button */}
            {primaryBtn && (
                <Link to={primaryBtn.link} className="w-full sm:w-auto">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-10 py-4 bg-[#dbe11d] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors duration-300 shadow-[0_12px_40px_rgba(219,225,29,0.2)]"
                    >
                        {primaryBtn.text}
                    </motion.button>
                </Link>
            )}

            {/* Secondary Button */}
            {secondaryBtn && (
                <Link to={secondaryBtn.link} className="w-full sm:w-auto">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                    >
                        {secondaryBtn.text}
                    </motion.button>
                </Link>
            )}
            </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default PageBanner;