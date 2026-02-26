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

const Best_Branding_Agency_In_Perinthalmanna = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "LOCAL BRANDING AGENCY" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best Branding Agency</span>{" "}
        In Perinthalmanna for Premium Identities
      </>
    ),
    intro: (
      <>
        A logo is not a brand. A brand is a feeling—it’s what people say about your business when you are not in the room. If your visual identity looks cheap, outdated, or generic, customers will assume your services are too. Welcome to Zaynlo, the 
        <Link to="/"><strong className="text-[#dbe11f] hover:underline px-1">Best Branding Agency in Perinthalmanna</strong></Link>.
        <br />
        <br />
        You no longer need to look to metro cities for high-end design. Whether you are launching a luxury boutique in Manjeri or rebranding a legacy hospital in Malappuram, <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link> 
        crafts visual identities that speak to your audience before you even say a word. We build brands that command higher prices and absolute trust.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why We Are Perinthalmanna’s <span className="text-[#dbe11f]">Top Branding Agency</span>
      </>
    ),
    desc: (
      <>
        Most designers just give you a pretty graphic. We give you a strategic corporate identity. Here is why the top businesses in the district choose our creative studio.
      </>
    ),
    quote: (
      <>
        "Design is the silent ambassador of your brand. We ensure your ambassador speaks the language of premium quality right here from our Perinthalmanna HQ."
      </>
    ),
    features: [
      {
        title: (
          <>
            Strategic <span className="text-[#dbe11f]">Storytelling</span>
          </>
        ),
        desc: (
          <>
            We don't start with sketching; we start with thinking. We dig deep into your business's "Why" to create a narrative that resonates emotionally with the Kerala audience.
          </>
        ),
      },
      {
        title: (
          <>
            Psychology of <span className="text-[#dbe11f]">Color & Type</span>
          </>
        ),
        desc: (
          <>
            Every color evokes a specific emotion. We scientifically select palettes and typography systems that trigger the right buying behavior and trust in your customers.
          </>
        ),
      },
      {
        title: (
          <>
            Full <span className="text-[#dbe11f]">Ownership</span>
          </>
        ),
        desc: (
          <>
            Unlike shady agencies that hold your files hostage, once your project is fully paid, you receive complete copyright ownership and all high-resolution vector files (SVG/AI).
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Our Premium <span className="text-[#dbe11f]">Design Services</span>
      </>
    ),
    desc: (
      <>
        We offer a complete visual transformation suite that solidifies our reputation as the 
        <Link to="/"><strong className="text-[#dbe11f] px-1">Best Branding Agency in Perinthalmanna</strong></Link>.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Core Identity Design <span className="text-zinc-500 text-sm">(Logos)</span>
          </>
        ),
        desc: (
          <>
            We create timeless, memorable logos. We provide multiple distinct concepts and work with you through up to 3 rounds of minor revisions to achieve absolute perfection.
          </>
        ),
        subPoints: [
          <>Primary & Secondary <span className="text-[#dbe11f]">Logos</span></>,
          <>Color & Typography <span className="text-zinc-500">Systems</span></>,
        ],
      },
      {
        title: (
          <>
            2. Brand Guidelines <span className="text-[#dbe11f]">(The Rulebook)</span>
          </>
        ),
        desc: (
          <>
            Consistency is the key to a premium brand. We deliver a comprehensive "Brand Bible" that dictates exactly how your logo, colors, and fonts should be used across all media.
          </>
        ),
        subPoints: [
          <>Visual <span className="text-[#dbe11f]">Consistency</span></>,
          <>Do's and <span className="text-zinc-500">Don'ts</span></>,
        ],
      },
      {
        title: (
          <>
            3. Corporate Stationery <span className="text-zinc-500 text-sm">(Print)</span>
          </>
        ),
        desc: (
          <>
            Make an unforgettable physical impression. We design elegant business cards, professional letterheads, and branded envelopes that make your company look like an enterprise.
          </>
        ),
        subPoints: [
          <>Business Card <span className="text-[#dbe11f]">Design</span></>,
          <>Letterheads & <span className="text-zinc-500">Signatures</span></>,
        ],
      },
      {
        title: (
          <>
            4. Packaging & Social Assets <span className="text-[#dbe11f]">(Digital & Physical)</span>
          </>
        ),
        desc: (
          <>
            From custom product packaging that pops off supermarket shelves to cohesive social media kits that unify your Instagram and Facebook presence.
          </>
        ),
        subPoints: [],
      },
    ],
  };

  // --- 4. PROCESS DATA ---
  const processData = [
    {
      title: <>Discover</>,
      desc: (
        <>
          We invite you to our office to discuss your brand's mission, target audience, and market positioning.
        </>
      ),
    },
    {
      title: <>Concept</>,
      desc: (
        <>
          Our creative team develops 2 to 3 distinct logo concepts based on strategic mood boarding.
        </>
      ),
    },
    {
      title: <>Refine</>,
      desc: (
        <>
          We collaborate with you through structured revision rounds to polish the chosen concept into a masterpiece.
        </>
      ),
    },
    {
      title: <>Deliver</>,
      desc: (
        <>
          We hand over your complete vector files, mockups, and brand guidelines, ready to dominate the <span className="text-[#dbe11f]">Market</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why should I choose Zaynlo as my <Link to="/" className="text-[#dbe11f] hover:underline">Branding Agency in Perinthalmanna?</Link>
        </>
      ),
      answer: (
        <>
          We bring metro-city design standards to Malappuram. Instead of relying on cheap online templates, our in-house designers build your identity from scratch. You get the luxury of sitting down with our team locally while receiving globally competitive artwork.
        </>
      ),
    },
    {
      question: <>What is the starting cost for logo design?</>,
      answer: (
        <>
          Our starting price for a basic Logo & Color Palette package is just <span className="text-white font-bold">₹2,499/-</span>. However, for growing businesses, we highly recommend our comprehensive Medium or Premium packages which include stationery suites and brand guidelines.
        </>
      ),
    },
    {
      question: <>How many revisions do I get?</>,
      answer: (
        <>
          Every branding package includes up to <span className="text-[#dbe11f]">3 rounds of minor revisions</span>. This ensures we have enough flexibility to perfect the design based on your feedback. (Note: Major concept changes after initial approval may incur extra charges).
        </>
      ),
    },
    {
      question: <>Who owns the copyright to the final logo?</>,
      answer: (
        <>
          You do. Once the final 50% payment is cleared, full copyright ownership of the chosen logo design is transferred directly to you. We simply retain the right to showcase the work in our agency portfolio.
        </>
      ),
    },
    {
      question: <>How long does the branding process take?</>,
      answer: (
        <>
          It depends on the package selected. Our starter packages can take 1-3 days, while our Premium comprehensive branding suites (including guidelines and animations) typically take 7-10 days to perfect.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Brands We Have <span className="text-[#dbe11f]">Elevated</span>
      </>
    ),
    desc: (
      <>
        See why local businesses in Perinthalmanna and Malappuram trust Zaynlo with their visual identity.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "We were launching a premium cafe in Perinthalmanna and needed a logo that felt luxurious. Zaynlo completely nailed it. The color palette and typography they chose gave our business an instant high-end feel."
          </>
        ),
        author: <>Ashiq Rahman</>,
        role: <>Founder, The Brew Estate</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "I wanted to rebrand my dental clinic to look more modern. The team at Zaynlo listened to my vision and delivered a brand identity that is clean, professional, and trustworthy. The best branding agency in town!"
          </>
        ),
        author: <>Dr. Fathima S.</>,
        role: <>MD, WhitePearls Dental</>,
        location: <>Malappuram</>,
      },
      {
        text: (
          <>
            "Their Brand Guidelines book is a lifesaver. We now know exactly how to use our logo on uniforms, signboards, and social media without it looking messy. It was worth every penny."
          </>
        ),
        author: <>Nishad K.</>,
        role: <>Director, BuildPro Materials</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "The packaging design they created for our local spices export business allowed us to place our products in premium supermarkets across the UAE. Truly world-class quality."
          </>
        ),
        author: <>Abdul Jaleel</>,
        role: <>Owner, Malabar Spice Co.</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "Having a creative agency right here in Aysha Commercial Complex makes things so easy. We sat down, brainstormed, and within a week they handed us a beautiful new corporate identity."
          </>
        ),
        author: <>Rahul Menon</>,
        role: <>CEO, RM Architects</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "They gave us 3 distinct concepts to choose from, and honestly, we loved all of them. The revision process was smooth, and they delivered all the vector files on time."
          </>
        ),
        author: <>Sujith Nair</>,
        role: <>Manager, Kerala Travels</>,
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
        <title>Best Branding Agency In Perinthalmanna | Zaynlo</title>
        <meta
          name="description"
          content="Elevate your business with Zaynlo, the Best Branding Agency In Perinthalmanna. We craft premium logo designs, packaging, and complete brand identities."
        />
        <link
          rel="canonical"
          href={`${site_url}/best-branding-agency-in-perinthalmanna`}
        />
        
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Schema Markup for Local Branding Agency */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - Best Branding Agency In Perinthalmanna",
              "image": "${site_url}/logo.png",
              "@id": "${site_url}/#organization",
              "url": "${site_url}",
              "telephone": "+919526299568",
              "priceRange": "₹2499 - ₹14999",
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
                  "name": "Premium Branding & Logo Design",
                  "description": "Logo creation, Brand Guidelines, Typography Systems, and Corporate Stationery for local businesses."
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
                The Design <span className="text-[#dbe11f]">Process</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Branding <span className="text-[#dbe11f]">FAQ</span>
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
                Visit Our <span className="text-[#dbe11f]">Studio</span>
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

export default Best_Branding_Agency_In_Perinthalmanna;