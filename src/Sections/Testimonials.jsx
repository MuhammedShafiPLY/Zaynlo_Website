import React, { useState, useEffect } from "react";
import Gradient from "../Components/Gradient"; // Ensure this path is correct
import { motion, AnimatePresence } from "framer-motion";

// ------------------------------------
// 1. DUMMY DATA
// ------------------------------------
const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Creative Director",
    company: "Neon Visions",
    text: "The AI generation capabilities are mind-blowing. We reduced our concept phase by 60% using this tool.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "UX Designer",
    company: "Flux Digital",
    text: "Incredible attention to detail. The Cyberpunk presets gave our latest campaign the exact edge we needed.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Tech Lead",
    company: "Orbital Systems",
    text: "Fast, reliable, and visually stunning. Integration into our workflow was seamless. Highly recommended.",
    img: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    id: 4,
    name: "Elena Vostok",
    role: "Art Curator",
    company: "Future Gallery",
    text: "I was skeptical about AI art, but this platform gives me control I didn't think was possible.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Product Owner",
    company: "Nexus Corp",
    text: "The high-resolution downloads are a game changer for print media. Absolutely worth the subscription.",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 6,
    name: "Jessica Lee",
    role: "Marketing Head",
    company: "Vortex Inc",
    text: "Our engagement rates tripled after using visuals created with this engine. Pure magic.",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // ------------------------------------
  // 2. AUTO-SCROLL LOGIC
  // ------------------------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Slides every 4 seconds
    return () => clearInterval(timer);
  }, []);

  // ------------------------------------
  // 3. HELPER TO GET 3 VISIBLE ITEMS
  // ------------------------------------
  const getVisibleItems = () => {
    const item1 = testimonials[index % testimonials.length];
    const item2 = testimonials[(index + 1) % testimonials.length];
    const item3 = testimonials[(index + 2) % testimonials.length];
    return [item1, item2, item3];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    // FIX 1: Removed 'overflow-hidden' from here so the gradient isn't cut off.
    // FIX 2: Updated padding to 'py-24' (standard Tailwind spacing).
    <section className="bg-zinc-950 py-12 pb-10 relative min-h-screen">
      
      {/* FIX 3: Global style to hide scrollbars and prevent horizontal scrolling */}
 {/*    <style>{`
        html, body {
          overflow-x: hidden;
          width: 100%;
        }
        body::-webkit-scrollbar {
          display: none;
        }
        body {
          -ms-overflow-style: none;  
          scrollbar-width: none; 
 }
      `</style>
*/}
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#dbe11d] rounded-full blur-[150px] z-12" />
      </div>

      <Gradient location="absolute bg-transparent h-0 w-[50rem] shadow-[100px_100px_1500px_30px_#cfcfcf] -rotate-[30deg] z-10 top-[100px] -right-[400px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 mb-20"
        >
          <motion.h6
            variants={itemVariants}
            className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs"
          >
            Testimonials
          </motion.h6>

          <motion.h2
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter text-white"
          >
            WHAT THEY<br />
            <span className="text-[#dbe11d] drop-shadow-[0_0_20px_rgba(219,225,29,0.4)]">
              SAY
            </span>
          </motion.h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px] md:h-[350px]">
          <AnimatePresence mode="popLayout">
            {getVisibleItems().map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  x: -50,
                  scale: 0.9,
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl flex flex-col justify-between backdrop-blur-sm group hover:border-[#dbe11d]/50 transition-colors"
              >
                {/* Review Text */}
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#dbe11d] text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-300 text-lg leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-[#dbe11d] transition-all"
                  />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wide text-sm">
                      {item.name}
                    </h4>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
                      {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;