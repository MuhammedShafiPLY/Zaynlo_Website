import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SmoothScroll from "../../Components/SmoothScroll";
import Footer from "../../Components/Footer";
import SEOTestimonials from "../../Components/Seo/SEOTestimonials";

// Import your new reusable components
import SEOHero from "../../Components/Seo/SEOHero";
import SEOFeatureGrid from "../../Components/Seo/SEOFeatureGrid";
import SEOProcess from "../../Components/Seo/SEOProcess";
import SEOFAQ from "../../Components/Seo/SEOFAQ";
import GetInTouch from "../../Components/GetInTouch";
import SEOIndustries from "../../Components/Seo/SEOIndustries";
import SEOLocations from "../../Components/Seo/SEOLocations";
import SEOMap from "../../Components/Seo/SEOMap";

const SeoPage = () => {
  const site_url = import.meta.env.VITE_SITE_URL;
  // ===========================================================================
  // DATA SECTION: EDIT CONTENT HERE
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The{" "}
        <span className="text-[#dbe11f]">Best Digital Marketing Agency</span> in
        Kerala for Growth-Driven Brands
      </>
    ),
    intro: (
      <>
        Mediocrity has no place here. We architect high-impact digital systems
        that distill market noise into measurable growth. Welcome to Zaynlo, the{" "}
        <Link to="/">
          <strong className="text-[#dbe11f] hover:underline">
            Best Digital Marketing Agency in Kerala,
          </strong>
        </Link>{" "}
        where creative branding meets data-driven performance.
        <br />
        <br />
        We don’t just run ads; we build digital ecosystems. Whether you are a
        startup in Kochi looking for a launchpad or an established enterprise in
        Calicut seeking global reach,{" "}
        <Link to="/">
          <strong className="text-[#dbe11f]">Zaynlo</strong>
        </Link>{" "}
        bridges the gap between your brand and your audience. Stop chasing
        trends and start setting them with a partner that understands the
        heartbeat of Kerala’s market.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Zaynlo is the{" "}
        <Link to="/" className="text-[#dbe11f] hover:underline">
          Top Digital Marketing Company in Kerala
        </Link>
      </>
    ),
    desc: (
      <>
        Finding a{" "}
        <Link to="/">
          <strong className="text-[#dbe11f]">
            Digital Advertising Agency In Kerala
          </strong>
        </Link>{" "}
        is easy. Finding one that delivers measurable ROI is the challenge. At
        Zaynlo, we have redefined the agency model by focusing on what matters
        most: <span className="text-white font-bold">Your Revenue.</span>
      </>
    ),
    quote: (
      <>
        We operate less like an external vendor and more like a{" "}
        <span className="text-[#dbe11f]">dedicated extension</span> of your
        internal team, fully invested in your digital growth.
      </>
    ),
    features: [
      {
        title: (
          <>
            Customized Strategy,{" "}
            <span className="text-[#dbe11f]">No Templates</span>
          </>
        ),
        desc: (
          <>
            We understand that a jewelry brand in Thrissur has different needs
            than a tech startup in Trivandrum. We tailor every campaign to your
            specific industry and audience.
          </>
        ),
      },
      {
        title: (
          <>
            Full-Stack <span className="text-[#dbe11f]">Expertise</span>
          </>
        ),
        desc: (
          <>
            Our stack is unapologetically modern. By integrating{" "}
            <strong className="text-white">React, Next.js, and AI</strong>, we
            deliver speed and intelligence that competitors simply can't match.
          </>
        ),
      },
      {
        title: (
          <>
            Transparency <span className="text-[#dbe11f]">First</span>
          </>
        ),
        desc: (
          <>
            No hidden fees, no jargon. Just clear monthly reports that show you
            exactly where your money is going and how it’s growing.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Our Core <span className="text-[#dbe11f]">Digital Services</span>
      </>
    ),
    desc: (
      <>
        As a comprehensive{" "}
        <Link to="/">
          <strong className="text-[#dbe11f]">
            Creative Branding Agency In Kerala
          </strong>
        </Link>
        , we offer a suite of services designed to dominate the SERPs and
        capture customer attention.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Search Engine Optimization{" "}
            <span className="text-zinc-500 text-sm">(SEO)</span>
          </>
        ),
        desc: (
          <>
            Dominate the search results. As a premier{" "}
            <Link to="/" className="text-[#dbe11f]">
              SEO Agency in Kerala
            </Link>
            , we use white-hat techniques to rank your website for the keywords
            that drive sales.
          </>
        ),
        subPoints: [
          <>
            On-Page & <span className="text-[#dbe11f]">Technical SEO</span>
          </>,
          <>
            Local SEO <span className="text-zinc-500">(GMB Optimization)</span>
          </>,
          <>
            High Quality <span className="text-[#dbe11f]">Link Building</span>
          </>,
        ],
      },
      {
        title: (
          <>
            2. Web Development & <span className="text-[#dbe11f]">Design</span>
          </>
        ),
        desc: (
          <>
            We go beyond basic web design to architect scalable digital
            platforms that drive real business growth. Speed, security, and
            conversion are built into every line of code.
          </>
        ),
        subPoints: [
          <>
            React & <span className="text-[#dbe11f]">Custom Dev</span>
          </>,
          <>
            CMS <span className="text-zinc-500">(WordPress/Elementor)</span>
          </>,
          <>
            E-Commerce <span className="text-[#dbe11f]">Solutions</span>
          </>,
        ],
      },
      {
        title: (
          <>
            3. Social Media Marketing{" "}
            <span className="text-zinc-500 text-sm">(SMM)</span>
          </>
        ),
        desc: (
          <>
            Engage your audience where they spend their time. We create
            viral-worthy content and manage communities on Instagram, Facebook,
            LinkedIn, and YouTube.
          </>
        ),
        subPoints: [
          <>
            Creative Content & <span className="text-[#dbe11f]">Reels</span>
          </>,
          <>
            Ad Management <span className="text-zinc-500">(PPC)</span>
          </>,
        ],
      },
      {
        title: (
          <>
            4. Branding &{" "}
            <span className="text-[#dbe11f]">Creative Identity</span>
          </>
        ),
        desc: (
          <>
            We operate at the convergence of creative vision and technological
            execution. We craft memorable brand identities, including logo
            design and packaging that tell your unique story.
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
          We conduct a comprehensive audit of your operational structure, market
          rivals, and strategic objectives.
        </>
      ),
    },
    {
      title: <>Strategy</>,
      desc: (
        <>
          We craft a roadmap combining{" "}
          <span className="text-[#dbe11f]">SEO</span>, Content, and Paid Media.
        </>
      ),
    },
    {
      title: <>Execution</>,
      desc: (
        <>
          Our developers and creatives bring the strategy to life with precision
          and speed.
        </>
      ),
    },
    {
      title: <>Optimization</>,
      desc: (
        <>
          We continuously monitor data to refine and improve performance for
          maximum <span className="text-[#dbe11f]">ROI</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          What is the{" "}
          <Link to="/" className="text-[#dbe11f] hover:underline">
            best digital marketing agency in Kerala?
          </Link>
        </>
      ),
      answer: (
        <>
          Zaynlo is widely considered the{" "}
          <Link className="text-[#dbe11f]">
            best digital marketing agency in Kerala
          </Link>{" "}
          due to its focus on ROI-driven strategies, comprehensive service
          offerings (including SEO and Web Development), and a client-first
          approach that ensures transparent reporting.
        </>
      ),
    },
    {
      question: <>How much do digital marketing services cost in Kerala?</>,
      answer: (
        <>
          Investment levels are determined by your specific goals and campaign
          requirements. We don't believe in one-size-fits-all; we build custom
          commercial packages based on your unique needs.
        </>
      ),
    },
    {
      question: <>Does Zaynlo provide branding and packaging design?</>,
      answer: (
        <>
          Yes, Zaynlo is a full-service{" "}
          <Link className="text-[#dbe11f]">
            Creative Branding Agency In Kerala.
          </Link>{" "}
          We specialize in logo creation, brand identity, and product packaging
          design to ensure your physical product looks as good as your digital
          presence.
        </>
      ),
    },
    {
      question: (
        <>When can I expect to see a tangible return on my SEO investment?</>
      ),
      answer: (
        <>
          SEO is a long-term strategy. While some technical fixes can show
          immediate results, substantial organic traffic growth typically takes{" "}
          <span className="text-white font-bold">3 to 6 months</span>. Zaynlo
          focuses on sustainable, long-term rankings that survive algorithm
          updates.
        </>
      ),
    },
    {
      question: (
        <>Why choose a dedicated agency team over a single freelancer?</>
      ),
      answer: (
        <>
          Hiring an agency like Zaynlo gives you access to a complete team of
          experts—developers, designers, copywriters, and strategists—for the
          cost of a single employee, ensuring better reliability and scalability
          for your business.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Trusted by Kerala’s{" "}
        <span className="text-[#dbe11f]">Growing Brands</span>
      </>
    ),
    desc: (
      <>
        From local startups in Kochi to established enterprises in Dubai, hear
        what our partners say about our impact on their growth.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "Finding a trustworthy SEO partner in Kochi felt impossible until we
            discovered Zaynlo. They were the first to truly understand our
            vision and delivered actual leads, not just promises."
          </>
        ),
        author: <>Arjun Menon</>,
        role: <>Founder, TechSpire</>,
        location: <>Kochi</>,
      },
      {
        text: (
          <>
            "Their packaging design elevated our local spice brand into a global
            contender. Zaynlo masterfully blended the rich heritage of Kerala
            with a sleek, international aesthetic."
          </>
        ),
        author: <>Fatima R.</>,
        role: <>Director, GreenLeaf Exports</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "Our previous website was slow and outdated. Zaynlo built us a
            lightning-fast <span className="text-[#dbe11f]">React website</span>{" "}
            that actually converts visitors. The best web development team we
            have worked with."
          </>
        ),
        author: <>Thomas John</>,
        role: <>CEO, BuildWell Builders</>,
        location: <>Trivandrum</>,
      },
      {
        text: (
          <>
            "Managing social media was a headache for us. Zaynlo took over our
            Instagram and LinkedIn, and the engagement has been phenomenal. A
            true partner for digital growth."
          </>
        ),
        author: <>Sarah Abraham</>,
        role: <>Marketing Head, Lulu & Co</>,
        location: <>UAE</>,
      },
      {
        text: (
          <>
            "We needed a complete rebrand. The logo, the voice, the
            strategy—Zaynlo nailed it all. If you want a creative agency that
            listens, this is the team."
          </>
        ),
        author: <>Rahul Nair</>,
        role: <>Owner, Cafe 90s</>,
        location: <>Thrissur</>,
      },
      {
        text: (
          <>
            "They eliminated our wasted ad spend and engineered a campaign that
            actually converts. Instead of throwing money away, today we target
            the right consumers in Malappuram and Kannur."
          </>
        ),
        author: <>Mohammed Sinan</>,
        role: <>MD, Sinan Motors</>,
        location: <>Malappuram</>,
      },
    ],
  };

  // ===========================================================================
  // RENDER SECTION
  // ===========================================================================
  return (
    <>
      <Helmet>
        <title>Best Digital Marketing Agency in Kerala | Zaynlo</title>
        <meta
          name="description"
          content="Zaynlo is the top Digital Marketing Agency in Kerala offering SEO, Web Development, and Branding services for growth-driven brands."
        />
        <link
          rel="canonical"
          href={`${site_url}/best-digital-marketing-agency-in-kerala`}
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Schema Markup for Local Business / Agency */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "AdvertisingAgency",
      "name": "Zaynlo",
      "image": "${site_url}/logo.png",
      "@id": "${site_url}/#organization",
      "url": "${site_url}",
      "telephone": "+919526299568",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hi-Lite Business Park", 
        "addressLocality": "Calicut",
        "addressRegion": "Kerala",
        "postalCode": "673001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.8505,
        "longitude": 76.2711
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
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
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
                The Zaynlo Approach:{" "}
                <span className="text-[#dbe11f]">How We Work</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Frequently Asked{" "}
                <span className="text-[#dbe11f]">Questions</span>
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

          <SEOMap
            h2={
              <>
                Find Us in{" "}
                <span className="text-[#dbe11f]">Perinthalmanna</span>
              </>
            }
            location={{
              address:
                "Aysha Commercial Complex, X6G9+JRR, NH 966, Perinthalmanna, Kerala 679322",
              phone: "+91 952 629 9568",
              email: "info@zaynlo.com",
              hours: "Mon - Sat: 9 AM - 6 PM",
              // ✅ ADDED: This makes the "Get Directions" button work
              googleMapsUrl:
                "https://www.google.com/maps/dir/10.9692205,76.2131469/Aysha+Commercial+Complex,+X6G9%2BJRR,+NH+966,+Perinthalmanna,+Kerala+679322/@10.9730835,76.2143829,1136m/data=!3m2!1e3!4b1!4m17!1m7!3m6!1s0x3ba7cd8452df58d1:0x8773758fa664033a!2sAysha+Commercial+Complex!8m2!3d10.9766215!4d76.2195279!16s%2Fg%2F11v649nyv7!4m8!1m1!4e1!1m5!1m1!1s0x3ba7cd8452df58d1:0x8773758fa664033a!2m2!1d76.2195277!2d10.9767841?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D",
            }}
            // ⚠️ IMPORTANT: Paste your real Embed Link here (src="..." only)
            // Go to Google Maps -> Search "Aysha Commercial Complex" -> Share -> Embed -> Copy Link
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1236.757032048295!2d76.21832543511759!3d10.976784065613975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd8452df58d1%3A0x8773758fa664033a!2sAysha%20Commercial%20Complex!5e1!3m2!1sen!2sin!4v1770227496483!5m2!1sen!2sin"
          />

          <SEOLocations />

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
};

export default SeoPage;
