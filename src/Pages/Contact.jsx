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
        <title>Contact Best Advertising Agency In Kerala | Zaynlo</title>
        <meta name="description" content="Ready to grow your brand? Connect with Zaynlo today." />
        <link rel="canonical" href={`${site_url}/contact`} />
        {/* ... keep your other meta tags ... */}
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