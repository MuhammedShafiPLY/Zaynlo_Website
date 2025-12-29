import React from "react";

// 1. Layout & Scroll Components
import SmoothScroll from "../Components/SmoothScroll";
import Footer from "../Components/Footer";
import PageBanner from "../Components/PageBanner";
import GetInTouch from "../Components/GetInTouch";

// 2. Sections
// Ensure these paths match where you saved the files
import ProjectGallery from "../Components/ProjectGallery"; // Changed to Sections for consistency
import Testimonials from "../Sections/Testimonials";
import ClientMarquee from "../Sections/ClientMarque";

const Projects = () => {
  return (
    <SmoothScroll>
      <main className="w-full relative overflow-x-hidden bg-zinc-950">
        
        {/* 1. PAGE HEADER */}
        <PageBanner 
          title="Featured"
          highlight="Work."
          description="A showcase of our finest digital creations. See how we've helped ambitious brands redefine their digital presence."
          imageSrc="/about_banner.webp" // Or a specific portfolio banner image
          
          primaryBtn={{
            text: "View All Cases",
            link: "#gallery" // Anchors to the ID below
          }}
          // No secondary button needed here, keeping it clean
        />
        
        {/* 2. MAIN GALLERY */}
        {/* Added id="gallery" so the banner button scrolls here */}
        <div id="gallery">
           <ProjectGallery />
        </div>

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
  );
};

export default Projects;