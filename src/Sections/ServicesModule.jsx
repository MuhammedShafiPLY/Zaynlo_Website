import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe2, BrainCircuit, Smartphone, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Full-Stack Architecture",
    tags: ["React", "Next.js", "Node", "AWS"],
    icon: <Code2 size={32} />,
    desc: "Building the backbone of modern digital products with scalable, high-speed codebases and cloud-native integration.",
    metric: "99.9% Uptime Ready"
  },
  {
    title: "Intelligence Systems",
    tags: ["LLMs", "NLP", "Automation"],
    icon: <BrainCircuit size={32} />,
    desc: "Integrating custom AI models and neural processing into existing workflows to automate complex business logic.",
    metric: "Neural-Sync Enabled"
  },
  {
    title: "Mobile Ecosystems",
    tags: ["iOS", "Android", "Flutter"],
    icon: <Smartphone size={32} />,
    desc: "Developing native-grade mobile experiences that leverage device hardware for maximum fluid interaction.",
    metric: "Multi-Platform Core"
  },
  {
    title: "Cloud Performance",
    tags: ["DevOps", "Docker", "Security"],
    icon: <Globe2 size={32} />,
    desc: "Optimizing global delivery networks to ensure your digital assets are accessible instantly from anywhere on earth.",
    metric: "Global-Edge Ready"
  }
];

const ServiceModules = () => {
  return (
    <section className="bg-zinc-950 py-32 px-10 lg:px-24 relative overflow-hidden">
      
      {/* Background Grid Pattern (Technical Blueprint Feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#dbe11d 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h6 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs mb-4"
            >
              Capabilities
            </motion.h6>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.8] tracking-tighter">
              The Zaynlo <br /> <span className="text-zinc-800">Stack.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs text-sm uppercase font-bold leading-relaxed border-l border-zinc-800 pl-6">
            Focused on delivering high-fidelity digital solutions across the entire technical spectrum.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900/40 border border-white/5 p-10 rounded-3xl backdrop-blur-sm overflow-hidden flex flex-col justify-between min-h-[400px]"
            >
              {/* Card Header: Icon & Metric */}
              <div className="flex justify-between items-start">
                <div className="text-[#dbe11d] p-4 bg-zinc-800/50 rounded-2xl group-hover:bg-[#dbe11d] group-hover:text-black transition-all duration-500 shadow-xl">
                  {service.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 border border-zinc-800 px-3 py-1 rounded-full group-hover:border-[#dbe11d]/50 group-hover:text-[#dbe11d] transition-colors">
                  {service.metric}
                </span>
              </div>

              {/* Card Body */}
              <div className="mt-12 space-y-6">
                <h3 className="text-4xl font-black uppercase italic tracking-tighter group-hover:text-[#dbe11d] transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {service.desc}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-zinc-400 bg-white/5 px-3 py-1 rounded-sm uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative "Blueprint" Corners */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <div className="w-10 h-10 border-t border-r border-[#dbe11d]" />
              </div>

              <motion.div 
                className="absolute bottom-8 right-8 text-zinc-800 group-hover:text-[#dbe11d] transition-colors"
                whileHover={{ x: 5 }}
              >
                <ChevronRight size={32} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceModules;