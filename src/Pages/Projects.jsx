import React from "react";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet

// 1. Layout & Scroll Components
import SmoothScroll from "../Components/SmoothScroll";
import Footer from "../Components/Footer";
import PageBanner from "../Components/PageBanner";
import GetInTouch from "../Components/GetInTouch";

// 2. Sections
import ProjectGallery from "../Components/ProjectGallery"; 
import Testimonials from "../Sections/Testimonials";
import ClientMarquee from "../Sections/ClientMarque";

const Projects = () => {
  return (
    <>
      {/* 2. SEO Configuration for Projects Page */}
      <Helmet>
        <title>Our Recent Projects & Portfolio Works | Zaynlo</title>
        <meta 
          name="description" 
          content="Browse our successful case studies. See how we helped Kerala businesses grow through stunning design and effective marketing campaigns. View our work." 
        />
        <link rel="canonical" href="https://zaynlo.muhammedshafik.com/projects" />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="Our Recent Projects & Portfolio Works | Zaynlo" />
        <meta property="og:description" content="Browse our successful case studies and see how we help businesses grow." />
        <meta property="og:url" content="https://zaynlo.muhammedshafik.com/projects" />
        {/* Ensures your banner image shows up when shared */}
        <meta property="og:image" content="https://zaynlo.muhammedshafik.com/project_banner.webp" />
      </Helmet>

      <SmoothScroll>
        <main className="w-full relative overflow-x-hidden bg-zinc-950">
          
          {/* 1. PAGE HEADER */}
          <PageBanner 
            title="Featured"
            highlight="Work."
            description="A showcase of our finest digital creations. See how we've helped ambitious brands redefine their digital presence."
            imageSrc="/project_banner.webp" 
            
            primaryBtn={{
              text: "Get Us Now",
              link: "/contact"
            }}
          />
          
          {/* 2. MAIN GALLERY */}
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
    </>
  );
};

export default Projects;