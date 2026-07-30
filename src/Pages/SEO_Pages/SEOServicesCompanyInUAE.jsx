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

const SEOServicesCompanyInUAE = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: HUMANIZED "UAE" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The Premier <span className="text-[#dbe11f]">SEO Services Company</span>{" "}
        in the UAE
      </>
    ),
    intro: (
      <>
        If you are not on Page 1 of Google in Dubai or Abu Dhabi, your competitors are stealing your revenue. It is time to change the game with Zaynlo, the 
        <Link to="/">
          <strong className="text-[#dbe11f] hover:underline px-1">
             Premier SEO Services Company in UAE
          </strong>
        </Link>.
        <br />
        <br />
        Organic search is the highest-ROI marketing channel in existence. We do not use shady tactics or outdated tricks. We deploy elite technical SEO, authoritative link building, and highly targeted content strategies to ensure your UAE business dominates the search results and generates high-intent leads around the clock.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why We Are The Most Trusted <span className="text-[#dbe11f]">SEO Agency</span>
      </>
    ),
    desc: (
      <>
        SEO in the UAE is fiercely competitive. As the <Link to="/best-seo-company-in-kerala"><strong className="text-[#dbe11f]">Best SEO Services Company In UAE</strong></Link>, we bring technical mastery and data-backed certainty to your organic growth strategy.
      </>
    ),
    quote: (
      <>
        "Stop paying for traffic when you can own it. We build sustainable, long-term SEO assets that drive highly qualified buyers to your website, day after day."
      </>
    ),
    features: [
      {
        title: (
          <>
            Technical <span className="text-[#dbe11f]">Mastery</span>
          </>
        ),
        desc: (
          <>
            We fix the deep technical issues holding your site back. From Core Web Vitals optimization to complex schema markups, we ensure Google understands and prefers your website.
          </>
        ),
      },
      {
        title: (
          <>
            Local UAE <span className="text-[#dbe11f]">Dominance</span>
          </>
        ),
        desc: (
          <>
            We dominate Local SEO. Whether you need to appear in the Google Maps '3-Pack' for searches in Dubai Marina or Abu Dhabi CBD, we put your business on the map.
          </>
        ),
      },
      {
        title: (
          <>
            Content <span className="text-[#dbe11f]">Authority</span>
          </>
        ),
        desc: (
          <>
            Our in-house writers craft authoritative, SEO-optimized content that answers exactly what your UAE customers are searching for, establishing you as the industry leader.
          </>
        ),
      },
      {
        title: (
          <>
            White-Hat <span className="text-[#dbe11f]">Link Building</span>
          </>
        ),
        desc: (
          <>
            We acquire high-quality, relevant backlinks from authoritative Middle Eastern and global publications, dramatically increasing your domain's trust and ranking power.
          </>
        ),
      },
    ],
  };

  // --- 3. PROCESS DATA ---
  const processData = {
    h2: (
      <>
        Our Proven <span className="text-[#dbe11f]">SEO Methodology</span>
      </>
    ),
    desc: (
      <>
        Our methodical approach to SEO ensures steady, algorithm-proof growth for your business in the competitive UAE market.
      </>
    ),
    steps: [
      {
        id: "01",
        title: "Comprehensive SEO Audit",
        desc: "We start with a deep-dive technical and content audit of your website, identifying critical errors and immediate opportunities for quick wins.",
      },
      {
        id: "02",
        title: "Keyword & Competitor Strategy",
        desc: "We map out the exact search terms your UAE customers use and analyze your top competitors to engineer a superior ranking strategy.",
      },
      {
        id: "03",
        title: "On-Page & Technical Fixes",
        desc: "We optimize your meta tags, headings, site speed, and internal linking structure, ensuring your foundation is perfectly aligned with Google's guidelines.",
      },
      {
        id: "04",
        title: "Ongoing Content & Outreach",
        desc: "We continuously produce optimized content and execute strategic outreach campaigns to build authority, driving your rankings to the very top.",
      },
    ],
  };

  // --- 4. FAQ DATA ---
  const faqData = [
    {
      q: "How long does it take to see results from SEO in the UAE?",
      a: "SEO is a long-term strategy. In the highly competitive UAE market, you will typically see noticeable improvements in rankings within 3 to 6 months, with the most significant ROI compounding from month 6 onwards.",
    },
    {
      q: "Why should I invest in SEO when I can just run Google Ads?",
      a: "While Google Ads provides immediate traffic, you stop getting leads the moment you stop paying. SEO builds a sustainable digital asset. Once you rank organically, that traffic is 'free' and highly trusted by consumers.",
    },
    {
      q: "Do you guarantee #1 rankings on Google UAE?",
      a: "No reputable agency can guarantee a specific rank due to Google's changing algorithms. However, we guarantee the implementation of world-class, proven SEO strategies that consistently drive our clients to the top of the SERPs.",
    },
    {
      q: "What is Local SEO and do I need it in Dubai?",
      a: "Local SEO optimizes your online presence for location-based searches (e.g., 'best dentist near me' or 'real estate agent Dubai'). If you have a physical location or serve a specific geographic area in the UAE, Local SEO is absolutely critical.",
    },
    {
      q: "Does Zaynlo provide transparent reporting on SEO progress?",
      a: "Yes. Every month, you receive a detailed, easy-to-understand report outlining your keyword ranking changes, organic traffic growth, technical health improvements, and a summary of the work we completed.",
    },
  ];

  // ===========================================================================
  // RENDER SECTION
  // ===========================================================================
  return (
    <>
      <Helmet>
        {/* â”€â”€ Primary SEO â”€â”€ */}
        <title>SEO Services Company in UAE | Zaynlo</title>
        <meta name="description" content="Dominate Google rankings with Zaynlo, the premier SEO services company in UAE. Expert technical SEO, Local Maps & organic growth for Dubai & Abu Dhabi brands." />
        <meta name="keywords" content="SEO services company UAE, SEO agency Dubai, local SEO Abu Dhabi, organic search UAE, Google ranking Dubai, SEO expert UAE, Zaynlo" />
        <link rel="canonical" href={`${site_url}/seo-services-company-in-uae`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* â”€â”€ Open Graph â”€â”€ */}
        <meta property="og:title" content="SEO Services Company in UAE | Zaynlo" />
        <meta property="og:description" content="Dominate Google rankings with Zaynlo, the premier SEO services company in UAE. Expert technical SEO & organic growth." />
        <meta property="og:url" content={`${site_url}/seo-services-company-in-uae`} />
        <meta property="og:image" content={`${site_url}/uae_seopage.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* â”€â”€ Twitter Card â”€â”€ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Services Company in UAE | Zaynlo" />
        <meta name="twitter:description" content="Dominate Google rankings with Zaynlo, the premier SEO services company in UAE." />
        <meta name="twitter:image" content={`${site_url}/uae_seopage.png`} />

        {/* â”€â”€ FAQPage Schema â”€â”€ */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "How long does it take to see results from SEO in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "SEO is a long-term strategy. In the highly competitive UAE market, you will typically see noticeable improvements in rankings within 3 to 6 months, with the most significant ROI compounding from month 6 onwards." } },
            { "@type": "Question", "name": "Why should I invest in SEO when I can just run Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "While Google Ads provides immediate traffic, you stop getting leads the moment you stop paying. SEO builds a sustainable digital asset. Once you rank organically, that traffic is 'free' and highly trusted by consumers." } },
            { "@type": "Question", "name": "Do you guarantee #1 rankings on Google UAE?", "acceptedAnswer": { "@type": "Answer", "text": "No reputable agency can guarantee a specific rank due to Google's changing algorithms. However, we guarantee the implementation of world-class, proven SEO strategies that consistently drive our clients to the top of the SERPs." } },
            { "@type": "Question", "name": "What is Local SEO and do I need it in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Local SEO optimizes your online presence for location-based searches (e.g., 'best dentist near me' or 'real estate agent Dubai'). If you have a physical location or serve a specific geographic area in the UAE, Local SEO is absolutely critical." } },
            { "@type": "Question", "name": "Does Zaynlo provide transparent reporting on SEO progress?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every month, you receive a detailed, easy-to-understand report outlining your keyword ranking changes, organic traffic growth, technical health improvements, and a summary of the work we completed." } }
          ]}`}
        </script>

        {/* â”€â”€ WebPage Schema â”€â”€ */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "WebPage", "name": "SEO Services Company in UAE | Zaynlo", "description": "Dominate Google rankings with Zaynlo, the premier SEO services company in UAE. Expert technical SEO, Local Maps & organic growth for Dubai & Abu Dhabi brands.", "url": "${site_url}/seo-services-company-in-uae", "inLanguage": "en-AE", "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } } }`}
        </script>

        {/* Schema Markup for SEO Agency */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - SEO Services Company in UAE",
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
          imageAlt="SEO Services Company in UAE - Google Analytics traffic growth chart"
        />
        
        <SEOFeatureGrid 
          data={whyUsData} 
          imageAlt="SEO experts optimizing website code for Dubai client"
          imageTitle="Zaynlo - Premier SEO Services UAE"
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

export default SEOServicesCompanyInUAE;
