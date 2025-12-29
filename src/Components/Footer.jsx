import React from "react";
import { motion } from "framer-motion";
import Gradient from "./Gradient";

const Footer = () => {
  
  // ---------------------------------------------------------
  // SCROLL LOGIC FIX
  // ---------------------------------------------------------
  const scrollToTop = () => {
    // 1. Try scrolling the Window (Standard behavior)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // 2. Fallback: Try scrolling the root container (Common in React apps with 'h-screen')
    // If your app wraps everything in a div with id="root" or "app" that handles scrolling:
    const root = document.getElementById("root"); 
    if (root) {
        root.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    // 3. Fallback: Try scrolling the HTML/Body directly
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-zinc-950 pt-20 pb-10 relative overflow-hidden">

              <Gradient location="absolute bg-transparent h-0 w-[50rem] shadow-[50px_50px_900px_30px_#cfcfcf] rotate-[30deg] z-10 top-[100px] -left-[400px]" />
              <Gradient location="absolute bg-transparent h-0 w-[50rem] shadow-[50px_50px_900px_30px_#dbe11d] rotate-[30deg] z-10 bottom-[100px] -right-[400px]" />
        
      {/* Background Text */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.03]">
        <h1 className="text-[20vw] font-black uppercase text-white leading-none tracking-tighter whitespace-nowrap font-outline-2">
            ZAYNLO
        </h1>
      </div>



      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-zinc-950 rounded-[40px] p-10 md:p-14  relative"
        >
            
          {/* -------------------------------------- */}
          {/* THE BUTTON */}
          {/* -------------------------------------- */}
          <button 
            onClick={scrollToTop}
            // Added 'cursor-pointer' and higher z-index (z-50) to ensure it's clickable
            className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#dbe11d] hover:text-black hover:border-[#dbe11d] transition-all duration-300 group z-50 cursor-pointer"
          >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-y-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </button>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* COLUMN 1: Logo & Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#dbe11d] rounded-lg"></div>
                <h2 className="text-2xl font-black italic tracking-tighter text-white uppercase">
                    ZAYNLO<span className="text-[#dbe11d]">.</span>
                </h2>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed pr-4">
                We are a futuristic digital agency specializing in AI-driven design, immersive web experiences, and next-gen branding.
              </p>
              <div className="flex gap-4">
                 <SocialIcon icon="instagram" />
                 <SocialIcon icon="twitter" />
                 <SocialIcon icon="linkedin" />
              </div>
            </motion.div>

            {/* COLUMN 2: Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dbe11d]"></span> Quick Links
              </h4>
              <ul className="space-y-3">
                <FooterLink>Home</FooterLink>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Portfolio Showcase</FooterLink>
                <FooterLink>Pricing Plans</FooterLink>
                <FooterLink>Careers</FooterLink>
              </ul>
            </motion.div>

            {/* COLUMN 3: Our Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dbe11d]"></span> Our Services
              </h4>
              <ul className="space-y-3">
                <FooterLink>AI Image Generation</FooterLink>
                <FooterLink>Web Development</FooterLink>
                <FooterLink>Brand Identity</FooterLink>
                <FooterLink>Digital Twins</FooterLink>
                <FooterLink>3D Modeling</FooterLink>
              </ul>
            </motion.div>

            {/* COLUMN 4: Contact Section */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dbe11d]"></span> Contact Us
              </h4>
              
              <div className="space-y-4">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 group hover:border-[#dbe11d]/30 transition-colors">
                    <p className="text-zinc-500 text-xs uppercase font-bold mb-1">Email Inquiry</p>
                    <a href="mailto:hello@zaynlo.com" className="text-white font-medium hover:text-[#dbe11d] transition-colors">
                        hello@zaynlo.com
                    </a>
                </div>

                <div className="bg-black/40 p-4 rounded-xl border border-white/5 group hover:border-[#dbe11d]/30 transition-colors">
                    <p className="text-zinc-500 text-xs uppercase font-bold mb-1">Location</p>
                    <p className="text-white font-medium">
                        Dubai, UAE <br /> <span className="text-zinc-500 text-xs font-normal">Cyber Tower, Level 42</span>
                    </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-xs uppercase tracking-widest gap-4">
              <p>© {new Date().getFullYear()} Zaynlo Agency. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
};

// --- Sub Components ---

const FooterLink = ({ children }) => (
  <li>
    <a href="#" className="text-zinc-400 text-sm hover:text-[#dbe11d] hover:translate-x-1 transition-all inline-block">
      {children}
    </a>
  </li>
);

const SocialIcon = ({ icon }) => {
    const paths = {
        instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
        twitter: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
        linkedin: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
    };

    return (
        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-[#dbe11d] hover:text-black hover:border-[#dbe11d] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d={paths[icon]} />
            </svg>
        </a>
    )
}

export default Footer;