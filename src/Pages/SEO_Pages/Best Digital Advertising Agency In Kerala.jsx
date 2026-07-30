import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SmoothScroll from "../../Components/SmoothScroll";
import Footer from "../../Components/Footer";
import SEOTestimonials from "../../Components/Seo/SEOTestimonials";

// Import your reusable components
import SEOHero from "../../Components/Seo/SEOHero";
import SEOFeatureGrid from "../../Components/Seo/SEOFeatureGrid";
import SEOProcess from "../../Components/Seo/SEOProcess";
import SEOFAQ from "../../Components/Seo/SEOFAQ";
import GetInTouch from "../../Components/GetInTouch";
import SEOIndustries from "../../Components/Seo/SEOIndustries";
import SEOLocations from "../../Components/Seo/SEOLocations";
import SEOMap from "../../Components/Seo/SEOMap";

const Best_Digital_Advertising_Agency_In_Kerala = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "ADVERTISING AGENCY" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best Digital Advertising Agency</span>{" "}
        In Kerala for High-ROI Campaigns
      </>
    ),
    intro: (
      <>
        Stop burning your marketing budget on campaigns that don't convert. You need 
        a partner who treats your ad spend like their own capital. Welcome to Zaynlo, 
        the <Link to="/"><strong className="text-[#dbe11f] hover:underline px-1">Best Digital Advertising Agency In Kerala</strong></Link>, 
        where creative storytelling meets aggressive performance marketing.
        <br />
        <br />
        In a market flooded with noise, visibility isn't enough—you need dominance. 
        Whether you are a retail giant in Kochi launching a new product or a B2B 
        firm in Calicut seeking qualified leads, <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link> 
        engineers campaigns that deliver measurable profit. Partner with the agency 
        that is redefining the standards of digital advertising across God's Own Country.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Brands Call Us the <span className="text-[#dbe11f]">Best Digital Advertising Agency In Kerala</span>
      </>
    ),
    desc: (
      <>
        Finding a <Link to="/"><strong className="text-[#dbe11f]">Top Digital Marketing Company In Kerala</strong></Link> is easy. Finding one that guarantees performance is rare. We don't just "run ads"—we build revenue engines. Here is why market leaders choose us.
      </>
    ),
    quote: (
      <>
        "We measure our success by one metric: Your Profit. If your ads aren't making money, we aren't doing our job. That accountability is what makes us the best."
      </>
    ),
    features: [
      {
        title: (
          <>
            Data-Driven <span className="text-[#dbe11f]">Creativity</span>
          </>
        ),
        desc: (
          <>
            Great visuals catch attention, but data converts it. As the Best Digital Advertising Agency In Kerala, we use analytics to inform every pixel and headline we create.
          </>
        ),
      },
      {
        title: (
          <>
            Zero Wasted <span className="text-[#dbe11f]">Spend</span>
          </>
        ),
        desc: (
          <>
            We obsess over your Cost Per Acquisition (CPA). Unlike other agencies that celebrate "clicks," we celebrate "customers." We optimize daily to ensure every rupee works for you.
          </>
        ),
      },
      {
        title: (
          <>
            Full-Funnel <span className="text-[#dbe11f]">Domination</span>
          </>
        ),
        desc: (
          <>
            From awareness to purchase, we own the entire journey. We integrate the services of the <strong className="text-white">Best Branding Agency In Kerala</strong> with hard-hitting performance ads.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Our Core <span className="text-[#dbe11f]">Advertising Services</span>
      </>
    ),
    desc: (
      <>
        We deliver a comprehensive suite of ad solutions that solidifies our reputation as the 
        <Link to="/"><strong className="text-[#dbe11f] px-1">Best Digital Advertising Agency In Kerala</strong></Link>.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Performance Marketing <span className="text-zinc-500 text-sm">(PPC & Meta)</span>
          </>
        ),
        desc: (
          <>
            Get instant traffic and sales. We manage Google Ads and Meta (Facebook/Instagram) campaigns with a laser focus on ROI, targeting the exact customers searching for you.
          </>
        ),
        subPoints: [
          <>Google Search <span className="text-[#dbe11f]">Ads</span></>,
          <>Instagram <span className="text-zinc-500">Shopping Ads</span></>,
          <>Retargeting <span className="text-[#dbe11f]">Campaigns</span></>,
        ],
      },
      {
        title: (
          <>
            2. SEO & Organic Growth <span className="text-[#dbe11f]">(Rank #1)</span>
          </>
        ),
        desc: (
          <>
            Ads are powerful, but organic traffic builds wealth. As a premier <strong className="text-[#dbe11f]">SEO Services Company In Kerala</strong>, we ensure you dominate the search results without paying for every click.
          </>
        ),
        subPoints: [
          <>Technical <span className="text-[#dbe11f]">SEO Audits</span></>,
          <>Content <span className="text-zinc-500">Marketing</span></>,
        ],
      },
      {
        title: (
          <>
            3. Conversion-Focused Web Design <span className="text-zinc-500 text-sm">(Dev)</span>
          </>
        ),
        desc: (
          <>
            Traffic is useless if your site is slow. As the <strong className="text-[#dbe11f]">Best Web Development Agency In Kerala</strong>, we build landing pages that convert visitors into paying clients instantly.
          </>
        ),
        subPoints: [
          <>High-Speed <span className="text-[#dbe11f]">React Sites</span></>,
          <>E-Commerce <span className="text-zinc-500">Storefronts</span></>,
        ],
      },
      {
        title: (
          <>
            4. Creative Branding <span className="text-[#dbe11f]">(Identity)</span>
          </>
        ),
        desc: (
          <>
            Stand out in the feed. Our creative team designs scroll-stopping visuals and ad creatives that demand attention, reinforcing why we are the top choice for brands.
          </>
        ),
        subPoints: [],
      },
    ],
  };

  // --- 4. PROCESS DATA ---
  const processData = [
    {
      title: <>Audit</>,
      desc: (
        <>
          We analyze your past campaigns to find where you are losing money.
        </>
      ),
    },
    {
      title: <>Strategy</>,
      desc: (
        <>
          We build a media plan tailored to your budget, choosing the right platforms for maximum impact.
        </>
      ),
    },
    {
      title: <>Launch</>,
      desc: (
        <>
          We go live with A/B tested creatives, ensuring only the best ads spend your budget.
        </>
      ),
    },
    {
      title: <>Scale</>,
      desc: (
        <>
          We kill the losing ads and double down on the winners to scale your <span className="text-[#dbe11f]">Revenue</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          What makes Zaynlo the <Link to="/" className="text-[#dbe11f] hover:underline">Best Digital Advertising Agency In Kerala?</Link>
        </>
      ),
      answer: (
        <>
          Unlike traditional agencies that focus on "likes" and "reach," we focus on <span className="text-white font-bold">Revenue and ROAS (Return on Ad Spend)</span>. 
          We combine the creative flair of a branding studio with the analytical rigor of a financial firm, making us the Best Digital Advertising Agency In Kerala for growth-focused brands.
        </>
      ),
    },
    {
      question: <>Do you guarantee results for ad campaigns?</>,
      answer: (
        <>
          While no ethical agency can guarantee specific numbers due to market volatility, we guarantee a professional, data-backed approach. We structure our contracts to align our success with yours—we grow when you grow.
        </>
      ),
    },
    {
      question: <>I have a small budget. Can I still advertise?</>,
      answer: (
        <>
          Yes. You don't need millions to start. We are experts at optimizing small budgets to get early wins, which we then reinvest to scale your campaigns. This approach makes us the ideal partner for startups and SMEs.
        </>
      ),
    },
    {
      question: <>Do you handle creative design for the ads?</>,
      answer: (
        <>
          Absolutely. We are a full-service agency. We script, design, and edit all the ad creatives (images and videos) in-house to ensure they are perfectly aligned with your campaign goals.
        </>
      ),
    },
    {
      question: <>How is advertising different from digital marketing?</>,
      answer: (
        <>
          Digital Marketing is the big picture. Advertising is the engine of speed. As the <span className="text-[#dbe11f]">Top Digital Marketing Company In Kerala</span>, we use advertising (paid channels) to get you quick results while SEO builds your long-term foundation.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Results from our <span className="text-[#dbe11f]">Ad Campaigns</span>
      </>
    ),
    desc: (
      <>
        See why businesses trust their marketing budgets to the Best Digital Advertising Agency In Kerala.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "We wasted so much money on Facebook ads with no results. Zaynlo came in, fixed our targeting, and tripled our sales in the first month. They are hands down the best digital advertising agency in Kerala."
          </>
        ),
        author: <>Anand Krishnan</>,
        role: <>CEO, Keralam Kart</>,
        location: <>Kochi</>,
      },
      {
        text: (
          <>
            "Their Google Ads strategy is brilliant. We are getting qualified leads for our real estate projects every single day at a cost we couldn't believe possible."
          </>
        ),
        author: <>Mathew Philip</>,
        role: <>Director, Skyline Properties</>,
        location: <>Kottayam</>,
      },
      {
        text: (
          <>
            "Finally, an agency that understands e-commerce. They optimized our conversion rate and scaled our ad spend profitably. A true partner in growth."
          </>
        ),
        author: <>Fathima Z.</>,
        role: <>Founder, Modest Wear</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "They don't just run ads; they build brands. The creative quality of their campaigns is unmatched in Malappuram."
          </>
        ),
        author: <>Dr. Arjun S.</>,
        role: <>MD, City Care Clinic</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "Professional, transparent, and aggressive with results. If you want to dominate your market, hire Zaynlo."
          </>
        ),
        author: <>Rahul Menon</>,
        role: <>Owner, Urban Cafe</>,
        location: <>Thrissur</>,
      },
      {
        text: (
          <>
            "We are seeing a 5x return on our ad spend. I wish we had found them sooner."
          </>
        ),
        author: <>Sameer Ali</>,
        role: <>Manager, AutoDrive</>,
        location: <>Trivandrum</>,
      },
    ],
  };

  // ===========================================================================
  // RENDER SECTION
  // ===========================================================================
  return (
    <>
      <Helmet>
        {/* ── Primary SEO ── */}
        <title>Best Digital Advertising Agency in Kerala | Zaynlo</title>
        <meta
          name="description"
          content="Scale your business with Zaynlo, Kerala's best digital advertising agency. We deliver high-ROI Google Ads, Meta Ads & performance marketing across Kerala."
        />
        <meta
          name="keywords"
          content="best digital advertising agency Kerala, Google Ads agency Kerala, Meta Ads Kerala, PPC agency Kerala, performance marketing Kerala, paid media agency Kerala, Zaynlo"
        />
        <link rel="canonical" href={`${site_url}/best-digital-advertising-agency-in-kerala`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* ── Open Graph ── */}
        <meta property="og:title" content="Best Digital Advertising Agency in Kerala | Zaynlo" />
        <meta property="og:description" content="High-ROI Google Ads, Meta Ads & performance marketing in Kerala. Zaynlo delivers measurable results for growing brands." />
        <meta property="og:url" content={`${site_url}/best-digital-advertising-agency-in-kerala`} />
        <meta property="og:image" content={`${site_url}/seopage.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Digital Advertising Agency in Kerala | Zaynlo" />
        <meta name="twitter:description" content="High-ROI Google Ads, Meta Ads & performance marketing campaigns in Kerala by Zaynlo." />
        <meta name="twitter:image" content={`${site_url}/seopage.webp`} />

        {/* ── FAQPage Schema ── */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is the best digital advertising agency in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo is widely regarded as the best digital advertising agency in Kerala, specialising in Google Ads, Meta (Facebook & Instagram) Ads, and performance marketing campaigns that deliver measurable ROI." } },
              { "@type": "Question", "name": "How does Zaynlo manage Google Ads campaigns?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo's certified Google Ads team handles everything: keyword research, ad copy creation, bid management, A/B testing, and monthly performance reporting to ensure every rupee spent drives results." } },
              { "@type": "Question", "name": "What is the minimum budget for digital advertising in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "There is no fixed minimum. Zaynlo designs campaigns based on your goals. We work with both small local businesses and large enterprises, optimising ad spend for maximum ROI at every budget level." } },
              { "@type": "Question", "name": "How quickly can I see results from paid advertising?", "acceptedAnswer": { "@type": "Answer", "text": "Unlike SEO, paid advertising can generate leads within days of launch. Zaynlo sets up and launches campaigns quickly while continuously optimising for better performance over time." } },
              { "@type": "Question", "name": "Does Zaynlo run ads for both B2B and B2C businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Zaynlo has experience running profitable ad campaigns for both B2B companies (LinkedIn Ads, Google Search) and B2C brands (Instagram, Facebook, Google Shopping) across Kerala." } }
            ]
          }`}
        </script>

        {/* ── WebPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "WebPage", "name": "Best Digital Advertising Agency in Kerala | Zaynlo", "description": "Scale your business with Zaynlo, Kerala's best digital advertising agency. High-ROI Google Ads, Meta Ads & performance marketing.", "url": "${site_url}/best-digital-advertising-agency-in-kerala", "inLanguage": "en-IN", "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } } }`}
        </script>

        {/* Schema Markup: Adjusted for Advertising Agency focus */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AdvertisingAgency", 
              "name": "Zaynlo - Best Digital Advertising Agency In Kerala",
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
                "latitude": 10.9768,
                "longitude": 76.2224
              },
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Kerala"
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
        <main className="w-full relative overflow-x-hidden bg-zinc-950 min-h-screen text-white">
          
          {/* 1. HERO SECTION */}
          <SEOHero
            h1={heroData.h1}
            introText={heroData.intro}
            imageSrc="/seopage.webp"
          />

          {/* 2. WHY US SECTION */}
          <SEOFeatureGrid
            h2={whyUsData.h2}
            description={whyUsData.desc}
            items={whyUsData.features}
            quote={whyUsData.quote}
            imageSrc="/agency01.webp"
            imageLink="/"
            imagePosition="right"
            columns={3}
          />

          {/* 3. SERVICES SECTION */}
          <SEOFeatureGrid
            h2={serviceData.h2}
            description={serviceData.desc}
            items={serviceData.services}
            imageSrc="/agency02.webp"
            imageLink="/"
            imagePosition="left"
            columns={2}
          />

          <SEOIndustries />

          {/* 4. PROCESS SECTION */}
          <SEOProcess
            h2={
              <>
                Our Campaign <span className="text-[#dbe11f]">Framework</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Advertising <span className="text-[#dbe11f]">FAQ</span>
              </>
            }
            questions={faqData}
          />

          {/* 6. TESTIMONIALS SECTION */}
          <SEOTestimonials
            h2={testimonialData.h2}
            description={testimonialData.desc}
            reviews={testimonialData.reviews}
          />

          {/* 7. CTA / CONTACT */}
          <GetInTouch />

          {/* 8. LOCATION MAP */}
          <SEOMap
            h2={
              <>
                Visit Our <span className="text-[#dbe11f]">HQ</span>
              </>
            }
            location={{
              address:
                "Aysha Commercial Complex, X6G9+JRR, NH 966, Perinthalmanna, Kerala 679322",
              phone: "+91 952 629 9568",
              email: "info@zaynlo.com",
              hours: "Mon - Sat: 9 AM - 6 PM",
              googleMapsUrl:
                "https://www.google.com/maps/dir/10.9692205,76.2131469/Aysha+Commercial+Complex,+X6G9%2BJRR,+NH+966,+Perinthalmanna,+Kerala+679322/@10.9730835,76.2143829,1136m/data=!3m2!1e3!4b1!4m17!1m7!3m6!1s0x3ba7cd8452df58d1:0x8773758fa664033a!2sAysha+Commercial+Complex!8m2!3d10.9766215!4d76.2195279!16s%2Fg%2F11v649nyv7!4m8!1m1!4e1!1m5!1m1!1s0x3ba7cd8452df58d1:0x8773758fa664033a!2m2!1d76.2195277!2d10.9767841?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D", 
            }}
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1236.757032048295!2d76.21832543511759!3d10.976784065613975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd8452df58d1%3A0x8773758fa664033a!2sAysha%20Commercial%20Complex!5e1!3m2!1sen!2sin!4v1770227496483!5m2!1sen!2sin" 
          />

          <SEOLocations />

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
};

export default Best_Digital_Advertising_Agency_In_Kerala;