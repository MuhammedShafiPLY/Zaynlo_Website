import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Loader2, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ParticleBackground from "./ParticlesBackground";

const GetInTouch = () => {
  const form = useRef();

  // --- STATE FOR CONTROLLED INPUTS ---
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // 1. STATE VARIABLE NAME IS 'isSubmitting'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Make sure to keep this state for the modal!

  // --- HANDLE INPUT CHANGE ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- EMAILJS CONFIGURATION ---
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // REPLACE WITH YOUR ACTUAL ID'S
    const SERVICE_ID = "service_2kkrlpy";
    const TEMPLATE_ID = "template_5qj6d44";
    const PUBLIC_KEY = "685eUNELF8QHV3ugB";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        // SUCCESS
        toast.success("Message sent successfully! We'll be in touch.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });

        setIsSubmitting(false);

        // RESET FORM STATE
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });

        // Close modal after delay
        setTimeout(() => {
          setIsModalOpen(false);
        }, 3000);
      },
      (error) => {
        console.log(error);
        // ERROR
        toast.error("Failed to send. Please check your connection.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        setIsSubmitting(false);
      }
    );
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-zinc-950 py-20 px-6 relative overflow-hidden">
      <ToastContainer />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-zinc-900/80 border border-white/10 rounded-[40px] p-8 md:p-16 lg:p-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dbe11d] rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

          {/* LEFT SIDE: Text */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#dbe11d] animate-pulse" />
              <span className="text-[#dbe11d] font-bold uppercase tracking-[0.2em] text-xs">
                Start Your Journey
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-6"
            >
              Ready To{" "}
              <span className="text-zinc-600 group-hover:text-white transition-colors duration-500">
                Scale?
              </span>
              <br />
              Let's Build The <span className="text-[#dbe11d]">Future.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg max-w-md mb-10 leading-relaxed font-light"
            >
              We are currently accepting new projects. Click below to start the
              conversation.
            </motion.p>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#dbe11d] text-black px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(219,225,29,0.3)]"
            >
              Start Project
              <ArrowUpRight size={20} strokeWidth={3} />
            </motion.button>
          </div>

          {/* RIGHT SIDE: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-[400px] h-[400px] flex items-end justify-end mt-8 lg:mt-0"
          >
            <motion.img
              src="/cont_img.webp"
              alt="Future Tech"
              animate={{ y: [1, -20, 1], rotate: [0, 0, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-[100px] w-full h-full object-contain drop-shadow-[0_0_50px_rgba(219,225,29,0.2)]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* --- CONTACT MODAL (POPUP) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-zinc-900 border border-white/10 w-full max-w-lg p-8 rounded-3xl shadow-2xl z-50"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-white mb-2">Let's Talk</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Fill out the form below and we will get back to you within 24
                hours.
              </p>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#dbe11d] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#dbe11d] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#dbe11d] transition-colors"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* --- FIXED: Used 'isSubmitting' instead of 'isLoading' --- */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => console.log("Button Clicked")}
                  className="relative z-50 w-full bg-[#dbe11d] text-black font-bold py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  send message
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GetInTouch;
