import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import PageBanner from "../Components/PageBanner";
import ParticleBackground from "../Components/ParticlesBackground"; 

// --- CONFIGURATION ---
const PHONE_NUMBER = import.meta.env.VITE_PHONE || "919876543210"; 

// --- JOB DATA ---
const JOBS = [
  {
    id: 1,
    title: "Senior React Developer",
    description: "We are looking for an experienced React developer to lead our frontend team and build scalable web applications.",
    qualifications: [
      "3+ years experience",
      "Strong proficiency in JavaScript/ES6",
      "Experience with Redux/Context API",
    ],
    requirements: [
      "Lead code reviews",
      "Optimize application performance",
      "Mentor junior developers",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    description: "Creative designer needed to craft intuitive and visually stunning user interfaces for our digital products.",
    qualifications: [
      "Portfolio required",
      "Proficiency in Figma/Adobe XD",
      "Understanding of modern design trends",
    ],
    requirements: [
      "Create wireframes & prototypes",
      "Collaborate with developers",
      "Conduct user research",
    ],
  },
  {
    id: 3,
    title: "Backend Engineer",
    description: "Join our backend team to design robust APIs and manage database architecture for high-traffic systems.",
    qualifications: [
      "Experience with Node.js/Python",
      "Knowledge of SQL/NoSQL",
      "Cloud experience (AWS/GCP)",
    ],
    requirements: [
      "Design RESTful APIs",
      "Ensure database security",
      "Handle server deployment",
    ],
  },
];

const Careers = () => {
  const handleApply = (jobTitle) => {
    const message = `Hello, I am interested in applying for the *${jobTitle}* position. I saw the job description and would like to discuss my qualifications.`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-zinc-950 min-h-screen relative overflow-hidden">
      
      {/* 1. Fixed PageBanner Props for Careers Context */}
      <PageBanner
        title="Join Our"
        highlight="Team."
        description="We are looking for passionate individuals to help us build the future of digital experiences."
        // Make sure you have a relevant image, or use a generic one
        imageSrc="/career_banner.jpg" 
        primaryBtn={{
          text: "View Openings",
          link: "#openings", // Anchor to the jobs list
        }}
        secondaryBtn={{
          text: "Contact Us",
          link: "/contact",
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#dbe11d] rounded-full blur-[200px] opacity-10 pointer-events-none" />

      {/* Main Content */}
      <div id="openings" className="max-w-7xl mx-auto relative z-10 px-6 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#dbe11d] animate-pulse" />
            <span className="text-[#dbe11d] font-bold uppercase tracking-[0.2em] text-xs">
              We Are Hiring
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter"
          >
            Current <span className="text-zinc-700">Openings</span>
          </motion.h2>
        </div>

        {/* Jobs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {JOBS.map((job) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/50 border border-white/10 backdrop-blur-sm p-8 rounded-3xl flex flex-col hover:border-[#dbe11d]/50 transition-colors duration-300 group"
            >
              {/* Job Title */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-[#dbe11d] mb-4 group-hover:bg-[#dbe11d] group-hover:text-black transition-colors duration-300">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#dbe11d] transition-colors">
                  {job.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Requirements & Qualifications */}
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#dbe11d]" /> Requirements
                  </h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-zinc-400 text-sm flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                    <GraduationCap size={14} className="text-[#dbe11d]" /> Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {job.qualifications.map((qual, index) => (
                      <li key={index} className="text-zinc-400 text-sm flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2" />
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Button */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <button
                  onClick={() => handleApply(job.title)}
                  className="w-full bg-white group-hover:bg-[#dbe11d] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(219,225,29,0.4)]"
                >
                  Apply on WhatsApp <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;