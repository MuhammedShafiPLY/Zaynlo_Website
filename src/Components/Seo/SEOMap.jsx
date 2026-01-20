import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react"; // Make sure you have lucide-react installed

const SEOMap = ({ 
  h2 = "Visit Our HQ", 
  description = "Come say hello at our office in Kerala. We are always ready to discuss your next big digital move.",
  location = {
    address: "Your Building Name, Near Landmark, Calicut, Kerala - 673001",
    phone: "+91 952 629 9568",
    email: "hello@zaynlo.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM"
  },
  // Default Map Embed Link (Replace with your own from Google Maps -> Share -> Embed)
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.871092497645!2d75.8340823148053!3d11.270632091987514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1642839123456!5m2!1sen!2sin"
}) => {
  return (
    <section className="w-full py-16 px-6 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* 1. CONTACT INFO (Left Side) */}
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
                <p className="text-zinc-400 leading-relaxed w-2/3">
                  {location.address}
                </p>
              </div>
            </div>

            {/* Phone */}
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

            {/* Email */}
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
                <p className="text-zinc-400">
                  {location.hours}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. GOOGLE MAP IFRAME (Right Side) */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="relative w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 group"
          >
            {/* Grayscale Map Filter */}
            <iframe 
              src={mapSrc}
              href={mapSrc}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(0) contrast(1) invert(1)" }} // This style makes the map Dark Mode!
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full group-hover:grayscale-0 transition-all duration-500" // Hover to see color
            ></iframe>
            
            {/* Decoration: Corner accent */}
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#dbe11d] rounded-tl-full opacity-20 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SEOMap;