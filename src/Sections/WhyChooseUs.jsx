import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Target, BarChart3 } from "lucide-react";
import Gradient from "../Components/Gradient";
import FloatingAsset from "../Components/FlotingAsset";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Future-Proof Tech",
      desc: "We build using the latest stacks (React, Next.js, AI) to ensure your business stays ahead of the curve.",
      icon: <Zap size={28} />,
    },
    {
      title: "Iron-Clad Security",
      desc: "Zaynlo provides enterprise-grade encryption and security protocols for every digital solution.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Strategic Growth",
      desc: "We don't just launch apps; we scale them. Our data-driven approach ensures measurable ROI.",
      icon: <BarChart3 size={28} />,
    },
    {
      title: "Precision UX",
      desc: "User experience is at the heart of our chaos. We design interfaces that convert and retain.",
      icon: <Target size={28} />,
    },
  ];

  return (
    <section className="relative min-h-screen bg-zinc-950 py-24 px-10 lg:px-24 flex items-center">
      <motion.div
        initial={{ opacity: 0.1, scale: 0.9 }}
        animate={{
          opacity: [0.1, 0.25, 0.1], // Pulsing opacity
          scale: [0.9, 1.1, 0.9], // Subtle breathing effect
        }}
        transition={{
          duration: 8, // How long one breath takes
          repeat: Infinity, // Loop forever
          ease: "easeInOut",
        }}
        className="absolute top-0 -left-[30rem] h-screen w-[50rem] rounded-full bg-[#dbe11d] shadow-[0_0_1000px_150px_#dbe11d] z-10 pointer-events-none"
      />


        <FloatingAsset 
        imgSrc="/image01.png" // Fixed path string
        className="absolute -top-[40%] left-[10%] w-[200px] md:w-[400px] z-20" // z-99 maatti
        flipX={true}
        duration={6}
      />

      
        <FloatingAsset 
        imgSrc="/image02.png" // Fixed path string
        className="absolute -bottom-[40%] right-[10%] w-[300px] md:w-[500px] z-20" // z-99 maatti
        flipX={true}
        duration={6}
      />


      {/* <Gradient location="absolute bg-transparent h-0 w-[50rem] shadow-[50px_50px_900px_30px_#cfcfcf] rotate-[30deg] z-10 bottom-[100px] -right-[400px]" /> */}

      {/* Background Ambient Glow */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#dbe11d]/5 blur-[180px] rounded-full pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* RIGHT: Feature Cards Container */}
        <div className="grid grid-cols-1 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ x: 15 }}
              className="group relative flex items-start gap-6 p-8 bg-zinc-900/40 border border-white/5 rounded-3xl backdrop-blur-sm transition-all hover:border-[#dbe11d]/30 overflow-hidden"
            >
              {/* Animated Background Line on Hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#dbe11d] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="flex-shrink-0 w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#dbe11d] group-hover:bg-[#dbe11d] group-hover:text-black transition-colors duration-300 shadow-xl">
                {item.icon}
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold uppercase italic tracking-tight text-white group-hover:text-[#dbe11d] transition-colors">
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LEFT: The Big Statement */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h6 className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs">
              The Zaynlo Advantage
            </h6>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter">
              Why <br />
              Partner <br />
              <span className="text-[#dbe11d] drop-shadow-[0_0_20px_rgba(219,225,29,0.4)]">
                With Us?
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-500 text-xl max-w-md leading-relaxed border-l-4 border-[#dbe11d] pl-6"
          >
            Because standard isn't in our vocabulary. We engineer
            high-performance ecosystems that turn digital chaos into business
            clarity.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border-2 border-[#dbe11d] text-[#dbe11d] font-black uppercase tracking-widest text-xs rounded-full transition-colors"
          >
            Claim Your Strategy
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
