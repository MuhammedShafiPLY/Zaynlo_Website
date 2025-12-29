import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, ArrowUpRight } from "lucide-react";
import Gradient from "../Components/Gradient";

const MissionVision = () => {
  // Stagger Animations for smooth entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each item by 0.2s
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
    <section className="bg-zinc-950 py-24 relative overflow-hidden">

      {/* 1. OPTIMIZED GRADIENTS (GPU Accelerated) */}
      <div className="absolute inset-0 pointer-events-none">
        <Gradient location="absolute bg-transparent h-0 w-[50rem] shadow-[50px_50px_900px_30px_#cfcfcf] rotate-[30deg] z-10 bottom-[100px] -right-[400px] opacity-40 will-change-transform transform-gpu" />
      </div>
      
      {/* Background Glows - Fixed Lag */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#dbe11d] rounded-full blur-[200px] opacity-10 will-change-transform transform-gpu" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-white rounded-full blur-[200px] opacity-5 will-change-transform transform-gpu" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
             <span className="w-12 h-[2px] bg-[#dbe11d]"></span>
             <h6 className="text-[#dbe11d] font-black uppercase tracking-[0.3em] text-xs">
               Core Values
             </h6>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
            Driving The <br />
            <span className="text-[#dbe11d]">Digital Shift.</span>
          </motion.h2>
        </motion.div>

        {/* Cards Grid - Staggered Entry */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          
          {/* 1. MISSION CARD */}
          <Card 
            variants={itemVariants}
            icon={<Target size={32} />}
            title="Our Mission"
            subtitle="To democratize creativity."
            desc="We exist to bridge the gap between human imagination and digital reality. By harnessing the power of AI and cutting-edge design, we empower brands to tell stories that were previously impossible."
          />

          {/* 2. VISION CARD */}
          <Card 
            variants={itemVariants}
            icon={<Eye size={32} />}
            title="Our Vision"
            subtitle="A world without boundaries."
            desc="We envision a future where technology doesn't replace artists, but amplifies them. A digital ecosystem where every idea, no matter how complex, can be visualized instantly and beautifully."
          />

        </motion.div>
      </div>
    </section>
  );
};

// Reusable Card Component
const Card = ({ icon, title, subtitle, desc, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="group relative bg-zinc-900/40 border border-white/10 rounded-[30px] p-10 md:p-14 overflow-hidden hover:bg-zinc-900/60 transition-colors duration-500 will-change-transform"
    >
      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 border border-[#dbe11d] opacity-0 group-hover:opacity-20 rounded-[30px] transition-opacity duration-500 pointer-events-none" />
      
      {/* Icon */}
      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#dbe11d] mb-8 group-hover:scale-110 group-hover:bg-[#dbe11d] group-hover:text-black transition-all duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
        {title}
      </h3>
      <p className="text-[#dbe11d] font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
        {subtitle}
      </p>
      <p className="text-zinc-400 text-lg leading-relaxed mb-8">
        {desc}
      </p>

      {/* Decorative Arrow */}
      <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500">
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
            <ArrowUpRight size={20} />
        </div>
      </div>

    </motion.div>
  );
};

export default MissionVision;