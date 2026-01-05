import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Loader2, User, Mail, MessageSquare } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
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
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-6 relative overflow-hidden">
      <ToastContainer />

      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#dbe11d] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-lg bg-zinc-900/80 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
            Get In <span className="text-[#dbe11d]">Touch</span>
          </h2>
          <p className="text-zinc-400 mt-2 text-sm">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {/* Name Input */}
          <div className="relative group">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#dbe11d] transition-colors"
              size={18}
            />
            <input
              type="text"
              name="user_name"
              required
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#dbe11d] focus:ring-1 focus:ring-[#dbe11d] transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#dbe11d] transition-colors"
              size={18}
            />
            <input
              type="email"
              name="user_email"
              required
              value={formData.user_email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#dbe11d] focus:ring-1 focus:ring-[#dbe11d] transition-all"
            />
          </div>

          {/* Message Input */}
          <div className="relative group">
            <MessageSquare
              className="absolute left-4 top-4 text-zinc-500 group-focus-within:text-[#dbe11d] transition-colors"
              size={18}
            />
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#dbe11d] focus:ring-1 focus:ring-[#dbe11d] transition-all resize-none"
            />
          </div>

          {/* Submit Button - Z-INDEX FIX APPLIED */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="relative z-20 w-full bg-[#dbe11d] hover:bg-white text-black font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(219,225,29,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Send size={18} strokeWidth={2.5} /> Send Message
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
