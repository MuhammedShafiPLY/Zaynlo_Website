import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ 
  text = "ZAYNLO", 
  className = "",
  cursorColor = "#dbe11d" 
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = displayText;
      
      if (isDeleting) {
        // Deleting Logic
        setDisplayText(text.substring(0, currentText.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        // Typing Logic
        setDisplayText(text.substring(0, currentText.length + 1));
        setTypingSpeed(150); // Standard typing speed
      }

      // Logic to switch states
      if (!isDeleting && currentText === text) {
        // Finished typing -> Wait before deleting
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && currentText === "") {
        // Finished deleting -> Start typing again
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text, typingSpeed]);

  return (
    <div className={`inline-flex items-center font-black tracking-tighter ${className}`}>
      {/* The Text */}
      <span className="text-white">
        {displayText}
      </span>

      {/* The Cursor */}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ 
          repeat: Infinity, 
          duration: 0.8, 
          ease: "linear" 
        }}
        style={{ backgroundColor: cursorColor }}
        className="inline-block w-[3px] md:w-[6px] h-[1em] ml-1 align-middle shadow-[0_0_10px_currentColor]"
      />
    </div>
  );
};

export default TypewriterText;