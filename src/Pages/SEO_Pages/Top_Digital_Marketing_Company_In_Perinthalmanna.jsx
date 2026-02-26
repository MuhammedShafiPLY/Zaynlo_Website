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

const Top_Digital_Marketing_Company_In_Perinthalmanna = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "TOP COMPANY PERINTHALMANNA" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Top Digital Marketing Company</span>{" "}
        In Perinthalmanna
      </>
    ),
    intro: (
      <>
        For years, businesses in Malappuram thought they had to hire agencies in Kochi or Bangalore to get world-class marketing. Not anymore. Welcome to Zaynlo, officially recognized as the 
        <Link to="/"><strong className="text-[#dbe11f] hover:underline px-1">Top Digital Marketing Company in Perinthalmanna</strong></Link>.
        <br />
        <br />
        We don't just run basic Facebook ads or post random graphics. We are a full-fledged digital tech and marketing company. From enterprise-grade React websites to data-driven SEO and premium branding, we bring global standards right to your doorstep on NH 966. Partner with a company that has the infrastructure, team, and vision to actually scale your revenue.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why We Are Perinthalmanna’s <span className="text-[#dbe11f]">Top Company</span>
      </>
    ),
    desc: (
      <>
        There is a massive difference between a freelancer working from a laptop and a <Link to="/"><strong className="text-[#dbe11f]">Top Digital Marketing Company</strong></Link> with an in-house team of specialists. Here is why serious brands choose Zaynlo.
      </>
    ),
    quote: (
      <>
        "We are building a culture of digital excellence right here in Perinthalmanna. You get the accountability of a local partner with the execution power of a top-tier tech company."
      </>
    ),
    features: [
      {
        title: (
          <>
            Complete <span className="text-[#dbe11f]">In-House Team</span>
          </>
        ),
        desc: (
          <>
            We don't outsource your brand to cheap third parties. Our developers, SEO engineers, and branding experts all sit together in our Perinthalmanna office, ensuring absolute quality control.
          </>
        ),
      },
      {
        title: (
          <>
            Business-First <span className="text-[#dbe11f]">Approach</span>
          </>
        ),
        desc: (
          <>
            Likes and followers are nice, but they don't pay your rent. We focus entirely on metrics that matter: walk-in customers, lead generation, and Return on Investment (ROI).
          </>
        ),
      },
      {
        title: (
          <>
            Face-to-Face <span className="text-[#dbe11f]">Trust</span>
          </>
        ),
        desc: (
          <>
            Tired of agencies that ghost you when things go wrong? We are a registered company at Aysha Commercial Complex. You can walk in anytime, grab a coffee, and discuss your growth strategy.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Corporate-Grade <span className="text-[#dbe11f]">Digital Solutions</span>
      </>
    ),
    desc: (
      <>
        As the leading 
        <Link to="/"><strong className="text-[#dbe11f] px-1">Digital Marketing Company in Perinthalmanna</strong></Link>, we provide an ecosystem of services designed for dominant market growth.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Search Engine Dominance <span className="text-zinc-500 text-sm">(SEO)</span>
          </>
        ),
        desc: (
          <>
            We ensure your business ranks #1 when locals search for your services. We manage your Google Maps profile and optimize your website to capture the highest-intent buyers in Malappuram.
          </>
        ),
        subPoints: [
          <>Local Maps <span className="text-[#dbe11f]">Optimization</span></>,
          <>Technical <span className="text-zinc-500">Website SEO</span></>,
        ],
      },
      {
        title: (
          <>
            2. High-End Web Engineering <span className="text-[#dbe11f]">(Dev)</span>
          </>
        ),
        desc: (
          <>
            We don't use slow, cheap templates. We code blazing-fast, secure websites and e-commerce stores using modern tech (React/Next.js) that outshines your biggest competitors.
          </>
        ),
        subPoints: [
          <>Custom <span className="text-[#dbe11f]">Web Applications</span></>,
          <>E-Commerce <span className="text-zinc-500">Solutions</span></>,
        ],
      },
      {
        title: (
          <>
            3. Performance Advertising <span className="text-zinc-500 text-sm">(PPC/Meta)</span>
          </>
        ),
        desc: (
          <>
            Stop wasting money on boosted posts. We run highly targeted, data-backed ad campaigns on Facebook, Instagram, and Google to generate immediate leads and sales.
          </>
        ),
        subPoints: [
          <>Lead Generation <span className="text-[#dbe11f]">Funnels</span></>,
          <>Retargeting <span className="text-zinc-500">Campaigns</span></>,
        ],
      },
      {
        title: (
          <>
            4. Premium Brand Identity <span className="text-[#dbe11f]">(Design)</span>
          </>
        ),
        desc: (
          <>
            We transform local businesses into premium brands. From luxury logo design to professional product packaging, we make sure you look like the market leader.
          </>
        ),
        subPoints: [],
      },
    ],
  };

  // --- 4. PROCESS DATA ---
  const processData = [
    {
      title: <>Consult</>,
      desc: (
        <>
          We invite you to our Perinthalmanna HQ to dissect your business goals and current bottlenecks.
        </>
      ),
    },
    {
      title: <>Architect</>,
      desc: (
        <>
          Our team builds a comprehensive digital roadmap covering tech, design, and marketing.
        </>
      ),
    },
    {
      title: <>Deploy</>,
      desc: (
        <>
          We launch your campaigns and new digital assets with precision, ensuring everything tracks perfectly.
        </>
      ),
    },
    {
      title: <>Scale</>,
      desc: (
        <>
          We analyze the data, eliminate what isn't working, and pour budget into the strategies generating <span className="text-[#dbe11f]">Profit</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why is Zaynlo the <Link to="/" className="text-[#dbe11f] hover:underline">Top Digital Marketing Company in Perinthalmanna?</Link>
        </>
      ),
      answer: (
        <>
          It comes down to our infrastructure and technical capability. While most local agencies focus only on basic social media, Zaynlo is a full-stack company offering enterprise-level Web Development, Advanced SEO, and ROAS-focused Advertising under one roof. We bring big-city quality to our hometown.
        </>
      ),
    },
    {
      question: <>Do you work with startups or only established companies?</>,
      answer: (
        <>
          We work with ambitious businesses of all sizes. Whether you are launching a brand new boutique in Perinthalmanna or scaling an established hospital chain across Kerala, we have tailored packages designed for your specific growth stage.
        </>
      ),
    },
    {
      question: <>Where exactly is your office located?</>,
      answer: (
        <>
          We are centrally located at the <span className="text-white font-bold">Aysha Commercial Complex on NH 966</span> in Perinthalmanna. We highly encourage our clients to drop by for in-person strategy sessions.
        </>
      ),
    },
    {
      question: <>What makes a "Company" different from a marketing freelancer?</>,
      answer: (
        <>
          Reliability and depth of skill. A freelancer might be good at design, but bad at coding or SEO. As a company, Zaynlo has dedicated experts for every single department. Plus, if a freelancer gets sick, your marketing stops. With us, your business growth never pauses.
        </>
      ),
    },
    {
      question: <>How do you measure success for your clients?</>,
      answer: (
        <>
          We measure success by your bottom line. We track foot traffic, phone calls, form submissions, and direct sales. We provide transparent monthly reports so you know exactly what return you are getting on your investment.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        What Local Leaders <span className="text-[#dbe11f]">Say About Us</span>
      </>
    ),
    desc: (
      <>
        Discover why the top brands in Malappuram choose our company to handle their digital presence.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "It is such a relief to have a top-tier digital company right here in Perinthalmanna. We used to struggle with remote agencies. Zaynlo's team is always accessible, and their work on our e-commerce site was flawless."
          </>
        ),
        author: <>Dr. Riyaz M.</>,
        role: <>Director, Care Hospital</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "They completely rebranded our retail chain and launched a highly successful Meta ad campaign. The professionalism and strategic thinking they bring is unmatched in this district."
          </>
        ),
        author: <>Afsal K.</>,
        role: <>MD, Royal Silks</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "Zaynlo is not just a marketing agency; they are a proper tech company. They built us a custom inventory application integrated with a beautiful frontend website. Highly recommended."
          </>
        ),
        author: <>Mohammed Sinan</>,
        role: <>Founder, BuildTech Materials</>,
        location: <>Malappuram</>,
      },
      {
        text: (
          <>
            "Their local SEO work literally put us on the map. We now get daily calls from people searching for our services on Google. They are definitely the top digital marketing company around."
          </>
        ),
        author: <>Fathima Zahra</>,
        role: <>Owner, Zaya Aesthetics</>,
        location: <>Manjeri</>,
      },
      {
        text: (
          <>
            "The difference between our old freelancer and Zaynlo is night and day. The quality of the graphics, the speed of the website, and the clear reporting. It's a premium experience."
          </>
        ),
        author: <>Vishnu Das</>,
        role: <>CEO, Malabar Auto Hub</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "We gave them a set budget for lead generation, and they delivered 3x the leads we expected. They treat your business like it's their own."
          </>
        ),
        author: <>Thomas Varghese</>,
        role: <>Partner, Skyline Developers</>,
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
        <title>Top Digital Marketing Company In Perinthalmanna | Zaynlo</title>
        <meta
          name="description"
          content="Grow your business with Zaynlo, the Top Digital Marketing Company In Perinthalmanna. Expert SEO, high-performance Web Development, and ROI-driven Ads."
        />
        <link
          rel="canonical"
          href={`${site_url}/top-digital-marketing-company-in-perinthalmanna`}
        />
        
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Schema Markup for Local Business mapped to Perinthalmanna */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness", 
              "name": "Zaynlo - Top Digital Marketing Company In Perinthalmanna",
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
                  "name": "Comprehensive Digital Marketing Services",
                  "description": "Full-stack digital solutions including Corporate Web Development, Advanced SEO, Brand Identity, and Performance Marketing."
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
                Our Company <span className="text-[#dbe11f]">Workflow</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Common Questions <span className="text-[#dbe11f]">& Answers</span>
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

          {/* 8. LOCATION MAP - Explicitly for Perinthalmanna */}
          <SEOMap
            h2={
              <>
                Visit Our <span className="text-[#dbe11f]">Headquarters</span>
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

export default Top_Digital_Marketing_Company_In_Perinthalmanna;