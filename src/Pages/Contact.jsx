import React from "react";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet

// 1. Layout & Scroll Components
import SmoothScroll from "../Components/SmoothScroll";
import Footer from "../Components/Footer";
import PageBanner from "../Components/PageBanner";

// 2. Sections
import ContactForm from "../Sections/ContactForm";
import ClientMarquee from "../Sections/ClientMarque";

const Contact = () => {
  return (
    <>
      {/* 2. SEO Configuration for Contact Page */}
      <Helmet>
        <title>Contact Best Advertising Agency Kerala | Zaynlo</title>
        <meta
          name="description"
          content="Ready to grow your brand? Connect with Zaynlo today for a consultation. Call us or visit our office in Kerala for premium digital solutions."
        />
        <link
          rel="canonical"
          href="https://zaynlo.muhammedshafik.com/contact"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content="Contact Zaynlo - Start Your Project"
        />
        <meta
          property="og:description"
          content="Ready to start your next big thing? We are accepting new partnerships. Let's talk."
        />
        <meta
          property="og:url"
          content="https://zaynlo.muhammedshafik.com/contact"
        />
        <meta
          property="og:image"
          content="https://zaynlo.muhammedshafik.com/contact_banner.webp"
        />
      </Helmet>

      <SmoothScroll>
        <main className="w-full relative overflow-x-hidden bg-zinc-950">
          {/* 1. PAGE HEADER */}
          <PageBanner
            title="Let's"
            highlight="Talk."
            description="Ready to start your next big thing? We are currently accepting new partnerships for Q4. Let's build something legendary."
            imageSrc="/contact_banner.webp"
            primaryBtn={{
              text: "Book a Call",
              // Note: Ensure your PageBanner component handles "tel:" links correctly
              link: "tel:+919526299568",
            }}
            secondaryBtn={{
              text: "Email Us",
              link: "mailto:hello@zaynlo.com",
            }}
          />

          {/* 2. CONTACT FORM & INFO */}
          <ContactForm />

          {/* 3. TRUST SIGNALS */}
          <ClientMarquee />

          {/* 4. FOOTER */}
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
};

export default Contact;
