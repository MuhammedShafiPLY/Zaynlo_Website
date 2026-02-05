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

const BestWebDevelopmentAgencyInKerala = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "WEB DEVELOPMENT" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best Web Development Agency In Kerala</span>{" "}
        for High-Performance Sites
      </>
    ),
    intro: (
      <>
        Your website is your 24/7 salesperson. If it's slow, ugly, or hard to use, 
        you are losing money. Welcome to Zaynlo, the 
        <Link to="/">
          <strong className="text-[#dbe11f] hover:underline px-1">
             Best Web Development Agency In Kerala
          </strong>
        </Link>, 
        where we hand-code digital experiences that load instantly and convert visitors into buyers.
        <br />
        <br />
        We don't just install themes; we engineer business assets. Whether you need a 
        custom React application, a high-scale E-commerce store, or an enterprise WordPress 
        site, <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link> 
        combines silicon-valley tech standards with local market understanding. 
        Partner with the agency that is setting the benchmark for coding excellence in Kerala.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why We Are the <span className="text-[#dbe11f]">Best Web Development Agency In Kerala</span>
      </>
    ),
    desc: (
      <>
        Most agencies resell <span>$50 templates</span>. We build custom solutions. As the <Link to="/"><strong className="text-[#dbe11f]">Top Digital Marketing Company In Kerala</strong></Link>, we understand that a website must be built for SEO and Speed from the very first line of code.
      </>
    ),
    quote: (
      <>
        "A slow website is a business killer. We build lightning-fast platforms using Next.js and React that Google loves and your customers enjoy."
      </>
    ),
    features: [
      {
        title: (
          <>
            Speed <span className="text-[#dbe11f]">Obsessed</span>
          </>
        ),
        desc: (
          <>
            We don't settle for "okay" speeds. We optimize for <strong className="text-white">Core Web Vitals</strong>, ensuring your site loads in under 2 seconds. This is why we are the Best Web Development Agency In Kerala.
          </>
        ),
      },
      {
        title: (
          <>
            Security <span className="text-[#dbe11f]">First</span>
          </>
        ),
        desc: (
          <>
            Hackers never sleep, and neither does our security. We implement enterprise-grade firewalls, SSL encryption, and secure coding practices to keep your data safe.
          </>
        ),
      },
      {
        title: (
          <>
            Mobile-First <span className="text-[#dbe11f]">Architecture</span>
          </>
        ),
        desc: (
          <>
            70% of Kerala's traffic is mobile. We design for the smallest screen first, ensuring your site looks perfect on every device, from iPhones to budget Androids.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Our Core <span className="text-[#dbe11f]">Development Services</span>
      </>
    ),
    desc: (
      <>
        We deliver a full-stack engineering suite that solidifies our position as the 
        <Link to="/"><strong className="text-[#dbe11f] px-1">Best Web Development Agency In Kerala</strong></Link>.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Custom Web Applications <span className="text-zinc-500 text-sm">(React/Next.js)</span>
          </>
        ),
        desc: (
          <>
            For businesses that need more than a brochure. We build complex, interactive web apps using React and Next.js that function like native mobile apps.
          </>
        ),
        subPoints: [
          <>Single Page <span className="text-[#dbe11f]">Applications (SPA)</span></>,
          <>SaaS <span className="text-zinc-500">Platform Development</span></>,
          <>API <span className="text-[#dbe11f]">Integration</span></>,
        ],
      },
      {
        title: (
          <>
            2. E-Commerce Solutions <span className="text-[#dbe11f]">(Shopify/Woo)</span>
          </>
        ),
        desc: (
          <>
            Turn visitors into customers. We build high-converting online stores with secure payment gateways, inventory management, and smooth checkout flows.
          </>
        ),
        subPoints: [
          <>Custom <span className="text-[#dbe11f]">Store Design</span></>,
          <>Payment Gateway <span className="text-zinc-500">Setup</span></>,
        ],
      },
      {
        title: (
          <>
            3. Enterprise WordPress <span className="text-zinc-500 text-sm">(CMS)</span>
          </>
        ),
        desc: (
          <>
            We take WordPress beyond the basics. We build custom themes and plugins that are lightweight, secure, and easy for your team to manage without coding.
          </>
        ),
        subPoints: [
          <>Custom <span className="text-[#dbe11f]">Theme Development</span></>,
          <>Speed <span className="text-zinc-500">Optimization</span></>,
        ],
      },
      {
        title: (
          <>
            4. SEO-Integrated Design <span className="text-[#dbe11f]">(Growth)</span>
          </>
        ),
        desc: (
          <>
            We don't just build sites; we build ranking machines. As a premier <strong className="text-[#dbe11f]">SEO Services Company In Kerala</strong>, we bake SEO into the code structure itself.
          </>
        ),
        subPoints: [],
      },
    ],
  };

  // --- 4. PROCESS DATA ---
  const processData = [
    {
      title: <>Blueprint</>,
      desc: (
        <>
          We wireframe the user journey (UI/UX) to ensure the site is intuitive and conversion-focused.
        </>
      ),
    },
    {
      title: <>Code</>,
      desc: (
        <>
          Our developers hand-code the site using modern frameworks like <span className="text-[#dbe11f]">React</span> for maximum speed.
        </>
      ),
    },
    {
      title: <>Test</>,
      desc: (
        <>
          We stress-test the site across devices, browsers, and network speeds to ensure perfection.
        </>
      ),
    },
    {
      title: <>Launch</>,
      desc: (
        <>
          We deploy to secure servers and connect analytics, handing you the keys to your <span className="text-[#dbe11f]">Digital HQ</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why is Zaynlo the <Link to="/" className="text-[#dbe11f] hover:underline">Best Web Development Agency In Kerala?</Link>
        </>
      ),
      answer: (
        <>
          Because we code for revenue, not just aesthetics. While other agencies focus on making things "look pretty," we focus on "loading speed," "security," and "user experience." We combine the technical depth of a software house with the marketing brain of an agency, making us the undisputed Best Web Development Agency In Kerala.
        </>
      ),
    },
    {
      question: <>Do you use templates or custom code?</>,
      answer: (
        <>
          We specialize in <span className="text-white font-bold">Custom Coding</span>. While we can work with templates for low-budget projects, our expertise lies in building bespoke React and WordPress solutions that are unique to your brand and free from "code bloat."
        </>
      ),
    },
    {
      question: <>How long does it take to build a website?</>,
      answer: (
        <>
          A standard business website typically takes 2-4 weeks. Complex e-commerce platforms or custom web applications can take 6-8 weeks. We prioritize quality checks to ensure you never face downtime after launch.
        </>
      ),
    },
    {
      question: <>Will my website be mobile-friendly?</>,
      answer: (
        <>
          100%. We follow a "Mobile-First" design philosophy. Your website will look and function perfectly on smartphones, tablets, and desktops. This is crucial for ranking on Google today.
        </>
      ),
    },
    {
      question: <>Do you provide hosting and maintenance?</>,
      answer: (
        <>
          Yes. We offer secure hosting packages and monthly maintenance plans. We handle the backups, security updates, and technical tweaks so you can focus entirely on running your business.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Sites We Built That <span className="text-[#dbe11f]">Drive Growth</span>
      </>
    ),
    desc: (
      <>
        See why businesses trust the Best Web Development Agency In Kerala with their digital infrastructure.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "Our old WordPress site took 6 seconds to load. Zaynlo rebuilt it using React, and now it loads instantly. Our bounce rate dropped, and sales went up. Truly the best web development agency in Kerala."
          </>
        ),
        author: <>Deepak Raj</>,
        role: <>CTO, Keralam Tech</>,
        location: <>Kochi</>,
      },
      {
        text: (
          <>
            "They built a complex e-commerce platform for our wholesale business. The inventory management integration is flawless. Highly technical and professional team."
          </>
        ),
        author: <>Anwar Sadath</>,
        role: <>MD, Malabar Wholesales</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "I wanted a website that looked like Apple's—clean, fast, and smooth. Zaynlo delivered exactly that. Their design team is world-class."
          </>
        ),
        author: <>Sneha George</>,
        role: <>Founder, Minimalist Decor</>,
        location: <>Trivandrum</>,
      },
      {
        text: (
          <>
            "We needed a custom booking system for our clinic. They coded it from scratch, and it works perfectly. No bugs, no issues. Great support."
          </>
        ),
        author: <>Dr. Moosa</>,
        role: <>Director, Wellness Clinic</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "Professional coders, not just drag-and-drop designers. They explained the tech stack to me and helped me choose the right server. Very transparent."
          </>
        ),
        author: <>Rahul K.</>,
        role: <>Owner, Startup Hub</>,
        location: <>Thrissur</>,
      },
      {
        text: (
          <>
            "The website they built is ranking #1 on Google because the code is so clean. SEO and Development go hand in hand with Zaynlo."
          </>
        ),
        author: <>Jibin Thomas</>,
        role: <>Marketing Head, AutoWorld</>,
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
        <title>Best Web Development Agency In Kerala | Zaynlo</title>
        <meta
          name="description"
          content="Build high-performance websites with Zaynlo, the Best Web Development Agency In Kerala. We specialize in Custom React, Next.js, and E-commerce solutions."
        />
        <link
          rel="canonical"
          href={`${site_url}/best-web-development-agency-in-kerala`}
        />
        
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Schema Markup: Adjusted for Web Development focus */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - Best Web Development Agency In Kerala",
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
                  "name": "Web Development Services",
                  "description": "Custom React, Next.js, and WordPress Development"
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
                From Code to <span className="text-[#dbe11f]">Conversion</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Development <span className="text-[#dbe11f]">FAQ</span>
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
                Visit Our <span className="text-[#dbe11f]">Dev Center</span>
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

export default BestWebDevelopmentAgencyInKerala;