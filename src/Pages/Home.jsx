import React from "react";
import { Helmet } from "react-helmet-async"; 

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

const Home = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
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

        {/* Social Media / WhatsApp Tags */}
        <meta property="og:title" content="Best Advertising & Digital Agency in Kerala | Zaynlo" />
        <meta property="og:description" content="Transform your brand with Zaynlo. We specialize in branding, web design, and digital marketing." />
        <meta property="og:url" content={site_url} />
        <meta property="og:image" content={`${site_url}/about_banner.webp`} />
        <meta property="og:type" content="website" />

        {/* ✅ NEW: Schema Markup for the Homepage (Organization) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AdvertisingAgency",
              "name": "Zaynlo",
              "url": "${site_url}",
              "logo": "${site_url}/logo.png",
              "image": "${site_url}/about_banner.webp",
              "description": "Best Advertising and Digital Marketing Agency in Kerala.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Aysha Commercial Complex, NH 966",
                "addressLocality": "Perinthalmanna",
                "addressRegion": "Kerala",
                "postalCode": "679322",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.9768,
                "longitude": 76.2224
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919526299568",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.instagram.com/zaynlo", 
                "https://www.linkedin.com/company/zaynlo",
                "https://www.facebook.com/zaynlo"
              ]
            }
          `}
        </script>
      </Helmet>

      <SmoothScroll>
        <main className="w-full relative overflow-x-hidden bg-zinc-950 will-change-transform">
          <Hero />
          <SmallAbout />
          <WhyChooseUs />
          <ServicesStack />
          <SmallProjects />
          <Testimonials />
          <ContactForm />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
};

export default Home;