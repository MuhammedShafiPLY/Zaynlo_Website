import React from "react";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet

// 1. Layout & Scroll Components
import SmoothScroll from "../Components/SmoothScroll";
import Footer from "../Components/Footer";

// 2. Sections
import Hero from "../Sections/Hero";
import SmallAbout from "../Sections/SmallAbout";
import WhyChooseUs from "../Sections/WhyChooseUs";
import ServicesStack from "../Sections/ServicesStack";
import SmallProjects from "../Sections/SmallProjects";
import Testimonials from "../Sections/Testimonials";
import ContactForm from "../Sections/ContactForm";
// import ContactUs from '../Components/ContactUs'

const Home = () => {

  const site_url = import.meta.env.VITE_SITE_URL;
  return (
    <>
      {/* 2. SEO Configuration for Home Page */}
      <Helmet>
        <title>Best Advertising & Digital Agency in Kerala | Zaynlo</title>
        <meta
          name="description"
          content="Transform your brand with Zaynlo, Kerala's top advertising agency. We specialize in branding, web design, and digital marketing. Get a free quote today!"
        />
        <link rel="canonical" href={site_url} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Optional: Open Graph for Facebook/WhatsApp sharing */}
        <meta
          property="og:title"
          content="Best Advertising & Digital Agency in Kerala | Zaynlo"
        />
        <meta
          property="og:description"
          content="Transform your brand with Zaynlo. We specialize in branding, web design, and digital marketing."
        />
        <meta property="og:url" content={site_url} />
        <meta
          property="og:image"
          content={`${site_url}/about_banner.webp`}
        />
      </Helmet>

      <SmoothScroll>
        {/* OPTIMIZATION APPLIED: 
            1. 'overflow-x-hidden': Prevents horizontal scroll caused by animations.
            2. 'will-change-transform': Forces the browser to use the GPU for scrolling, 
               fixing the lag/stuck feeling on mobile.
        */}
        <main className="w-full relative overflow-x-hidden bg-zinc-950 will-change-transform">
          {/* Hero Section (Optimized: No 3D on Mobile) */}
          <Hero />

          {/* Core Values / About */}
          <SmallAbout />

          {/* Features / Why Us */}
          <WhyChooseUs />

          {/* 3D Services Tilt Cards (Optimized: No Tilt on Mobile) */}
          <ServicesStack />

          {/* Project Carousel */}
          <SmallProjects />

          {/* Testimonials */}
          <Testimonials />

          {/* Contact Form */}
          <ContactForm />

          {/* <ContactUs /> */}

          {/* Footer */}
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
};

export default Home;
