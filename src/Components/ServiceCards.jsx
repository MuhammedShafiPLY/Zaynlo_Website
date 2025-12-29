import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Updated Data with 10 Individual Services
const servicesData = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "We build digital experiences that live at the intersection of art and code. Get high-performance, responsive, and visually stunning websites that define your brand.",
    subServices: ["UI/UX Design", "Frontend Dev", "Backend Systems", "Maintenance"],
    image: "/service_webdev.webp",
    link: "/services/web-development"
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Don't just exist; dominate. We craft data-driven strategies that put your brand in the spotlight, drive traffic, and convert visitors into loyal revenue.",
    subServices: ["Strategy", "Content Marketing", "Email Campaigns", "Analytics"],
    image: "/service_digitalmarketing.webp",
    link: "/services/digital-marketing"
  },
  {
    id: 3,
    title: "SEO",
    description: "Climb the ranks and own the keywords that matter. We optimize your entire digital footprint to ensure you are the first answer your customers see.",
    subServices: ["On-Page SEO", "Technical Audits", "Link Building", "Keyword Research"],
    image: "/service_seo.webp",
    link: "/services/seo"
  },
  {
    id: 4,
    title: "SEM",
    description: "Instant visibility, targeted results. We manage paid search campaigns (Search Engine Marketing) that maximize ROI and minimize wasted ad spend.",
    subServices: ["PPC Campaigns", "Bid Management", "Ad Copywriting", "Conversion Tracking"],
    image: "/service_sem.webp",
    link: "/services/sem"
  },
  {
    id: 5,
    title: "SMM",
    description: "Spark conversations that matter. We build communities and engage audiences across all major social platforms with content that stops the scroll.",
    subServices: ["Content Creation", "Community Mgmt", "Influencer Marketing", "Social Strategy"],
    image: "/service_smm.webp",
    link: "/services/smm"
  },
  {
    id: 6,
    title: "Graphic Design",
    description: "Visuals that stick. From social assets to print media, we design high-impact graphics that capture attention and communicate your message instantly.",
    subServices: ["Social Graphics", "Marketing Materials", "Illustrations", "Infographics"],
    image: "/service_graphic.webp",
    link: "/services/graphic-design"
  },
  {
    id: 7,
    title: "Branding",
    description: "Define your DNA. We forge memorable brand identities—including logos, typography, and voice—that resonate deeply with your target audience.",
    subServices: ["Logo Design", "Brand Strategy", "Visual Identity", "Style Guides"],
    image: "/service_branding.webp",
    link: "/services/branding"
  },
  {
    id: 8,
    title: "Advertising (Poster / Video)",
    description: "Stories that sell. Whether it's a cinematic video ad or a striking poster, we produce creative assets that drive emotion and action.",
    subServices: ["Video Production", "Motion Graphics", "Poster Design", "Display Ads"],
    image: "/service_ad.webp",
    link: "/services/advertising"
  },
  {
    id: 9,
    title: "Google Ads",
    description: "Capture intent at the perfect moment. We set up and optimize high-converting Google Ad campaigns to reach customers exactly when they are searching.",
    subServices: ["Search Ads", "Display Network", "Shopping Ads", "Remarketing"],
    image: "/service_googleads.webp",
    link: "/services/google-ads"
  },
  {
    id: 10,
    title: "E-Commerce Website",
    description: "Sell everywhere, 24/7. We build robust, secure, and scalable online stores designed to streamline the user journey and maximize sales.",
    subServices: ["Shopify/WooCommerce", "Payment Gateways", "Inventory Systems", "User Experience"],
    image: "/service_ecommerce.webp",
    link: "/services/ecommerce"
  }
];

const ServiceCards = () => {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dbe11d] rounded-full blur-[300px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
            <h6 className="text-[#dbe11d] font-black uppercase tracking-[0.4em] text-xs mb-2">
              Our Expertise
            </h6>
            <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
              What We <span className="text-zinc-600">Do Best.</span>
            </h2>
        </div>

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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.1 }} // Simple delay
      className="bg-zinc-900 border border-white/5 rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col-reverse lg:flex-row gap-12 items-center group hover:border-[#dbe11d]/30 transition-colors duration-500"
    >
      
      {/* LEFT SIDE: Text Content */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
            {data.title}
          </h3>
          <p className="text-zinc-400 text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Sub-services List */}
        <ul className="space-y-4">
          {data.subServices.map((item, i) => (
            <li key={i} className="border-b border-white/10 pb-3 text-zinc-300 font-medium text-sm md:text-base flex items-center justify-between group/item hover:text-white transition-colors">
              {item}
              <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#dbe11d]">
                 →
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="pt-4">
          <a href={data.link} className="inline-flex items-center gap-2 bg-[#dbe11d] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(219,225,29,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            View Plans
            <ArrowUpRight size={16} strokeWidth={3} />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: Image */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-full min-h-[300px] relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        {/* Note: You can reuse the same image for multiple items if you don't have 10 unique images yet */}
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
        />
      </div>

    </motion.div>
  );
};

export default ServiceCards;