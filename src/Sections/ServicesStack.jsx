import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe2, Cpu, Smartphone, ArrowUpRight } from "lucide-react";
import Gradient from "../Components/Gradient";
import FloatingAsset from "../Components/FlotingAsset";

const services = [
  {
    title: "Web & App Development",
    desc: "We don't just build websites; we engineer high-performance digital ecosystems.",
    icon: <Globe2 size={40} />,
    color: "bg-zinc-900/60",
    text: "text-[#dbe11d]",
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

const TiltCard = ({ children, color, text }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };


  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative min-h-[520px] rounded-[45px] p-10 flex flex-col justify-between border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-150 ${color} group overflow-hidden`}
    >
      <div
        style={{ transform: "translateZ(85px)", transformStyle: "preserve-3d" }}
        className="h-full flex flex-col justify-between relative z-10"
      >
        {children}
      </div>
      <div className="absolute inset-0 rounded-[45px] bg-gradient-to-br from-[#dbe11d]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <motion.div
        style={{
          x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
          y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
        }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#dbe11d]/10 blur-[80px] rounded-full pointer-events-none"
      />
    </motion.div>
  );
};

const Services3D = () => {

      const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between the h6 and h2 animations
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
    // PRASHNAM IVIDE AANU: 'overflow-hidden' remove cheyyunnu or maintain cheyyunnu
    <section className="relative bg-zinc-950 py-20 px-10 lg:px-24 min-h-screen ">
      {/* 1. Grid Background - Fixed positioning */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#dbe11d 1px, transparent 1px), linear-gradient(90deg, #dbe11d 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          transform: "rotateX(70deg) translateY(-100px)", // TranslateZ kurachu
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />

      <FloatingAsset
        imgSrc="/image02.png" // Fixed path string
        className="absolute -top-[15%] right-[5%] w-[300px] md:w-[500px] z-20" // z-99 maatti
        flipX={true}
        duration={6}
      />

      <Gradient location="absolute bg-transparent h-0 w-[50rem] shadow-[50px_50px_900px_30px_#cfcfcf] -rotate-[30deg] z-10 top-[100px] -right-[400px]" />

      <div className="max-w-7xl flex flex-col gap-12 mx-auto relative z-30">
        <motion.div
          variants={containerVariants} // Apply parent variant
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* Change h6 to motion.h6 and add itemVariants */}
          <motion.h6
            variants={itemVariants}
            className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs"
          >
            WHAT WE DO
          </motion.h6>

          {/* Change h2 to motion.h2 and add itemVariants */}
          <motion.h2
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter text-white"
          >
            OUR <br />
            <span className="text-[#dbe11d] drop-shadow-[0_0_20px_rgba(219,225,29,0.4)]">
              SERVICES
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <TiltCard key={index} color={service.color}>
              <div className="flex justify-between items-start">
                <div
                  className={`${service.text} drop-shadow-[0_0_15px_currentColor]`}
                >
                  {service.icon}
                </div>
                <motion.div
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  className={`w-14 h-14 rounded-full border ${
                    service.text === "text-black"
                      ? "border-black/20"
                      : "border-white/20"
                  } flex items-center justify-center bg-white/5 backdrop-blur-lg shadow-lg`}
                >
                  <ArrowUpRight className={service.text} />
                </motion.div>
              </div>

              <div className="mt-20 space-y-6">
                <h4
                  className={`text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-tight ${service.text}`}
                >
                  {service.title}
                </h4>
                <p
                  className={`text-lg font-medium opacity-60 leading-relaxed ${service.text}`}
                >
                  {service.desc}
                </p>
                <span
                  className={`text-8xl font-black opacity-10 select-none ${service.text}`}
                >
                  0{index + 1}
                </span>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="flex justify-center w-full pt-10">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fff",
              color: "#000",
              borderColor: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border-2 border-[#dbe11d] text-[#dbe11d] font-black uppercase tracking-widest text-xs rounded-full transition-all"
          >
            Claim Your Strategy
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services3D;
