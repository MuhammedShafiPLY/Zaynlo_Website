import React from "react";
import { motion } from "framer-motion";

const SEOProcess = ({ h2, steps }) => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase italic text-white mb-12">
          {h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-6 border-t border-white/20 hover:border-[#dbe11d] transition-colors"
            >
              <span className="text-5xl font-black text-white/5 absolute top-4 right-4">
                0{index + 1}
              </span>
              <h3 className="text-lg font-bold text-[#dbe11d] mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;