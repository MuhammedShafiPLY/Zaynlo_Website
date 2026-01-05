import React from "react";

// 1. Layout & Scroll Components
import SmoothScroll from "../Components/SmoothScroll";
import Footer from "../Components/Footer";
import PageBanner from "../Components/PageBanner";

// 2. Sections
import ContactForm from "../Sections/ContactForm";
import ClientMarquee from "../Sections/ClientMarque"; // Added for Trust/Social Proof

const Contact = () => {
  return (
    <SmoothScroll>
      <main className="w-full relative overflow-x-hidden bg-zinc-950">
        
        {/* 1. PAGE HEADER */}
        <PageBanner 
          title="Let's"
          highlight="Talk."
          description="Ready to start your next big thing? We are currently accepting new partnerships for Q4. Let's build something legendary."
          imageSrc="/contact_banner.webp" // Ensure you have a relevant image here
          
          primaryBtn={{
            text: "Book a Call",
            // Note: If using external links (https/mailto) inside react-router's Link component, 
            // ensure your PageBanner handles external URLs or stick to internal routes.
            link: "/contact" 
          }}

          secondaryBtn={{
            text: "Email Us",
            link: "mailto:hello@zaynlo.com"
          }}
        />
        
        {/* 2. CONTACT FORM & INFO */}
        {/* This contains the map, form, and direct contact details */}
        <ContactForm />

        {/* 3. TRUST SIGNALS */}
        {/* Good to show partners/clients here to reassure the user before they submit */}
        <ClientMarquee />

        {/* 4. FOOTER */}
        <Footer />
        
      </main>
    </SmoothScroll>
  );
};

export default Contact;