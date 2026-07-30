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

const Best_SEO_Company_In_Kerala = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "SEO COMPANY" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best SEO Company</span>{" "}
        In Kerala for True Organic Growth
      </>
    ),
    intro: (
      <>
        Tired of agencies making big promises about "Page One" but delivering nothing but excuses? We get it. Real SEO isn't about tricking Google; it is about building a digital asset that actually earns its rank. Welcome to Zaynlo, widely trusted as the 
        <Link to="/"><strong className="text-[#dbe11f] hover:underline px-1">Best SEO Company in Kerala</strong></Link>, 
        where we focus on search intent that brings paying customers straight to your door.
        <br />
        <br />
        If your website isn't showing up when your ideal clients are actively searching for what you sell, you are handing money to your competitors. Whether you are a local shop in Malappuram needing foot traffic or a statewide enterprise wanting to dominate search results, <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link> 
        engineers sustainable, white-hat campaigns that generate high-quality leads month after month.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Brands Trust the <span className="text-[#dbe11f]">Best SEO Company In Kerala</span>
      </>
    ),
    desc: (
      <>
        Finding an agency that sells SEO packages is easy. Finding a team that actually understands the technical code, user psychology, and Google's complex algorithm is rare. We don't chase empty clicks; we build your revenue.
      </>
    ),
    quote: (
      <>
        "Traffic without conversions is just noise. We engineer your SEO to generate revenue and real business growth, not just fancy monthly reports."
      </>
    ),
    features: [
      {
        title: (
          <>
            Technical <span className="text-[#dbe11f]">Excellence</span>
          </>
        ),
        desc: (
          <>
            Google loves fast, secure websites. Because we are also expert web developers, we fix the deep technical issues—like Core Web Vitals and Schema Markup—that other marketers don't even know how to look for.
          </>
        ),
      },
      {
        title: (
          <>
            White-Hat <span className="text-[#dbe11f]">Integrity</span>
          </>
        ),
        desc: (
          <>
            No spammy links. No keyword stuffing. We strictly follow Google’s guidelines to build sustainable authority that survives every major algorithm update. Your investment is safe with us.
          </>
        ),
      },
      {
        title: (
          <>
            Total <span className="text-[#dbe11f]">Transparency</span>
          </>
        ),
        desc: (
          <>
            You will always know exactly what we are doing and why. We provide clear, plain-English reports showing your ranking improvements, traffic growth, and the actual leads generated.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        SEO Strategies That <span className="text-[#dbe11f]">Drive Revenue</span>
      </>
    ),
    desc: (
      <>
        As the premier 
        <Link to="/"><strong className="text-[#dbe11f] px-1">SEO Company in Kerala</strong></Link>, we attack search engine optimization from every possible angle to ensure absolute dominance.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Technical SEO <span className="text-zinc-500 text-sm">(The Foundation)</span>
          </>
        ),
        desc: (
          <>
            We crawl your site exactly how Google does. We fix slow loading times, broken links, mobile usability errors, and indexation issues so search engines can read and rank your site effortlessly.
          </>
        ),
        subPoints: [
          <>Site Speed <span className="text-[#dbe11f]">Optimization</span></>,
          <>Crawlability <span className="text-zinc-500">Fixes</span></>,
          <>Advanced <span className="text-[#dbe11f]">Schema Markup</span></>,
        ],
      },
      {
        title: (
          <>
            2. Local SEO <span className="text-[#dbe11f]">(Google Maps)</span>
          </>
        ),
        desc: (
          <>
            Capture the people searching "near me." We fully optimize your Google Business Profile so that local customers in your city find your phone number and address before anyone else's.
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
            3. On-Page & Content Strategy <span className="text-zinc-500 text-sm">(Relevance)</span>
          </>
        ),
        desc: (
          <>
            We map the exact phrases your buyers are typing into Google. Then, we craft highly relevant, helpful content that answers their questions and naturally pushes your pages to the top.
          </>
        ),
        subPoints: [
          <>Buyer-Intent <span className="text-[#dbe11f]">Keyword Research</span></>,
          <>Content <span className="text-zinc-500">Creation</span></>,
        ],
      },
      {
        title: (
          <>
            4. Authority Link Building <span className="text-[#dbe11f]">(Trust)</span>
          </>
        ),
        desc: (
          <>
            Backlinks are like votes of confidence from the internet. We run manual outreach campaigns to secure high-quality links from trusted websites, signaling to Google that your brand is an industry leader.
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
          We start with a brutal, honest audit of your current website to see exactly why you aren't ranking yet.
        </>
      ),
    },
    {
      title: <>Blueprint</>,
      desc: (
        <>
          We research your toughest competitors and create a step-by-step keyword roadmap to outrank them.
        </>
      ),
    },
    {
      title: <>Optimize</>,
      desc: (
        <>
          Our team dives into the code, revamps the content, and starts building your site's authority.
        </>
      ),
    },
    {
      title: <>Scale</>,
      desc: (
        <>
          SEO never sleeps. We monitor data daily, tweaking and pushing until you hit the top <span className="text-[#dbe11f]">and stay there</span>.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why is Zaynlo the <Link to="/" className="text-[#dbe11f] hover:underline">Best SEO Company in Kerala?</Link>
        </>
      ),
      answer: (
        <>
          Because we combine deep technical coding knowledge with expert marketing psychology. Many agencies just stuff keywords on a page. We build fast, secure platforms, write genuinely helpful content, and earn real authority. That is how you win in today's search landscape.
        </>
      ),
    },
    {
      question: <>How long does it take to see real SEO results?</>,
      answer: (
        <>
          Let's be honest: SEO is a marathon, not a sprint. While we usually get some quick wins with technical fixes in the first 30 days, significant, revenue-driving organic growth typically takes <span className="text-white font-bold">3 to 6 months</span> depending on your industry's competition.
        </>
      ),
    },
    {
      question: <>Do you guarantee a #1 ranking on Google?</>,
      answer: (
        <>
          No, and you should run away from any agency that does. Google's algorithm is entirely controlled by Google. However, we do guarantee that we use the most advanced, industry-proven strategies that have consistently put our clients on the first page.
        </>
      ),
    },
    {
      question: <>Should I choose SEO or Google Ads?</>,
      answer: (
        <>
          It depends on your timeline. Google Ads gives you traffic today, but you pay for every single click. SEO takes a few months to build, but once you rank, that traffic is completely free and highly trusted by users. Ideally, a growing business should do both.
        </>
      ),
    },
    {
      question: <>What happens if Google updates its algorithm?</>,
      answer: (
        <>
          Because we strictly follow "White-Hat" SEO practices—meaning we never try to cheat or manipulate the system—our clients usually see their rankings improve or stay stable during major Google updates, while competitors using spammy tactics drop off.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Stories of <span className="text-[#dbe11f]">Organic Growth</span>
      </>
    ),
    desc: (
      <>
        Don't just take our word for it. Here is what happens when you partner with the Best SEO Company In Kerala.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "We had a beautiful website, but nobody could find it. Zaynlo completely restructured our SEO. Within 4 months, we were ranking on the first page for our top 5 services. Our phone finally started ringing from organic search."
          </>
        ),
        author: <>Nikhil Menon</>,
        role: <>Director, Horizon Builders</>,
        location: <>Kochi</>,
      },
      {
        text: (
          <>
            "I went through two other agencies before finding Zaynlo. They were the first ones to actually explain the technical errors holding us back. They fixed the code, and our traffic doubled."
          </>
        ),
        author: <>Dr. Ameer</>,
        role: <>Founder, CarePlus Clinics</>,
        location: <>Malappuram</>,
      },
      {
        text: (
          <>
            "Their Local SEO work is incredible. Whenever someone searches for our services in Calicut, our Google Maps profile shows up first. It has directly impacted our daily sales."
          </>
        ),
        author: <>Sarah Thomas</>,
        role: <>Owner, The Bakehouse</>,
        location: <>Calicut</>,
      },
      {
        text: (
          <>
            "Honest, transparent, and brilliant at what they do. Every month I get a report that actually makes sense. Hiring them as our SEO company was the best marketing decision we made."
          </>
        ),
        author: <>Vishnu Prasad</>,
        role: <>CEO, TechVantage</>,
        location: <>Trivandrum</>,
      },
      {
        text: (
          <>
            "We operate in a highly competitive e-commerce niche. Zaynlo's keyword strategy helped us find untapped markets. The ROI on their SEO retainer is massive."
          </>
        ),
        author: <>Fathima R.</>,
        role: <>Marketing Head, Kerala Spices</>,
        location: <>Thrissur</>,
      },
      {
        text: (
          <>
            "If you want cheap, fast SEO that gets you penalized, go somewhere else. If you want sustainable growth that builds your business over time, hire Zaynlo."
          </>
        ),
        author: <>Mathew George</>,
        role: <>MD, George & Co. Exports</>,
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
        {/* ── Primary SEO ── */}
        <title>Best SEO Company in Kerala | Zaynlo</title>
        <meta name="description" content="Rank higher and drive real revenue with Zaynlo, the best SEO company in Kerala. Technical SEO, local search & organic growth strategies for Kerala businesses." />
        <meta name="keywords" content="best SEO company Kerala, SEO company Kerala, SEO services Kerala, organic search Kerala, Google ranking Kerala, search engine optimisation Kerala, Zaynlo" />
        <link rel="canonical" href={`${site_url}/best-seo-company-in-kerala`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* ── Open Graph ── */}
        <meta property="og:title" content="Best SEO Company in Kerala | Zaynlo" />
        <meta property="og:description" content="Kerala's best SEO company. Technical SEO, local search & organic growth for Kerala businesses by Zaynlo." />
        <meta property="og:url" content={`${site_url}/best-seo-company-in-kerala`} />
        <meta property="og:image" content={`${site_url}/seopage.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best SEO Company in Kerala | Zaynlo" />
        <meta name="twitter:description" content="Kerala's best SEO company. Technical SEO, local search & organic growth by Zaynlo." />
        <meta name="twitter:image" content={`${site_url}/seopage.webp`} />

        {/* ── FAQPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "What is the best SEO company in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo is the best SEO company in Kerala, combining technical expertise with creative content strategy to deliver sustainable organic rankings and qualified traffic for businesses." } },
            { "@type": "Question", "name": "How does Zaynlo's SEO process work?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo begins with a comprehensive SEO audit, followed by keyword strategy development, on-page optimisation, technical fixes, link building, and monthly progress reporting." } },
            { "@type": "Question", "name": "Is SEO worth it for small businesses in Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. SEO is often the highest-ROI digital marketing channel for small businesses. Ranking locally in Kerala means capturing customers actively searching for your service." } },
            { "@type": "Question", "name": "Does Zaynlo provide monthly SEO reports?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every Zaynlo SEO client receives clear monthly reports showing keyword rankings, organic traffic growth, backlinks acquired, and actionable next steps." } },
            { "@type": "Question", "name": "Can Zaynlo recover a penalised website?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Zaynlo's technical SEO team can diagnose and recover websites from Google algorithm penalties and manual actions through a comprehensive link audit and disavow strategy." } }
          ]}`}
        </script>

        {/* ── WebPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "WebPage", "name": "Best SEO Company in Kerala | Zaynlo", "description": "Rank higher and drive real revenue with Zaynlo, the best SEO company in Kerala. Technical SEO, local search & organic growth.", "url": "${site_url}/best-seo-company-in-kerala", "inLanguage": "en-IN", "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } } }`}
        </script>

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService", 
              "name": "Zaynlo - Best SEO Company In Kerala",
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
                  "name": "Search Engine Optimization (SEO)",
                  "description": "Technical SEO, On-Page SEO, Link Building, and Local SEO services in Kerala."
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
            imageSrc="/seopage.webp" // Feel free to update the banner image path
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
                Our Blueprint for <span className="text-[#dbe11f]">Page One</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Honest Answers to <span className="text-[#dbe11f]">SEO Questions</span>
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

export default Best_SEO_Company_In_Kerala;