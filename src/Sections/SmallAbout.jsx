import React from "react";
import { motion } from "framer-motion";
import { Globe, Heart, Zap, Coffee, Code, BarChart, Monitor } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Solutions Delivered", value: "200+", icon: <Code className="text-[#dbe11d]" /> },
    { label: "Global Presence", value: "24/7", icon: <Globe className="text-[#dbe11d]" /> },
    { label: "Uptime Growth", value: "99.9%", icon: <BarChart className="text-[#dbe11d]" /> },
    { label: "Digital Partners", value: "85+", icon: <Monitor className="text-[#dbe11d]" /> },
  ];

  return (
    <section className="relative min-h-screen bg-zinc-950 py-24 px-10 lg:px-24 overflow-hidden">
      
      {/* --- BACKGROUND GLOW ACCENTS --- */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#dbe11d]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#dbe11d]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Background Decorative Text */}
      <div className="absolute top-10 right-[-5%] text-[15rem] lg:text-[20rem] font-black text-white/[0.02] select-none pointer-events-none">
        ZAYNLO
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* LEFT: Sticky Statement */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h6 className="text-[#dbe11d] font-bold tracking-[0.3em] uppercase text-xs">Who we are</h6>
              <motion.h2 className="text-6xl lg:text-7xl font-black uppercase italic leading-[0.9]">
                Digital <br />
                <span className="text-[#dbe11d] drop-shadow-[0_0_15px_rgba(219,225,29,0.3)]">Solutions</span> <br />
                Unleashed.
              </motion.h2>
            </motion.div>

            <p className="text-zinc-400 text-lg max-w-sm leading-relaxed">
              At <span className="text-white font-bold">Zaynlo</span>, we don't follow digital trends—we create them. 
              From complex ecosystem architectures to high-fidelity user experiences, 
              we solve tomorrow's digital problems today.
            </p>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 text-[#dbe11d] font-bold cursor-pointer group w-fit"
            >
              <span className="h-[2px] w-12 bg-[#dbe11d] group-hover:w-20 transition-all shadow-[0_0_10px_#dbe11d]"></span>
              VIEW OUR TECH STACK
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Creative Bento Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1: Large Feature */}
          <motion.div 
            whileHover={{ y: -5, borderColor: "rgba(219,225,29,0.3)" }}
            className="md:col-span-2 bg-zinc-900/40 backdrop-blur-md border border-white/5 p-10 rounded-3xl flex flex-col justify-between min-h-[300px] relative overflow-hidden group transition-all"
          >
            {/* Subtle Inner Glow on Hover */}
            <div className="absolute inset-0 bg-[#dbe11d]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="z-10 space-y-6">
              <div className="w-12 h-12 bg-[#dbe11d] rounded-xl flex items-center justify-center text-black">
                 <Zap size={24} fill="black" />
              </div>
              <h3 className="text-4xl font-black italic uppercase">The Zaynlo Edge</h3>
              <p className="text-zinc-400 max-w-md text-lg">
                We bridge the gap between business logic and creative chaos. 
                Our solutions are scalable, secure, and built to dominate 
                the digital landscape.
              </p>
            </div>
            
            <div className="absolute bottom-[-20px] right-[-20px] text-9xl font-black text-white/[0.03] group-hover:text-[#dbe11d]/5 transition-colors">
              CORE
            </div>
          </motion.div>

          {/* Stats Cards with Hover Glow */}
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(24, 24, 27, 0.8)", borderColor: "rgba(219,225,29,0.2)" }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl transition-all relative group overflow-hidden"
            >
              {/* Card Hover Radial Glow */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#dbe11d]/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="mb-4 relative z-10">{stat.icon}</div>
              <div className="text-4xl font-black mb-1 relative z-10 tracking-tighter">{stat.value}</div>
              <div className="text-zinc-500 uppercase text-xs font-bold tracking-[0.2em] relative z-10">{stat.label}</div>
            </motion.div>
          ))}

          {/* Card 4: Action Card (High Visibility) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 bg-[#dbe11d] p-10 rounded-3xl flex items-center justify-between group cursor-pointer shadow-[0_20px_50px_rgba(219,225,29,0.2)]"
          >
            <div className="space-y-2">
              <h3 className="text-zinc-950 text-4xl font-black uppercase italic leading-none">
                Transform <br /> Your Assets
              </h3>
              <p className="text-black/60 font-bold text-sm uppercase">Get a custom solution now</p>
            </div>
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-[#dbe11d] group-hover:rotate-[360deg] transition-transform duration-700 shadow-2xl">
              <Code size={32} strokeWidth={3} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;