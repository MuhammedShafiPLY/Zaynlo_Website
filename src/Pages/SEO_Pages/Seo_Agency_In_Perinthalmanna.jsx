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

const Seo_Agency_In_Perinthalmanna = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "LOCAL SEO AGENCY" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The Premier <span className="text-[#dbe11f]">SEO Agency</span>{" "}
        In Perinthalmanna for Market Dominance
      </>
    ),
    intro: (
      <>
        Stop losing your local customers to businesses with inferior services just because they rank higher on Google. In today’s digital landscape, visibility equals credibility. Welcome to Zaynlo, the leading 
        <Link to="/"><strong className="text-[#dbe11f] hover:underline px-1">SEO Agency in Perinthalmanna</strong></Link>, 
        where we turn your website into a relentless lead-generation engine.
        <br />
        <br />
        You don't need to hire a remote agency in Kochi or Bangalore to get elite organic growth. We are a specialized team of search engineers, content strategists, and digital PR experts located right here at Aysha Commercial Complex. From local clinics wanting to dominate Google Maps to E-commerce brands needing technical code overhauls, <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link> executes aggressive, White-Hat SEO campaigns that deliver measurable profit.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Hire Our <span className="text-[#dbe11f]">SEO Agency</span>?
      </>
    ),
    desc: (
      <>
        SEO is too complex for one person to handle alone. By hiring our agency, you get an entire squad of specialists actively working to push your brand to the top of the search results.
      </>
    ),
    quote: (
      <>
        "We are not here to sell you confusing reports and empty metrics. We are here to secure the #1 spot for the exact keywords your paying customers are searching for."
      </>
    ),
    features: [
      {
        title: (
          <>
            Specialized <span className="text-[#dbe11f]">Squads</span>
          </>
        ),
        desc: (
          <>
            You get a dedicated technical SEO developer to fix your code, a senior copywriter to craft your content, and a local outreach manager to build your backlinks—all managed under one roof.
          </>
        ),
      },
      {
        title: (
          <>
            Local <span className="text-[#dbe11f]">Advantage</span>
          </>
        ),
        desc: (
          <>
            We know the Malappuram district inside and out. We know how the local demographics search, enabling us to hyper-target buyers right here in Perinthalmanna.
          </>
        ),
      },
      {
        title: (
          <>
            Radical <span className="text-[#dbe11f]">Transparency</span>
          </>
        ),
        desc: (
          <>
            No smoke and mirrors. We sit down with you every single month to show you exactly what we fixed, how your rankings climbed, and how many direct leads were generated.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Our Agency’s <span className="text-[#dbe11f]">SEO Arsenal</span>
      </>
    ),
    desc: (
      <>
        As the top-rated 
        <Link to="/"><strong className="text-[#dbe11f] px-1">SEO Agency in Perinthalmanna</strong></Link>, we attack search engine algorithms from every angle.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Hyper-Local SEO <span className="text-zinc-500 text-sm">(Google Maps)</span>
          </>
        ),
        desc: (
          <>
            We ensure you own the "Near Me" searches. By fully optimizing your Google My Business profile and building local directory citations, we drive foot traffic directly to your door.
          </>
        ),
        subPoints: [
          <>GMB <span className="text-[#dbe11f]">Authority</span></>,
          <>Local Review <span className="text-zinc-500">Strategy</span></>,
        ],
      },
      {
        title: (
          <>
            2. Enterprise Technical SEO <span className="text-[#dbe11f]">(Architecture)</span>
          </>
        ),
        desc: (
          <>
            We dive into your server logs and code base. We fix slow load times, resolve JavaScript indexing issues, and build advanced Schema markups to make your site flawlessly readable to Google.
          </>
        ),
        subPoints: [
          <>Core Web Vitals <span className="text-[#dbe11f]">Fixes</span></>,
          <>Mobile <span className="text-zinc-500">Optimization</span></>,
        ],
      },
      {
        title: (
          <>
            3. Content Marketing <span className="text-zinc-500 text-sm">(Authority)</span>
          </>
        ),
        desc: (
          <>
            We don't just write blogs; we write answers. We map out high-intent keywords and create authoritative landing pages that Google loves to rank and customers love to read.
          </>
        ),
        subPoints: [
          <>Competitor <span className="text-[#dbe11f]">Gap Analysis</span></>,
          <>Conversion <span className="text-zinc-500">Copywriting</span></>,
        ],
      },
      {
        title: (
          <>
            4. Ethical Link Building <span className="text-[#dbe11f]">(Trust)</span>
          </>
        ),
        desc: (
          <>
            We execute safe, White-Hat digital PR campaigns to earn high-quality backlinks from respected websites, proving to Google that your brand is a trusted leader in the industry.
          </>
        ),
        subPoints: [],
      },
    ],
  };

  // --- 4. PROCESS DATA ---
  const processData = [
    {
      title: <>Discovery</>,
      desc: (
        <>
          We invite you to our Perinthalmanna HQ to audit your current site, dissect your competitors, and find the gaps in your market.
        </>
      ),
    },
    {
      title: <>Surgery</>,
      desc: (
        <>
          Our development team performs technical surgery on your site—fixing bugs, improving speed, and optimizing the mobile experience.
        </>
      ),
    },
    {
      title: <>Campaign</>,
      desc: (
        <>
          We launch a 6-month aggressive strategy of content creation, local map optimization, and high-tier link building.
        </>
      ),
    },
    {
      title: <>Domination</>,
      desc: (
        <>
          We track the data daily, doubling down on the specific keywords that are generating the most <span className="text-[#dbe11f]">Revenue</span> for your business.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          What makes an "Agency" different from an SEO freelancer?
        </>
      ),
      answer: (
        <>
          Bandwidth and expertise. A freelancer is usually good at one thing—maybe writing or building links. But SEO today requires a web developer, a copywriter, and a data analyst. By hiring Zaynlo as your <Link to="/" className="text-[#dbe11f] hover:underline">SEO Agency in Perinthalmanna</Link>, you get an entire specialized team working on your business simultaneously, ensuring no technical detail is missed.
        </>
      ),
    },
    {
      question: <>What is the expected timeline for ranking improvements?</>,
      answer: (
        <>
          While we can quickly optimize your Google Maps profile for early wins, achieving stable, top-page organic rankings for competitive keywords is a long-term process. Significant improvements typically take <span className="text-white font-bold">4 to 6 months</span> of consistent, ethical work.
        </>
      ),
    },
    {
      question: <>Are the monthly SEO service fees refundable?</>,
      answer: (
        <>
          Due to the extensive labor, research, and technical hours dedicated to search engine optimization, our monthly retainer fees are non-refundable once the work for that cycle has commenced. We provide absolute transparency through our reports so you always see the value being generated.
        </>
      ),
    },
    {
      question: <>Will you need access to my website?</>,
      answer: (
        <>
          Yes. To perform on-page optimizations and technical SEO fixes, we require Admin-level access to your website's backend (e.g., WordPress), as well as access to your Google Search Console and Google Analytics. Your data privacy and security are strictly protected under our agency protocols.
        </>
      ),
    },
    {
      question: <>What happens if Google releases an algorithm update?</>,
      answer: (
        <>
          Because our agency strictly adheres to "White-Hat" SEO techniques (no spam, no bought links), your website remains safe from search engine penalties. In fact, our clients often see their rankings improve during official Google updates because we focus on genuine technical quality and user experience.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Agency <span className="text-[#dbe11f]">Success Records</span>
      </>
    ),
    desc: (
      <>
        Read how our agency has systematically grown the organic revenue of businesses in Malappuram.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "I used to get constant calls from fake 'Google experts' promising me the #1 spot. I ignored them all and hired Zaynlo locally. Sitting in their office and seeing the actual strategy gave me total peace of mind. Now, our dental clinic is dominating Perinthalmanna."
          </>
        ),
        author: <>Dr. Shabeer A.</>,
        role: <>Director, Smile Align</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "As an e-commerce brand, our site architecture was a mess. Their technical SEO team went in and completely rebuilt our URL structures and schema. The jump in our organic sales was incredible to watch."
          </>
        ),
        author: <>Nidhi V.</>,
        role: <>Founder, Kerala Silks Online</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "We wanted an agency that understood the local market. They optimized our Google My Business profile so well that we literally had to hire more staff to handle the walk-in customers on weekends."
          </>
        ),
        author: <>Fayas K.</>,
        role: <>Owner, Malabar Furniture Hub</>,
        location: <>Malappuram</>,
      },
      {
        text: (
          <>
            "Highly professional agency. They never tried to sell me unrealistic dreams. They gave me a 6-month roadmap, stuck to the plan, and by month 5, we were outranking competitors who had been around for decades."
          </>
        ),
        author: <>Sanjay Menon</>,
        role: <>Partner, Horizon Real Estate</>,
        location: <>Thrissur</>,
      },
      {
        text: (
          <>
            "I appreciate how clear their pricing is. When we wanted to expand our campaign to target 5 new keywords in a different city, they just applied their standard ₹900 keyword fee. No hidden agency tricks."
          </>
        ),
        author: <>Riyaz Mohammed</>,
        role: <>CEO, AutoDrive Logistics</>,
        location: <>Manjeri</>,
      },
      {
        text: (
          <>
            "If you are looking for a true SEO agency in Perinthalmanna—not just a freelancer with a laptop—Zaynlo is the only choice. Their reporting and execution are world-class."
          </>
        ),
        author: <>Vishnu Das</>,
        role: <>MD, TechServe</>,
        location: <>Perinthalmanna</>,
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
        <title>SEO Agency in Perinthalmanna | Zaynlo Digital</title>
        <meta name="description" content="Dominate Google with Zaynlo, the premier SEO agency in Perinthalmanna. We provide expert technical SEO, local Maps & content strategy in Malappuram." />
        <meta name="keywords" content="SEO agency Perinthalmanna, SEO company Malappuram, local SEO Perinthalmanna, Google Maps SEO Malappuram, technical SEO agency Perinthalmanna, Zaynlo" />
        <link rel="canonical" href={`${site_url}/seo-agency-in-perinthalmanna`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* ── Open Graph ── */}
        <meta property="og:title" content="SEO Agency in Perinthalmanna | Zaynlo Digital" />
        <meta property="og:description" content="Premier SEO agency in Perinthalmanna. Technical SEO, local Maps & content strategy for Malappuram businesses by Zaynlo." />
        <meta property="og:url" content={`${site_url}/seo-agency-in-perinthalmanna`} />
        <meta property="og:image" content={`${site_url}/seopage.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Agency in Perinthalmanna | Zaynlo Digital" />
        <meta name="twitter:description" content="Premier SEO agency in Perinthalmanna. Technical SEO, local Maps & content strategy by Zaynlo." />
        <meta name="twitter:image" content={`${site_url}/seopage.webp`} />

        {/* ── FAQPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "What does an SEO agency do for businesses in Perinthalmanna?", "acceptedAnswer": { "@type": "Answer", "text": "An SEO agency like Zaynlo in Perinthalmanna improves your visibility on Google through local search optimisation, technical fixes, keyword targeting, and content strategy specific to the Malappuram market." } },
            { "@type": "Question", "name": "Why is Zaynlo the best SEO agency in Perinthalmanna?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo is physically based in Perinthalmanna, meaning we understand the local market deeply. We combine technical SEO expertise with local knowledge to deliver rankings that bring real customers." } },
            { "@type": "Question", "name": "How does local SEO help Perinthalmanna businesses stand out?", "acceptedAnswer": { "@type": "Answer", "text": "Local SEO ensures your business appears in Google Maps and local search results when customers in Perinthalmanna search for your service, making you the obvious choice over competitors." } },
            { "@type": "Question", "name": "What kind of businesses does Zaynlo serve as an SEO agency in Perinthalmanna?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo serves clinics, hospitals, textile showrooms, restaurants, real estate agents, retailers, and professional service providers across Perinthalmanna and Malappuram." } },
            { "@type": "Question", "name": "How can I start SEO for my Perinthalmanna business?", "acceptedAnswer": { "@type": "Answer", "text": "Contact Zaynlo at our office on NH 966, Perinthalmanna. We offer a free SEO consultation to analyse your current rankings and build a custom strategy to grow your business on Google." } }
          ]}`}
        </script>

        {/* ── WebPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "WebPage", "name": "SEO Agency in Perinthalmanna | Zaynlo Digital", "description": "Premier SEO agency in Perinthalmanna. Technical SEO, local Maps & content strategy for Malappuram businesses.", "url": "${site_url}/seo-agency-in-perinthalmanna", "inLanguage": "en-IN", "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } } }`}
        </script>

        {/* Schema Markup for Local SEO Agency */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - SEO Agency In Perinthalmanna",
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
                  "name": "Enterprise SEO Agency Services",
                  "description": "White-Hat Link Building, Local SEO for Google Maps, and Technical Website Optimization by local experts."
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
                Our Agency <span className="text-[#dbe11f]">Execution Protocol</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Agency <span className="text-[#dbe11f]">Questions Answered</span>
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
                Visit Agency <span className="text-[#dbe11f]">HQ</span>
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

export default Seo_Agency_In_Perinthalmanna;