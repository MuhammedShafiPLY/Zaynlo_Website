import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"; 

const SEOMap = ({ 
  h2 = "Visit Our HQ", 
  description = "Come say hello at our office in Kerala.",
  location = {
    address: "Your Building Name, Kerala",
    phone: "+91 952 629 9568",
    email: "hello@zaynlo.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    // 🆕 NEW PROP: The link to open the map in a new tab
    googleMapsUrl: "https://maps.google.com/?q=Aysha+Commercial+Complex" 
  },
  mapSrc
}) => {
  return (
    <section className="w-full py-16 px-6 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase italic text-[#dbe11d] mb-4">
            {h2}
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8 p-8 rounded-3xl bg-zinc-900/50 border border-white/10"
          >
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-full bg-[#dbe11d]/10 text-[#dbe11d]">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Our Location</h3>
                <p className="text-zinc-400 leading-relaxed w-2/3 mb-2">
                  {location.address}
                </p>
                {/* ✅ EXTERNAL LINK ADDED HERE */}
                <a 
                  href={location.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#dbe11d] text-sm font-bold flex items-center gap-2 hover:underline"
                >
                  Get Directions <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Phone (Must use <a> for external protocol) */}
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-full bg-[#dbe11d]/10 text-[#dbe11d]">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Phone</h3>
                <a href={`tel:${location.phone}`} className="text-zinc-400 hover:text-white transition-colors">
                  {location.phone}
                </a>
              </div>
            </div>

            {/* Email (Must use <a> for external protocol) */}
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-full bg-[#dbe11d]/10 text-[#dbe11d]">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Email</h3>
                <a href={`mailto:${location.email}`} className="text-zinc-400 hover:text-white transition-colors">
                  {location.email}
                </a>
              </div>
            </div>

             {/* Hours */}
             <div className="flex items-start gap-5">
              <div className="p-3 rounded-full bg-[#dbe11d]/10 text-[#dbe11d]">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Working Hours</h3>
                <p className="text-zinc-400">{location.hours}</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Map Iframe */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="relative w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 group"
          >
            <iframe 
              src={mapSrc}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(1) contrast(1.2) invert(0.92)" }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#dbe11d] rounded-tl-full opacity-20 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SEOMap;