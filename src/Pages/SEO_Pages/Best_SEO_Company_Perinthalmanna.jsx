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

const Best_SEO_Company_Perinthalmanna = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "BEST SEO COMPANY PERINTHALMANNA" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best SEO Company</span>{" "}
        Perinthalmanna Has to Offer
      </>
    ),
    intro: (
      <>
        You likely found this page by searching for the 
        <Link to="/"><strong className="text-[#dbe11f] hover:underline px-1">best SEO company Perinthalmanna</strong></Link>. 
        That is the power of true Search Engine Optimization. We don't just sell SEO; we actually practice what we preach to dominate the search results. 
        <br />
        <br />
        Imagine what would happen if your business showed up at the exact moment a local customer searched for the services you provide. At <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link>, we engineer websites to rank at the top of Google and Google Maps. Whether you own a hospital, a retail showroom, or a B2B agency in Malappuram, our local team at Aysha Commercial Complex is ready to build your organic growth engine.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why We Rank as the <span className="text-[#dbe11f]">Best SEO Company</span>
      </>
    ),
    desc: (
      <>
        Ranking on the first page of Google isn't luck; it's pure technical engineering. Here is why the most ambitious businesses in the district trust us with their digital real estate.
      </>
    ),
    quote: (
      <>
        "We don't chase empty traffic metrics. We optimize for high-intent keywords that actually make the phone ring and bring paying customers to your storefront."
      </>
    ),
    features: [
      {
        title: (
          <>
            Local <span className="text-[#dbe11f]">Market Mastery</span>
          </>
        ),
        desc: (
          <>
            We know Perinthalmanna. We understand how locals search, what they value, and how to optimize your Google Maps profile so you dominate the "Near Me" searches in the city.
          </>
        ),
      },
      {
        title: (
          <>
            Technical <span className="text-[#dbe11f]">Superiority</span>
          </>
        ),
        desc: (
          <>
            Google's algorithm hates slow, broken websites. Because we are a high-end web development firm, we dive deep into your site's code to fix the underlying errors that basic marketing agencies miss.
          </>
        ),
      },
      {
        title: (
          <>
            Strictly <span className="text-[#dbe11f]">White-Hat</span>
          </>
        ),
        desc: (
          <>
            We never use spammy links or cheat the system. We use 100% ethical, Google-approved strategies so your website's authority grows safely and survives every major algorithm update.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Our Proven <span className="text-[#dbe11f]">SEO Strategies</span>
      </>
    ),
    desc: (
      <>
        As the 
        <Link to="/"><strong className="text-[#dbe11f] px-1">best SEO company Perinthalmanna</strong></Link> businesses rely on, we leave nothing to chance.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Google Maps Dominance <span className="text-zinc-500 text-sm">(Local SEO)</span>
          </>
        ),
        desc: (
          <>
            We turn mobile searches into foot traffic. We optimize your Google Business Profile with the right categories, local citations, and review strategies to put you in the top 3 Map Pack.
          </>
        ),
        subPoints: [
          <>GMB <span className="text-[#dbe11f]">Optimization</span></>,
          <>Local Directory <span className="text-zinc-500">Citations</span></>,
        ],
      },
      {
        title: (
          <>
            2. Technical Code Audits <span className="text-[#dbe11f]">(Foundation)</span>
          </>
        ),
        desc: (
          <>
            We fix the invisible issues killing your rank. From Core Web Vitals and mobile responsiveness to complex Schema Markup, we ensure search engines can read your site perfectly.
          </>
        ),
        subPoints: [
          <>Speed <span className="text-[#dbe11f]">Optimization</span></>,
          <>Indexation <span className="text-zinc-500">Fixes</span></>,
        ],
      },
      {
        title: (
          <>
            3. Keyword & Content Strategy <span className="text-zinc-500 text-sm">(Relevance)</span>
          </>
        ),
        desc: (
          <>
            We research exactly what your customers are typing into Google. Then, we restructure your pages and write authoritative content that directly answers their search intent.
          </>
        ),
        subPoints: [
          <>Buyer-Intent <span className="text-[#dbe11f]">Keywords</span></>,
          <>High-Converting <span className="text-zinc-500">Copy</span></>,
        ],
      },
      {
        title: (
          <>
            4. Digital PR & Link Building <span className="text-[#dbe11f]">(Authority)</span>
          </>
        ),
        desc: (
          <>
            We build your site's trustworthiness by securing high-quality backlinks from reputable websites, signaling to Google that you are the true industry leader in Malappuram.
          </>
        ),
        subPoints: [],
      },
    ],
  };

  // --- 4. PROCESS DATA ---
  const processData = [
    {
      title: <>Diagnose</>,
      desc: (
        <>
          We run a comprehensive technical audit to find the broken links, slow pages, and missing tags holding your site back.
        </>
      ),
    },
    {
      title: <>Strategize</>,
      desc: (
        <>
          We analyze your toughest local competitors and build a 6-month roadmap to systematically outrank them.
        </>
      ),
    },
    {
      title: <>Execute</>,
      desc: (
        <>
          Our developers clean up the code, while our content team rewrites your pages to target high-value local keywords.
        </>
      ),
    },
    {
      title: <>Report</>,
      desc: (
        <>
          We sit down with you monthly in our Perinthalmanna office to show you exactly how your traffic and <span className="text-[#dbe11f]">Leads</span> are growing.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why should I choose a local team over a bigger agency in Kochi or Bangalore?
        </>
      ),
      answer: (
        <>
          Because local SEO requires local knowledge. We know the geography, the culture, and the buying habits of Perinthalmanna and Malappuram better than an agency sitting 300km away. Plus, you get the absolute accountability of being able to walk into our office at Aysha Commercial Complex whenever you need us.
        </>
      ),
    },
    {
      question: <>How long will it take to reach the first page?</>,
      answer: (
        <>
          SEO is an investment that builds over time. While we can often boost your Google Maps ranking in the first 30 to 60 days, achieving solid, revenue-generating organic positions for highly competitive keywords generally takes <span className="text-white font-bold">4 to 6 months</span> of consistent optimization.
        </>
      ),
    },
    {
      question: <>What if my competitors are already doing SEO?</>,
      answer: (
        <>
          That means there is a proven market for your services online. We run detailed competitor analysis to see exactly which keywords they are targeting and where their backlinks come from. Then, we simply build a superior, more aggressive strategy to overtake them.
        </>
      ),
    },
    {
      question: <>What is the cost structure for your SEO packages?</>,
      answer: (
        <>
          We offer transparent monthly retainers (Starter, Growth, and Business packages). You know exactly how many keywords we are targeting. If you wish to expand your campaign later, additional keywords beyond the package limit are billed at a simple flat rate of <span className="text-[#dbe11f] font-bold">₹900/- per keyword</span>.
        </>
      ),
    },
    {
      question: <>Do I get to see what work is actually being done?</>,
      answer: (
        <>
          Absolutely. Transparency is why we are the best SEO company Perinthalmanna has to offer. We provide plain-English monthly reports detailing our technical fixes, content updates, ranking movements, and the exact number of phone calls/leads generated.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Proof of our <span className="text-[#dbe11f]">Rankings</span>
      </>
    ),
    desc: (
      <>
        See how our strategic SEO campaigns have transformed the revenue of local Perinthalmanna businesses.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "We were invisible online. Zaynlo fixed our website code and optimized our Google Maps. Now, we are the #1 result when people search for building materials in Perinthalmanna. They are truly the best SEO company around."
          </>
        ),
        author: <>Nishad Ali</>,
        role: <>Director, BuildTech Traders</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "I used to spend thousands on newspaper ads with zero tracking. Since Zaynlo took over our SEO, we get high-quality patient inquiries from Google every single day for free."
          </>
        ),
        author: <>Dr. Ameena S.</>,
        role: <>MD, SmileCare Dental</>,
        location: <>Malappuram</>,
      },
      {
        text: (
          <>
            "The level of technical detail they go into is amazing. They didn't just stuff keywords; they made our site load twice as fast. Our organic traffic has grown by 300% in six months."
          </>
        ),
        author: <>Vishnu Prasad</>,
        role: <>Founder, Kerala Tech Solutions</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "Having their office right here in town is a game-changer. I love being able to sit down with their SEO engineers and actually understand the strategy. Highly transparent and professional."
          </>
        ),
        author: <>Riyaz Mohammed</>,
        role: <>Owner, Royal Furniture Mall</>,
        location: <>Manjeri</>,
      },
      {
        text: (
          <>
            "Our e-commerce sales were flat until Zaynlo optimized our product pages. We are now ranking for national keywords, not just local ones. Worth every penny of the monthly retainer."
          </>
        ),
        author: <>Fathima Z.</>,
        role: <>CEO, Zaya Boutique</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "If you want real business growth without paying for ads forever, hire Zaynlo. They delivered exactly what they promised in the timeline they promised."
          </>
        ),
        author: <>Mathew George</>,
        role: <>Partner, Skyline Real Estate</>,
        location: <>Thrissur</>,
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
        <title>Best SEO Company in Perinthalmanna | Zaynlo Digital</title>
        <meta name="description" content="Rank #1 on Google with Zaynlo, the best SEO company in Perinthalmanna. Local Google Maps SEO, technical SEO & organic lead generation for Malappuram businesses." />
        <meta name="keywords" content="best SEO company Perinthalmanna, SEO Perinthalmanna, local SEO Malappuram, Google ranking Perinthalmanna, SEO services Malappuram, Google Maps SEO Perinthalmanna, Zaynlo" />
        <link rel="canonical" href={`${site_url}/best-seo-company-perinthalmanna`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* ── Open Graph ── */}
        <meta property="og:title" content="Best SEO Company in Perinthalmanna | Zaynlo Digital" />
        <meta property="og:description" content="Best SEO company in Perinthalmanna. Local Google Maps SEO, technical SEO & organic lead generation for Malappuram by Zaynlo." />
        <meta property="og:url" content={`${site_url}/best-seo-company-perinthalmanna`} />
        <meta property="og:image" content={`${site_url}/seopage.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best SEO Company in Perinthalmanna | Zaynlo Digital" />
        <meta name="twitter:description" content="Best SEO company in Perinthalmanna. Google Maps SEO, technical SEO & lead generation by Zaynlo." />
        <meta name="twitter:image" content={`${site_url}/seopage.webp`} />

        {/* ── FAQPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "What is the best SEO company in Perinthalmanna?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo is the best SEO company in Perinthalmanna, specialising in Local Google Maps ranking, technical SEO, and organic lead generation for businesses in Malappuram." } },
            { "@type": "Question", "name": "How can Zaynlo help my Perinthalmanna business rank on Google?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo improves your Google Business Profile, builds local backlinks, fixes technical issues on your website, and creates location-targeted content so you appear at the top when customers search near you." } },
            { "@type": "Question", "name": "What is Google Maps SEO and why do I need it?", "acceptedAnswer": { "@type": "Answer", "text": "Google Maps SEO optimises your business listing to appear in the local 3-pack results. For Perinthalmanna businesses, this is crucial because most customers search for local services on their phones." } },
            { "@type": "Question", "name": "Does Zaynlo provide local SEO for small businesses in Malappuram?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Zaynlo has affordable SEO packages specifically designed for small shops, clinics, and local service providers in Perinthalmanna and across Malappuram district." } },
            { "@type": "Question", "name": "How do I get started with SEO in Perinthalmanna?", "acceptedAnswer": { "@type": "Answer", "text": "Simply contact Zaynlo at our Perinthalmanna office or call us to schedule a free SEO audit. We will analyse your current position and create a clear roadmap to improve your rankings." } }
          ]}`}
        </script>

        {/* ── WebPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "WebPage", "name": "Best SEO Company in Perinthalmanna | Zaynlo Digital", "description": "Rank #1 on Google with Zaynlo, the best SEO company in Perinthalmanna. Local Maps SEO, technical SEO & lead generation.", "url": "${site_url}/best-seo-company-perinthalmanna", "inLanguage": "en-IN", "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } } }`}
        </script>

        {/* Schema Markup for Local SEO Company */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - Best SEO Company Perinthalmanna",
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
                "@type": "City",
                "name": "Perinthalmanna"
              },
              "sameAs": [
                "https://www.instagram.com/zaynlo", 
                "https://www.linkedin.com/company/zaynlo",
                "https://www.facebook.com/zaynlo"
              ],
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Advanced SEO Services",
                  "description": "Local SEO for Google Maps, Technical Code Audits, Content Strategy, and Link Building."
                }
              }
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
                Our Blueprint to <span className="text-[#dbe11f]">Page One</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                SEO Strategy <span className="text-[#dbe11f]">FAQ</span>
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

          {/* 8. LOCATION MAP - Emphasizing Perinthalmanna HQ */}
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

export default Best_SEO_Company_Perinthalmanna;