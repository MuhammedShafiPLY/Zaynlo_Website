import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* 1. Background Effects (GPU Optimized) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Yellow Glow Top Left */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#dbe11d]/10 rounded-full blur-[120px] will-change-transform" />
        {/* Dark Glow Bottom Right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] will-change-transform" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        
        {/* Floating Image (Use your 3D Robot here) */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 relative"
        >
          {/* Glitch/Shadow Effect behind image */}
          <div className="absolute inset-0 bg-[#dbe11d] rounded-full blur-3xl opacity-20 animate-pulse" />
          
          <img 
            src="/secimg02.webp" // <--- REPLACE THIS with your specific 404 image (e.g., a broken robot)
            alt="Page Not Found" 
            className="w-64 md:w-80 h-auto object-contain drop-shadow-2xl relative z-10"
          />
        </motion.div>

        {/* 404 Glitch Text */}
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[120px] md:text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none"
          >
            404
          </motion.h1>
          
          {/* Decorative "Not Found" Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#dbe11d] text-black font-black uppercase tracking-widest px-4 py-1 text-sm md:text-lg rotate-[-10deg] shadow-lg border-2 border-white"
          >
            Page Not Found
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-md mx-auto mt-6 space-y-2"
        >
            <h2 className="text-2xl font-bold text-white uppercase italic">System Malfunction</h2>
            <p className="text-zinc-400 font-light">
                The digital asset you are looking for has been moved, deleted, or never existed in this dimension.
            </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10"
        >
            <Link to="/">
                <button className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                    <span className="relative z-10 flex items-center gap-2">
                        <Home size={16} /> Return to Base
                    </span>
                    {/* Button Hover Fill Effect */}
                    <div className="absolute inset-0 bg-[#dbe11d] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                </button>
            </Link>
        </motion.div>

      </div>

      {/* 3. Decorative Tech Elements (Bottom) */}
      <div className="absolute bottom-10 w-full flex justify-between px-10 text-[10px] text-white/20 font-mono uppercase tracking-widest pointer-events-none">
        <span>Error: 0x404_MISSING</span>
        <span>/ Zaynlo_System /</span>
        <span>Status: Disconnected</span>
      </div>

    </div>
  );
};

export default NotFound;