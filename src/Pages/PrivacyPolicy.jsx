import React, { useEffect } from "react";
import PageBanner from "../Components/PageBanner";
import GetInTouch from "../Components/GetInTouch"; // Imported GetInTouch
import Footer from "../Components/Footer"; // Imported Footer

const PrivacyPolicy = () => {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-300 flex flex-col">
      
      {/* 1. Simple Header Banner */}
      <PageBanner 
        title="Privacy" 
        highlight="Policy" 
        description="Transparency is the foundation of our partnership. Here is how we handle your data."
        imageSrc="/privacy_banner.jpg" // You can use a generic abstract image here
        overlayOpacity={0.8}
      />

      {/* 2. Policy Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-20 flex-grow">
        
        {/* Intro Section */}
        <div className="space-y-6 text-lg leading-relaxed border-b border-white/10 pb-10 mb-10">
          <p>
            <strong>Last Updated: January 01, 2026</strong>
          </p>
          <p>
            At <strong>Zaynlo Digital Solutions</strong> ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our digital services, including Web Development, SEO Optimization, Branding, and Social Media Management.
          </p>
          <p>
            By accessing or using our services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">

          {/* SECTION 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              To provide high-impact digital solutions, we collect specific data points to tailor our strategies to your business needs.
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#dbe11d]">
              <li>
                <strong>Personal Identification Information:</strong> Name, email address, phone number, and business name when you fill out forms, request a quote, or contact us via WhatsApp.
              </li>
              <li>
                <strong>Project-Related Credentials:</strong> To execute Web Development and SEO services, we may require access to your hosting accounts, domain registrars, Google Analytics, or Social Media accounts. This data is strictly used for project execution.
              </li>
              <li>
                <strong>Technical Data:</strong> We automatically collect information such as your IP address, browser type, operating system, and browsing behavior on our site to improve user experience and site performance.
              </li>
            </ul>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We do not sell your data. We use the collected information for the following specific purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#dbe11d]">
              <li><strong>Service Delivery:</strong> To build your website, optimize your SEO rankings, and manage your social media campaigns.</li>
              <li><strong>Communication:</strong> To provide project updates, respond to inquiries, and send invoices or proposals.</li>
              <li><strong>Strategy Optimization:</strong> We analyze usage data to understand market trends and improve our digital packages.</li>
              <li><strong>Security:</strong> To detect and prevent fraudulent activities and ensure the security of our digital infrastructure.</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3. Data Protection Strategies</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect your data. Our security strategies include:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
                    <h3 className="text-white font-bold mb-2">Encryption</h3>
                    <p className="text-sm">All sensitive data exchanges are encrypted using SSL technology. We ensure your project credentials are stored in secure, encrypted environments.</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
                    <h3 className="text-white font-bold mb-2">Access Control</h3>
                    <p className="text-sm">Access to client data is restricted to authorized personnel and developers who need the information to perform a specific job (e.g., billing or development).</p>
                </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">4. Sharing of Information</h2>
            <p className="mb-4">
              We strictly maintain the confidentiality of your business ideas and data. However, we may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#dbe11d]">
              <li><strong>Third-Party Service Providers:</strong> We may use third-party providers (e.g., Hosting Providers, WhatsApp API) to help us operate our business.</li>
              <li><strong>Legal Compliance:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
            </ul>
          </section>

          {/* SECTION 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">5. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses "cookies" to enhance the User experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about them. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the Site may not function properly.
            </p>
          </section>

          {/* SECTION 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">6. Your Data Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#dbe11d]">
              <li>Request copies of your personal data.</li>
              <li>Request that we correct any information you believe is inaccurate.</li>
              <li>Request that we erase your personal data (Project termination protocols apply).</li>
              <li>Object to our processing of your personal data.</li>
            </ul>
          </section>

          {/* SECTION 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">7. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with us, please contact us at:
            </p>
            <div className="bg-[#dbe11d] text-black p-8 rounded-3xl inline-block pr-10 md:pr-20">
                <h3 className="font-black text-2xl uppercase italic mb-2">Zaynlo Digital Solutions</h3>
                <p className="font-medium">Phone: +91 952 629 9568</p>
                <p className="font-medium">Email: info@zaynlo.com</p>
                <p className="font-medium mt-4 opacity-80">
                  Aysha Commercial Complex, NH 966<br/>
                  Perinthalmanna, Kerala 679322<br/>
                  India
                </p>
            </div>
          </section>

        </div>
      </div>

      {/* 3. Get In Touch & Footer */}
      <GetInTouch />
      <Footer />
      
    </div>
  );
};

export default PrivacyPolicy;