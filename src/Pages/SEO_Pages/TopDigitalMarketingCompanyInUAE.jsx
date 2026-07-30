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

const TopDigitalMarketingCompanyInUAE = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: HUMANIZED "UAE" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Top Digital Marketing Company</span>{" "}
        in the UAE
      </>
    ),
    intro: (
      <>
        Building a global brand from the Emirates? You need an agency that thinks as big as you do. Zaynlo is the 
        <Link to="/">
          <strong className="text-[#dbe11f] hover:underline px-1">
             Top Digital Marketing Company in UAE
          </strong>
        </Link>, trusted by ambitious enterprises to drive unstoppable growth.
        <br />
        <br />
        From the soaring high-rises of Dubai to the bustling business hubs of Abu Dhabi, the UAE is a market of limitless potential. At Zaynlo, we provide full-stack digital marketing solutionsâ€”from high-ticket lead generation to premium brand positioning. We do not just run campaigns; we build market leaders.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Elite Brands Choose Us as the <span className="text-[#dbe11f]">Top Company</span>
      </>
    ),
    desc: (
      <>
        We bypass vanity metrics to focus on what actually matters: scalable revenue. As the <Link to="/best-seo-company-in-kerala"><strong className="text-[#dbe11f]">Top Digital Marketing Company In UAE</strong></Link>, our mandate is your absolute market dominance.
      </>
    ),
    quote: (
      <>
        "In the UAE, second place is forgotten. We engineer digital marketing ecosystems that place your brand firmly at the forefront of your industry."
      </>
    ),
    features: [
      {
        title: (
          <>
            Data-Driven <span className="text-[#dbe11f]">Decisions</span>
          </>
        ),
        desc: (
          <>
            Every campaign we launch in Dubai or Sharjah is backed by hard data. We leverage advanced analytics to predict consumer behavior and maximize conversion rates.
          </>
        ),
      },
      {
        title: (
          <>
            Enterprise <span className="text-[#dbe11f]">Scalability</span>
          </>
        ),
        desc: (
          <>
            Whether you are a fast-growing startup or an established enterprise in Abu Dhabi, our digital architectures are built to scale seamlessly alongside your revenue.
          </>
        ),
      },
      {
        title: (
          <>
            Creative <span className="text-[#dbe11f]">Excellence</span>
          </>
        ),
        desc: (
          <>
            The UAE audience expects luxury and premium quality. Our in-house design and copywriting teams produce breathtaking creatives that captivate and convert.
          </>
        ),
      },
      {
        title: (
          <>
            Full-Funnel <span className="text-[#dbe11f]">Mastery</span>
          </>
        ),
        desc: (
          <>
            We do not just generate clicks. We optimize every touchpoint of your customer journeyâ€”from the first Google search to the final purchase on your website.
          </>
        ),
      },
    ],
  };

  // --- 3. PROCESS DATA ---
  const processData = {
    h2: (
      <>
        The Framework for <span className="text-[#dbe11f]">UAE Dominance</span>
      </>
    ),
    desc: (
      <>
        Our specialized 4-step framework guarantees that your marketing budget translates into predictable, scalable revenue across the Emirates.
      </>
    ),
    steps: [
      {
        id: "01",
        title: "Deep Market Intelligence",
        desc: "We conduct exhaustive research into the UAE market, identifying your ideal customer profiles and mapping out their digital footprints.",
      },
      {
        id: "02",
        title: "Precision Targeting",
        desc: "Using advanced targeting algorithms across Google, Meta, and LinkedIn, we ensure your message reaches decision-makers and high-intent buyers.",
      },
      {
        id: "03",
        title: "Conversion Optimization",
        desc: "We rigorously A/B test landing pages, ad copies, and user experiences to ensure maximum conversion rates for the UAE audience.",
      },
      {
        id: "04",
        title: "Continuous Scaling",
        desc: "Once a campaign hits profitability, we rapidly scale the budget while maintaining a low CPA, driving exponential growth for your company.",
      },
    ],
  };

  // --- 4. FAQ DATA ---
  const faqData = [
    {
      q: "What differentiates Zaynlo from other top digital marketing companies in the UAE?",
      a: "Unlike traditional agencies that focus on impressions, Zaynlo focuses exclusively on revenue architecture. We align our marketing strategies directly with your financial goals, ensuring every campaign is an investment that yields measurable returns.",
    },
    {
      q: "Can Zaynlo help my Dubai-based company expand internationally?",
      a: "Yes. While we have deep expertise in the UAE market, our digital strategies are globally scalable. We have successfully helped Middle Eastern brands expand their digital footprint into Europe, North America, and Asia.",
    },
    {
      q: "Do you offer tailored digital marketing packages for enterprises in the UAE?",
      a: "Absolutely. We do not use cookie-cutter solutions. We provide custom, comprehensive digital marketing retainers for enterprises that include SEO, Paid Media, Conversion Rate Optimization, and advanced analytics.",
    },
    {
      q: "What industries do you primarily serve in the UAE?",
      a: "We have extensive experience driving digital growth in highly competitive UAE sectors, including Luxury Real Estate, Healthcare, E-Commerce, Financial Services, and High-End Hospitality.",
    },
    {
      q: "How does Zaynlo ensure high-quality lead generation?",
      a: "We implement rigorous lead qualification funnels. By using hyper-targeted ad copy, strategic landing pages, and CRM integrations, we ensure that the leads generated are not just numerous, but highly qualified and ready to convert.",
    },
  ];

  // ===========================================================================
  // RENDER SECTION
  // ===========================================================================
  return (
    <>
      <Helmet>
        {/* â”€â”€ Primary SEO â”€â”€ */}
        <title>Top Digital Marketing Company in UAE | Zaynlo</title>
        <meta name="description" content="Scale your enterprise with Zaynlo, the top digital marketing company in UAE. We engineer high-performance SEO, Ads, and growth strategies for Dubai & Abu Dhabi." />
        <meta name="keywords" content="top digital marketing company UAE, enterprise marketing Dubai, digital agency Abu Dhabi, performance marketing UAE, Zaynlo" />
        <link rel="canonical" href={`${site_url}/top-digital-marketing-company-in-uae`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* â”€â”€ Open Graph â”€â”€ */}
        <meta property="og:title" content="Top Digital Marketing Company in UAE | Zaynlo" />
        <meta property="og:description" content="Scale your enterprise with Zaynlo, the top digital marketing company in UAE. High-performance SEO and growth strategies." />
        <meta property="og:url" content={`${site_url}/top-digital-marketing-company-in-uae`} />
        <meta property="og:image" content={`${site_url}/uae_seopage.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* â”€â”€ Twitter Card â”€â”€ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Digital Marketing Company in UAE | Zaynlo" />
        <meta name="twitter:description" content="Scale your enterprise with Zaynlo, the top digital marketing company in UAE." />
        <meta name="twitter:image" content={`${site_url}/uae_seopage.png`} />

        {/* â”€â”€ FAQPage Schema â”€â”€ */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "What differentiates Zaynlo from other top digital marketing companies in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "Unlike traditional agencies that focus on impressions, Zaynlo focuses exclusively on revenue architecture. We align our marketing strategies directly with your financial goals, ensuring every campaign is an investment that yields measurable returns." } },
            { "@type": "Question", "name": "Can Zaynlo help my Dubai-based company expand internationally?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. While we have deep expertise in the UAE market, our digital strategies are globally scalable. We have successfully helped Middle Eastern brands expand their digital footprint into Europe, North America, and Asia." } },
            { "@type": "Question", "name": "Do you offer tailored digital marketing packages for enterprises in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We do not use cookie-cutter solutions. We provide custom, comprehensive digital marketing retainers for enterprises that include SEO, Paid Media, Conversion Rate Optimization, and advanced analytics." } },
            { "@type": "Question", "name": "What industries do you primarily serve in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "We have extensive experience driving digital growth in highly competitive UAE sectors, including Luxury Real Estate, Healthcare, E-Commerce, Financial Services, and High-End Hospitality." } },
            { "@type": "Question", "name": "How does Zaynlo ensure high-quality lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "We implement rigorous lead qualification funnels. By using hyper-targeted ad copy, strategic landing pages, and CRM integrations, we ensure that the leads generated are not just numerous, but highly qualified and ready to convert." } }
          ]}`}
        </script>

        {/* â”€â”€ WebPage Schema â”€â”€ */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "WebPage", "name": "Top Digital Marketing Company in UAE | Zaynlo", "description": "Scale your enterprise with Zaynlo, the top digital marketing company in UAE. We engineer high-performance SEO, Ads, and growth strategies for Dubai & Abu Dhabi.", "url": "${site_url}/top-digital-marketing-company-in-uae", "inLanguage": "en-AE", "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } } }`}
        </script>

        {/* Schema Markup for Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - Top Digital Marketing Company in UAE",
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
          imageAlt="Top Digital Marketing Company in UAE - Zaynlo Dubai office"
        />
        
        <SEOFeatureGrid 
          data={whyUsData} 
          imageAlt="Dubai digital marketing experts analyzing data for enterprise scaling"
          imageTitle="Zaynlo - Top Digital Marketing Company UAE"
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

export default TopDigitalMarketingCompanyInUAE;
