import React from "react";
import { motion } from "framer-motion";

const industries = [
  { name: "E-Commerce & Retail", icon: "🛍️", desc: "Scaling online stores on Shopify & WooCommerce." },
  { name: "Real Estate & Builders", icon: "🏢", desc: "Lead generation for premium apartments & villas." },
  { name: "Healthcare & Clinics", icon: "🏥", desc: "Patient acquisition strategies for doctors & hospitals." },
  { name: "Education & EdTech", icon: "🎓", desc: "Student enrollment campaigns for colleges & courses." },
  { name: "Jewelry & Fashion", icon: "💎", desc: "Luxury branding and social media aesthetics." },
  { name: "Travel & Hospitality", icon: "✈️", desc: "Booking strategies for resorts and tour operators." },
];

const SEOIndustries = () => {
  return (
    <section className="py-20 px-6 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black uppercase italic mb-12"
        >
          Industries We <span className="text-[#dbe11f]">Transform</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-[#dbe11f] transition-colors group text-left"
            >
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOIndustries;