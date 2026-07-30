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
        {/* ── Primary SEO ── */}
        <title>Our Portfolio & Projects | Zaynlo Kerala Agency</title>
        <meta
          name="description"
          content="Explore Zaynlo's portfolio of web design, branding & digital marketing projects in Kerala. See real case studies of businesses we've helped grow online."
        />
        <meta
          name="keywords"
          content="Zaynlo portfolio, web design projects Kerala, branding case studies Kerala, digital marketing portfolio Kerala, creative agency work Perinthalmanna"
        />
        <link
          rel="canonical"
          href={`${site_url}/projects`}
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* ── Open Graph (Facebook / WhatsApp) ── */}
        <meta property="og:title" content="Our Portfolio & Projects | Zaynlo Kerala Agency" />
        <meta property="og:description" content="Browse Zaynlo's portfolio: web design, branding & digital marketing case studies from Kerala. See how we help businesses grow online." />
        <meta property="og:url" content={`${site_url}/projects`} />
        <meta property="og:image" content={`${site_url}/project_banner.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter / X Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Portfolio & Projects | Zaynlo Kerala Agency" />
        <meta name="twitter:description" content="Web design, branding & digital marketing case studies from Zaynlo — Kerala's creative agency." />
        <meta name="twitter:image" content={`${site_url}/project_banner.webp`} />
      </Helmet>

      <SmoothScroll>
        <main className="w-full relative overflow-x-hidden bg-zinc-950">
          {/* 1. PAGE HEADER */}
          <PageBanner
            title="Featured"
            highlight="Work."
            keyword="Zaynlo portfolio – web design, branding & digital marketing Kerala"
            alt="Zaynlo creative portfolio – web design, branding and digital marketing projects in Kerala"
            description="A showcase of our finest digital creations. See how we've helped ambitious Kerala brands redefine their digital presence through strategy and design."
            imageSrc="/project_banner.webp"
            primaryBtn={{
              text: "Start a Project",
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
