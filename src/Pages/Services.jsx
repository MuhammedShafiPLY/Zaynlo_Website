import React from "react";

// 1. Layout & Scroll Components
import SmoothScroll from "../Components/SmoothScroll";
import Footer from "../Components/Footer";
import PageBanner from "../Components/PageBanner";
import GetInTouch from "../Components/GetInTouch";

// 2. Sections
// Ensure these paths match where you saved the files (likely inside /Sections)
import ServiceCards from "../Components/ServiceCards"; 
import Testimonials from "../Sections/Testimonials";
import ClientMarquee from "../Sections/ClientMarque"; 

const Services = () => {
  return (
    <SmoothScroll>
      <main className="w-full relative overflow-x-hidden bg-zinc-950">
        
        {/* 1. PAGE HEADER */}
        <PageBanner 
          title="Our"
          highlight="Services."
          description="From AI-driven design systems to immersive 3D web experiences, we provide the full stack of future-ready digital solutions."
          imageSrc="/service_banner.webp" // Or use a specific services banner image
          primaryBtn={{
            text: "Start a Project",
            link: "/contact"
          }}
          // secondaryBtn={{
          //   text: "View Pricing",
          //   link: "/contact" // Or pricing if you have it
          // }}
        />

        {/* 2. MAIN SERVICES LIST (The Detailed Cards) */}
        <ServiceCards />

        {/* 3. SOCIAL PROOF (Testimonials) */}
        <Testimonials />

        {/* 4. TRUST SIGNALS (Client Logos) */}
        <ClientMarquee />

        {/* 5. FINAL CTA */}
        <GetInTouch />

        {/* 6. FOOTER */}
        <Footer />
        
      </main>
    </SmoothScroll>
  );
};

export default Services;