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

  const site_url = import.meta.env.VITE_SITE_URL;
  return (
    <>
      {/* 2. SEO Configuration for Projects Page */}
      <Helmet>
        <title>Best Digital Marketing Agency In Kerala | Zaynlo</title>
        <meta
          name="description"
          content="Browse our successful case studies. See how we helped Kerala businesses grow through stunning design and effective marketing campaigns. View our work."
        />
        <link
          rel="canonical"
          href={`${site_url}/projects`}
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content="Best Digital Marketing Agency In Kerala | Zaynlo"
        />
        <meta
          property="og:description"
          content="Browse our successful case studies and see how we help businesses grow."
        />
        <meta
          property="og:url"
          content={`${site_url}/projects`}
        />
        {/* Ensures your banner image shows up when shared */}
        <meta
          property="og:image"
          content={`${site_url}/project_banner.webp`}
        />
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
              link: "/contact",
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
