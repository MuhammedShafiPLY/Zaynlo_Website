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

    
  return (
    <section className="w-full h-screen bg-black relative flex items-center justify-center overflow-hidden">
      
      {/* 1. Dynamic Image */}
      {imageSrc && (
        <>
          <motion.img
            src={imageSrc}
            alt="Banner Visual"
            className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-80 hidden md:block z-0"
            initial={{ x: 80, scale: 1.02, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* Gradient overlay for the image */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/90 via-black/60 to-transparent hidden md:block z-10" />
        </>
      )}

      {/* Decorative Lights (Keep these static or pass colors as props if needed) */}
      <motion.div
        className="absolute top-6 left-6 w-40 h-40 rounded-full bg-white/3 blur-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-6 right-6 w-56 h-56 rounded-full bg-white/5 blur-4xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.18, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 0.6 }}
      />

      {/* Centered Content */}
      <div className="relative z-20 px-6 text-center max-w-4xl">
        
        {/* 2. Dynamic Title & Highlight */}
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold leading-tight text-white uppercase italic"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {title} <span className="text-[#dbe11d]">{highlight}</span>
        </motion.h1>

        {/* 3. Dynamic Description */}
        {description && (
          <motion.p
            className="mt-6 text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            {description}
          </motion.p>
        )}

        {/* 4. Dynamic Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Render Primary Button only if data is passed */}
          {primaryBtn && (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to={primaryBtn.link}
                className="inline-flex px-8 py-3 rounded-full bg-[#dbe11d] text-black font-semibold shadow-[0_12px_40px_rgba(219,225,29,0.18)] transition"
              >
                {primaryBtn.text}
              </Link>
            </motion.div>
          )}

          {/* Render Secondary Button only if data is passed */}
          {secondaryBtn && (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to={secondaryBtn.link}
                className="inline-flex px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/6 transition"
              >
                {secondaryBtn.text}
              </Link>
            </motion.div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default PageBanner;