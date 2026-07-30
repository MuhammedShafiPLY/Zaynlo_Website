import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Target, BarChart3 } from "lucide-react";
import FloatingAsset from "../Components/FlotingAsset";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Web Design Kerala Tech",
      desc: (
        <span>
          Our stack is unapologetically modern. We leverage official{" "}
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-[#dbe11d] transition-colors"
          >
            React
          </a>{" "}
          standards to deliver custom web design Kerala solutions that outperform competitors.
        </span>
      ),
      icon: <Zap size={28} />,
    },
    {
      title: "Iron-Clad Security",
      desc: "Zaynlo provides enterprise-grade encryption and security protocols for every digital solution.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Digital Marketing Perinthalmanna",
      desc: "We don't just launch apps; we scale them. Our data-driven digital marketing Perinthalmanna strategies ensure measurable growth and ROI.",
      icon: <BarChart3 size={28} />,
    },
    {
      title: "Precision UX",
      desc: "User experience is at the heart of our chaos. We design interfaces that convert and retain.",
      icon: <Target size={28} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="relative min-h-screen bg-zinc-950 py-24 px-6 lg:px-24 flex items-center">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      
      {/* Pulsing Glow Background */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 -left-[30rem] h-[100vh] w-[50rem] rounded-full bg-[#dbe11d] shadow-[0_0_1000px_150px_#dbe11d] z-0 pointer-events-none will-change-transform"
      />

      {/* Floating Assets (Decorations) */}
      <FloatingAsset 
        imgSrc="/image01.png" 
        alt="Zaynlo branding agency strategic planning visual"
        className="absolute -top-[30%] left-[5%] w-[400px] md:w-[500px] z-10 opacity-80 pointer-events-none" 
        flipX={true}
        duration={6}
      />

      <FloatingAsset 
        imgSrc="/secimg02.webp" 
        alt="Zaynlo digital marketing Perinthalmanna analytics visual"
        className="absolute -bottom-[50%] right-[5%] w-[200px] md:w-[400px] z-10 opacity-60 pointer-events-none" 
        flipX={false}
        duration={7}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-20">
        
        {/* LEFT COLUMN: The Big Statement (Order 1 on Desktop, Order 1 on Mobile) */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h6 className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs">
              The Zaynlo Advantage
            </h6>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
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
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-zinc-500 text-lg md:text-xl max-w-md leading-relaxed border-l-4 border-[#dbe11d] pl-6"
          >
            Mediocrity has no place here. We architect high-impact digital systems that distill market noise into measurable growth.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000", borderColor: "#fff" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-[#dbe11d] text-[#dbe11d] font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300"
          >
            <Link to={'/contact'}>
            Claim Your Custom Branding Strategy
            </Link>
          </motion.button>
        </div>

        {/* RIGHT COLUMN: Feature Cards Container */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10, borderColor: "rgba(219, 225, 29, 0.4)" }}
              className="group relative flex items-start gap-6 p-6 md:p-8 bg-zinc-900/60 border border-white/5 rounded-[30px] backdrop-blur-md transition-all duration-300 overflow-hidden"
            >
              {/* Animated Background Line on Hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#dbe11d] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#dbe11d] group-hover:bg-[#dbe11d] group-hover:text-black transition-colors duration-300 shadow-xl">
                {item.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tight text-white group-hover:text-[#dbe11d] transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;