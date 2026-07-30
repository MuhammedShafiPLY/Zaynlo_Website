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

const Best_Digital_Advertising_Agency_In_Perinthalmanna = () => {
  const site_url = import.meta.env.VITE_SITE_URL;

  // ===========================================================================
  // DATA SECTION: "LOCAL ADVERTISING AGENCY" EDITION
  // ===========================================================================

  // --- 1. HERO DATA ---
  const heroData = {
    h1: (
      <>
        The <span className="text-[#dbe11f]">Best Digital Advertising Agency</span>{" "}
        In Perinthalmanna for ROI-Driven Growth
      </>
    ),
    intro: (
      <>
        Stop throwing your marketing budget into a black hole. Simply clicking "Boost Post" isn't an advertising strategy—it's a donation to Facebook. If you want real walk-in customers and qualified leads, you need the 
        <Link to="/"><strong className="text-[#dbe11f] hover:underline px-1">Best Digital Advertising Agency in Perinthalmanna</strong></Link> 
        to manage your ad spend.
        <br />
        <br />
        Welcome to Zaynlo. We are a team of data-obsessed media buyers located right here on NH 966. Whether you are a healthcare clinic looking for patient bookings or a retail showroom wanting to clear out inventory, <Link to="/"><strong className="text-[#dbe11f] px-1">Zaynlo</strong></Link> 
        builds aggressive, highly targeted ad campaigns that reach the exact people in Malappuram who are ready to buy from you today.
      </>
    ),
  };

  // --- 2. WHY US DATA ---
  const whyUsData = {
    h2: (
      <>
        Why Locals Call Us the <span className="text-[#dbe11f]">Best Digital Advertising Agency</span>
      </>
    ),
    desc: (
      <>
        Many agencies promise "exposure" and "reach." We promise <strong className="text-white">Revenue.</strong> As a leading <Link to="/"><strong className="text-[#dbe11f]">Top Digital Marketing Company in Kerala</strong></Link>, we treat your ad budget like our own capital. If it doesn't make you money, we don't do it.
      </>
    ),
    quote: (
      <>
        "We bridge the gap between big-city advertising tech and local market understanding. Get world-class ad performance without leaving Perinthalmanna."
      </>
    ),
    features: [
      {
        title: (
          <>
            Zero Wasted <span className="text-[#dbe11f]">Ad Spend</span>
          </>
        ),
        desc: (
          <>
            We don't show your ads to random people. We use advanced targeting to put your brand only in front of users in Perinthalmanna, Manjeri, and surrounding areas who match your exact customer profile.
          </>
        ),
      },
      {
        title: (
          <>
            Creative That <span className="text-[#dbe11f]">Converts</span>
          </>
        ),
        desc: (
          <>
            People scroll fast. Our in-house design team creates scroll-stopping ad graphics and video reels that grab attention and force your local audience to click.
          </>
        ),
      },
      {
        title: (
          <>
            In-Person <span className="text-[#dbe11f]">Accountability</span>
          </>
        ),
        desc: (
          <>
            No hiding behind confusing emails. Our office is right here at Aysha Commercial Complex. You can sit down with our media buyers and see exactly how your campaigns are performing.
          </>
        ),
      },
    ],
  };

  // --- 3. SERVICES DATA ---
  const serviceData = {
    h2: (
      <>
        Performance <span className="text-[#dbe11f]">Ad Campaigns</span>
      </>
    ),
    desc: (
      <>
        As the premier 
        <Link to="/"><strong className="text-[#dbe11f] px-1">Digital Advertising Agency in Perinthalmanna</strong></Link>, we run campaigns that generate predictable, scalable profit.
      </>
    ),
    services: [
      {
        title: (
          <>
            1. Meta Advertising <span className="text-zinc-500 text-sm">(Facebook & Instagram)</span>
          </>
        ),
        desc: (
          <>
            We turn local scrollers into buyers. We run highly optimized lead-generation and brand-awareness campaigns designed specifically for the Malappuram demographic.
          </>
        ),
        subPoints: [
          <>Targeted <span className="text-[#dbe11f]">Lead Generation</span></>,
          <>High-Impact <span className="text-zinc-500">Video Ads</span></>,
        ],
      },
      {
        title: (
          <>
            2. Google Search Ads <span className="text-[#dbe11f]">(PPC)</span>
          </>
        ),
        desc: (
          <>
            Capture the people who are searching for you right now. If someone Googles "best dentist near me" or "furniture shop in Perinthalmanna," we make sure you are the first link they click.
          </>
        ),
        subPoints: [
          <>Search <span className="text-[#dbe11f]">Intent Targeting</span></>,
          <>Local Map <span className="text-zinc-500">Promoted Pins</span></>,
        ],
      },
      {
        title: (
          <>
            3. Retargeting Campaigns <span className="text-zinc-500 text-sm">(Follow Up)</span>
          </>
        ),
        desc: (
          <>
            Most people don't buy on the first visit. We set up tracking pixels to "follow" your website visitors around the internet, showing them your ads until they finally convert.
          </>
        ),
        subPoints: [
          <>Abandoned Cart <span className="text-[#dbe11f]">Recovery</span></>,
          <>Cross-Platform <span className="text-zinc-500">Tracking</span></>,
        ],
      },
      {
        title: (
          <>
            4. High-Converting Landing Pages <span className="text-[#dbe11f]">(Web)</span>
          </>
        ),
        desc: (
          <>
            Sending ad traffic to a bad website is a waste of money. As a top <strong className="text-[#dbe11f]">Web Development Agency</strong>, we build dedicated, fast-loading landing pages designed purely to collect leads.
          </>
        ),
        subPoints: [],
      },
    ],
  };

  // --- 4. PROCESS DATA ---
  const processData = [
    {
      title: <>Analyze</>,
      desc: (
        <>
          We review your past ads, understand your profit margins, and calculate exactly how much you can afford to pay for a new customer.
        </>
      ),
    },
    {
      title: <>Create</>,
      desc: (
        <>
          We write persuasive ad copy and design stunning visuals tailored to the Perinthalmanna audience.
        </>
      ),
    },
    {
      title: <>Launch</>,
      desc: (
        <>
          We go live with multiple ad variations to see which specific message gets the most clicks at the lowest cost.
        </>
      ),
    },
    {
      title: <>Optimize</>,
      desc: (
        <>
          We kill the losing ads and pour your budget into the winners, scaling your <span className="text-[#dbe11f]">Return on Ad Spend (ROAS)</span> daily.
        </>
      ),
    },
  ];

  // --- 5. FAQ DATA ---
  const faqData = [
    {
      question: (
        <>
          Why is Zaynlo the <Link to="/" className="text-[#dbe11f] hover:underline">Best Digital Advertising Agency In Perinthalmanna?</Link>
        </>
      ),
      answer: (
        <>
          Because we don't guess. Many local agencies just throw money at a post and hope for the best. We use advanced tracking, A/B testing, and conversion-optimized landing pages to ensure every rupee you spend brings measurable returns. Plus, we are right here in town for face-to-face meetings.
        </>
      ),
    },
    {
      question: <>How much budget do I need to start advertising?</>,
      answer: (
        <>
          You don't need a massive corporate budget to start. We can run highly effective, hyper-local campaigns in Malappuram with reasonable starting budgets. We focus on getting you early wins, and then we use the profits from those wins to scale your ad spend.
        </>
      ),
    },
    {
      question: <>What is the difference between Advertising and SEO?</>,
      answer: (
        <>
          Advertising (Google Ads, Facebook Ads) is like a faucet—you turn it on and get traffic and leads immediately, but you pay for every click. SEO takes months to build, but once you rank, the traffic is free. For the best results, we recommend using ads for instant cash flow while we build your SEO in the background.
        </>
      ),
    },
    {
      question: <>Do you create the images and videos for the ads?</>,
      answer: (
        <>
          Yes! We are a full-service agency. Our creative team will design all the graphics, write the captions, and edit the video reels needed for your campaigns.
        </>
      ),
    },
    {
      question: <>How do I know if my ads are actually working?</>,
      answer: (
        <>
          We provide complete transparency. Every month, you receive a detailed performance report showing exactly how much was spent, how many people clicked, and how many direct leads or sales were generated from our efforts.
        </>
      ),
    },
  ];

  // --- 6. TESTIMONIALS DATA ---
  const testimonialData = {
    h2: (
      <>
        Local Ad <span className="text-[#dbe11f]">Success Stories</span>
      </>
    ),
    desc: (
      <>
        See how we helped local Perinthalmanna businesses turn their ad budgets into profit generators.
      </>
    ),
    reviews: [
      {
        text: (
          <>
            "We were burning money on Facebook ads before Zaynlo took over. They completely changed our targeting strategy. In our first month with them, footfall to our Perinthalmanna showroom doubled."
          </>
        ),
        author: <>Fayas K.</>,
        role: <>Owner, Royal Furniture</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "As a local clinic, we needed more patient bookings. Zaynlo set up a Google Search campaign targeting people looking for doctors near them. Our phones have not stopped ringing since."
          </>
        ),
        author: <>Dr. Anjali Menon</>,
        role: <>MD, CarePlus Healthcare</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "They are easily the best digital advertising agency in the district. Their lead generation funnels for our real estate project brought in high-quality buyers we couldn't reach before."
          </>
        ),
        author: <>Mathew John</>,
        role: <>Director, Skyline Properties</>,
        location: <>Malappuram</>,
      },
      {
        text: (
          <>
            "I love that I can just drive to their office at Aysha Commercial Complex and sit down with their team to review the ad data. You can't get that level of trust with a remote freelancer."
          </>
        ),
        author: <>Suhail A.</>,
        role: <>Founder, AutoDrive Motors</>,
        location: <>Perinthalmanna</>,
      },
      {
        text: (
          <>
            "The ad creatives they design are stunning. Our Instagram page looks like a global brand now, and the sales from their Meta ads have completely transformed our boutique."
          </>
        ),
        author: <>Zahra Fatima</>,
        role: <>Owner, The Silk Thread</>,
        location: <>Manjeri</>,
      },
      {
        text: (
          <>
            "Clear communication, aggressive strategies, and actual ROI. If you are serious about growing your business in Kerala, you need Zaynlo handling your ad spend."
          </>
        ),
        author: <>Vishnu Prasad</>,
        role: <>CEO, TechZone Electronics</>,
        location: <>Calicut</>,
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
        <title>Best Digital Advertising Agency in Perinthalmanna | Zaynlo</title>
        <meta name="description" content="Get high ROI with Zaynlo, the best digital advertising agency in Perinthalmanna. We run profitable Google Ads, Meta Ads & lead generation in Malappuram." />
        <meta name="keywords" content="best digital advertising agency Perinthalmanna, Google Ads Perinthalmanna, Meta Ads Malappuram, PPC agency Perinthalmanna, lead generation Malappuram, Zaynlo" />
        <link rel="canonical" href={`${site_url}/best-digital-advertising-agency-in-perinthalmanna`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* ── Open Graph ── */}
        <meta property="og:title" content="Best Digital Advertising Agency in Perinthalmanna | Zaynlo" />
        <meta property="og:description" content="Perinthalmanna's best digital advertising agency. High-ROI Google Ads, Meta Ads & lead generation campaigns by Zaynlo." />
        <meta property="og:url" content={`${site_url}/best-digital-advertising-agency-in-perinthalmanna`} />
        <meta property="og:image" content={`${site_url}/seopage.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Digital Advertising Agency in Perinthalmanna | Zaynlo" />
        <meta name="twitter:description" content="Best digital advertising agency in Perinthalmanna. Google Ads, Meta Ads & lead generation by Zaynlo." />
        <meta name="twitter:image" content={`${site_url}/seopage.webp`} />

        {/* ── FAQPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "What is the best digital advertising agency in Perinthalmanna?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo is the best digital advertising agency in Perinthalmanna, running profitable Google Ads, Meta Ads, and lead generation campaigns for local businesses in Malappuram." } },
            { "@type": "Question", "name": "Does Zaynlo run Google Ads in Perinthalmanna?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Zaynlo's Google Ads team creates targeted campaigns for local Perinthalmanna businesses, driving qualified leads and store visits through Search, Display, and Maps ads." } },
            { "@type": "Question", "name": "What ad platforms does Zaynlo manage in Malappuram?", "acceptedAnswer": { "@type": "Answer", "text": "Zaynlo manages advertising on Google Ads, Facebook (Meta), Instagram, YouTube, and LinkedIn for businesses in Perinthalmanna and across Malappuram." } },
            { "@type": "Question", "name": "How quickly will I get leads from digital ads?", "acceptedAnswer": { "@type": "Answer", "text": "Paid advertising campaigns can generate leads within 24 to 48 hours of launch. Zaynlo continuously optimises your campaigns for better performance and lower cost-per-lead." } },
            { "@type": "Question", "name": "Is digital advertising worth it for a local Perinthalmanna business?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Digital advertising lets you target customers in Perinthalmanna, Manjeri, and Malappuram with precision, ensuring your budget reaches people most likely to buy from you." } }
          ]}`}
        </script>

        {/* ── WebPage Schema ── */}
        <script type="application/ld+json">
          {`{ "@context": "https://schema.org", "@type": "WebPage", "name": "Best Digital Advertising Agency in Perinthalmanna | Zaynlo", "description": "Get higher ROI with Zaynlo, the best digital advertising agency in Perinthalmanna. Google Ads, Meta Ads & lead generation.", "url": "${site_url}/best-digital-advertising-agency-in-perinthalmanna", "inLanguage": "en-IN", "publisher": { "@type": "Organization", "name": "Zaynlo", "logo": { "@type": "ImageObject", "url": "${site_url}/logo.png" } } }`}
        </script>

        {/* Schema Markup for Local Advertising Agency */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AdvertisingAgency", 
              "name": "Zaynlo - Best Digital Advertising Agency In Perinthalmanna",
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
                  "name": "Performance Digital Advertising",
                  "description": "Google Ads, Meta Ads (Facebook/Instagram), Lead Generation, and Retargeting campaigns tailored for local businesses."
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
                Our Advertising <span className="text-[#dbe11f]">Framework</span>
              </>
            }
            steps={processData}
          />

          {/* 5. FAQ SECTION */}
          <SEOFAQ
            h2={
              <>
                Local Advertising <span className="text-[#dbe11f]">FAQ</span>
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
                Visit Our <span className="text-[#dbe11f]">Office</span>
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

export default Best_Digital_Advertising_Agency_In_Perinthalmanna;