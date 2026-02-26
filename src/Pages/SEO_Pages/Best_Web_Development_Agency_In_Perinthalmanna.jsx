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

const Best_Web_Development_Agency_In_Perinthalmanna = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "WEB DEVELOPMENT PERINTHALMANNA" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best Web Development Agency</span>{" "}
        In Perinthalmanna
      </>
    ),
    intro: (
      <>
        In today's digital-first world, your website is your 24/7 salesperson. If it is slow, outdated, or built on a cheap template, you are actively losing customers to your competitors. Welcome to Zaynlo, recognized as the 
        <Link to="/"><strong className="text-[#dbe11f] hover:underline px-1">Best Web Development Agency in Perinthalmanna</strong></Link>.
        <br />
        <br />
        We don't just "build websites." We engineer high-performance digital ecosystems. Whether you need a sleek corporate portfolio to build trust, or a robust E-commerce platform that processes hundreds of orders a day, <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link> 
        uses modern tech stacks (like React and Node.js) to deliver speed, security, and absolute aesthetic perfection to businesses across Malappuram.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why We Are Perinthalmanna’s <span className="text-[#dbe11f]">Premier Web Agency</span>
      </>
    ),
    desc: (
      <>
        Anyone can install a WordPress theme. But building a secure, scalable, and conversion-optimized web application requires deep technical expertise. Here is why local market leaders choose our engineering team.
      </>
    ),
    quote: (
      <>
        "A beautiful website that doesn't convert is just digital art. We build high-speed, business-focused platforms designed to turn your casual visitors into paying clients."
      </>
    ),
    features: [
      {
        title: (
          <>
            Modern <span className="text-[#dbe11f]">Tech Stack</span>
          </>
        ),
        desc: (
          <>
            We leave clunky, outdated coding in the past. By utilizing modern frameworks like React.js, we ensure your website loads instantly, ranks higher on Google, and provides a flawless user experience.
          </>
        ),
      },
      {
        title: (
          <>
            In-House <span className="text-[#dbe11f]">Engineering</span>
          </>
        ),
        desc: (
          <>
            We do not outsource your code to cheap third-party vendors. Every line of code is written, tested, and deployed by our dedicated developers right here in our Perinthalmanna headquarters.
          </>
        ),
      },
      {
        title: (
          <>
            Full <span className="text-[#dbe11f]">Copyright Transfer</span>
          </>
        ),
        desc: (
          <>
            No hostage situations. Once the final settlement is cleared, full copyright ownership of the custom code, design, and assets is legally transferred to you. It is your business; you should own it.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Our Engineering & <span className="text-[#dbe11f]">Design Solutions</span>
      </>
    ),
    desc: (
      <>
        As the leading 
        <Link to="/"><strong className="text-[#dbe11f] px-1">Web Development Agency in Perinthalmanna</strong></Link>, we build scalable platforms tailored to your specific industry needs.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Corporate Websites <span className="text-zinc-500 text-sm">(B2B & B2C)</span>
          </>
        ),
        desc: (
          <>
            Establish absolute authority in your market. We design highly professional, multi-page corporate websites that clearly communicate your value proposition and generate qualified leads.
          </>
        ),
        subPoints: [
          <>SEO-Friendly <span className="text-[#dbe11f]">Architecture</span></>,
          <>Lead Generation <span className="text-zinc-500">Forms</span></>,
        ],
      },
      {
        title: (
          <>
            2. High-Volume E-Commerce <span className="text-[#dbe11f]">(Retail)</span>
          </>
        ),
        desc: (
          <>
            Take your local shop global. We build secure, beautifully designed online stores using Shopify or Custom MERN stacks, complete with inventory management and seamless payment gateways (Razorpay/Stripe).
          </>
        ),
        subPoints: [
          <>Mobile-First <span className="text-[#dbe11f]">Shopping</span></>,
          <>Abandoned Cart <span className="text-zinc-500">Recovery</span></>,
        ],
      },
      {
        title: (
          <>
            3. Landing Pages for Ads <span className="text-zinc-500 text-sm">(Performance)</span>
          </>
        ),
        desc: (
          <>
            Running Google or Meta Ads? We design ultra-fast, single-page funnels stripped of distractions, engineered purely to maximize your conversion rate and lower your Cost Per Acquisition.
          </>
        ),
        subPoints: [
          <>A/B Tested <span className="text-[#dbe11f]">Layouts</span></>,
          <>WhatsApp <span className="text-zinc-500">Integration</span></>,
        ],
      },
      {
        title: (
          <>
            4. Web Application Development <span className="text-[#dbe11f]">(Custom)</span>
          </>
        ),
        desc: (
          <>
            Need something more complex than a standard website? We build custom web portals, booking systems, and CRM dashboards tailored specifically to your internal business operations.
          </>
        ),
        subPoints: [],
      },
    ],
  };

  // --- 4. PROCESS DATA ---
  const processData = [
    {
      title: <>Wireframe</>,
      desc: (
        <>
          We start with a structural blueprint (UI/UX design) to map out the user journey before writing a single line of code.
        </>
      ),
    },
    {
      title: <>Develop</>,
      desc: (
        <>
          Upon design approval, our developers bring the site to life, ensuring mobile responsiveness and blazing-fast load times.
        </>
      ),
    },
    {
      title: <>QA Testing</>,
      desc: (
        <>
          We rigorously stress-test the website across all devices, browsers, and network speeds to eliminate bugs.
        </>
      ),
    },
    {
      title: <>Handover</>,
      desc: (
        <>
          We launch your site to the live server, transfer all <span className="text-[#dbe11f]">Copyrights</span>, and provide standard post-launch support.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why should I hire a local <Link to="/" className="text-[#dbe11f] hover:underline">Web Development Agency in Perinthalmanna?</Link>
        </>
      ),
      answer: (
        <>
          Accountability and communication. When you hire cheap online freelancers, they often disappear when the site crashes. Zaynlo is a registered tech company at Aysha Commercial Complex. You can walk into our office, meet the developers coding your site, and get immediate, face-to-face support.
        </>
      ),
    },
    {
      question: <>Who owns the website once it is completed?</>,
      answer: (
        <>
          You do. Once your final project invoice is cleared, we transfer 100% of the copyright, design assets, and source code to you. You are never "locked in" to our agency.
        </>
      ),
    },
    {
      question: <>Are Domain and Hosting included in the package prices?</>,
      answer: (
        <>
          No, domain registration and web hosting are third-party services and are not included in the core development fee. However, our team will fully assist you in purchasing the right domain and setting up secure, high-speed hosting under your own name and credentials.
        </>
      ),
    },
    {
      question: <>What if I need more pages than my package allows?</>,
      answer: (
        <>
          We are highly transparent about pricing. If your business requires additional pages beyond the scope of your selected package (Silver, Gold, Platinum, or Diamond), they are simply billed at a flat rate of <span className="text-[#dbe11f] font-bold">₹1,000/- per extra page</span>.
        </>
      ),
    },
    {
      question: <>Will my website work well on mobile phones?</>,
      answer: (
        <>
          Absolutely. Over 80% of web traffic in Kerala comes from smartphones. Every website we build is "Mobile-First," meaning it is explicitly engineered to look flawless and load instantly on all mobile devices.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Client <span className="text-[#dbe11f]">Success Stories</span>
      </>
    ),
    desc: (
      <>
        See what happens when local businesses upgrade from cheap templates to premium web engineering.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "We wanted a website that matched the luxury of our jewelry brand. Zaynlo delivered an incredibly sleek, fast, and secure platform. The attention to detail in their coding and design is exactly why they are the best web development agency in Perinthalmanna."
          </>
        ),
        author: <>Nabeel K.</>,
        role: <>Director, Ponnus Gold</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "Our old WordPress site was constantly getting hacked and took forever to load. Zaynlo rebuilt our entire corporate site using modern tech. The speed difference is night and day, and our SEO rankings shot up immediately."
          </>
        ),
        author: <>George Thomas</>,
        role: <>MD, Thomas Exports</>,
        location: <>Malappuram</>,
      },
      {
        text: (
          <>
            "We hired them for a custom e-commerce build. Not only did they deliver ahead of schedule, but the payment gateway integration and mobile shopping experience were flawless. Highly professional team."
          </>
        ),
        author: <>Ameena S.</>,
        role: <>Founder, Kerala Trends</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "I love that there are no hidden fees. They told us exactly what the package cost, explained the ₹1,000 extra page rule upfront, and transferred all the copyrights to us the day we launched. Total transparency."
          </>
        ),
        author: <>Dr. Arjun V.</>,
        role: <>CEO, MedLife Clinics</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "It is a huge advantage to have a high-end dev team in our own city. We sat in their Aysha Complex office, mapped out the wireframes on a whiteboard, and watched our vision come to life."
          </>
        ),
        author: <>Suhail Mohammed</>,
        role: <>Partner, Horizon Builders</>,
        location: <>Manjeri</>,
      },
      {
        text: (
          <>
            "If you want cheap work, go to a freelancer. If you want a website that actually generates leads and represents your brand properly, go to Zaynlo."
          </>
        ),
        author: <>Rahul Nair</>,
        role: <>Manager, Elite Motors</>,
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
        <title>Best Web Development Agency In Perinthalmanna | Zaynlo</title>
        <meta
          name="description"
          content="Upgrade your digital presence with Zaynlo, the Best Web Development Agency In Perinthalmanna. We build fast, secure, and highly converting websites and E-commerce stores."
        />
        <link
          rel="canonical"
          href={`${site_url}/best-web-development-agency-in-perinthalmanna`}
        />
        
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Schema Markup for Web Design/Development Agency */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebDesignCompany", 
              "name": "Zaynlo - Best Web Development Agency In Perinthalmanna",
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
                  "name": "Premium Web Development & E-Commerce Solutions",
                  "description": "Custom React.js development, Corporate Websites, Landing Pages, and high-performance Shopify/WooCommerce stores."
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
                Our Development <span className="text-[#dbe11f]">Blueprint</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Web Development <span className="text-[#dbe11f]">FAQ</span>
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

export default Best_Web_Development_Agency_In_Perinthalmanna;