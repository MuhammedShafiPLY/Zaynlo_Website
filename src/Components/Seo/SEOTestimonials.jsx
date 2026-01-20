import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const SEOTestimonials = ({ h2, description, reviews }) => {
  return (
    <section className="w-full py-20 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(219,225,29,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase italic text-white mb-6">
            {h2}
          </h2>
          <p className="text-zinc-400 text-lg">
            {description}
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl relative group hover:border-[#dbe11d]/50 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#dbe11d]/20 group-hover:text-[#dbe11d] transition-colors">
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-[#dbe11d]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#dbe11d" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-zinc-300 mb-6 leading-relaxed text-sm italic">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                 {/* Optional: If you have images, uncomment this
                 <img src={review.image} alt={review.author} className="w-10 h-10 rounded-full bg-zinc-800" /> 
                 */}
                 <div>
                    <h4 className="text-white font-bold text-sm uppercase">{review.author}</h4>
                    <p className="text-zinc-500 text-xs">{review.role}, {review.location}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOTestimonials;