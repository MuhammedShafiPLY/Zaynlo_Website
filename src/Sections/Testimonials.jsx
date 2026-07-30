import React, { useState, useEffect } from "react";
import Gradient from "../Components/Gradient";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    text: "I initially doubted the accuracy of AI tools, but the level of creative command this platform offers is genuinely surprising.",
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
  const [isMobile, setIsMobile] = useState(false);

  // 1. Check Screen Size for Responsive Logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. Auto-Scroll Logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // 3. Helper: Get Visible Items based on Screen Size
  const getVisibleItems = () => {
    if (isMobile) {
      // Mobile: Show only 1 item
      return [testimonials[index]];
    } else {
      // Desktop: Show 3 items (Rotating logic)
      const item1 = testimonials[index % testimonials.length];
      const item2 = testimonials[(index + 1) % testimonials.length];
      const item3 = testimonials[(index + 2) % testimonials.length];
      return [item1, item2, item3];
    }
  };

  // 4. Animation Variants (Right-to-Left Slide)
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100, // Slide in from Right
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100, // Slide out to Left
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="bg-zinc-950 py-14 relative overflow-hidden min-h-[80vh]">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#dbe11d] rounded-full blur-[150px] will-change-transform transform-gpu" />
      </div>

      <Gradient location="absolute bg-transparent h-0 w-[50rem] shadow-[100px_100px_1500px_30px_#cfcfcf] -rotate-[30deg] z-10 top-[100px] -right-[400px] opacity-40 will-change-transform transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 md:mb-20 text-center md:text-left"
        >
          <h6 className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs">
            Reviews | Branding Agency & Web Design Kerala
          </h6>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
            WHAT THEY<br />
            <span className="text-[#dbe11d] drop-shadow-[0_0_20px_rgba(219,225,29,0.4)]">
              SAY
            </span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className={`grid gap-6 ${isMobile ? "grid-cols-1 h-[400px]" : "grid-cols-3 h-[380px]"}`}>
            <AnimatePresence mode="popLayout" initial={false} custom={1}>
              {getVisibleItems().map((item) => (
                <motion.div
                  key={item.id} // IMPORTANT: Unique key triggers animation
                  custom={1}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl flex flex-col justify-between backdrop-blur-sm group hover:border-[#dbe11d]/50 transition-colors will-change-transform h-full"
                >
                  {/* Review Text */}
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#dbe11d] text-sm">★</span>
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
                      alt={`${item.name} - client review for Zaynlo branding agency & web design Kerala`}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-[#dbe11d] transition-all"
                    />
                    <div>
                      <h3 className="text-white font-bold uppercase tracking-wide text-sm">
                        {item.name}
                      </h3>
                      <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Dots */}
          {isMobile && (
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-[#dbe11d] w-6" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Desktop/Tablet Navigation Arrows (Optional, but good for UX) */}
          <div className="hidden md:flex gap-4 mt-12">
             <button onClick={handlePrev} className="p-3 rounded-full border border-white/10 hover:bg-[#dbe11d] hover:text-black transition-colors">
                <ChevronLeft size={24} />
             </button>
             <button onClick={handleNext} className="p-3 rounded-full border border-white/10 hover:bg-[#dbe11d] hover:text-black transition-colors">
                <ChevronRight size={24} />
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;