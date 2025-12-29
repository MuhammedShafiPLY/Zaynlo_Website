import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    const lastScrollY = useRef(0);
    const timerRef = useRef(null);

    useEffect(() => {
        // 1. Initialize lastScrollY to current position to prevent initial glitches
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            // --- DEBUGGING LINE ---
            // Open Console (F12). If this number stays 0 while scrolling, 
            // your window isn't the scroll container!
            console.log("Current Scroll:", window.scrollY); 
            // ----------------------

            const currentScrollY = window.scrollY;

            // Glassmorphism logic
            setScrolled(currentScrollY > 50);

            // Clear the auto-hide timer whenever scrolling happens
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            // Direction Logic: Hide on Down, Show on Up
            // We use a small buffer (10px) to prevent jitter
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false); // Scrolling Down -> Hide
            } else {
                setIsVisible(true);  // Scrolling Up -> Show
            }

            lastScrollY.current = currentScrollY;

            // Auto-Hide after 3 seconds of inactivity
            if (currentScrollY > 50) {
                timerRef.current = setTimeout(() => {
                    setIsVisible(false);
                }, 3000);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const desktopLinkVars = {
        initial: { opacity: 0, y: -10 },
        animate: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.3 + i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }
        })
    };

    return (
        <nav 
            className={`fixed top-0 w-full z-[9999] transition-transform duration-500 ease-in-out px-6 py-5 pt-7 
            ${scrolled ? 'bg-zinc-950/40 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}
            ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            `}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                {/* Logo Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 80, duration: 1.5, delay: .5 }}
                >
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-[#dbe11d] rounded-lg flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                            <div className="w-4 h-4 bg-black rounded-sm" /> 
                        </div>
                        <span className="text-white font-black tracking-tighter text-xl uppercase italic">
                            NEXUS<span className="text-[#dbe11d]">.</span>
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-12">
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
                                end
                                className={({ isActive }) =>
                                    `relative group text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                                        isActive ? 'text-white' : 'text-[#dbe11d]'
                                    }`
                                }
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                            </NavLink>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="hidden md:block"
                >
                    <Link to="/contact">
                        <button className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#dbe11d] transition-all duration-300 flex items-center gap-2">
                            HIRE US
                            <ArrowUpRight size={14} />
                        </button>
                    </Link>
                </motion.div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} className="text-[#dbe11d]" /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 h-screen w-full bg-zinc-950 z-[110] flex flex-col justify-center items-center overflow-hidden"
                    >
                        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white p-2 border border-white/10 rounded-full">
                            <X size={32} />
                        </button>
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1, ease: "easeOut" } }}
                                >
                                    <Link
                                        to={link.path}
                                        className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-lime-400/20 hover:text-[#dbe11d] transition-all duration-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;