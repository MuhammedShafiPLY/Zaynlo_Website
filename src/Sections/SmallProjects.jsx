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

  // Auto-rotate the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Helper to handle wrapping indices (so it loops infinitely)
  const getDisplayIndex = (index) => {
    const length = projects.length;
    return (index + length) % length;
  };

  // Logic to determine styles based on distance from center
  const getCardStyle = (offset) => {
    if (offset === 0) {
      // Center Item
      return {
        x: 0,
        scale: 1.1,
        rotateY: 0,
        zIndex: 20,
        opacity: 1,
        filter: "grayscale(0%)",
      };
    } else if (Math.abs(offset) === 1) {
      // Immediate Neighbors
      return {
        x: offset > 0 ? 280 : -280,
        scale: 0.9,
        rotateY: offset > 0 ? -25 : 25, // Curve inward
        zIndex: 10,
        opacity: 0.7,
        filter: "grayscale(50%)",
      };
    } else {
      // Far Neighbors
      return {
        x: offset > 0 ? 480 : -480,
        scale: 0.8,
        rotateY: offset > 0 ? -45 : 45, // Curve more
        zIndex: 5,
        opacity: 0.3,
        filter: "grayscale(100%)",
      };
    }
  };

  return (
    <section className=" bg-zinc-950 min-h-screen py-20  relative flex flex-col items-center justify-center">
      <FloatingAsset
        imgSrc="/image02.png" // Fixed path string
        className="absolute -top-[5%] right-[5%] w-[400px] md:w-[600px] z-20" // z-99 maatti
        flipX={true}
        duration={6}
      />

      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl px-4 mb-10 space-y-4 text-left z-20" // <--- Change to max-w-7xl
      >
        <h6 className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs">
          Our Portfolio
        </h6>
        <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
          Architecting <br />
          <span className="text-[#dbe11d] drop-shadow-[0_0_20px_rgba(219,225,29,0.4)]">
            The Future.
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 max-w-2xl mt-8 text-lg md:text-xl font-medium leading-relaxed border-l-2 border-[#dbe11d]/30 pl-6"
        >
          We transform complex ideas into high-fidelity digital realities.
          Explore our portfolio of neural interfaces and immersive experiences
          that define the next generation of the web.
        </motion.p>
      </motion.div>

      {/* 3D Carousel Stage */}
      <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center perspective-[1000px]">
        {/* The Glowing Green Beam (Only behind center) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[120%] bg-[#dbe11d] shadow-[0_0_100px_40px_rgba(219,225,29,0.3)] z-0 rounded-full blur-sm opacity-80" />

        <AnimatePresence initial={false}>
          {[-2, -1, 0, 1, 2].map((offset) => {
            // Calculate which image actually belongs at this offset
            const realIndex = getDisplayIndex(activeIndex + offset);
            const item = projects[realIndex];
            const style = getCardStyle(offset);

            // Don't render if it doesn't exist (safety check)
            if (!item) return null;

            return (
              <motion.div
                key={item.id} // Ideally use a unique combination if IDs repeat in infinite loop
                layoutId={`card-${realIndex}`} // layoutId helps smooth transitions
                initial={style}
                animate={style}
                transition={{ duration: 0.8, ease: "anticipate" }}
                className={cn(
                  "absolute w-[280px] md:w-[320px] h-[400px] rounded-[30px] border border-white/10 overflow-hidden bg-neutral-900",
                  "shadow-2xl"
                )}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: offset === 0 ? "0 20px 50px rgba(0,0,0,0.8)" : "",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Overlay Text (Only visible on center/hover) */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end transition-opacity duration-500",
                    offset === 0 ? "opacity-100" : "opacity-0"
                  )}
                >
                  <h3 className="text-2xl font-black italic text-[#dbe11d] uppercase">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs mt-1 tracking-widest">
                    AI GENERATED
                  </p>
                </div>

                {/* Grid Overlay Texture (Simulates the 'screen' look in your image) */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-12 z-20">
        <button className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-[#dbe11d] hover:text-black hover:border-[#dbe11d] transition-all uppercase text-[15px] font-bold tracking-widest">
          Go To Showcase
        </button>
      </div>

      {/* Bottom fade */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-30" /> */}
    </section>
  );
};
export default SmallProjects;
