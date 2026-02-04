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
        <title>About Us - Top Creative Agency in Kerala | Zaynlo</title>
        <meta
          name="description"
          content="Meet the experts behind Zaynlo. We are a passionate team of designers and developers dedicated to building premium brands in Kerala. Learn our story now."
        />
        <link rel="canonical" href={`${site_url}/about`} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content="About Zaynlo - Creative Agency in Kerala"
        />
        <meta
          property="og:description"
          content="Meet the team transforming brands with premium design and digital strategies."
        />
        <meta
          property="og:url"
          content={`${site_url}/about`}
        />
        <meta
          property="og:image"
          content={`${site_url}/about_banner.webp`}
        />
      </Helmet>

      <SmoothScroll>
        <main className="w-full relative overflow-x-hidden bg-zinc-950">
          {/* 1. HERO BANNER */}
          <PageBanner
            title="About"
            highlight="Us."
            description="We craft premium digital products, brand experiences, and growth strategies for ambitious teams."
            imageSrc="/about_banner.webp"
            primaryBtn={{
              text: "Get Us Now",
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
