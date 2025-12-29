import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// 1. IMPORT THE DATA
// Adjust the path '../data/projectsData' based on where you saved the file
import { projectsData, categories } from "../data/projectsData"; 

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="bg-zinc-950 py-24 px-6 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h6 className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs mb-2">
              Portfolio
            </h6>
            <h2 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
              Selected <span className="text-[#dbe11d]">Works.</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat 
                    ? "bg-[#dbe11d] text-black border-[#dbe11d]" 
                    : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

// ... (Keep the ProjectCard component exactly as it was) ...
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative h-[400px] w-full rounded-[30px] overflow-hidden cursor-pointer"
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <span className="text-[#dbe11d] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
          {project.category}
        </span>
        <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-8">
          {project.title}
        </h3>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#dbe11d] transition-colors duration-300 shadow-lg"
        >
          <ArrowUpRight size={24} strokeWidth={2.5} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectGallery;