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

const Seo_Agency_In_Kerala = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "SEO AGENCY" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The Premier <span className="text-[#dbe11f]">SEO Agency</span>{" "}
        In Kerala for Unfair Market Advantages
      </>
    ),
    intro: (
      <>
        Stop renting your traffic from ad platforms and start owning your digital real estate. 
        When your ideal customers search for the services you provide, they are either finding you, 
        or they are finding your competitors. Welcome to Zaynlo, the leading 
        <Link to="/"><strong className="text-[#dbe11f] hover:underline px-1">SEO Agency in Kerala</strong></Link>, 
        where we turn your website into your hardest-working employee.
        <br />
        <br />
        We don't do guesswork. As a specialized team of search engineers and content strategists, 
        we reverse-engineer Google's algorithm to put your brand at the absolute top. Whether you are 
        a local clinic in Perinthalmanna or a massive E-commerce brand in Kochi, 
        <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link> 
        builds custom organic growth engines that deliver highly qualified leads month after month.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Serious Brands Hire Our <span className="text-[#dbe11f]">SEO Agency In Kerala</span>
      </>
    ),
    desc: (
      <>
        We are not just another vendor; we act as an extension of your marketing team. We speak the language of business, which means we measure our success not in "impressions," but in your actual revenue growth.
      </>
    ),
    quote: (
      <>
        "An agency should be an investment, never an expense. Our entire methodology is built around generating a massive return on your SEO retainer."
      </>
    ),
    features: [
      {
        title: (
          <>
            Specialist <span className="text-[#dbe11f]">Squads</span>
          </>
        ),
        desc: (
          <>
            SEO is too complex for one person. When you hire our agency, you get a dedicated technical lead, a content strategist, and an outreach manager all working on your campaign simultaneously.
          </>
        ),
      },
      {
        title: (
          <>
            Intent-Driven <span className="text-[#dbe11f]">Targeting</span>
          </>
        ),
        desc: (
          <>
            Ranking for a keyword that nobody buys from is useless. We spend hours researching "buyer-intent" keywords to ensure the traffic we bring you is actually ready to pull out their credit cards.
          </>
        ),
      },
      {
        title: (
          <>
            No BS <span className="text-[#dbe11f]">Reporting</span>
          </>
        ),
        desc: (
          <>
            We hate confusing jargon as much as you do. Our monthly reports show you exactly what work was done, how your rankings moved, and most importantly, how many leads were generated.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Our Agency’s <span className="text-[#dbe11f]">Core SEO Services</span>
      </>
    ),
    desc: (
      <>
        As a full-stack 
        <Link to="/"><strong className="text-[#dbe11f] px-1">SEO Agency in Kerala</strong></Link>, we execute highly technical campaigns that leave your competition wondering how you did it.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Enterprise Technical SEO <span className="text-zinc-500 text-sm">(Code)</span>
          </>
        ),
        desc: (
          <>
            We fix the hidden code errors holding you back. From JavaScript rendering and server response times to complex Schema architecture, we make your site flawlessly readable to Google bots.
          </>
        ),
        subPoints: [
          <>Core Web Vitals <span className="text-[#dbe11f]">Optimization</span></>,
          <>Advanced <span className="text-zinc-500">Indexation Fixes</span></>,
        ],
      },
      {
        title: (
          <>
            2. High-Performance Local SEO <span className="text-[#dbe11f]">(Maps)</span>
          </>
        ),
        desc: (
          <>
            We turn local searches into foot traffic. By hyper-optimizing your Google My Business profile and building local citations, we ensure you dominate the "Near Me" search queries in your city.
          </>
        ),
        subPoints: [
          <>GMB <span className="text-[#dbe11f]">Authority Building</span></>,
          <>Local Review <span className="text-zinc-500">Strategies</span></>,
        ],
      },
      {
        title: (
          <>
            3. Strategic Content Marketing <span className="text-zinc-500 text-sm">(Authority)</span>
          </>
        ),
        desc: (
          <>
            Google rewards websites that answer user questions best. Our copywriting team creates deep, engaging content that establishes your brand as the undisputed thought leader in your industry.
          </>
        ),
        subPoints: [
          <>Competitor <span className="text-[#dbe11f]">Content Gap Analysis</span></>,
          <>High-Converting <span className="text-zinc-500">Landing Pages</span></>,
        ],
      },
      {
        title: (
          <>
            4. E-Commerce SEO <span className="text-[#dbe11f]">(Sales)</span>
          </>
        ),
        desc: (
          <>
            Selling online? We optimize thousands of product pages and categories for stores on Shopify, WooCommerce, and custom builds to capture shoppers exactly when they are ready to buy.
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
          We dive deep into your business model, profit margins, and past SEO history to understand the battlefield.
        </>
      ),
    },
    {
      title: <>Surgery</>,
      desc: (
        <>
          We perform technical surgery on your website, fixing slow load times, bad links, and poor mobile experiences.
        </>
      ),
    },
    {
      title: <>Authority</>,
      desc: (
        <>
          We execute aggressive content and PR campaigns to earn high-quality backlinks that boost your domain trust.
        </>
      ),
    },
    {
      title: <>Domination</>,
      desc: (
        <>
          We review the analytics, double down on the keywords bringing in the most <span className="text-[#dbe11f]">Cash</span>, and scale the campaign.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why should I hire an <Link to="/" className="text-[#dbe11f] hover:underline">SEO Agency in Kerala</Link> instead of a freelancer?
        </>
      ),
      answer: (
        <>
          Modern SEO requires a diverse skill set: technical coding, persuasive copywriting, analytical data reading, and PR outreach. A single freelancer simply cannot do all of this at an elite level. Hiring an agency gives you access to a dedicated team of specialists for the cost of one employee.
        </>
      ),
    },
    {
      question: <>What makes your agency different from others?</>,
      answer: (
        <>
          We are also a high-end web development company. Most SEO agencies don't know how to code, so they can't fix deep technical issues. Because we build React and Next.js platforms, our technical SEO capabilities are vastly superior to standard marketing firms.
        </>
      ),
    },
    {
      question: <>Is SEO better than Social Media Marketing?</>,
      answer: (
        <>
          They serve different purposes. Social media is great for brand awareness and community building. SEO, however, captures <span className="text-white font-bold">high-intent traffic</span>. People searching on Google are actively looking for a solution right now. The conversion rates from SEO are almost always much higher.
        </>
      ),
    },
    {
      question: <>Do you do link building?</>,
      answer: (
        <>
          Yes. Link building (Off-Page SEO) is crucial for ranking competitive keywords. We use strictly White-Hat methods, reaching out to relevant, high-authority websites in your industry to earn mentions and links. We never use spammy link farms that could get you penalized.
        </>
      ),
    },
    {
      question: <>How do we start a campaign with Zaynlo?</>,
      answer: (
        <>
          It starts with a conversation. Contact us to schedule a free initial audit. We will review your current website, show you exactly what your competitors are doing, and present a custom roadmap for your growth.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Client <span className="text-[#dbe11f]">Victories</span>
      </>
    ),
    desc: (
      <>
        Real feedback from ambitious brands that trusted our agency to lead their digital growth.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "Working with Zaynlo feels like having an in-house SEO team. They are responsive, deeply knowledgeable, and they actually care about our revenue. They are the best SEO agency in Kerala, hands down."
          </>
        ),
        author: <>Arun K. Jose</>,
        role: <>VP of Marketing, EduTech Kerala</>,
        location: <>Kochi</>,
      },
      {
        text: (
          <>
            "We were invisible on Google Maps before them. Within 3 months of their local SEO campaign, our clinic in Perinthalmanna saw a 60% increase in direct patient calls. Incredible work."
          </>
        ),
        author: <>Dr. Shafeeq</>,
        role: <>Director, Smile Dental</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "Our e-commerce store was struggling to get organic traffic. Their technical team fixed massive indexing issues we didn't even know we had. Sales have tripled since they took over."
          </>
        ),
        author: <>Nidhi Varghese</>,
        role: <>Founder, The Weave Boutique</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "I love their transparency. They don't hide behind confusing metrics. Their monthly reports show me exactly where my money is going and the ROI it's generating."
          </>
        ),
        author: <>Riyaz Mohammed</>,
        role: <>MD, Royal Auto Traders</>,
        location: <>Malappuram</>,
      },
      {
        text: (
          <>
            "We tried doing SEO in-house and failed. Zaynlo stepped in, completely rebuilt our content strategy, and got us ranking for national-level keywords. Highly professional agency."
          </>
        ),
        author: <>Sanjay Nair</>,
        role: <>CEO, LogiSync Solutions</>,
        location: <>Trivandrum</>,
      },
      {
        text: (
          <>
            "They actually understand B2B lead generation. We aren't just getting random traffic; we are getting inquiries from high-ticket corporate clients thanks to their targeted SEO."
          </>
        ),
        author: <>Thomas Abraham</>,
        role: <>Partner, Alpha Consultants</>,
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
        <title>SEO Agency In Kerala | Zaynlo Digital</title>
        <meta
          name="description"
          content="Drive qualified organic traffic and dominate search results with Zaynlo, the leading SEO Agency in Kerala. We specialize in Technical, Local, and E-commerce SEO."
        />
        <link
          rel="canonical"
          href={`${site_url}/seo-agency-in-kerala`}
        />
        
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - SEO Agency In Kerala",
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
              ],
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Advanced SEO Agency Services",
                  "description": "Enterprise Technical SEO, E-Commerce SEO, Local Maps Optimization, and Authority Content Strategies."
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
                The Agency <span className="text-[#dbe11f]">Execution Protocol</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Agency <span className="text-[#dbe11f]">FAQ</span>
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

export default Seo_Agency_In_Kerala;