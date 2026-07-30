import React from "react";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet

// 1. Layout & Scroll Components
import SmoothScroll from "../Components/SmoothScroll";
import Footer from "../Components/Footer";
import GetInTouch from "../Components/GetInTouch";
import PageBanner from "../Components/PageBanner";
// 2. Sections
import ClientMarquee from "../Sections/ClientMarque";
import SmallAbout from "../Sections/SmallAbout";
import WhyChooseUs from "../Sections/WhyChooseUs";
import MissionVision from "../Sections/MIssionVision";
import Testimonials from "../Sections/Testimonials";

const About = () => {

  const site_url = import.meta.env.VITE_SITE_URL;

  return (
    <>
      {/* 2. SEO Configuration for About Page */}
      <Helmet>
        {/* ── Primary SEO ── */}
        <title>About Zaynlo | Creative & Advertising Agency Kerala</title>
        <meta
          name="description"
          content="Learn the story of Zaynlo, a leading advertising agency in Kerala. Meet our expert team of branding, web design, and digital marketing strategists."
        />
        <meta
          name="keywords"
          content="about Zaynlo, creative agency Kerala, advertising agency Kerala, branding experts Kerala, digital marketing team Perinthalmanna"
        />
        <link rel="canonical" href={`${site_url}/about`} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* ── Open Graph (Facebook / WhatsApp) ── */}
        <meta property="og:title" content="About Zaynlo | Creative & Advertising Agency Kerala" />
        <meta property="og:description" content="Meet the Zaynlo team — Kerala's creative branding, web design & digital marketing agency. Discover our story, mission, and vision." />
        <meta property="og:url" content={`${site_url}/about`} />
        <meta property="og:image" content={`${site_url}/about_banner.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter / X Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zaynlo | Creative & Advertising Agency Kerala" />
        <meta name="twitter:description" content="Meet the Zaynlo team — Kerala's creative branding, web design & digital marketing agency." />
        <meta name="twitter:image" content={`${site_url}/about_banner.webp`} />
      </Helmet>

      <SmoothScroll>
        <main className="w-full relative overflow-x-hidden bg-zinc-950">
          {/* 1. HERO BANNER */}
          <PageBanner
            title="About"
            highlight="Us."
            keyword="About Zaynlo – Creative advertising agency in Kerala"
            alt="About Zaynlo – Leading creative, branding and advertising agency in Kerala"
            description="We craft premium brand experiences, digital products, and growth strategies for ambitious businesses across Kerala."
            imageSrc="/about_banner.webp"
            primaryBtn={{
              text: "Get In Touch",
              link: "/contact",
            }}
            secondaryBtn={{
              text: "Our Work",
              link: "/projects",
            }}
          />

          {/* 2. CLIENTS MARQUEE */}
          <ClientMarquee />

          {/* 3. INTRO / BENTO GRID */}
          <SmallAbout />

          {/* 4. WHY CHOOSE US (Features) */}
          <WhyChooseUs />

          {/* 5. MISSION & VISION (Core Values) */}
          <MissionVision />

          {/* 6. TESTIMONIALS */}
          <Testimonials />

          {/* 7. CTA SECTION */}
          <GetInTouch />

          {/* 8. FOOTER */}
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
};

export default About;
