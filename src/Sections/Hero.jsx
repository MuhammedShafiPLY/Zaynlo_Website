import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Gradient from "../Components/Gradient";
import Hero3D from "../Components/Hero3D";
import ServicesHeroLoop from "../Components/ServicesHeroLoop";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch/flash

  // 1. Detect Mobile Viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Check on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Stagger animation for text elements
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
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
    },
  };

  return (
    <section className="relative min-h-screen bg-zinc-950 text-white flex flex-col justify-center overflow-hidden will-change-transform">
      
      {/* 2. BACKGROUND GRADIENTS (GPU Optimized) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Gradient location="absolute transparent h-0 w-[30rem] shadow-[10px_50px_900px_20px_#cfcfcf] rotate-[30deg] z-0 top-[100px] -left-5 will-change-transform transform-gpu" />
        <Gradient location="absolute bg-transparent h-0 w-[50rem] shadow-[50px_50px_900px_30px_#cfcfcf] rotate-[30deg] z-0 bottom-[100px] -right-[400px] will-change-transform transform-gpu" />
      </div>

      <div className="flex-grow flex items-center justify-center lg:px-24 px-6 pt-20 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl items-center gap-12 lg:gap-20">
          
          {/* LEFT SECTION (Text Content) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start"
          >
            {/* Tagline */}
            <motion.h6
              variants={itemVariants}
              className="inline-block bg-gradient-to-l from-[#dbe11d] to-[#f3f948] text-zinc-950 text-xs md:text-sm font-black uppercase tracking-widest px-6 py-2 rounded-sm w-fit"
            >
              Hello!
            </motion.h6>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter"
            >
              Boring is a choice.
              <br />
              <span className="text-[#dbe11d]">Don't make it.</span>
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

          {/* RIGHT SECTION (3D Content - OPTIMIZED) */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] flex items-center justify-center order-1 lg:order-2">
             
             {/* 3. LOGIC: Only render heavy 3D on Desktop (!isMobile) */}
             {!isMobile ? (
                <>
                    {/* Spline Container */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-full h-full z-20"
                    >
                        <Spline scene="https://prod.spline.design/nLjKp9VWI8LPaWUk/scene.splinecode" />
                    </motion.div>

                    {/* Background 3D Blobs (Visual Anchor) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <Hero3D className="w-[80%] opacity-40 animate-pulse-slow will-change-transform" />
                    </div>
                </>
             ) : (
                /* 4. MOBILE FALLBACK: Lightweight CSS Glow */
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-tr from-[#dbe11d] to-zinc-800 rounded-full blur-[80px] opacity-60 animate-pulse" />
                </div>
             )}

             {/* Glow Behind Model (Keep this on both for atmosphere) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#dbe11d]/10 blur-[120px] rounded-full -z-10 will-change-transform transform-gpu" />
          </div>

        </div>
      </div>

      {/* THE SERVICE LOOP COMPONENT (Anchored to Bottom) */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <ServicesHeroLoop />
      </div>

    </section>
  );
};

export default Hero;