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

const Top_Digital_Marketing_Company_In_Kerala = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "TOP DIGITAL MARKETING COMPANY" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The{" "}
        <span className="text-[#dbe11f]">Top Digital Marketing Company</span> in
        Kerala for Business Transformation
      </>
    ),
    intro: (
      <>
        In a crowded digital space, "good" isn't enough. You need the
        <Link to="/">
          <strong className="text-[#dbe11f] hover:underline px-1">
            Top Digital Marketing Company in Kerala
          </strong>
        </Link>
        to cut through the noise. Welcome to Zaynlo, where we turn ambitious
        goals into predictable revenue.
        <br />
        <br />
        We don't just manage campaigns; we engineer growth engines. Whether you
        are scaling a startup in Technopark or expanding a retail empire in
        Calicut,
        <Link to="/">
          <strong className="text-[#dbe11f] px-1">Zaynlo</strong>
        </Link>
        combines elite strategy with execution speed. Partner with the company
        that is setting the benchmark for digital excellence across God's Own
        Country.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Zaynlo is Ranked the{" "}
        <Link to="/" className="text-[#dbe11f] hover:underline">
          Top Digital Marketing Company in Kerala
        </Link>
      </>
    ),
    desc: (
      <>
        Many agencies promise visibility. As the{" "}
        <Link to="/">
          <strong className="text-[#dbe11f]">
            Top Digital Marketing Company
          </strong>
        </Link>
        , we promise
        <span className="text-white font-bold px-1">Profitability.</span>
        We have stripped away the fluff to focus on high-impact strategies that
        actually move the needle for your business.
      </>
    ),
    quote: (
      <>
        "We don't simply act as a service provider. We function as your{" "}
        <span className="text-[#dbe11f]">Growth Architects</span>, dedicated to
        ensuring your brand dominates the Kerala market."
      </>
    ),
    features: [
      {
        title: (
          <>
            Strategic <span className="text-[#dbe11f]">Dominance</span>
          </>
        ),
        desc: (
          <>
            Generic plans don't build market leaders. We craft bespoke
            strategies that analyze your competitors in Kochi, Trivandrum, or
            Thrissur and systematically outmaneuver them.
          </>
        ),
      },
      {
        title: (
          <>
            Tech-First <span className="text-[#dbe11f]">Marketing</span>
          </>
        ),
        desc: (
          <>
            We are the only Top Digital Marketing Company in Kerala integrating
            <strong className="text-white px-1">AI-driven analytics</strong> and
            <strong className="text-white px-1">
              React-based web performance
            </strong>
            to give you an unfair advantage.
          </>
        ),
      },
      {
        title: (
          <>
            Revenue-Centric <span className="text-[#dbe11f]">Reporting</span>
          </>
        ),
        desc: (
          <>
            Vanity metrics are for amateurs. We report on what matters: Leads,
            Sales, and ROI. Complete transparency is why top brands trust us.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Services by Kerala’s <span className="text-[#dbe11f]">Top Company</span>
      </>
    ),
    desc: (
      <>
        As a premier{" "}
        <Link to="/">
          <strong className="text-[#dbe11f]">Digital Solutions Partner</strong>
        </Link>
        , we deliver an integrated suite of services designed to capture market
        share and retain customer loyalty.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Advanced SEO Strategies{" "}
            <span className="text-zinc-500 text-sm">(Search Dominance)</span>
          </>
        ),
        desc: (
          <>
            Secure the #1 spot. As the Top Digital Marketing Company in Kerala,
            we deploy advanced technical SEO and content moats that keep you
            ahead of algorithm updates.
          </>
        ),
        subPoints: [
          <>
            Keyword <span className="text-[#dbe11f]">Supremacy</span>
          </>,
          <>
            Local SEO <span className="text-zinc-500">(Map Pack Ranking)</span>
          </>,
          <>
            Authority <span className="text-[#dbe11f]">Backlinking</span>
          </>,
        ],
      },
      {
        title: (
          <>
            2. High-Performance Development{" "}
            <span className="text-[#dbe11f]">& Design</span>
          </>
        ),
        desc: (
          <>
            Your website is your digital headquarters. We build lightning-fast,
            secure, and conversion-optimized platforms using cutting-edge tech
            like React and Next.js.
          </>
        ),
        subPoints: [
          <>
            Custom <span className="text-[#dbe11f]">React/Next.js Builds</span>
          </>,
          <>
            Enterprise{" "}
            <span className="text-zinc-500">WordPress Solutions</span>
          </>,
          <>
            High-Conversion <span className="text-[#dbe11f]">E-Commerce</span>
          </>,
        ],
      },
      {
        title: (
          <>
            3. Social Media Command{" "}
            <span className="text-zinc-500 text-sm">(SMM)</span>
          </>
        ),
        desc: (
          <>
            Turn followers into advocates. We manage your reputation across
            Instagram, LinkedIn, and Facebook with content that resonates
            culturally with the Kerala audience.
          </>
        ),
        subPoints: [
          <>
            Viral <span className="text-[#dbe11f]">Reels & Content</span>
          </>,
          <>
            Precision <span className="text-zinc-500">Ad Targeting</span>
          </>,
        ],
      },
      {
        title: (
          <>
            4. Corporate Branding{" "}
            <span className="text-[#dbe11f]">& Identity</span>
          </>
        ),
        desc: (
          <>
            Stand out in a crowded marketplace. From logo design to complete
            brand guidelines, we craft visual identities that command respect
            and trust.
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
          We deep-dive into your current digital footprint to identify gaps and
          opportunities.
        </>
      ),
    },
    {
      title: <>Blueprint</>,
      desc: (
        <>
          We architect a custom roadmap involving{" "}
          <span className="text-[#dbe11f]">SEO</span>, Tech, and Creative.
        </>
      ),
    },
    {
      title: <>Deploy</>,
      desc: (
        <>
          Our expert teams execute the strategy with military precision and
          creative flair.
        </>
      ),
    },
    {
      title: <>Scale</>,
      desc: (
        <>
          We analyze real-time data to optimize campaigns and scale your{" "}
          <span className="text-[#dbe11f]">Revenue</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Which One is the{" "}
          <Link to="/" className="text-[#dbe11f] hover:underline">
            Top Digital Marketing Company in Kerala?
          </Link>
        </>
      ),
      answer: (
        <>
          Zaynlo is consistently recognized as the{" "}
          <Link className="text-[#dbe11f]">
            Top Digital Marketing Company in Kerala
          </Link>
          . Our reputation is built on a foundation of technical excellence,
          transparent reporting, and a proven track record of delivering high
          ROI for businesses across the state.
        </>
      ),
    },
    {
      question: (
        <>Why should I partner with a top company instead of a freelancer?</>
      ),
      answer: (
        <>
          While freelancers handle tasks, a Top Digital Marketing Company like
          Zaynlo provides a{" "}
          <span className="text-white font-bold">full ecosystem</span>. You get
          a dedicated team of strategists, developers, designers, and
          copywriters working in sync to scale your business—something a single
          individual cannot match.
        </>
      ),
    },
    {
      question: <>Do you work with businesses outside of Kochi and Calicut?</>,
      answer: (
        <>
          Absolutely. While our roots are in Kerala, we serve clients globally.
          Whether you are in Malappuram, Dubai, or London, our digital solutions
          are designed to work across borders while maintaining local relevance.
        </>
      ),
    },
    {
      question: <>How does a top company approach SEO differently?</>,
      answer: (
        <>
          We don't rely on outdated hacks. Our approach is{" "}
          <span className="text-white font-bold">
            data-driven and sustainable
          </span>
          . We focus on technical health, user experience, and high-authority
          content that secures your rankings for the long term, not just a few
          weeks.
        </>
      ),
    },
    {
      question: (
        <>How much should you expect to invest in a top-tier digital agency?</>
      ),
      answer: (
        <>
          Quality is an investment, not an expense. We offer flexible,
          performance-based packages tailored to your specific goals. Contact us
          for a free audit, and we will build a plan that fits your budget and
          ambitions.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Success Stories from{" "}
        <span className="text-[#dbe11f]">Market Leaders</span>
      </>
    ),
    desc: (
      <>
        See why established brands and fast-growing startups choose Zaynlo as
        their digital growth partner.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "We interviewed several agencies, but Zaynlo stood out as a true
            company with a vision. They didn't just promise rankings; they
            mapped out a revenue strategy. Truly the top team in Kerala."
          </>
        ),
        author: <>Dr. Sameer Ali</>,
        role: <>Director, Al-Shifa Healthcare</>,
        location: <>Kochi</>,
      },
      {
        text: (
          <>
            "The level of professionalism is unmatched. From the React website
            to the SEO execution, everything screams quality. If you want the
            best, you go to Zaynlo."
          </>
        ),
        author: <>Priya Nair</>,
        role: <>Founder, The Silk Route</>,
        location: <>Trivandrum</>,
      },
      {
        text: (
          <>
            "Finally, a digital marketing company that understands business
            numbers. Their ROI-focused approach helped us scale our e-commerce
            sales by 300% in a year."
          </>
        ),
        author: <>Jaseem K.</>,
        role: <>MD, Urban Fit</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "Their branding team is exceptional. They took our local concept and
            gave it a global identity. Highly recommended for anyone looking to
            build a premium brand."
          </>
        ),
        author: <>Anjali Menon</>,
        role: <>Marketing Head, Veda Wellness</>,
        location: <>Thrissur</>,
      },
      {
        text: (
          <>
            "Zaynlo has the hustle of a new business, backed by the stability of
            an established one. Their social media strategies are creative,
            data-backed, and effective."
          </>
        ),
        author: <>David George</>,
        role: <>CEO, TechNex Solutions</>,
        location: <>Dubai/Kochi</>,
      },
      {
        text: (
          <>
            "We dominated the local search results in Malappuram thanks to their
            GMB strategies. Real footfall increased significantly."
          </>
        ),
        author: <>Fayas Ahmed</>,
        role: <>Owner, Royal Drives</>,
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
        {/* ── Primary SEO ── */}
        <title>Top Digital Marketing Company in Kerala | Zaynlo</title>
        <meta
          name="description"
          content="Partner with the top digital marketing company in Kerala. Zaynlo delivers ROI-focused SEO, branding, web design & Google Ads to scale your business."
        />
        <meta
          name="keywords"
          content="top digital marketing company Kerala, best digital marketing Kerala, digital agency Kochi, digital agency Calicut, SEO company Kerala, branding company Kerala, Zaynlo"
        />
        <link
          rel="canonical"
          href={`${site_url}/top-digital-marketing-company-in-kerala`}
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* ── Open Graph ── */}
        <meta property="og:title" content="Top Digital Marketing Company in Kerala | Zaynlo" />
        <meta property="og:description" content="Partner with Kerala's top digital marketing company. Zaynlo delivers ROI-focused SEO, branding, web design & Google Ads for growing brands." />
        <meta property="og:url" content={`${site_url}/top-digital-marketing-company-in-kerala`} />
        <meta property="og:image" content={`${site_url}/seopage.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Digital Marketing Company in Kerala | Zaynlo" />
        <meta name="twitter:description" content="Kerala's top digital marketing company. Expert SEO, branding, web design & Google Ads." />
        <meta name="twitter:image" content={`${site_url}/seopage.webp`} />

        {/* ── AdvertisingAgency Schema ── */}
        <script type="application/ld+json">
          {`{
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
            "areaServed": { "@type": "AdministrativeArea", "name": "Kerala" },
            "sameAs": [
              "https://www.instagram.com/__zaynlo",
              "https://www.linkedin.com/in/zaynlo-advertising-agency-16a13b3a3"
            ]
          }`}
        </script>

        {/* ── FAQPage Schema ── */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes Zaynlo the top digital marketing company in Kerala?",
                "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo combines full-stack expertise in SEO, branding, and web development with a data-driven, transparent approach that consistently delivers measurable ROI for Kerala businesses." }
              },
              {
                "@type": "Question",
                "name": "Which industries does Zaynlo serve in Kerala?",
                "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo serves a wide range of industries including healthcare, real estate, retail, e-commerce, hospitality, education, and professional services across Kerala." }
              },
              {
                "@type": "Question",
                "name": "Does Zaynlo offer custom digital marketing packages?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Zaynlo builds completely custom digital marketing strategies based on your specific business goals, target audience, and budget — no generic templates." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to see results from digital marketing?",
                "acceptedAnswer": { "@type": "Answer", "text": "Paid ads (Google Ads, Meta Ads) can show results within days. SEO typically takes 3 to 6 months for significant organic growth. Branding results are measured in brand equity built over time." }
              },
              {
                "@type": "Question",
                "name": "Is Zaynlo better than hiring an in-house team?",
                "acceptedAnswer": { "@type": "Answer", "text": "For most Kerala businesses, partnering with Zaynlo is more cost-effective than building an in-house team. You get access to a full team of specialists — designers, developers, SEO experts, and strategists — at a fraction of the cost." }
              }
            ]
          }`}
        </script>

        {/* ── WebPage Schema ── */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Top Digital Marketing Company in Kerala | Zaynlo",
            "description": "Partner with the top digital marketing company in Kerala. Zaynlo delivers ROI-focused SEO, branding, web design and Google Ads.",
            "url": "${site_url}/top-digital-marketing-company-in-kerala",
            "inLanguage": "en-IN",
            "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } }
          }`}
        </script>

        {/* Schema Markup: Adjusted for "Company" keyword */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization", 
              "name": "Zaynlo - Top Digital Marketing Company",
              "image": "${site_url}/logo.png",
              "@id": "${site_url}/#organization",
              "url": "${site_url}",
              "telephone": "+919526299568",
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
                The Zaynlo Standard:{" "}
                <span className="text-[#dbe11f]">Execution</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Common Questions about the{" "}
                <span className="text-[#dbe11f]">Top Company</span>
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

export default Top_Digital_Marketing_Company_In_Kerala;
