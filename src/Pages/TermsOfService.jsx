import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, Clock, Copyright, AlertTriangle, Scale } from "lucide-react";
import PageBanner from "../Components/PageBanner"; // Reusing your banner

const TermsOfService = () => {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Section Animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-300">
      
      {/* 1. Header Banner */}
      <PageBanner 
        title="Terms of" 
        highlight="Service" 
        description="Please read these terms carefully before engaging with our digital solutions."
        imageSrc="/terms_banner.jpg" // Use a relevant abstract image
        overlayOpacity={0.8}
      />

      {/* 2. Content Container */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Intro */}
        <div className="text-lg leading-relaxed border-b border-white/10 pb-10 mb-12">
          <p className="mb-4">
            <strong>Effective Date: January 01, 2026</strong>
          </p>
          <p>
            Welcome to <strong>Zaynlo Digital Solutions</strong>. By accessing our website, purchasing our services (Web Development, SEO, Branding, Social Media), or signing a service agreement with us, you agree to be bound by these Terms of Service ("Terms").
          </p>
          <p className="mt-4 text-[#dbe11d]">
            If you do not agree with any part of these terms, you must not use our services.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-16">

          {/* SECTION 1: SERVICES */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-zinc-900 p-3 rounded-full text-[#dbe11d]"><ShieldCheck size={28} /></div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">1. Scope of Services</h2>
            </div>
            <p className="mb-4">
              Zaynlo provides digital services as described in your specific proposal or chosen package (Silver, Gold, Platinum, Diamond).
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-[#dbe11d]">
              <li><strong>Web Development:</strong> We build websites based on the package selected. Changes to the scope after the project commences may incur additional charges.</li>
              <li><strong>SEO Services:</strong> We employ ethical (White Hat) strategies to improve rankings. However, we do not guarantee specific #1 rankings as search engines constantly update algorithms.</li>
              <li><strong>Social Media:</strong> We manage content creation and posting schedules. We are not responsible for comments or user-generated content on your platforms.</li>
            </ul>
          </motion.section>

          {/* SECTION 2: PAYMENTS */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-zinc-900 p-3 rounded-full text-[#dbe11d]"><DollarSign size={28} /></div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">2. Payment & Refunds</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                    <h3 className="text-white font-bold text-lg mb-2">Payment Structure</h3>
                    <p className="text-sm leading-relaxed">
                        A non-refundable advance deposit of <strong>50%</strong> is required to commence any project. The remaining <strong>50%</strong> balance is due upon project completion, prior to the final handover of credentials or source code.
                    </p>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                    <h3 className="text-white font-bold text-lg mb-2">Refund Policy</h3>
                    <p className="text-sm leading-relaxed">
                        Once design work or development has begun, the deposit is non-refundable. If a project is cancelled by the client midway, you agree to pay for all work completed up to that point.
                    </p>
                </div>
            </div>
          </motion.section>

          {/* SECTION 3: TIMELINES & REVISIONS */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-zinc-900 p-3 rounded-full text-[#dbe11d]"><Clock size={28} /></div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">3. Timelines & Revisions</h2>
            </div>
            <p className="mb-4">
              We strive to meet all deadlines outlined in your proposal. However, project timelines depend heavily on client cooperation.
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-[#dbe11d]">
              <li><strong>Client Delays:</strong> If you fail to provide content, images, or feedback on time, the project deadline will be extended accordingly.</li>
              <li><strong>Revision Windows:</strong> Each package has a specific correction window (e.g., Silver: 3 Days, Gold: 10 Days, Platinum: 20 Days). Revisions requested after this window will be charged at our standard hourly rate.</li>
              <li><strong>Scope Creep:</strong> Any features requested outside the initial agreement will be treated as a new project or an add-on.</li>
            </ul>
          </motion.section>

          {/* SECTION 4: INTELLECTUAL PROPERTY */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-zinc-900 p-3 rounded-full text-[#dbe11d]"><Copyright size={28} /></div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">4. Intellectual Property</h2>
            </div>
            <p className="mb-4">
              Upon full payment of all fees, Zaynlo grants you full ownership of the final website design and custom code.
            </p>
            <div className="bg-[#dbe11d]/10 border-l-4 border-[#dbe11d] p-6 rounded-r-lg">
                <p className="text-white font-medium">
                    <strong>Portfolio Rights:</strong> Zaynlo retains the right to display the completed project in our portfolio, website, and social media for promotional purposes, unless a Non-Disclosure Agreement (NDA) is signed.
                </p>
            </div>
          </motion.section>

          {/* SECTION 5: LIABILITY */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-zinc-900 p-3 rounded-full text-[#dbe11d]"><AlertTriangle size={28} /></div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">5. Limitation of Liability</h2>
            </div>
            <p className="mb-4">
              Zaynlo will not be liable for any indirect, special, or consequential damages arising out of:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#dbe11d]">
              <li>Server downtime caused by third-party hosting providers (AWS, GoDaddy, Hostinger, etc.).</li>
              <li>Loss of data due to client negligence or failure to maintain backups (unless maintenance is contracted).</li>
              <li>Changes in Search Engine algorithms that negatively impact SEO rankings.</li>
              <li>Hacking or malware attacks, provided we have implemented standard security measures upon delivery.</li>
            </ul>
          </motion.section>

          {/* SECTION 6: GOVERNING LAW */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-zinc-900 p-3 rounded-full text-[#dbe11d]"><Scale size={28} /></div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">6. Governing Law</h2>
            </div>
            <p>
              These Terms shall be governed by and defined following the laws of <strong>India</strong>. Any dispute arising in relation to these terms shall be subject to the exclusive jurisdiction of the courts in <strong>Kerala, India</strong>.
            </p>
          </motion.section>

          {/* Contact Block */}
          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Questions regarding these terms?</h3>
            <p className="text-zinc-400 mb-6">We are happy to clarify any clause before we start our partnership.</p>
            <a 
                href="mailto:contact@zaynlo.com" 
                className="inline-block px-8 py-3 rounded-full border border-[#dbe11d] text-[#dbe11d] hover:bg-[#dbe11d] hover:text-black transition-all font-bold uppercase tracking-wider text-xs"
            >
                Contact Legal Team
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;