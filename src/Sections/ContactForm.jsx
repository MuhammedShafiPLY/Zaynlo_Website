import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Ensure this path is correct for your project structure
import ParticleBackground from "../Components/ParticlesBackground";
import SEOMap from "../Components/Seo/SEOMap"

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- EMAILJS SUBMIT LOGIC ---
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents page reload
    setIsSubmitting(true);

    // ⚠️ REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    const SERVICE_ID = "service_prc3zal";
    const TEMPLATE_ID = "template_o3obgf5";
    const PUBLIC_KEY = "685eUNELF8QHV3ugB";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        // Success Handling
        toast.success("Message sent successfully!", {
          position: "top-right",
          theme: "dark",
        });

        setFormData({ user_name: "", user_email: "", message: "" }); // Clear form
        setIsSubmitting(false);
      },
      (error) => {
        // Error Handling
        console.error(error.text);
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          theme: "dark",
        });
        setIsSubmitting(false);
      },
    );
  };

  // Animation Variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-transparent py-20 relative overflow-hidden">
      {/* Toast Notification Container */}
      <ToastContainer />

      {/* 1. NEW PARTICLES BACKGROUND (Optimized) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Background Decor (Optimized Glow) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#dbe11d] rounded-full blur-[250px] opacity-5 pointer-events-none z-0 will-change-transform transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* LEFT COLUMN: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[700px] w-full rounded-[40px] overflow-hidden border border-white/10 group will-change-transform"
        >
          {/* The Image */}
          <div className="absolute inset-0 bg-zinc-900 animate-pulse" />{" "}
          {/* Placeholder while loading */}
          <img
            src="/image01.png"
            alt="Contact Zaynlo - Advertising & Digital Agency Kerala team office representation"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 will-change-transform"
          />
          {/* Overlay Gradient & Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-10 left-10 p-4">
            <h3 className="text-4xl lg:text-5xl font-black italic uppercase text-white leading-none tracking-tighter">
              Let's Build <br />
              <span className="text-[#dbe11d]">Something Legendary.</span>
            </h3>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Form & Socials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-10">
            <h6 className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs mb-3">
              Contact
            </h6>
            <h2 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
              Get In <span className="text-[#dbe11d]">Touch.</span>
            </h2>
            <p className="text-zinc-400 mt-6 text-lg max-w-md leading-relaxed">
              Have a project in mind? Fill out the form below and let's turn
              your vision into a digital reality.
            </p>
          </motion.div>

          {/* Form - Connected to Logic */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-[#dbe11d] focus:ring-1 focus:ring-[#dbe11d] transition-all"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-[#dbe11d] focus:ring-1 focus:ring-[#dbe11d] transition-all"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-[#dbe11d] focus:ring-1 focus:ring-[#dbe11d] transition-all resize-none"
              ></textarea>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#dbe11d] transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(219,225,29,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>

          {/* Social Media Icons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <h6 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
              Follow Us
            </h6>
            <div className="flex gap-4">
              <SocialLink href="https://www.instagram.com/__zaynlo/">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://www.facebook.com/profile.php?id=61585322101250">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://x.com/Zaynlo_Agency">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/zaynlo">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://in.pinterest.com/zaynloteam/">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.624.002 12.017.002z" />
                </svg>
              </SocialLink>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Social Button Component
const SocialLink = ({ children, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#dbe11d] hover:text-black hover:border-[#dbe11d] transition-colors duration-300"
    >
      {children}
    </motion.a>
  );
};

export default ContactForm;
