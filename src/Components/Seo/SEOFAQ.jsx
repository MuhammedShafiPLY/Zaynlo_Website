import React from "react";
import { motion } from "framer-motion";

const SEOFAQ = ({ h2, questions }) => {
  return (
    <section className="w-full py-16 px-6 bg-zinc-900/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase italic text-center text-white mb-12">
          {h2}
        </h2>
        
        <div className="space-y-6">
          {questions.map((q, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950 border border-white/10 p-6 rounded-xl"
            >
              <h3 className="text-lg font-bold text-white mb-2">{q.question}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{q.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOFAQ;