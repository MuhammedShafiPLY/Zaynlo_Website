import React from "react";
import PageBanner from "../Components/PageBanner"; // Adjust path as needed
import Footer from "../Components/Footer";
import ContactForm from "../Sections/ContactForm";

const Contact = () => {
  return (
    <div>
      <PageBanner 
        title="Let's"
        highlight="Talk."
        description="Ready to start your next big thing? We are currently accepting new partnerships for Q4. Let's build something legendary."
        imageSrc="/about_banner.webp" // Make sure you have this image
        
        primaryBtn={{
          text: "Book a Call",
          link: "https://calendly.com/your-link" // Example external link
        }}

        secondaryBtn={{
          text: "Email Us",
          link: "mailto:hello@zaynlo.com"
        }}
      />
      
      {/* ... Add your Contact Form or Map below here ... */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;