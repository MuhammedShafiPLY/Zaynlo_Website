import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; 
import ParticleBackground from "./ParticlesBackground";

const GetInTouch = () => {

  // Stagger Animations
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
  };

  return (
    <section className="bg-zinc-950 py-20 px-6 relative overflow-hidden">

      {/* Optimized Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <ParticleBackground />
      </div>
      
      {/* Container - Styled as a floating premium card */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-zinc-900/80 border border-white/10 rounded-[40px] p-8 md:p-16 lg:p-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group"
        >
          
          {/* Background Gradient/Glow (GPU Optimized) */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#dbe11d] rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none will-change-transform transform-gpu" />

          {/* LEFT SIDE: Text Content */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
            
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
               <span className="w-2 h-2 rounded-full bg-[#dbe11d] animate-pulse" />
               <span className="text-[#dbe11d] font-bold uppercase tracking-[0.2em] text-xs">
                 Start Your Journey
               </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-6">
              Ready To <span className="text-zinc-600 group-hover:text-white transition-colors duration-500">Scale?</span><br />
              Let's Build The <span className="text-[#dbe11d]">Future.</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-zinc-400 text-lg max-w-md mb-10 leading-relaxed font-light">
              We are currently accepting new projects. Book a discovery call and let's discuss how we can elevate your brand.
            </motion.p>

            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#dbe11d] text-black px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(219,225,29,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Start Project
              <ArrowUpRight size={20} strokeWidth={3} />
            </motion.button>
          </div>

          {/* RIGHT SIDE: Visual/Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full max-w-[300px] md:max-w-[400px] h-[300px] md:h-[400px] flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Floating Animation (Using Framer Motion instead of CSS for smoothness) */}
            <motion.img 
              src="/image02.png" 
              alt="Future Tech" 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(219,225,29,0.2)] will-change-transform"
            />
            
            {/* Spinning Circle Decoration */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-white/5 rounded-full scale-110 pointer-events-none border-dashed opacity-50 will-change-transform" 
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;