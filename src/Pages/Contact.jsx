import React from "react";
import { Helmet } from "react-helmet-async";
import SmoothScroll from "../Components/SmoothScroll";
import Footer from "../Components/Footer";
import PageBanner from "../Components/PageBanner";
import ContactForm from "../Sections/ContactForm";
import ClientMarquee from "../Sections/ClientMarque";
import SEOMap from "../Components/Seo/SEOMap";

const Contact = () => {
  const site_url = import.meta.env.VITE_SITE_URL;
  
  return (
    <>
      <Helmet>
        {/* ── Primary SEO ── */}
        <title>Contact Zaynlo | Digital Agency in Perinthalmanna, Kerala</title>
        <meta
          name="description"
          content="Contact Zaynlo, a top digital marketing agency in Perinthalmanna, Kerala. Call, email or visit us. We reply within 24 hours. Start your project today!"
        />
        <meta
          name="keywords"
          content="contact Zaynlo, digital agency Perinthalmanna, advertising agency Kerala contact, digital marketing agency Kerala, Zaynlo contact"
        />
        <link rel="canonical" href={`${site_url}/contact`} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* ── Open Graph (Facebook / WhatsApp) ── */}
        <meta property="og:title" content="Contact Zaynlo | Digital Agency in Perinthalmanna, Kerala" />
        <meta property="og:description" content="Reach out to Zaynlo — Kerala's top advertising & digital marketing agency. We respond within 24 hours. Let's build something great together!" />
        <meta property="og:url" content={`${site_url}/contact`} />
        <meta property="og:image" content={`${site_url}/contact_banner.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Zaynlo" />

        {/* ── Twitter / X Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Zaynlo | Digital Agency in Perinthalmanna, Kerala" />
        <meta name="twitter:description" content="Reach out to Kerala's top advertising & digital marketing agency. We respond within 24 hours." />
        <meta name="twitter:image" content={`${site_url}/contact_banner.webp`} />

        {/* ── LocalBusiness Schema ── */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Zaynlo Digital Agency",
              "url": "${site_url}/contact",
              "image": "${site_url}/about_banner.webp",
              "logo": "${site_url}/logo.png",
              "description": "Zaynlo is a top digital marketing and advertising agency in Perinthalmanna, Kerala offering SEO, web design, branding and social media marketing services.",
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
              "telephone": "+919526299568",
              "email": "info@zaynlo.com",
              "openingHours": "Mo-Sa 09:00-18:00",
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/__zaynlo",
                "https://www.linkedin.com/in/zaynlo-advertising-agency-16a13b3a3"
              ]
            }
          `}
        </script>
      </Helmet>

      <SmoothScroll>
        <main className="w-full relative overflow-x-hidden bg-zinc-950">
          
          <PageBanner
            title="Let's"
            highlight="Talk."
            description="Ready to start your next big thing? We are currently accepting new partnerships."
            imageSrc="/contact_banner.webp"
            // ⚠️ CHECK: Ensure PageBanner uses <a> tags for these links, NOT <Link>
            primaryBtn={{
              text: "Book a Call",
              link: "tel:+919526299568", 
            }}
            secondaryBtn={{
              text: "Email Us",
              link: "mailto:hello@zaynlo.com",
            }}
          />

          <ContactForm />

          <SEOMap
            h2={<>Find Us in <span className="text-[#dbe11f]">Perinthalmanna</span></>}
            location={{
              address: "Aysha Commercial Complex, X6G9+JRR, NH 966, Perinthalmanna, Kerala 679322",
              phone: "+91 952 629 9568",
              email: "info@zaynlo.com",
              hours: "Mon - Sat: 9 AM - 6 PM",
              // ✅ THIS is the external link that SEO tools will love:
              googleMapsUrl: "https://www.google.com/maps/dir/10.9692205,76.2131469/Aysha+Commercial+Complex,+X6G9%2BJRR,+NH+966,+Perinthalmanna,+Kerala+679322/@10.9730835,76.2143829,1136m/data=!3m2!1e3!4b1!4m17!1m7!3m6!1s0x3ba7cd8452df58d1:0x8773758fa664033a!2sAysha+Commercial+Complex!8m2!3d10.9766215!4d76.2195279!16s%2Fg%2F11v649nyv7!4m8!1m1!4e1!1m5!1m1!1s0x3ba7cd8452df58d1:0x8773758fa664033a!2m2!1d76.2195277!2d10.9767841?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D" 
            }}
            // ⚠️ PASTE YOUR REAL EMBED CODE BELOW (src="..." only)
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1236.757032048295!2d76.21832543511759!3d10.976784065613975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd8452df58d1%3A0x8773758fa664033a!2sAysha%20Commercial%20Complex!5e1!3m2!1sen!2sin!4v1770227496483!5m2!1sen!2sin"
          />

          <ClientMarquee />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
};

export default Contact;