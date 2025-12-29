import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; 
import ParticleBackground from "./ParticlesBackground";
// Make sure you have your Gradient component available if you want extra glow
// import Gradient from "../Components/Gradient"; 

const GetInTouch = () => {
  return (
    <section className="bg-zinc-950 py-20 px-6 relative">

        <ParticleBackground />
      
      {/* Container - Styled as a floating premium card */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-zinc-900/80 border border-white/10 rounded-[40px] p-10 md:p-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group"
        >
          
          {/* Background Gradient/Glow inside the card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dbe11d] rounded-full blur-[200px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

          {/* LEFT SIDE: Text Content */}
          <div className="relative z-10 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
               <span className="w-2 h-2 rounded-full bg-[#dbe11d] animate-pulse" />
               <span className="text-[#dbe11d] font-bold uppercase tracking-[0.2em] text-xs">
                 Start Your Journey
               </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-6">
              Ready To <span className="text-zinc-600 group-hover:text-white transition-colors duration-500">Scale?</span><br />
              Let's Build The <span className="text-[#dbe11d]">Future.</span>
            </h2>

            <p className="text-zinc-400 text-lg max-w-md mb-10">
              We are currently accepting new projects. Book a discovery call and let's discuss how we can elevate your brand.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#dbe11d] text-black px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-colors duration-300"
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
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full md:w-[400px] h-[300px] md:h-[400px] flex items-center justify-center"
          >
            {/* Replace this src with your 3D robot or abstract shape (e.g., /image02.png) */}
            <img 
              src="/image02.png" 
              alt="Future Tech" 
              className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(219,225,29,0.3)] animate-float"
            />
            
            {/* Optional: Circular text or badge behind image */}
            <div className="absolute inset-0 border border-white/5 rounded-full scale-125 animate-spin-slow pointer-events-none border-dashed" />
          </motion.div>

        </motion.div>
      </div>

      {/* Add Custom Animation for floating effect if not already in your CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default GetInTouch;