import React from "react";
import Gradient from "../Components/Gradient";
import { motion } from "framer-motion";
import Hero3D from "../Components/Hero3D";
import Spline from "@splinetool/react-spline";
import ServicesHeroLoop from "../Components/ServicesHeroLoop"; // Import the loop

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-zinc-950 text-white flex items-center justify-center lg:px-24 px-10 pt-32 lg:pt-0">
      
      {/* Background Gradients */}
      <Gradient location="absolute transparent h-0 w-[30rem] shadow-[10px_50px_900px_20px_#cfcfcf] rotate-[30deg] z-100 top-[100px] -left-5" />
      <Gradient location="absolute bg-transparent h-0 w-[50rem] shadow-[50px_50px_900px_30px_#cfcfcf] rotate-[30deg] z-10 bottom-[100px] -right-[400px]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl items-center gap-10 z-10 pb-24 lg:pb-0">
        
        {/* Right Section (3D Content) */}
        <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full h-full">
            {/* Spline Model */}
            <div className="absolute inset-0 z-20">
              <Spline scene="https://prod.spline.design/nLjKp9VWI8LPaWUk/scene.splinecode" />
            </div>

            {/* Background 3D Blobs */}
            <Hero3D className="absolute -bottom-[100px] -right-[100px] z-10 opacity-50" />
          </div>

          {/* Background Glow */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-60 h-20 bg-lime-400/10 blur-[100px] rounded-full -z-10" />
        </div>

        {/* Left Section (Text Content) */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <motion.h6
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.2 }}
            className="inline-block bg-gradient-to-l from-[#dbe11d] to-[#f3f948] text-zinc-950 text-sm font-black uppercase tracking-widest px-6 py-2 rounded-sm w-fit"
          >
            Hello!
          </motion.h6>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter"
          >
            Boring is a choice.
            <br />
            <span className="text-[#dbe11d]">Don't make it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            A borderless creative studio engineering culture-defining brands
            through strategy, chaos, and pixels.
          </motion.p>
        </div>
      </div>

      {/* THE SERVICE LOOP COMPONENT */}
      <ServicesHeroLoop />

    </section>
  );
};

export default Hero;