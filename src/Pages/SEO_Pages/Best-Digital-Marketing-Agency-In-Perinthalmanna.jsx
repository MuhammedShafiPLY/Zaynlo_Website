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

const Best_Digital_Marketing_Agency_In_Perinthalmanna = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: HUMANIZED "PERINTHALMANNA" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best Digital Marketing Agency</span>{" "}
        in Perinthalmanna
      </>
    ),
    intro: (
      <>
        Let’s be honest—your business deserves better than "average." You need a team that 
        understands how to turn clicks into customers. Welcome to Zaynlo, the 
        <Link to="/">
          <strong className="text-[#dbe11f] hover:underline px-1">
             Best Digital Marketing Agency in Perinthalmanna
          </strong>
        </Link>.
        <br />
        <br />
        You don't need to chase agencies in Kochi or Calicut to get world-class results. 
        We have brought that expertise right to your doorstep on NH 966. Whether you run a 
        hospital, a textile showroom, or a startup, 
        <Link to="/">
          <strong className="text-[#dbe11f] px-1">Zaynlo</strong>
        </Link> 
        is your local partner with a global mindset. Let's grow your brand, right here from Malappuram.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Locals Choose Us as the <span className="text-[#dbe11f]">#1 Agency</span>
      </>
    ),
    desc: (
      <>
        It's simple: We are accessible, and we deliver. As the <Link to="/"><strong className="text-[#dbe11f]">Best Digital Advertising Agency In Kerala</strong></Link>, we combine big-city strategy with local trust. We don't just send reports; we drive revenue.
      </>
    ),
    quote: (
      <>
        "Stop relying on remote freelancers who might ghost you. We are right here in Perinthalmanna. Walk into our office, grab a coffee, and let's talk business."
      </>
    ),
    features: [
      {
        title: (
          <>
            We Know <span className="text-[#dbe11f]">Malappuram</span>
          </>
        ),
        desc: (
          <>
            We understand the local market psychology. We know what sells in Angadipuram and what trends work in Manjeri. We turn that local knowledge into profit for you.
          </>
        ),
      },
      {
        title: (
          <>
            Quality You Can <span className="text-[#dbe11f]">Trust</span>
          </>
        ),
        desc: (
          <>
            As the <strong className="text-white">Best Web Development Agency In Kerala</strong>, we don't use cheap, slow templates. We hand-code websites that load fast and rank high on Google.
          </>
        ),
      },
      {
        title: (
          <>
            Real <span className="text-[#dbe11f]">Accountability</span>
          </>
        ),
        desc: (
          <>
            No hiding behind emails. We are a registered company with a physical office at Aysha Commercial Complex. You will always know exactly who is handling your brand.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Services Tailored for <span className="text-[#dbe11f]">Perinthalmanna</span>
      </>
    ),
    desc: (
      <>
        We provide everything you need to dominate the market, positioning us as the 
        <Link to="/"><strong className="text-[#dbe11f] px-1">Best Branding Agency In Kerala</strong></Link>.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. SEO That Actually Works <span className="text-zinc-500 text-sm">(Rank #1)</span>
          </>
        ),
        desc: (
          <>
            When people search for your service in Perinthalmanna, do they find you or your competitor? As a leading <strong className="text-[#dbe11f]">SEO Services Company In Kerala</strong>, we make sure you show up first on Google and Maps.
          </>
        ),
        subPoints: [
          <>Google Maps <span className="text-[#dbe11f]">("Near Me" Ranking)</span></>,
          <>Traffic for <span className="text-zinc-500">Retail & Medical</span></>,
          <>Quality <span className="text-[#dbe11f]">Backlinks</span></>,
        ],
      },
      {
        title: (
          <>
            2. Social Media Growth <span className="text-[#dbe11f]">(SMM)</span>
          </>
        ),
        desc: (
          <>
            Everyone in Malappuram is on Instagram. We help you grab their attention with high-quality Reels and targeted ads that bring customers into your store.
          </>
        ),
        subPoints: [
          <>Viral <span className="text-[#dbe11f]">Video Production</span></>,
          <>Targeted <span className="text-zinc-500">Lead Generation</span></>,
        ],
      },
      {
        title: (
          <>
            3. Branding That Stands Out <span className="text-zinc-500 text-sm">(Identity)</span>
          </>
        ),
        desc: (
          <>
            Your brand is your reputation. From professional logos to premium packaging, we deliver the polish you expect from the <strong className="text-[#dbe11f]">Best Branding Agency In Kerala</strong>.
          </>
        ),
        subPoints: [
          <>Logo & <span className="text-[#dbe11f]">Visual Identity</span></>,
          <>Product <span className="text-zinc-500">Packaging Design</span></>,
        ],
      },
      {
        title: (
          <>
            4. High-Speed Websites <span className="text-[#dbe11f]">(Development)</span>
          </>
        ),
        desc: (
          <>
            A slow website loses customers. We build lightning-fast, mobile-friendly sites that look great and convert visitors into buyers.
          </>
        ),
        subPoints: [],
      },
    ],
  };

  // --- 4. PROCESS DATA ---
  const processData = [
    {
      title: <>Meet Us</>,
      desc: (
        <>
          We sit down with you at our Perinthalmanna office to understand your goals.
        </>
      ),
    },
    {
      title: <>The Plan</>,
      desc: (
        <>
          We create a custom roadmap using our experience as the <span className="text-[#dbe11f]">Top Digital Marketing Company</span>.
        </>
      ),
    },
    {
      title: <>Action</>,
      desc: (
        <>
          Our team executes the strategy—creating content, running ads, and fixing your SEO.
        </>
      ),
    },
    {
      title: <>Results</>,
      desc: (
        <>
          We track everything. You see exactly how your investment is turning into <span className="text-[#dbe11f]">Profit</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why is Zaynlo considered the <Link to="/" className="text-[#dbe11f] hover:underline">Best Digital Marketing Agency in Perinthalmanna?</Link>
        </>
      ),
      answer: (
        <>
          It's our combination of local presence and elite skill. Most agencies in Malappuram outsource their work. At Zaynlo, we are a full team of in-house experts right here in town, delivering the same quality you'd expect from a top Kochi agency.
        </>
      ),
    },
    {
      question: <>Can I meet your team in person?</>,
      answer: (
        <>
          Yes! We strongly encourage it. We are located at <span className="text-white font-bold">Aysha Commercial Complex, NH 966</span>. Come visit us; it's always better to discuss business face-to-face.
        </>
      ),
    },
    {
      question: <>Do you work with small local shops?</>,
      answer: (
        <>
          Absolutely. We love helping local Perinthalmanna businesses grow. We have specific, affordable packages designed for local retail shops, clinics, and service providers to get them online.
        </>
      ),
    },
    {
      question: <>How does SEO help my local business?</>,
      answer: (
        <>
          As an expert <span className="text-white font-bold">SEO Services Company In Kerala</span>, we optimize your Google Maps profile. So when someone in Perinthalmanna searches "best [your service] near me," your shop shows up at the top.
        </>
      ),
    },
    {
      question: <>Why should I choose you over a freelancer?</>,
      answer: (
        <>
          Reliability. A freelancer is a one-man show who might get busy or disappear. Zaynlo is a registered company with a full team. We are always here to support you, ensuring your business never stops growing.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        What <span className="text-[#dbe11f]">Locals Say</span> About Us
      </>
    ),
    desc: (
      <>
        Real feedback from business owners in Perinthalmanna and across Malappuram.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "I used to hire agencies from Kochi, but communication was always a struggle. Having Zaynlo right here in Perinthalmanna changed everything. Same quality, but much better support."
          </>
        ),
        author: <>Dr. Riaz Ahmed</>,
        role: <>MD, Care Dental</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "Their social media team really understands the Malappuram vibe. Our showroom footfall increased significantly within just 3 months of working with them."
          </>
        ),
        author: <>Fathima S.</>,
        role: <>Owner, Zaya Boutique</>,
        location: <>Manjeri</>,
      },
      {
        text: (
          <>
            "Hands down the Best Web Development Agency In Kerala. They built us a custom e-commerce site that is fast, easy to manage, and looks amazing."
          </>
        ),
        author: <>Vishnu Prasad</>,
        role: <>CEO, TechZone</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "Zaynlo's branding work is premium. They gave our local spices brand a look that competes with international products on supermarket shelves."
          </>
        ),
        author: <>Hassan K.</>,
        role: <>Director, Malabar Spices</>,
        location: <>Malappuram</>,
      },
      {
        text: (
          <>
            "Professional and transparent. They don't just promise; they show results. Definitely the top digital marketing company in our area."
          </>
        ),
        author: <>Rahul Menon</>,
        role: <>Founder, Urban Architects</>,
        location: <>Thrissur</>,
      },
      {
        text: (
          <>
            "Their SEO is the real deal. We are now ranking #1 for our main keywords in Perinthalmanna. Highly recommended."
          </>
        ),
        author: <>Sinan P.</>,
        role: <>Manager, Royal Motors</>,
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
        <title>Best Digital Marketing Agency In Perinthalmanna | Zaynlo</title>
        <meta
          name="description"
          content="Zaynlo is the Best Digital Marketing Agency In Perinthalmanna. We offer top-tier SEO, Branding, and Web Development services right here in Malappuram."
        />
        <link
          rel="canonical"
          href={`${site_url}/best-digital-marketing-agency-in-perinthalmanna`}
        />
        
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Schema Markup: Adjusted for Local SEO focus */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness", 
              "name": "Zaynlo - Best Digital Marketing Agency In Perinthalmanna",
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
            imageSrc="//seopage.webp"
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
                Our Process for <span className="text-[#dbe11f]">Local Growth</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Common <span className="text-[#dbe11f]">Questions</span>
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
                Visit Us in <span className="text-[#dbe11f]">Perinthalmanna</span>
              </>
            }
            location={{
              address:
                "Aysha Commercial Complex, X6G9+JRR, NH 966, Perinthalmanna, Kerala 679322",
              phone: "+91 952 629 9568",
              email: "info@zaynlo.com",
              hours: "Mon - Sat: 9 AM - 6 PM",
              googleMapsUrl:
                "https://www.google.com/maps/dir/10.9692205,76.2131469/Aysha+Commercial+Complex,+X6G9%2BJRR,+NH+966,+Perinthalmanna,+Kerala+679322/@10.9730835,76.2143829,1136m/data=!3m2!1e3!4b1!4m17!1m7!3m6!1s0x3ba7cd8452df58d1:0x8773758fa664033a!2sAysha+Commercial+Complex!8m2!3d10.9766215!4d76.2195279!16s%2Fg%2F11v649nyv7!4m8!1m1!4e1!1m5!1m1!1s0x3ba7cd8452df58d1:0x8773758fa664033a!2m2!1d76.2195277!2d10.9767841?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D", // Replace with real link
            }}
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1236.757032048295!2d76.21832543511759!3d10.976784065613975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd8452df58d1%3A0x8773758fa664033a!2sAysha%20Commercial%20Complex!5e1!3m2!1sen!2sin!4v1770227496483!5m2!1sen!2sin" // Replace with real embed code
          />

          <SEOLocations />

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
};

export default Best_Digital_Marketing_Agency_In_Perinthalmanna;