import React from "react";
import PageBanner from "../Components/PageBanner"; // Adjust path as needed
import Footer from "../Components/Footer";
import ProjectGallery from "../Components/ProjectGallery";
import Testimonials from "../Sections/Testimonials";
import GetInTouch from "../Components/GetInTouch";
import ClientMarquee from "../Sections/ClientMarque";

const Projects = () => {
  return (
    <div>
      <PageBanner 
        title="Featured"
        highlight="Work."
        description="A showcase of our finest digital creations. See how we've helped ambitious brands redefine their digital presence."
        imageSrc="/about_banner.webp" // Make sure you have this image
        
        primaryBtn={{
          text: "View All Cases",
          link: "#gallery" // Or link to a specific section ID
        }}
        
        // No secondary button needed here, keeping it clean
      />
      
      {/* ... Add your Project Gallery/Grid below here ... */}
      <ProjectGallery />
      <Testimonials />
      <ClientMarquee />
      <GetInTouch />

      <Footer />
    </div>
  );
};

export default Projects;