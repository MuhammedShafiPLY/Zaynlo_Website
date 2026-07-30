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

  const site_url = import.meta.env.VITE_SITE_URL;
  return (
    <>
      {/* 2. SEO Configuration for Services Page */}
      <Helmet>
        {/* ── Primary SEO ── */}
        <title>Digital Marketing Services in Kerala | Zaynlo</title>
        <meta
          name="description"
          content="Zaynlo offers expert digital marketing services in Kerala: SEO, web design, branding, Google Ads & social media marketing. Get results-driven solutions today."
        />
        <meta
          name="keywords"
          content="digital marketing services Kerala, SEO services Kerala, web design Kerala, branding agency Kerala, Google Ads agency Kerala, social media marketing Kerala, e-commerce development Kerala"
        />
        <link
          rel="canonical"
          href={`${site_url}/services`}
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* ── Open Graph (Facebook / WhatsApp) ── */}
        <meta property="og:title" content="Digital Marketing Services in Kerala | Zaynlo" />
        <meta property="og:description" content="SEO, web design, branding, Google Ads & social media marketing services in Kerala. Partner with Zaynlo for measurable digital growth." />
        <meta property="og:url" content={`${site_url}/services`} />
        <meta property="og:image" content={`${site_url}/service_banner.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter / X Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Services in Kerala | Zaynlo" />
        <meta name="twitter:description" content="SEO, web design, branding, Google Ads & social media marketing in Kerala by Zaynlo." />
        <meta name="twitter:image" content={`${site_url}/service_banner.webp`} />
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
              link: "/contact",
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
