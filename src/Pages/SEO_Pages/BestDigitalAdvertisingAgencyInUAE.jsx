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

const BestDigitalAdvertisingAgencyInUAE = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: HUMANIZED "UAE" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best Digital Advertising Agency</span>{" "}
        in the UAE
      </>
    ),
    intro: (
      <>
        Are your ad campaigns burning cash without delivering high-quality leads? It is time to switch to Zaynlo, the  
        <Link to="/">
          <strong className="text-[#dbe11f] hover:underline px-1">
             Best Digital Advertising Agency in UAE
          </strong>
        </Link>.
        <br />
        <br />
        In a high-stakes market like Dubai and Abu Dhabi, generic ads simply do not cut it. You need hyper-targeted, conversion-optimized campaigns that capture attention and drive sales. Whether it is Google Ads, Meta (Facebook & Instagram) advertising, or TikTok performance marketing, Zaynlo ensures your ad spend turns into measurable profit.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why We Are The <span className="text-[#dbe11f]">#1 Advertising Agency</span>
      </>
    ),
    desc: (
      <>
        We don't just generate impressions; we generate revenue. As the <Link to="/best-seo-company-in-kerala"><strong className="text-[#dbe11f]">Best Digital Advertising Agency In UAE</strong></Link>, our sole objective is to lower your acquisition costs while maximizing your Return on Ad Spend (ROAS).
      </>
    ),
    quote: (
      <>
        "In the fast-paced UAE market, every click costs money. We ensure that every dirham spent brings you closer to your financial goals."
      </>
    ),
    features: [
      {
        title: (
          <>
            Precision <span className="text-[#dbe11f]">Targeting</span>
          </>
        ),
        desc: (
          <>
            We bypass broad audiences to target high-intent buyers in the UAE. By leveraging advanced data modeling, we show your ads exclusively to people ready to purchase.
          </>
        ),
      },
      {
        title: (
          <>
            High-Converting <span className="text-[#dbe11f]">Creatives</span>
          </>
        ),
        desc: (
          <>
            Our design and video production teams craft visually stunning, localized ad creatives that stop the scroll and resonate deeply with the Middle Eastern audience.
          </>
        ),
      },
      {
        title: (
          <>
            Continuous <span className="text-[#dbe11f]">A/B Testing</span>
          </>
        ),
        desc: (
          <>
            We never set and forget. We continuously test multiple ad variations, headlines, and landing pages to ensure your campaigns are always performing at their peak.
          </>
        ),
      },
      {
        title: (
          <>
            Multi-Platform <span className="text-[#dbe11f]">Expertise</span>
          </>
        ),
        desc: (
          <>
            From intent-driven Google Search campaigns to highly engaging TikTok and Snapchat ads, we dominate the advertising channels most relevant to the UAE demographic.
          </>
        ),
      },
    ],
  };

  // --- 3. PROCESS DATA ---
  const processData = {
    h2: (
      <>
        Our Proven <span className="text-[#dbe11f]">Ad Campaign Framework</span>
      </>
    ),
    desc: (
      <>
        Our systematic approach to digital advertising ensures minimal wasted ad spend and maximum lead generation in Dubai and the wider UAE.
      </>
    ),
    steps: [
      {
        id: "01",
        title: "Audience Profiling",
        desc: "We dive deep into demographics, creating hyper-specific profiles of your ideal UAE customersâ€”from high-net-worth investors to everyday consumers.",
      },
      {
        id: "02",
        title: "Creative & Copy Development",
        desc: "We write persuasive ad copy in both English and Arabic, paired with thumb-stopping visuals designed to drive immediate action.",
      },
      {
        id: "03",
        title: "Strategic Bidding & Launch",
        desc: "We launch your campaigns using advanced bidding strategies on Google and Meta, ensuring your brand appears exactly when and where it needs to.",
      },
      {
        id: "04",
        title: "Optimization & Scaling",
        desc: "We ruthlessly cut underperforming ads and scale the winners, aggressively lowering your Cost Per Lead (CPL) while boosting your lead volume.",
      },
    ],
  };

  // --- 4. FAQ DATA ---
  const faqData = [
    {
      q: "Which digital advertising platforms are most effective in the UAE?",
      a: "The most effective platforms depend on your business. Google Ads is unparalleled for high-intent search traffic, while Meta (Instagram/Facebook) and TikTok are incredibly powerful for brand awareness and B2C product sales in the UAE.",
    },
    {
      q: "How much should my business spend on digital advertising in Dubai?",
      a: "There is no one-size-fits-all budget. However, we recommend a starting budget that allows for sufficient data collection and A/B testingâ€”usually starting from a few thousand dirhams per month, scaling up as campaigns become profitable.",
    },
    {
      q: "Do you create the ad banners and videos as well?",
      a: "Yes. Zaynlo is a full-service digital advertising agency. Our in-house creative team designs all ad graphics, writes the copy, and produces video content tailored for the UAE audience.",
    },
    {
      q: "How long does it take to see a positive ROI from digital ads?",
      a: "Unlike SEO, paid advertising can generate leads immediately upon launch. While the first few weeks involve heavy optimization, most clients start seeing a solid, predictable ROI within the first 30 days of the campaign.",
    },
    {
      q: "Can you help lower our current Cost Per Acquisition (CPA)?",
      a: "Absolutely. One of our specialties is taking over bloated, inefficient ad accounts and auditing them to eliminate wasted spend. We consistently lower CPA for our clients in the UAE by refining targeting and improving ad relevance.",
    },
  ];

  // ===========================================================================
  // RENDER SECTION
  // ===========================================================================
  return (
    <>
      <Helmet>
        {/* â”€â”€ Primary SEO â”€â”€ */}
        <title>Best Digital Advertising Agency in UAE | Zaynlo</title>
        <meta name="description" content="Generate high-quality leads with Zaynlo, the best digital advertising agency in UAE. Expert Google Ads, Meta Ads & TikTok marketing for Dubai & Abu Dhabi." />
        <meta name="keywords" content="best digital advertising agency UAE, Google Ads agency Dubai, Meta Ads UAE, PPC agency Dubai, TikTok ads UAE, Zaynlo" />
        <link rel="canonical" href={`${site_url}/best-digital-advertising-agency-in-uae`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* â”€â”€ Open Graph â”€â”€ */}
        <meta property="og:title" content="Best Digital Advertising Agency in UAE | Zaynlo" />
        <meta property="og:description" content="Generate high-quality leads with Zaynlo, the best digital advertising agency in UAE. Expert Google Ads and Meta Ads for Dubai brands." />
        <meta property="og:url" content={`${site_url}/best-digital-advertising-agency-in-uae`} />
        <meta property="og:image" content={`${site_url}/uae_seopage.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* â”€â”€ Twitter Card â”€â”€ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Digital Advertising Agency in UAE | Zaynlo" />
        <meta name="twitter:description" content="Generate high-quality leads with Zaynlo, the best digital advertising agency in UAE." />
        <meta name="twitter:image" content={`${site_url}/uae_seopage.png`} />

        {/* â”€â”€ FAQPage Schema â”€â”€ */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "Which digital advertising platforms are most effective in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "The most effective platforms depend on your business. Google Ads is unparalleled for high-intent search traffic, while Meta (Instagram/Facebook) and TikTok are incredibly powerful for brand awareness and B2C product sales in the UAE." } },
            { "@type": "Question", "name": "How much should my business spend on digital advertising in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "There is no one-size-fits-all budget. However, we recommend a starting budget that allows for sufficient data collection and A/B testingâ€”usually starting from a few thousand dirhams per month, scaling up as campaigns become profitable." } },
            { "@type": "Question", "name": "Do you create the ad banners and videos as well?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Zaynlo is a full-service digital advertising agency. Our in-house creative team designs all ad graphics, writes the copy, and produces video content tailored for the UAE audience." } },
            { "@type": "Question", "name": "How long does it take to see a positive ROI from digital ads?", "acceptedAnswer": { "@type": "Answer", "text": "Unlike SEO, paid advertising can generate leads immediately upon launch. While the first few weeks involve heavy optimization, most clients start seeing a solid, predictable ROI within the first 30 days of the campaign." } },
            { "@type": "Question", "name": "Can you help lower our current Cost Per Acquisition (CPA)?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. One of our specialties is taking over bloated, inefficient ad accounts and auditing them to eliminate wasted spend. We consistently lower CPA for our clients in the UAE by refining targeting and improving ad relevance." } }
          ]}`}
        </script>

        {/* â”€â”€ WebPage Schema â”€â”€ */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "WebPage", "name": "Best Digital Advertising Agency in UAE | Zaynlo", "description": "Generate high-quality leads with Zaynlo, the best digital advertising agency in UAE. Expert Google Ads, Meta Ads & TikTok marketing for Dubai & Abu Dhabi.", "url": "${site_url}/best-digital-advertising-agency-in-uae", "inLanguage": "en-AE", "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } } }`}
        </script>

        {/* Schema Markup for Advertising Agency */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AdvertisingAgency", 
              "name": "Zaynlo - Best Digital Advertising Agency in UAE",
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
          imageAlt="Best Digital Advertising Agency in UAE - Google Ads and Meta Ads dashboard"
        />
        
        <SEOFeatureGrid 
          data={whyUsData} 
          imageAlt="Digital advertising strategy meeting in Dubai"
          imageTitle="Zaynlo - Best Digital Advertising Agency UAE"
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

export default BestDigitalAdvertisingAgencyInUAE;
