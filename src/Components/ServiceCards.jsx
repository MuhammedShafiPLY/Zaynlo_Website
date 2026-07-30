import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Updated Data with 10 Individual Services
const servicesData = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "We create high-performance, visually stunning websites that serve as the digital foundation of your business. Our approach blends creative aesthetics with robust technical architecture.",
    subServices: [
      "Responsive & Mobile-First",
      "Custom UI/UX Design",
      "SEO-Friendly Structure",
      "Fast Loading Speed",
    ],
    image: "/web_servi.webp",
    imageAlt: "Professional web design and development services in Kerala by Zaynlo digital agency",
    link: "/services/web-development",
    externalLink: null,
  },

  {
    id: 2,
    title: "Search Engine Optimization (SEO)",
    description:
      "A holistic approach to digital dominance combining organic growth, paid acceleration, and social engagement. Our SEO strategies follow industry best practices to ensure long-term ranking growth.",
    subServices: [
      "Keyword Dominance",
      "Cross-Channel Retargeting",
      "Content Authority",
      "Unified Performance Tracking",
    ],
    image: "/seo_servi.webp",
    imageAlt: "SEO services in Kerala – search engine optimisation by Zaynlo digital agency",
    link: "/services/seo",
    externalLink: {
      href: "https://moz.com/beginners-guide-to-seo",
      text: "Learn SEO best practices →",
    },
  },

  {
    id: 3,
    title: "Branding",
    description:
      "Branding is the soul of your business. We craft a distinct identity that resonates emotionally with your audience, differentiating you from competitors and building trust.",
    subServices: [
      "Visual Identity Design",
      "Brand Voice & Messaging",
      "Brand Guidelines",
      "Market Positioning",
    ],
    image: "/brnd_servi.webp",
    imageAlt: "Professional branding services in Kerala – visual identity and brand design by Zaynlo",
    link: "/services/branding",
    externalLink: null,
  },

  {
    id: 4,
    title: "Google Ads",
    description:
      "Accelerate your growth with targeted Pay-Per-Click (PPC) campaigns that place your brand directly in front of customers. We manage ad spend efficiently to maximise ROI.",
    subServices: [
      "Precision Targeting",
      "Keyword Optimization",
      "Compelling Ad Copy",
      "Real-Time ROI Tracking",
    ],
    image: "/gog_servi.webp",
    imageAlt: "Google Ads PPC campaign management services in Kerala by Zaynlo advertising agency",
    link: "/services/google-ads",
    externalLink: {
      href: "https://ads.google.com/home/how-it-works/",
      text: "How Google Ads works →",
    },
  },

  {
    id: 5,
    title: "Social Media Marketing",
    description:
      "We build and nurture your community across platforms. By combining creative storytelling with data-driven strategies, we turn your channels into tools for engagement and loyalty.",
    subServices: [
      "Content Creation",
      "Community Engagement",
      "Platform-Specific Strategy",
      "Growth Analytics",
    ],
    image: "/soci_servi.webp",
    imageAlt: "Social media marketing services in Kerala – Instagram, Facebook & LinkedIn management by Zaynlo",
    link: "/services/social-media",
    externalLink: {
      href: "https://business.facebook.com",
      text: "Explore Meta Business Suite →",
    },
  },

  {
    id: 6,
    title: "E-Commerce Solutions",
    description:
      "We build powerful online stores that make selling effortless. From product browsing to secure checkout, our e-commerce solutions provide a seamless shopping experience.",
    subServices: [
      "Secure Payment Integration",
      "Inventory Management",
      "Conversion Tools",
      "Scalable Architecture",
    ],
    image: "/ecom_servi.webp",
    imageAlt: "E-commerce website development services in Kerala – online store solutions by Zaynlo",
    link: "/services/ecommerce",
    externalLink: null,
  },
];

const ServiceCards = () => {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Decor (Optimized Blur) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dbe11d] rounded-full blur-[250px] opacity-5 pointer-events-none will-change-transform transform-gpu" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h6 className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs mb-2">
            Our Expertise
          </h6>
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
            What We <span className="text-[#dbe11d]">Do Best.</span>
          </h2>
        </motion.div>

        {/* Cards Container */}
        <div className="flex flex-col gap-12">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} data={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Card Component
const ServiceCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="bg-zinc-900 border border-white/5 rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col-reverse lg:flex-row gap-12 items-center group hover:border-[#dbe11d]/30 transition-colors duration-500 will-change-transform"
    >
      {/* LEFT SIDE: Text Content */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase italic tracking-tighter">
            {data.title}
          </h3>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            {data.description}
          </p>
        </div>

        {/* Sub-services List */}
        <ul className="space-y-4">
          {data.subServices.map((item, i) => (
            <li
              key={i}
              className="border-b border-white/10 pb-3 text-zinc-300 font-medium text-sm md:text-base flex items-center justify-between group/item hover:text-white transition-colors cursor-default"
            >
              {item}
              <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#dbe11d]">
                →
              </span>
            </li>
          ))}
        </ul>

        {/* External Authority Link */}
        {data.externalLink && (
          <a
            href={data.externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-[#dbe11d] transition-colors duration-300 border-b border-zinc-700 hover:border-[#dbe11d] pb-0.5"
          >
            {data.externalLink.text}
          </a>
        )}

        {/* Button */}
        <div className="pt-4">
          <a
            href={data.link}
            className="inline-flex items-center gap-2 bg-[#dbe11d] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(219,225,29,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
          >
            View Plans
            <ArrowUpRight size={16} strokeWidth={3} />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: Image */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[450px] relative overflow-hidden rounded-3xl bg-zinc-800">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />

        <img
          src={data.image}
          alt={data.imageAlt || `${data.title} services in Kerala by Zaynlo digital agency`}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out will-change-transform"
        />

        {/* Fallback Div */}
        <div className="hidden w-full h-full items-center justify-center bg-zinc-800 text-zinc-600 font-bold uppercase tracking-widest">
          {data.title}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCards;
