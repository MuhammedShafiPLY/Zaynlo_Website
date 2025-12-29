import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Cpu } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Architecture",
    desc: "Scalable, high-performance web ecosystems built with Next.js and Cloud-native technologies.",
    icon: <Globe size={24} />,
    color: "from-lime-400/20",
  },
  {
    id: "02",
    title: "App Engineering",
    desc: "Cross-platform mobile solutions that bridge the gap between native performance and fluid UI.",
    icon: <Smartphone size={24} />,
    color: "from-[#dbe11d]/20",
  },
  {
    id: "03",
    title: "AI Integration",
    desc: "Automating digital chaos through custom LLM implementations and neural processing.",
    icon: <Cpu size={24} />,
    color: "from-white/20",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative flex gap-8 pb-16"
    >
      {/* DIAGRAM LINE LOGIC */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border border-[#dbe11d] flex items-center justify-center text-[#dbe11d] font-black text-sm z-10 bg-zinc-950 group-hover:bg-[#dbe11d] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(219,225,29,0.3)]">
          {service.id}
        </div>
        {/* The Vertical Connector */}
        <div className="w-[1px] h-full bg-gradient-to-b from-[#dbe11d] to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* CONTENT CARD */}
      <div className="relative bg-zinc-900/40 border border-white/5 p-8 rounded-tr-3xl rounded-bl-3xl rounded-br-lg rounded-tl-lg backdrop-blur-xl flex-1 hover:border-[#dbe11d]/50 transition-all duration-500 overflow-hidden">
        
        {/* Background Gradient Diagram Glow */}
        <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        <div className="relative z-10">
          <div className="text-[#dbe11d] mb-6 inline-block p-3 bg-zinc-800 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
            {service.icon}
          </div>
          <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
            {service.title}
          </h3>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-xl group-hover:text-zinc-300 transition-colors">
            {service.desc}
          </p>
        </div>

        {/* Diagonal Corner Accents (The Diagram Feel) */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#dbe11d]/0 group-hover:border-[#dbe11d]/100 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#dbe11d]/0 group-hover:border-[#dbe11d]/100 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const ServicesDiagram = () => {
  return (
    <section className="bg-zinc-950 py-32 px-10 lg:px-24 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[2px] w-12 bg-[#dbe11d]" />
          <span className="text-[#dbe11d] font-black uppercase tracking-[0.3em] text-xs">
            Expertise
          </span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black uppercase italic">
          Our <span className="text-zinc-800">Digital</span> <br />
          Infrastructure.
        </h2>
      </div>

      {/* Diagram Grid */}
      <div className="max-w-4xl mx-auto">
        {services.map((s, i) => (
          <ServiceCard key={s.id} service={s} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ServicesDiagram;