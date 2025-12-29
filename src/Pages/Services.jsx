import React from "react";
import PageBanner from "../Components/PageBanner"; // Adjust path as needed
import Footer from "../Components/Footer";
import GetInTouch from "../Components/GetInTouch";
import ServiceCards from "../Components/ServiceCards";
import Testimonials from "../Sections/Testimonials";
import ClientMarquee from "../Sections/ClientMarque";

const Services = () => {
  return (
    <div>
      <PageBanner 
        title="Our"
        highlight="Services."
        description="From AI-driven design systems to immersive 3D web experiences, we provide the full stack of future-ready digital solutions."
        imageSrc="/about_banner.webp" // Make sure you have this image
        
        primaryBtn={{
          text: "Start a Project",
          link: "/contact"
        }}

        secondaryBtn={{
          text: "View Pricing",
          link: "/pricing"
        }}
      />
      
      {/* ... Add your Services List or Cards below here ... */}
      <ServiceCards />
      <Testimonials />
      <ClientMarquee />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Services;