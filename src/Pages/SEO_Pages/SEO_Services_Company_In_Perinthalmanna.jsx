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

const SEO_Services_Company_In_Perinthalmanna = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "SEO COMPANY PERINTHALMANNA" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The Premier <span className="text-[#dbe11f]">SEO Services Company</span>{" "}
        In Perinthalmanna
      </>
    ),
    intro: (
      <>
        When someone in Malappuram searches for your exact services on Google, who shows up first? If it isn't you, you are actively losing revenue to your competitors every single day. Welcome to Zaynlo, the most trusted 
        <Link to="/"><strong className="text-[#dbe11f] hover:underline px-1">SEO Services Company in Perinthalmanna</strong></Link>.
        <br />
        <br />
        We are not remote freelancers guessing at algorithms. We are a registered, full-scale digital tech company operating right here on NH 966. We combine deep technical web engineering with advanced Search Engine Optimization to ensure your business dominates both local Google Maps and statewide search results. Stop renting traffic and start owning your market.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Locals Hire Our <span className="text-[#dbe11f]">SEO Company</span>
      </>
    ),
    desc: (
      <>
        Real SEO requires technical coding, content strategy, and data analysis. Here is why the fastest-growing brands in Perinthalmanna partner with our in-house team instead of outsourcing to cheap agencies.
      </>
    ),
    quote: (
      <>
        "We treat your website like a digital storefront. If customers can't find it easily, it doesn't matter how beautiful it looks. Our job is to fill your store with highly qualified traffic."
      </>
    ),
    features: [
      {
        title: (
          <>
            Local <span className="text-[#dbe11f]">Accountability</span>
          </>
        ),
        desc: (
          <>
            Tired of SEO "experts" who stop answering your calls? We are a physical company located at Aysha Commercial Complex. You can walk in anytime, grab a coffee, and review your ranking reports face-to-face.
          </>
        ),
      },
      {
        title: (
          <>
            Deep Technical <span className="text-[#dbe11f]">Expertise</span>
          </>
        ),
        desc: (
          <>
            Because we are also a high-end web development firm, we fix the deep server, JavaScript, and Core Web Vital errors that traditional marketing agencies simply don't know how to code.
          </>
        ),
      },
      {
        title: (
          <>
            Ethical <span className="text-[#dbe11f]">(White-Hat) SEO</span>
          </>
        ),
        desc: (
          <>
            We protect your digital asset. We strictly adhere to Google's guidelines, meaning your website builds sustainable, long-term authority that survives every major algorithm update.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Our Corporate <span className="text-[#dbe11f]">SEO Services</span>
      </>
    ),
    desc: (
      <>
        As the leading 
        <Link to="/"><strong className="text-[#dbe11f] px-1">SEO Company in Perinthalmanna</strong></Link>, we offer comprehensive solutions designed to generate measurable leads and sales.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Local SEO & Maps <span className="text-zinc-500 text-sm">(Foot Traffic)</span>
          </>
        ),
        desc: (
          <>
            We dominate the "Near Me" searches. We hyper-optimize your Google Business Profile so that local customers in Perinthalmanna and Malappuram find your phone number and directions before anyone else's.
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
            2. Technical SEO <span className="text-[#dbe11f]">(Code Fixes)</span>
          </>
        ),
        desc: (
          <>
            We rebuild your site's foundation. We fix broken links, improve mobile load speeds, and implement advanced Schema markup so Google's bots can crawl and index your pages flawlessly.
          </>
        ),
        subPoints: [
          <>Site Speed <span className="text-[#dbe11f]">Audits</span></>,
          <>Crawlability <span className="text-zinc-500">Resolution</span></>,
        ],
      },
      {
        title: (
          <>
            3. On-Page Content Strategy <span className="text-zinc-500 text-sm">(Relevance)</span>
          </>
        ),
        desc: (
          <>
            We find the exact keywords your buyers are typing into Google. Then, we restructure your landing pages and write authoritative content that answers their questions and converts them into leads.
          </>
        ),
        subPoints: [
          <>Buyer-Intent <span className="text-[#dbe11f]">Keywords</span></>,
          <>Conversion <span className="text-zinc-500">Copywriting</span></>,
        ],
      },
      {
        title: (
          <>
            4. Off-Page & Authority Building <span className="text-[#dbe11f]">(Trust)</span>
          </>
        ),
        desc: (
          <>
            We secure high-quality backlinks from trusted websites across the internet. These "votes of confidence" signal to Google that your brand is the absolute leader in your industry.
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
          We perform a brutal, honest technical audit of your website to uncover exactly why your competitors are outranking you.
        </>
      ),
    },
    {
      title: <>Blueprint</>,
      desc: (
        <>
          We map out a custom 6-month keyword strategy targeting high-intent buyers in your specific service areas.
        </>
      ),
    },
    {
      title: <>Execute</>,
      desc: (
        <>
          Our in-house developers and copywriters fix your code, revamp your content, and optimize your Google Maps profile.
        </>
      ),
    },
    {
      title: <>Report</>,
      desc: (
        <>
          Every month, we sit down with you to review a transparent, plain-English report showing your ranking climb and new <span className="text-[#dbe11f]">Leads</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why should I hire a local <Link to="/" className="text-[#dbe11f] hover:underline">SEO Company in Perinthalmanna?</Link>
        </>
      ),
      answer: (
        <>
          Hiring a local company means you get true accountability. You aren't dealing with anonymous freelancers who might disappear. Our team sits in our Aysha Commercial Complex office every day. We understand the Malappuram market deeply, which gives us a massive advantage when running Local SEO campaigns.
        </>
      ),
    },
    {
      question: <>How long does it take to see results from SEO?</>,
      answer: (
        <>
          SEO is a long-term investment. While we often secure quick wins by fixing technical errors or optimizing your Google Maps profile in the first 30 days, significant ranking improvements for highly competitive keywords typically take <span className="text-white font-bold">4 to 6 months</span> of consistent work.
        </>
      ),
    },
    {
      question: <>Do you guarantee a Number 1 ranking on Google?</>,
      answer: (
        <>
          No, and you should run away from any agency that does. Google's algorithm changes constantly and is controlled only by Google. What we guarantee is a flawless, ethical process using proven strategies that have consistently put our clients' websites on the first page.
        </>
      ),
    },
    {
      question: <>What happens if I need to target more keywords later?</>,
      answer: (
        <>
          Our packages are highly transparent. If your business grows and you want to target additional keywords beyond your chosen package limit (Starter, Growth, or Business), we simply bill them at a flat rate of <span className="text-[#dbe11f] font-bold">₹900/- per additional keyword</span>.
        </>
      ),
    },
    {
      question: <>What do I need to provide to start an SEO campaign?</>,
      answer: (
        <>
          To begin our technical work, we will need "Admin" access to your Website (e.g., WordPress panel), your Google Search Console, and your Google Analytics accounts. Don't worry if you don't have these set up yet—our team will handle the configuration for you.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Local Ranking <span className="text-[#dbe11f]">Success Stories</span>
      </>
    ),
    desc: (
      <>
        See how our SEO Company helped businesses across Perinthalmanna and Malappuram dominate their markets.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "We had a great clinic, but nobody could find us online. Zaynlo took over our Local SEO. Now, when someone in Perinthalmanna searches for our medical services, our clinic is the very first one that pops up on Google Maps."
          </>
        ),
        author: <>Dr. Riyas M.</>,
        role: <>Director, City Care Hospital</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "I love that they are a proper company right here in town. I can just drive to their office to discuss our strategy. Their technical SEO work completely transformed our e-commerce website's traffic within 5 months."
          </>
        ),
        author: <>Ameena K.</>,
        role: <>Founder, The Kerala Boutique</>,
        location: <>Malappuram</>,
      },
      {
        text: (
          <>
            "They actually explained the code errors on our old website in a way I could understand. Once their dev team fixed the site speed and crawl issues, our organic leads from Google tripled."
          </>
        ),
        author: <>Mathew John</>,
        role: <>Partner, Skyline Builders</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "Honest, transparent, and incredibly professional. Their monthly ranking reports show exactly where we stand. Hiring them as our SEO agency was the best marketing move we made this year."
          </>
        ),
        author: <>Sanjay Nair</>,
        role: <>MD, SN Logistics</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "We were paying for Google Ads for years because our SEO was so bad. Zaynlo built our organic authority from scratch. Now we get free, high-quality traffic every day and have paused our ads entirely."
          </>
        ),
        author: <>Fathima Z.</>,
        role: <>Owner, Zaya Aesthetics</>,
        location: <>Manjeri</>,
      },
      {
        text: (
          <>
            "The content they write is top-notch. They researched exactly what our B2B clients were searching for and built landing pages that convert like crazy. Truly a premier SEO company."
          </>
        ),
        author: <>Thomas V.</>,
        role: <>CEO, TechVantage IT</>,
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
        <title>SEO Services Company In Perinthalmanna | Zaynlo</title>
        <meta
          name="description"
          content="Dominate Google rankings with Zaynlo, the premier SEO Services Company In Perinthalmanna. We specialize in Local Maps SEO, Technical Fixes, and Organic Lead Generation."
        />
        <link
          rel="canonical"
          href={`${site_url}/seo-services-company-in-perinthalmanna`}
        />
        
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Schema Markup for Local SEO Company */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - SEO Services Company In Perinthalmanna",
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
                  "name": "Professional SEO Services",
                  "description": "Technical SEO Audits, Local Google Maps Optimization, On-Page Strategy, and Link Building for businesses in Perinthalmanna."
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
                Our Organic <span className="text-[#dbe11f]">Growth Engine</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Company SEO <span className="text-[#dbe11f]">FAQ</span>
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

export default SEO_Services_Company_In_Perinthalmanna;