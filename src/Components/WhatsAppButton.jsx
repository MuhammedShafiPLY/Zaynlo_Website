import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

// --- CONFIGURATION ---
// Replace with your actual number or env variable
const PHONE_NUMBER = import.meta.env.VITE_PHONE || "919876543210"; 
const DEFAULT_MESSAGE = "Hello! I would like to know more about your services.";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show button after scrolling down a bit (optional)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(true); // Set to true if you want it always visible
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Handle Click
  const handleClick = () => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-2 pointer-events-none">
          
          {/* Tooltip / Greeting Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 1 }}
            className="pointer-events-auto bg-white text-black px-4 py-3 rounded-xl rounded-br-none shadow-xl mb-2 relative max-w-[200px]"
          >
            <button 
              onClick={() => setIsVisible(false)} 
              className="absolute -top-2 -left-2 bg-zinc-200 rounded-full p-1 hover:bg-red-500 hover:text-white transition-colors"
            >
              <X size={10} />
            </button>
            <p className="text-xs font-bold leading-tight">
              Need help? <br />
              <span className="font-normal text-zinc-600">Chat with us!</span>
            </p>
          </motion.div>

          {/* Main Button */}
          <motion.button
            onClick={handleClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="pointer-events-auto w-16 h-16 bg-[#25D366] hover:bg-[#dbe11d] text-white hover:text-black rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(219,225,29,0.6)] flex items-center justify-center transition-all duration-300"
          >
            <FaWhatsapp size={32} />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;