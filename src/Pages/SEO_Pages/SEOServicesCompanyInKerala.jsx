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

const SeoServicesCompanyInKerala = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "SEO SERVICES" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The Premier <span className="text-[#dbe11f]">SEO Services Company In Kerala</span>{" "}
        for Sustainable Rankings
      </>
    ),
    intro: (
      <>
        Being on the second page of Google is like being invisible. If your customers 
        can't find you, they are buying from your competitors. Welcome to Zaynlo, the 
        <Link to="/">
          <strong className="text-[#dbe11f] hover:underline px-1">
             Best SEO Services Company In Kerala
          </strong>
        </Link>, 
        where we turn your website into a 24/7 lead-generating machine.
        <br />
        <br />
        We don't use "hacks" or "shortcuts" that get you penalized. We build 
        <strong className="text-white px-1">digital assets</strong>. Whether you 
        need to dominate local search in Perinthalmanna or rank globally for 
        competitive keywords, <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link> 
        engineers the technical and content foundation your business needs to stay at #1.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why We Are the <span className="text-[#dbe11f]">Top SEO Company In Kerala</span>
      </>
    ),
    desc: (
      <>
        Most agencies sell "packages." We sell <span className="text-white font-bold">outcomes</span>. As the <Link to="/"><strong className="text-[#dbe11f]">Best Digital Marketing Agency In Perinthalmanna</strong></Link>, we treat SEO as a science, not a guessing game.
      </>
    ),
    quote: (
      <>
        "Rankings are vanity. Traffic is sanity. Revenue is reality. We focus on the metric that actually pays your bills: Revenue."
      </>
    ),
    features: [
      {
        title: (
          <>
            White-Hat <span className="text-[#dbe11f]">Integrity</span>
          </>
        ),
        desc: (
          <>
            We strictly follow Google's Webmaster Guidelines. No shady link schemes, no keyword stuffing. Just pure, high-quality optimization that survives every algorithm update.
          </>
        ),
      },
      {
        title: (
          <>
            Technical <span className="text-[#dbe11f]">Precision</span>
          </>
        ),
        desc: (
          <>
            As the <strong className="text-white">Best Web Development Agency In Kerala</strong>, we fix the deep code issues—Core Web Vitals, Schema, and JS Rendering—that other marketers don't even understand.
          </>
        ),
      },
      {
        title: (
          <>
            Content That <span className="text-[#dbe11f]">Ranks</span>
          </>
        ),
        desc: (
          <>
            Google loves helpful content. We produce high-authority articles and landing pages that answer your customers' questions better than anyone else in your industry.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Comprehensive <span className="text-[#dbe11f]">SEO Solutions</span>
      </>
    ),
    desc: (
      <>
        We deliver a 360-degree optimization strategy that cements our status as the leading 
        <Link to="/"><strong className="text-[#dbe11f] px-1">SEO Services Company In Kerala</strong></Link>.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Technical SEO & Audits <span className="text-zinc-500 text-sm">(Code)</span>
          </>
        ),
        desc: (
          <>
            We crawl your site like a bot to find broken links, slow scripts, and crawl errors. Then, we fix them to ensure Google can index your site instantly.
          </>
        ),
        subPoints: [
          <>Site Speed <span className="text-[#dbe11f]">Optimization</span></>,
          <>Schema Markup <span className="text-zinc-500">Implementation</span></>,
          <>Mobile <span className="text-[#dbe11f]">Usability Fixes</span></>,
        ],
      },
      {
        title: (
          <>
            2. Local SEO Optimization <span className="text-[#dbe11f]">(GMB)</span>
          </>
        ),
        desc: (
          <>
            Capture the "Near Me" traffic. We optimize your Google Business Profile to ensure you are the top recommendation for local customers in Malappuram and Kerala.
          </>
        ),
        subPoints: [
          <>GMB <span className="text-[#dbe11f]">Profile Management</span></>,
          <>Local <span className="text-zinc-500">Citation Building</span></>,
        ],
      },
      {
        title: (
          <>
            3. On-Page & Content SEO <span className="text-zinc-500 text-sm">(Relevance)</span>
          </>
        ),
        desc: (
          <>
            We optimize every title, meta tag, and header on your site. We also write keyword-rich content that establishes your brand as the industry authority.
          </>
        ),
        subPoints: [
          <>Keyword <span className="text-[#dbe11f]">Research & Strategy</span></>,
          <>Blog <span className="text-zinc-500">Content Creation</span></>,
        ],
      },
      {
        title: (
          <>
            4. Off-Page Link Building <span className="text-[#dbe11f]">(Authority)</span>
          </>
        ),
        desc: (
          <>
            Backlinks are votes of trust. We secure high-quality links from reputable websites to boost your Domain Authority (DA) and search visibility.
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
          We perform a deep diagnostic scan of your website to identify why you aren't ranking #1 yet.
        </>
      ),
    },
    {
      title: <>Fix</>,
      desc: (
        <>
          Our developers repair technical errors while our content team optimizes your existing pages.
        </>
      ),
    },
    {
      title: <>Build</>,
      desc: (
        <>
          We create new authority content and build backlinks to signal trust to Google.
        </>
      ),
    },
    {
      title: <>Monitor</>,
      desc: (
        <>
          We track keyword movements daily and send you transparent monthly reports on your <span className="text-[#dbe11f]">Growth</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why is Zaynlo the <Link to="/" className="text-[#dbe11f] hover:underline">Best SEO Services Company In Kerala?</Link>
        </>
      ),
      answer: (
        <>
          Because we don't guess—we engineer. Most agencies just add keywords. We rebuild your site's architecture for speed, secure high-authority backlinks, and create content that humans actually want to read. This holistic approach is why our clients stay at the top.
        </>
      ),
    },
    {
      question: <>How long does it take to see SEO results?</>,
      answer: (
        <>
          SEO is a marathon, not a sprint. While technical fixes can show results in weeks, substantial ranking improvements typically take <span className="text-white font-bold">3 to 6 months</span>. However, once you rank, the traffic is free and sustainable for years.
        </>
      ),
    },
    {
      question: <>Do you guarantee a #1 ranking on Google?</>,
      answer: (
        <>
          No ethical agency can guarantee a #1 spot because Google's algorithm is a third-party system. However, we guarantee best-in-class execution that historically places our clients on the first page for their high-value keywords.
        </>
      ),
    },
    {
      question: <>What is the difference between SEO and Google Ads?</>,
      answer: (
        <>
          Google Ads (PPC) gives you instant traffic, but you pay for every click. SEO takes time to build, but once you rank, the traffic is <span className="text-[#dbe11f]">100% free</span>. We recommend doing both for maximum dominance.
        </>
      ),
    },
    {
      question: <>Do you offer monthly SEO packages?</>,
      answer: (
        <>
          Yes. SEO requires ongoing maintenance to stay ahead of competitors. Our monthly retainers include content creation, link building, and technical monitoring to ensure you never lose your rankings.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Traffic Growth <span className="text-[#dbe11f]">Success Stories</span>
      </>
    ),
    desc: (
      <>
        See how the Best SEO Services Company In Kerala helped businesses dominate their market.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "Our traffic was flat for two years. Zaynlo came in, fixed our technical errors, and rebuilt our content strategy. Organic traffic is up 400% in 6 months."
          </>
        ),
        author: <>Nikhil Raj</>,
        role: <>Founder, Kerala Tourism Hub</>,
        location: <>Kochi</>,
      },
      {
        text: (
          <>
            "We dominate the 'Near Me' searches in Malappuram now. Their Local SEO strategy is incredibly effective for retail businesses like ours."
          </>
        ),
        author: <>Abdul Wahab</>,
        role: <>Owner, Wahab Hypermarket</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "I hired three agencies before Zaynlo. None of them could get me on the first page. Zaynlo did it in 4 months. They know their code."
          </>
        ),
        author: <>Dr. Susan George</>,
        role: <>Director, Wellness Life</>,
        location: <>Trivandrum</>,
      },
      {
        text: (
          <>
            "The best part is the reporting. I know exactly what they did and how much my traffic grew. No fluff, just results."
          </>
        ),
        author: <>Ramesh Pillai</>,
        role: <>CEO, Construction Pro</>,
        location: <>Thrissur</>,
      },
      {
        text: (
          <>
            "If you have a React website, you need Zaynlo. They are the only ones in Kerala who understand how to do SEO for modern Javascript sites properly."
          </>
        ),
        author: <>Jithin K.</>,
        role: <>CTO, Startup Village</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "Professional, ethical, and highly skilled. They saved our website from a Google penalty and brought us back to life."
          </>
        ),
        author: <>Mathew Varghese</>,
        role: <>MD, Export House</>,
        location: <>Kottayam</>,
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
        <title>Best SEO Services Company in Kerala | Zaynlo</title>
        <meta name="description" content="Rank #1 with Zaynlo, the best SEO services company in Kerala. Expert technical SEO, local search, link building & content strategy for long-term organic growth." />
        <meta name="keywords" content="SEO services company Kerala, best SEO company Kerala, SEO agency Kerala, local SEO Kerala, technical SEO Kerala, link building Kerala, organic search Kerala, Zaynlo" />
        <link rel="canonical" href={`${site_url}/seo-services-company-in-kerala`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* ── Open Graph ── */}
        <meta property="og:title" content="Best SEO Services Company in Kerala | Zaynlo" />
        <meta property="og:description" content="Kerala's best SEO services company. Technical SEO, local search, link building & content strategy for long-term rankings by Zaynlo." />
        <meta property="og:url" content={`${site_url}/seo-services-company-in-kerala`} />
        <meta property="og:image" content={`${site_url}/seopage.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best SEO Services Company in Kerala | Zaynlo" />
        <meta name="twitter:description" content="Kerala's best SEO services company. Technical SEO, local search & link building by Zaynlo." />
        <meta name="twitter:image" content={`${site_url}/seopage.webp`} />

        {/* ── FAQPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "What is the best SEO services company in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo is recognised as the best SEO services company in Kerala, providing technical SEO, local search optimisation, link building, and content strategy that drives sustainable organic growth." } },
            { "@type": "Question", "name": "What SEO services does Zaynlo offer in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo offers a full range of SEO services including technical SEO audits, on-page optimisation, local SEO & Google Maps optimisation, link building, content strategy, and monthly performance reporting." } },
            { "@type": "Question", "name": "How long does SEO take to show results?", "acceptedAnswer": { "@type": "Answer", "text": "Most clients start seeing measurable improvements in rankings and traffic within 3 to 6 months. Long-tail keywords and local searches often show results faster." } },
            { "@type": "Question", "name": "Does Zaynlo use white-hat SEO techniques?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Zaynlo exclusively uses white-hat, Google-compliant SEO strategies. We never use black-hat tactics that could result in penalties or ranking drops for your website." } },
            { "@type": "Question", "name": "Can Zaynlo improve my Google Maps ranking?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Zaynlo specialises in Local SEO and Google Business Profile optimisation, which directly improves your ranking in the local 3-pack and Google Maps search results." } }
          ]}`}
        </script>

        {/* ── WebPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "WebPage", "name": "Best SEO Services Company in Kerala | Zaynlo", "description": "Rank #1 with Zaynlo, the best SEO services company in Kerala. Technical SEO, local search & link building.", "url": "${site_url}/seo-services-company-in-kerala", "inLanguage": "en-IN", "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } } }`}
        </script>

        {/* Schema Markup: Adjusted for SEO Service focus */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - Best SEO Services Company In Kerala",
              "image": "${site_url}/logo.png",
              "@id": "${site_url}/#organization",
              "url": "${site_url}",
              "telephone": "+919526299568",
              "priceRange": "$$",
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
              ],
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Search Engine Optimization Services",
                  "description": "Technical SEO, On-Page Optimization, and Link Building"
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
                The Path to <span className="text-[#dbe11f]">Page One</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                SEO <span className="text-[#dbe11f]">FAQ</span>
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
                Visit Our <span className="text-[#dbe11f]">Office</span>
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

export default SeoServicesCompanyInKerala;