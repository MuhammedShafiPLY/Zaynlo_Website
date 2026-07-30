import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SmoothScroll from "../../Components/SmoothScroll";
import Footer from "../../Components/Footer";
import SEOTestimonials from "../../Components/Seo/SEOTestimonials";

// Import reusable components
import SEOHero from "../../Components/Seo/SEOHero";
import SEOFeatureGrid from "../../Components/Seo/SEOFeatureGrid";
import SEOProcess from "../../Components/Seo/SEOProcess";
import SEOFAQ from "../../Components/Seo/SEOFAQ";
import GetInTouch from "../../Components/GetInTouch";
import SEOIndustries from "../../Components/Seo/SEOIndustries";
import SEOLocations from "../../Components/Seo/SEOLocations";

const BestWebDevelopmentAgencyInUAE = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: HUMANIZED "UAE" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best Web Development Agency</span>{" "}
        in the UAE
      </>
    ),
    intro: (
      <>
        Your website is your digital flagship store. In a forward-thinking market like the Emirates, an outdated website actively loses you money. Enter Zaynlo, the 
        <Link to="/">
          <strong className="text-[#dbe11f] hover:underline px-1">
             Best Web Development Agency in UAE
          </strong>
        </Link>.
        <br />
        <br />
        From immersive corporate websites to robust, high-volume e-commerce platforms, we engineer digital experiences that are lightning-fast, impeccably secure, and stunningly designed. We do not just write code; we build digital assets designed to dominate the competitive UAE landscape.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Innovative Brands Choose Us as the <span className="text-[#dbe11f]">#1 Agency</span>
      </>
    ),
    desc: (
      <>
        We build websites for the future. As the <Link to="/best-seo-company-in-kerala"><strong className="text-[#dbe11f]">Best Web Development Agency In UAE</strong></Link>, our focus is on flawless user experience, technical SEO, and conversion optimization.
      </>
    ),
    quote: (
      <>
        "A beautiful website that doesn't convert is just expensive digital art. We engineer high-performance platforms that turn visitors into paying customers."
      </>
    ),
    features: [
      {
        title: (
          <>
            Modern <span className="text-[#dbe11f]">Tech Stack</span>
          </>
        ),
        desc: (
          <>
            We utilize the latest in web technologies, including React, Next.js, and headless CMS architecture, to ensure your website is blazingly fast and infinitely scalable.
          </>
        ),
      },
      {
        title: (
          <>
            E-Commerce <span className="text-[#dbe11f]">Excellence</span>
          </>
        ),
        desc: (
          <>
            From custom Shopify builds to complex bespoke e-commerce platforms, we create seamless, secure shopping experiences tailored for the high expectations of UAE shoppers.
          </>
        ),
      },
      {
        title: (
          <>
            Mobile-First <span className="text-[#dbe11f]">Design</span>
          </>
        ),
        desc: (
          <>
            With the majority of UAE consumers browsing on mobile devices, we prioritize responsive, mobile-first design to ensure flawless performance across all screen sizes.
          </>
        ),
      },
      {
        title: (
          <>
            SEO <span className="text-[#dbe11f]">Architecture</span>
          </>
        ),
        desc: (
          <>
            Every line of code is optimized for search engines. From schema markup to Core Web Vitals optimization, we build websites that Google loves to rank.
          </>
        ),
      },
    ],
  };

  // --- 3. PROCESS DATA ---
  const processData = {
    h2: (
      <>
        Our Bulletproof <span className="text-[#dbe11f]">Development Lifecycle</span>
      </>
    ),
    desc: (
      <>
        We follow an agile, transparent development process that guarantees your project is delivered on time, on budget, and beyond expectations.
      </>
    ),
    steps: [
      {
        id: "01",
        title: "Discovery & UX Mapping",
        desc: "We start by understanding your business goals and mapping out the ideal user journey to maximize conversions and user retention.",
      },
      {
        id: "02",
        title: "UI Design & Prototyping",
        desc: "Our design team crafts bespoke, high-fidelity prototypes, allowing you to experience the look and feel of the website before a single line of code is written.",
      },
      {
        id: "03",
        title: "Full-Stack Development",
        desc: "Our senior developers bring the designs to life using modern frameworks, ensuring the frontend is stunning and the backend is completely secure.",
      },
      {
        id: "04",
        title: "QA Testing & Launch",
        desc: "We perform rigorous cross-browser, mobile, and security testing before seamlessly deploying your new digital platform to the world.",
      },
    ],
  };

  // --- 4. FAQ DATA ---
  const faqData = [
    {
      q: "What technologies do you use for web development in the UAE?",
      a: "We are framework agnostic but specialize in modern stacks like React, Next.js, Node.js, and Python. For e-commerce, we are experts in Shopify, WooCommerce, and custom headless commerce solutions.",
    },
    {
      q: "How much does a custom website cost in Dubai?",
      a: "The cost varies significantly based on functionality, integrations, and design complexity. A corporate website might start around 15,000 AED, while complex e-commerce or custom web apps require a detailed scoping session. We provide transparent, itemized proposals.",
    },
    {
      q: "Will my new website be optimized for SEO from day one?",
      a: "Absolutely. Technical SEO is baked into our development process. We ensure rapid load times, mobile responsiveness, clean semantic HTML, and correct schema markups to give you an immediate advantage on Google.",
    },
    {
      q: "Do you offer post-launch maintenance and support?",
      a: "Yes. We offer comprehensive Service Level Agreements (SLAs) for UAE businesses, providing ongoing security updates, content changes, performance monitoring, and rapid bug fixing.",
    },
    {
      q: "How long does it take to develop a corporate website?",
      a: "A standard, high-quality corporate website typically takes 4 to 8 weeks from initial discovery to final launch, depending on how quickly we receive feedback and content approvals.",
    },
  ];

  // ===========================================================================
  // RENDER SECTION
  // ===========================================================================
  return (
    <>
      <Helmet>
        {/* â”€â”€ Primary SEO â”€â”€ */}
        <title>Best Web Development Agency in UAE | Zaynlo</title>
        <meta name="description" content="Build high-performance digital assets with Zaynlo, the best web development agency in UAE. Custom React, Next.js & premium e-commerce solutions in Dubai." />
        <meta name="keywords" content="best web development agency UAE, web development Dubai, website design Abu Dhabi, e-commerce development UAE, React developer Dubai, Zaynlo" />
        <link rel="canonical" href={`${site_url}/best-web-development-agency-in-uae`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* â”€â”€ Open Graph â”€â”€ */}
        <meta property="og:title" content="Best Web Development Agency in UAE | Zaynlo" />
        <meta property="og:description" content="Build high-performance digital assets with Zaynlo, the best web development agency in UAE. Custom React, Next.js & premium e-commerce solutions." />
        <meta property="og:url" content={`${site_url}/best-web-development-agency-in-uae`} />
        <meta property="og:image" content={`${site_url}/uae_seopage.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* â”€â”€ Twitter Card â”€â”€ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Web Development Agency in UAE | Zaynlo" />
        <meta name="twitter:description" content="Build high-performance digital assets with Zaynlo, the best web development agency in UAE." />
        <meta name="twitter:image" content={`${site_url}/uae_seopage.png`} />

        {/* â”€â”€ FAQPage Schema â”€â”€ */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "What technologies do you use for web development in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "We are framework agnostic but specialize in modern stacks like React, Next.js, Node.js, and Python. For e-commerce, we are experts in Shopify, WooCommerce, and custom headless commerce solutions." } },
            { "@type": "Question", "name": "How much does a custom website cost in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "The cost varies significantly based on functionality, integrations, and design complexity. A corporate website might start around 15,000 AED, while complex e-commerce or custom web apps require a detailed scoping session. We provide transparent, itemized proposals." } },
            { "@type": "Question", "name": "Will my new website be optimized for SEO from day one?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Technical SEO is baked into our development process. We ensure rapid load times, mobile responsiveness, clean semantic HTML, and correct schema markups to give you an immediate advantage on Google." } },
            { "@type": "Question", "name": "Do you offer post-launch maintenance and support?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer comprehensive Service Level Agreements (SLAs) for UAE businesses, providing ongoing security updates, content changes, performance monitoring, and rapid bug fixing." } },
            { "@type": "Question", "name": "How long does it take to develop a corporate website?", "acceptedAnswer": { "@type": "Answer", "text": "A standard, high-quality corporate website typically takes 4 to 8 weeks from initial discovery to final launch, depending on how quickly we receive feedback and content approvals." } }
          ]}`}
        </script>

        {/* â”€â”€ WebPage Schema â”€â”€ */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "WebPage", "name": "Best Web Development Agency in UAE | Zaynlo", "description": "Build high-performance digital assets with Zaynlo, the best web development agency in UAE. Custom React, Next.js & premium e-commerce solutions in Dubai.", "url": "${site_url}/best-web-development-agency-in-uae", "inLanguage": "en-AE", "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } } }`}
        </script>

        {/* Schema Markup for Web Design/Development Agency */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - Best Web Development Agency in UAE",
              "image": "${site_url}/logo.png",
              "@id": "${site_url}/#organization",
              "url": "${site_url}",
              "telephone": "+919526299568",
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
                "latitude": 10.9760,
                "longitude": 76.2254
              },
              "sameAs": [
                "https://www.facebook.com/zaynlo",
                "https://www.instagram.com/zaynlo",
                "https://www.linkedin.com/company/zaynlo"
              ] 
            }
          `}
        </script>
      </Helmet>

      <SmoothScroll>
        <SEOHero 
          data={heroData} 
          imageAlt="Best Web Development Agency in UAE - Developer coding React in Dubai"
        />
        
        <SEOFeatureGrid 
          data={whyUsData} 
          imageAlt="High performance e-commerce website on laptop screen"
          imageTitle="Zaynlo - Premium Web Development UAE"
        />

        <SEOProcess data={processData} />
        <SEOIndustries />
        <SEOTestimonials />
        <SEOFAQ data={faqData} />
        <SEOLocations />
        <GetInTouch />
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default BestWebDevelopmentAgencyInUAE;
