import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = () => {
  const text = "ZAYNLO";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(text.substring(0, displayText.length + 1));
        setSpeed(150);
        if (displayText === text) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause at end
        }
      } else {
        // Deleting
        setDisplayText(text.substring(0, displayText.length - 1));
        setSpeed(100);
        if (displayText === "") {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <span className="absolute top-100 right-100 font-black tracking-tighter">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1 h-12 bg-lime-400 ml-1 ml-1"
      >|</motion.span>
    </span>
  );
};

export default TypewriterText