import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe2, Cpu, Smartphone, ArrowUpRight } from "lucide-react";
import Gradient from "../Components/Gradient";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web & App Development",
    desc: "We go beyond basic web design to architect scalable digital platforms that drive real business growth.",
    icon: <Globe2 size={40} />,
    color: "bg-[#edffcc]",
    text: "text-black",
  },
  {
    title: "Digital Marketing & SEO",
    desc: "Data-driven growth strategies that dominate search engines and social landscapes.",
    icon: <Cpu size={40} />,
    color: "bg-black/80",
    text: "text-white",
  },
  {
    title: "Brand Identity & UI/UX",
    desc: "Visual storytelling for the digital age. We strip brands to their core and rebuild.",
    icon: <Smartphone size={40} />,
    color: "bg-[#dbe11d]",
    text: "text-black",
  },
];

const TiltCard = ({ children, color }) => {
  // 1. MOBILE CHECK LOGIC
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ CORRECT: Hooks are ALWAYS called, regardless of screen size
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (isMobile) return; // Stop math on mobile
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // 2. MOBILE RETURN (Static Card)
  // ✅ This 'return' is AFTER all hooks are declared, so it's safe.
  if (isMobile) {
    return (
        <div className={`relative min-h-[450px] rounded-[45px] p-8 flex flex-col justify-between border border-white/10 ${color} overflow-hidden`}>
             <div className="h-full flex flex-col justify-between relative z-10">
                {children}
             </div>
             {/* Simple static glow for mobile atmosphere */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#dbe11d]/10 blur-[80px] rounded-full pointer-events-none" />
        </div>
    );
  }

  // 3. DESKTOP RETURN (Physics Card)
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative min-h-[450px] md:min-h-[520px] rounded-[45px] p-8 md:p-10 flex flex-col justify-between border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-300 ${color} group overflow-hidden will-change-transform transform-gpu`}
    >
      <div
        style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
        className="h-full flex flex-col justify-between relative z-10"
      >
        {children}
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-[45px] bg-gradient-to-br from-[#dbe11d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Mouse Following Light */}
      <motion.div
        // style={{
        //   x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
        //   y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
        // }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#dbe11d]/20 blur-[100px] rounded-full pointer-events-none"
      />
    </motion.div>
  );
};

const ServicesStack = () => { 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="relative bg-zinc-950 py-24 px-6 lg:px-12 min-h-screen overflow-hidden">
      
      {/* 1. Grid Background (Optimized) */}
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none will-change-transform"
        style={{
          backgroundImage: `linear-gradient(#dbe11d 1px, transparent 1px), linear-gradient(90deg, #dbe11d 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          transform: "rotateX(70deg) translateY(-100px)",
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
        }}
      />

      {/* GPU Accelerated Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <Gradient location="absolute bg-transparent h-0 w-[50rem] shadow-[50px_50px_900px_30px_#cfcfcf] -rotate-[30deg] z-10 top-[100px] -right-[400px] opacity-30 will-change-transform transform-gpu" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-30">
        
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.h6
            variants={itemVariants}
            className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs"
          >
            WHAT WE DO
          </motion.h6>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic leading-none tracking-tighter text-white"
          >
            OUR <br />
            <span className="text-[#dbe11d] drop-shadow-[0_0_20px_rgba(219,225,29,0.4)]">
              SERVICES
            </span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
                <TiltCard color={service.color}>
                <div className="flex justify-between items-start">
                    <div className={`${service.text} drop-shadow-[0_0_15px_currentColor]`}>
                        {service.icon}
                    </div>
                    <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-full border ${
                            service.text === "text-black" ? "border-black/20" : "border-white/20"
                        } flex items-center justify-center bg-white/5 backdrop-blur-lg shadow-lg`}
                    >
                        <ArrowUpRight className={service.text} />
                    </motion.div>
                </div>

                <div className="mt-16 md:mt-20 space-y-4 md:space-y-6">
                    <h4 className={`text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-tight ${service.text}`}>
                        {service.title}
                    </h4>
                    <p className={`text-base md:text-lg font-medium opacity-70 leading-relaxed ${service.text}`}>
                        {service.desc}
                    </p>
                    <span className={`text-6xl md:text-8xl font-black opacity-10 select-none absolute bottom-4 right-6 ${service.text}`}>
                        0{index + 1}
                    </span>
                </div>
                </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="flex justify-center w-full pt-8">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fff",
              color: "#000",
              borderColor: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 md:px-10 md:py-5 border-2 border-[#dbe11d] text-[#dbe11d] font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300"
          >
            <Link to={'/services'}>
            Find Our Services
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServicesStack;