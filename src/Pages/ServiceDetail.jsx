import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { servicesData } from "../data/servicesData"; // Import your data
import PageBanner from "../Components/PageBanner"; // Reusing your banner component
import ParticleBackground from "../Components/ParticlesBackground";
import Footer from "../Components/Footer";
import Testimonials from "../Sections/Testimonials";

const ServiceDetail = () => {
  const { id } = useParams(); // Get the ID from the URL (e.g., 'web-development')
  const navigate = useNavigate();

  // Find the specific service data
  const service = servicesData.find((item) => item.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle Invalid ID
  if (!service) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-zinc-950 text-white">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <button onClick={() => navigate("/services")} className="text-[#dbe11d] underline">
          Go Back to Services
        </button>
      </div>
    );
  }

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // WhatsApp Handler
  const handleWhatsApp = (planName, price) => {
    const phone = "919526299568"; // Your number from PDF [cite: 4]
    const message = `Hello Zaynlo! I am interested in the ${planName} package for ${service.title} priced at ${price}. Could you please share more details?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white pb-20">
      
      {/* 1. HERO BANNER */}
      <PageBanner 
        title={service.title} 
        highlight="Services" 
        description={service.shortDesc}
        imageSrc={service.bgImg}
        overlayOpacity={0.7}
      />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#dbe11d] transition-colors">
            <ArrowLeft size={20} /> Back to all services
        </Link>
      </div>

      {/* 2. INTRO SECTION (Left Text / Right Image) */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-6">
            Why Choose <span className="text-[#dbe11d]">{service.title}?</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed text-justify">
            {service.introText}
          </p>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
            <div className="absolute inset-0 bg-[#dbe11d] rounded-2xl rotate-3 opacity-20 blur-xl"></div>
            <img 
                src={service.introImage} 
                alt={service.title} 
                className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/10"
            />
        </motion.div>


         <div className="max-w-4xl mx-auto text-left">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black uppercase italic mb-8"
            >
                How We <span className="text-[#dbe11d]">Execute</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-300 text-lg leading-relaxed"
            >
                {service.executionText}
            </motion.p>
        </div>
      </section>

    

      {/* 4. PRICING SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic">
                Transparent <span className="text-[#dbe11d]">Pricing</span>
            </h2>
            <p className="text-zinc-400 mt-4">Choose the package that fits your growth stage.</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${service.pricing.length} justify-center gap-6`}>
            {/* <ParticleBackground /> */}
            {service.pricing.map((tier, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-8 rounded-3xl border flex flex-col ${
                        tier.recommended 
                        ? "bg-[#dbe11d]/10 border-[#dbe11d] shadow-[0_0_30px_rgba(219,225,29,0.1)]" 
                        : "bg-zinc-900 border-white/10"
                    }`}
                >
                    {tier.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#dbe11d] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                            Best Value
                        </div>
                    )}

                    <h3 className={`text-2xl font-black uppercase italic mb-2 ${tier.recommended ? 'text-[#dbe11d]' : 'text-white'}`}>
                        {tier.plan}
                    </h3>
                    <div className="text-3xl font-bold mb-6">{tier.price}<span className="text-sm font-normal text-zinc-500">/one-time</span></div>

                    {/* Features List */}
                    <ul className="space-y-4 mb-8 flex-grow">
                        {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                <Check size={16} className="text-[#dbe11d] min-w-[16px] mt-1" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Action Button */}
                    <button 
                        onClick={() => handleWhatsApp(tier.plan, tier.price)}
                        className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300 ${
                            tier.recommended 
                            ? "bg-[#dbe11d] text-black hover:bg-white" 
                            : "bg-white/5 text-white hover:bg-[#dbe11d] hover:text-black"
                        }`}
                    >
                        Select Plan <MessageCircle size={14} />
                    </button>
                </motion.div>
            ))}
        </div>
        
        {/* Pricing Note from PDF [cite: 50] */}
        <p className="text-center text-zinc-500 text-sm mt-8">
            Note: Additional pages beyond the package limit are charged at ₹1,000 per page.
        </p>
      </section>

      {/* 5. OUTRO SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center pb-20">
        <div className="bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[3rem] border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Start?</h3>
            <p className="text-zinc-400 text-lg mb-0 leading-relaxed">
                {service.outroText}
            </p>
        </div>
      </section>

      <Testimonials />

      <Footer />

    </div>
  );
};

export default ServiceDetail;