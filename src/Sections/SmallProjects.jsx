import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import FloatingAsset from "../Components/FlotingAsset";

// Utility for clean class names
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const projects = [
  { id: 1, img: "/p1.webp", title: "AI Interface" },
  { id: 2, img: "/p2.webp", title: "Neural Network" },
  { id: 3, img: "/p1.webp", title: "Cyber Reality" },
  { id: 4, img: "/p2.webp", title: "Digital Twin" },
  { id: 5, img: "/p1.webp", title: "Future UI" },
  { id: 6, img: "/p2.webp", title: "Data Stream" },
];

const SmallProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Check for Mobile Screen (Responsive Spacing)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. Auto-rotate (Pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getDisplayIndex = (index) => {
    const length = projects.length;
    return (index + length) % length;
  };

  // 3. Dynamic Styles based on Distance & Screen Size
  const getCardStyle = (offset) => {
    // Spacing config
    const gap = isMobile ? 140 : 300; // Tighter on mobile
    const farGap = isMobile ? 40 : 500; // Far items hide behind on mobile

    if (offset === 0) {
      // Center Item
      return {
        x: 0,
        scale: 1.1,
        rotateY: 0,
        zIndex: 20,
        opacity: 1,
        filter: "grayscale(0%) brightness(1)",
      };
    } else if (Math.abs(offset) === 1) {
      // Immediate Neighbors
      return {
        x: offset > 0 ? gap : -gap,
        scale: 0.9,
        rotateY: offset > 0 ? -25 : 25,
        zIndex: 10,
        opacity: 0.7,
        filter: "grayscale(40%) brightness(0.7)",
      };
    } else {
      // Far Neighbors
      return {
        x: offset > 0 ? farGap : -farGap,
        scale: 0.8,
        rotateY: offset > 0 ? -45 : 45,
        zIndex: 5,
        opacity: isMobile ? 0 : 0.3, // Hide far items on mobile to prevent overflow
        filter: "grayscale(100%) brightness(0.5)",
      };
    }
  };

  // Click Handler to move clicked card to center
  const handleCardClick = (offset) => {
    if (offset === 0) return;
    const newIndex = getDisplayIndex(activeIndex + offset);
    setActiveIndex(newIndex);
    setIsPaused(true); // Temporarily pause on interaction
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5s
  };

  return (
    <section className="bg-zinc-950 min-h-screen py-24 relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Decor */}
      <FloatingAsset
        imgSrc="/image02.png"
        className="absolute -top-[5%] right-[5%] w-[300px] md:w-[600px] z-10 pointer-events-none opacity-50"
        flipX={true}
        duration={6}
      />
      
      {/* GPU Accelerated Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#dbe11d]/5 blur-[120px] rounded-full pointer-events-none will-change-transform transform-gpu" />

      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl px-6 mb-16 space-y-4 text-center z-20"
      >
        <h6 className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs">
          Our Portfolio
        </h6>
        <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
          Architecting <br />
          <span className="text-[#dbe11d] drop-shadow-[0_0_30px_rgba(219,225,29,0.3)]">
            The Future.
          </span>
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto mt-6 text-lg md:text-xl font-medium leading-relaxed">
          We transform complex ideas into high-fidelity digital realities.
          Explore our neural interfaces.
        </p>
      </motion.div>

      {/* 3D Carousel Stage */}
      <div 
        className="relative w-full max-w-6xl h-[450px] md:h-[500px] flex items-center justify-center perspective-[1200px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* The Neon Beam - Center Highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gradient-to-b from-transparent via-[#dbe11d] to-transparent shadow-[0_0_30px_5px_rgba(219,225,29,0.4)] z-0 rounded-full opacity-50" />

        <AnimatePresence initial={false} mode="popLayout">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const realIndex = getDisplayIndex(activeIndex + offset);
            const item = projects[realIndex];
            const style = getCardStyle(offset);

            if (!item) return null;

            return (
              <motion.div
                key={`${item.id}-${offset}`} // Unique key for smoother mapping
                initial={style}
                animate={style}
                transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 1, 0.5, 1] // Cubic bezier for "snap" feel
                }}
                onClick={() => handleCardClick(offset)}
                className={cn(
                  "absolute w-[260px] md:w-[340px] h-[360px] md:h-[450px] rounded-[30px] overflow-hidden bg-zinc-900 border border-white/10",
                  "shadow-2xl cursor-pointer will-change-transform transform-gpu", // GPU Optimization
                  offset === 0 ? "border-[#dbe11d]/50" : "hover:border-white/30"
                )}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: offset === 0 ? "0 25px 50px -12px rgba(0, 0, 0, 0.9)" : "0 10px 30px -10px rgba(0,0,0,0.5)",
                }}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay Text (Only visible on Center) */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end transition-opacity duration-500",
                    offset === 0 ? "opacity-100" : "opacity-0"
                  )}
                >
                  <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter leading-none mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                     <span className="w-8 h-[2px] bg-[#dbe11d]" />
                     <p className="text-[#dbe11d] text-[10px] font-bold tracking-[0.2em] uppercase">
                        AI Generated
                     </p>
                  </div>
                </div>

                {/* Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls / CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 mt-16 z-20"
      >
        <button className="group px-8 py-4 rounded-full border border-white/20 text-white hover:bg-[#dbe11d] hover:text-black hover:border-[#dbe11d] transition-all duration-300 flex items-center gap-3">
          <span className="text-xs font-black tracking-[0.2em] uppercase">Go To Showcase</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </motion.div>

    </section>
  );
};

export default SmallProjects;