import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const SEOFeatureGrid = ({
  h2,
  description,
  items,
  quote,
  columns = 3,
  imageSrc,
  imageLink = "#",
  imagePosition = "right",
  imageAlt = "Zaynlo digital marketing services Kerala",
  imageTitle = "Zaynlo – Digital Agency Kerala",
}) => {
  return (
    <section className="w-full py-16 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase italic text-[#dbe11d] mb-4">
            {h2}
          </h2>
          {description && (
            <p className="text-zinc-400 text-lg max-w-3xl">{description}</p>
          )}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* 1. CONTENT COLUMN (The Grid of Items) */}
          {/* LOGIC: If image is LEFT, this must be Order-2. If image is RIGHT, this is Order-1. */}
          <div
            className={`
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6
              ${imagePosition === "left" ? "lg:order-2" : "lg:order-1"} 
            `}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 hover:border-[#dbe11d]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
                {item.subPoints && (
                  <ul className="mt-4 space-y-2">
                    {item.subPoints.map((point, i) => (
                      <li
                        key={i}
                        className="text-zinc-500 text-xs flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[#dbe11d] rounded-full"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* 2. IMAGE COLUMN */}
          {/* LOGIC: If image is LEFT, this must be Order-1. If image is RIGHT, this is Order-2. */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, x: imagePosition === "left" ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`
                relative h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden border border-white/10 group
                ${imagePosition === "left" ? "lg:order-1" : "lg:order-2"}
              `}
            >
              <Link to={imageLink} className="block h-full w-full">
                <div className="absolute inset-0 bg-[#dbe11d]/0 transition-colors duration-300 group-hover:bg-[#dbe11d]/10 z-10" />
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  title={imageTitle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Optional Quote */}
        {quote && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 p-6 border-l-4 border-[#dbe11d] bg-zinc-900/30 italic text-zinc-300"
          >
            "{quote}"
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SEOFeatureGrid;