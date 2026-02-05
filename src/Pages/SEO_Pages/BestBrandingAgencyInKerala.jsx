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

const BestBrandingAgencyKerala = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "BRANDING AGENCY" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best Branding Agency In Kerala</span>{" "}
        for Iconic Identities
      </>
    ),
    intro: (
      <>
        A logo is not a brand. A brand is a feeling. It’s the promise you make 
        to your customers before you even say a word. Welcome to Zaynlo, the 
        <Link to="/">
          <strong className="text-[#dbe11f] hover:underline px-1">
             Best Branding Agency In Kerala
          </strong>
        </Link>, 
        where we turn businesses into legacies.
        <br />
        <br />
        In a market crowded with generic designs, you need an identity that screams 
        quality. Whether you are launching a luxury perfume in Kochi or a tech startup 
        in Calicut, <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link> 
        crafts visual identities that don't just look good—they stick in the mind. 
        Partner with the agency that understands the art of storytelling in God's Own Country.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why We Are the <span className="text-[#dbe11f]">Best Branding Agency In Kerala</span>
      </>
    ),
    desc: (
      <>
        Most agencies just make you "look nice." As the <Link to="/"><strong className="text-[#dbe11f]">Top Digital Marketing Company In Kerala</strong></Link>, we make you "look expensive" and "trustworthy." We build brands that command higher prices.
      </>
    ),
    quote: (
      <>
        "Design is the silent ambassador of your brand. We ensure your ambassador speaks the language of premium quality and absolute trust."
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
            We don't start with sketching; we start with thinking. We dig deep into your "Why" to create a brand narrative that resonates emotionally with your Kerala audience.
          </>
        ),
      },
      {
        title: (
          <>
            Psychology of <span className="text-[#dbe11f]">Color</span>
          </>
        ),
        desc: (
          <>
            Every color evokes a specific emotion. As the Best Branding Agency In Kerala, we scientifically select palettes that trigger the right buying behavior in your customers.
          </>
        ),
      },
      {
        title: (
          <>
            Future-Proof <span className="text-[#dbe11f]">Identity</span>
          </>
        ),
        desc: (
          <>
            Trends fade, but style is eternal. We create timeless identities that won't look outdated in two years, saving you the cost of constant rebranding.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Our Core <span className="text-[#dbe11f]">Branding Services</span>
      </>
    ),
    desc: (
      <>
        We offer a complete visual transformation suite that solidifies our reputation as the 
        <Link to="/"><strong className="text-[#dbe11f] px-1">Best Branding Agency In Kerala</strong></Link>.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Brand Identity Design <span className="text-zinc-500 text-sm">(Logo+)</span>
          </>
        ),
        desc: (
          <>
            More than just a logo. We create a comprehensive visual system including typography, color palettes, and usage guidelines that define who you are.
          </>
        ),
        subPoints: [
          <>Custom <span className="text-[#dbe11f]">Logo Design</span></>,
          <>Brand <span className="text-zinc-500">Guidelines Book</span></>,
          <>Visual <span className="text-[#dbe11f]">Assets</span></>,
        ],
      },
      {
        title: (
          <>
            2. Packaging Design <span className="text-[#dbe11f]">(Retail)</span>
          </>
        ),
        desc: (
          <>
            Your product needs to pop off the shelf. We design packaging that customers want to pick up, photograph, and share on social media.
          </>
        ),
        subPoints: [
          <>FMCG <span className="text-[#dbe11f]">Packaging</span></>,
          <>Luxury <span className="text-zinc-500">Unboxing Experience</span></>,
        ],
      },
      {
        title: (
          <>
            3. Rebranding Services <span className="text-zinc-500 text-sm">(Refresh)</span>
          </>
        ),
        desc: (
          <>
            Is your current look hurting your sales? We modernize legacy businesses, giving them a fresh face while retaining their established heritage.
          </>
        ),
        subPoints: [
          <>Logo <span className="text-[#dbe11f]">Modernization</span></>,
          <>Market <span className="text-zinc-500">Repositioning</span></>,
        ],
      },
      {
        title: (
          <>
            4. Digital Brand Presence <span className="text-[#dbe11f]">(Web)</span>
          </>
        ),
        desc: (
          <>
            We translate your new identity into the digital world. As the <strong className="text-[#dbe11f]">Best Web Development Agency In Kerala</strong>, we ensure your website matches your premium new look.
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
          We immerse ourselves in your business to understand your values, audience, and competitors.
        </>
      ),
    },
    {
      title: <>Direction</>,
      desc: (
        <>
          We present mood boards and strategic directions to align on the visual "vibe" before designing.
        </>
      ),
    },
    {
      title: <>Creation</>,
      desc: (
        <>
          Our designers craft the logo, typography, and assets, iterating until it’s perfect.
        </>
      ),
    },
    {
      title: <>Launch</>,
      desc: (
        <>
          We hand over your Brand Bible and files, ready for you to take over the <span className="text-[#dbe11f]">Market</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why is Zaynlo the <Link to="/" className="text-[#dbe11f] hover:underline">Best Branding Agency In Kerala?</Link>
        </>
      ),
      answer: (
        <>
          Because we understand business as well as art. A pretty logo is useless if it doesn't attract the right customers. Zaynlo fuses strategic market positioning with elite design, making us the Best Branding Agency In Kerala for growth-focused companies.
        </>
      ),
    },
    {
      question: <>How much does branding cost in Kerala?</>,
      answer: (
        <>
          Branding is an investment in your company's value. Our packages vary based on deliverables (e.g., just a logo vs. full guidelines and packaging). Contact us for a custom quote tailored to your startup or enterprise needs.
        </>
      ),
    },
    {
      question: <>Do you do packaging design for products?</>,
      answer: (
        <>
          Yes! We specialize in packaging. From food products in Malappuram to electronics in Kochi, we design boxes and labels that stand out on crowded supermarket shelves.
        </>
      ),
    },
    {
      question: <>What is included in a Brand Guideline?</>,
      answer: (
        <>
          Think of it as your brand's rulebook. It includes your logo usage, color codes (CMYK/RGB), typography rules, and do's/don'ts. This ensures your brand looks consistent whether it's on a business card or a billboard.
        </>
      ),
    },
    {
      question: <>Can you refresh my old logo without changing it completely?</>,
      answer: (
        <>
          Absolutely. This is called a "Brand Refresh." We polish your existing identity to look modern and clean while keeping the familiarity your existing customers trust.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Brands We Have <span className="text-[#dbe11f]">Transformed</span>
      </>
    ),
    desc: (
      <>
        See why businesses choose the Best Branding Agency In Kerala to define their identity.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "Zaynlo didn't just design a logo; they gave our company a soul. The rebranding completely changed how investors looked at us. Truly the best branding agency in Kerala."
          </>
        ),
        author: <>Sandeep Menon</>,
        role: <>CEO, FinTech Corp</>,
        location: <>Kochi</>,
      },
      {
        text: (
          <>
            "Their packaging design for our spice export business was a game changer. We stood out instantly in the Dubai market. Incredible attention to detail."
          </>
        ),
        author: <>Abdul Jaleel</>,
        role: <>Director, Malabar Exports</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "We wanted a luxury look for our boutique, and Zaynlo delivered. The colors, the font, the vibe—everything is perfect. They really listen to you."
          </>
        ),
        author: <>Meera Nair</>,
        role: <>Founder, The Silk Thread</>,
        location: <>Trivandrum</>,
      },
      {
        text: (
          <>
            "Professional, creative, and fast. They managed to capture the traditional essence of our Ayurveda brand while making it look modern."
          </>
        ),
        author: <>Dr. Harish</>,
        role: <>Owner, Veda Life</>,
        location: <>Thrissur</>,
      },
      {
        text: (
          <>
            "If you are launching a startup, go to Zaynlo. They set us up with a full brand kit that made us look like a million-dollar company from day one."
          </>
        ),
        author: <>Roshan K.</>,
        role: <>Co-Founder, GearUp</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "The best investment we made this year. Our new brand identity has given our sales team so much confidence."
          </>
        ),
        author: <>Thomas Mathew</>,
        role: <>MD, SkyBuilders</>,
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
        <title>Best Branding Agency In Kerala | Zaynlo</title>
        <meta
          name="description"
          content="Transform your identity with Zaynlo, the Best Branding Agency In Kerala. We specialize in Logo Design, Packaging, and Strategy for growth-driven brands."
        />
        <link
          rel="canonical"
          href={`${site_url}/best-branding-agency-in-kerala`}
        />
        
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Schema Markup: Adjusted for Branding focus */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - Best Branding Agency In Kerala",
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
            imageSrc="/about_banner.webp"
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
                The Art of <span className="text-[#dbe11f]">Branding</span>
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

          {/* 8. LOCATION MAP */}
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

export default BestBrandingAgencyKerala;