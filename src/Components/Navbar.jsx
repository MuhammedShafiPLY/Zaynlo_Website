import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight,MessageCircle } from "lucide-react"; // Import this

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const lastScrollY = useRef(0);
  const timerRef = useRef(null);

  // 1. SCROLL LOGIC (Optimized)
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Glassmorphism trigger
      setScrolled(currentScrollY > 20);

      // Clear auto-hide timer on scroll
      if (timerRef.current) clearTimeout(timerRef.current);

      // Show/Hide Logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }

      lastScrollY.current = currentScrollY;

      // Optional: Auto-hide after 5s of inactivity if not at top
      if (currentScrollY > 100) {
        timerRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // 2. BODY SCROLL LOCK (Mobile Menu)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const desktopLinkVars = {
    initial: { opacity: 0, y: -20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 w-full z-[9999] transition-colors duration-300 px-6 py-4 lg:py-6 will-change-transform 
                ${
                  scrolled || isOpen
                    ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5"
                    : "bg-transparent"
                }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group z-[1001] relative"
          >
            <img
              src="/logo.png"
              alt="Brand Logo"
              width={100}
              height={60}
              className="w-[120px] h-[60px] object-contain"
            />
          </Link>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={desktopLinkVars}
                initial="initial"
                animate="animate"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#dbe11d] ${
                      isActive ? "text-[#dbe11d]" : "text-zinc-400"
                    }`
                  }
                >
                  {link.name}
                  {/* Active Dot Indicator */}
                  <span
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#dbe11d] rounded-full transition-all duration-300 ${
                      location.pathname === link.path
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </NavLink>
              </motion.div>
            ))}
          </div>
          {/* CTA Button */}
<div className="hidden md:block">
  <a 
    href="https://wa.me/919526299568?text=Hello!%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20a%20project."
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg">
      CHAT WITH US
      <MessageCircle size={14} strokeWidth={3} />
    </button>
  </a>
</div>
          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 z-[1001] relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={28} className="text-[#dbe11d]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-zinc-950 z-[1000] flex flex-col justify-center items-center overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#dbe11d]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-8 text-center z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    to={link.path}
                    className={`text-5xl font-black uppercase tracking-tighter transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-[#dbe11d]"
                        : "text-zinc-600 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="px-10 py-4 bg-[#dbe11d] text-black text-xs font-black uppercase tracking-[0.2em] rounded-full">
                  Start A Project
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
