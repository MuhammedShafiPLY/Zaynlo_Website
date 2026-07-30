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
        {/* ── Primary SEO ── */}
        <title>Zaynlo | Digital Marketing Agency in Kerala</title>
        <meta
          name="description"
          content="Zaynlo is Kerala's leading advertising & digital marketing agency. We offer expert branding, web design, SEO, and social media marketing. Get a free quote!"
        />
        <meta
          name="keywords"
          content="digital marketing agency Kerala, advertising agency Kerala, branding agency Kerala, web design Kerala, SEO services Kerala, social media marketing Kerala, Zaynlo, digital agency Perinthalmanna"
        />
        <link rel="canonical" href={site_url} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* ── Open Graph (Facebook / WhatsApp) ── */}
        <meta property="og:title" content="Zaynlo | Digital Marketing Agency in Kerala" />
        <meta property="og:description" content="Kerala's top advertising & digital agency. Expert branding, web design, SEO & social media marketing solutions tailored for your business." />
        <meta property="og:url" content={site_url} />
        <meta property="og:image" content={`${site_url}/about_banner.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter / X Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zaynlo | Digital Marketing Agency in Kerala" />
        <meta name="twitter:description" content="Kerala's top advertising & digital agency. Expert branding, web design, SEO & social media marketing." />
        <meta name="twitter:image" content={`${site_url}/about_banner.webp`} />

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