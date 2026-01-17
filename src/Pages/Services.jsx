import React from "react";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet

// 1. Layout & Scroll Components
import SmoothScroll from "../Components/SmoothScroll";
import Footer from "../Components/Footer";
import PageBanner from "../Components/PageBanner";
import GetInTouch from "../Components/GetInTouch";

// 2. Sections
import ServiceCards from "../Components/ServiceCards"; 
import Testimonials from "../Sections/Testimonials";
import ClientMarquee from "../Sections/ClientMarque"; 

const Services = () => {
  return (
    <>
      {/* 2. SEO Configuration for Services Page */}
      <Helmet>
        <title>Digital Marketing & Branding Services | Zaynlo</title>
        <meta 
          name="description" 
          content="Explore our premium services: SEO, Social Media Marketing, Web Development, and Branding. Elevate your business with expert strategies. Contact us!" 
        />
        <link rel="canonical" href="https://zaynlo.muhammedshafik.com/services" />
        
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="Digital Marketing & Branding Services | Zaynlo" />
        <meta property="og:description" content="We provide the full stack of future-ready digital solutions: AI design, 3D web experiences, and growth marketing." />
        <meta property="og:url" content="https://zaynlo.muhammedshafik.com/services" />
        <meta property="og:image" content="https://zaynlo.muhammedshafik.com/service_banner.webp" /> 
      </Helmet>

      <SmoothScroll>
        <main className="w-full relative overflow-x-hidden bg-zinc-950">
          
          {/* 1. PAGE HEADER */}
          <PageBanner 
            title="Our"
            highlight="Services."
            description="From AI-driven design systems to immersive 3D web experiences, we provide the full stack of future-ready digital solutions."
            imageSrc="/service_banner.webp" 
            primaryBtn={{
              text: "Start a Project",
              link: "/contact"
            }}
          />

          {/* 2. MAIN SERVICES LIST */}
          <ServiceCards />

          {/* 3. SOCIAL PROOF */}
          <Testimonials />

          {/* 4. TRUST SIGNALS */}
          <ClientMarquee />

          {/* 5. FINAL CTA */}
          <GetInTouch />

          {/* 6. FOOTER */}
          <Footer />
          
        </main>
      </SmoothScroll>
    </>
  );
};

export default Services;