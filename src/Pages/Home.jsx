import React from 'react'

// 1. Layout & Scroll Components
import SmoothScroll from '../Components/SmoothScroll' // Ensure you created this from step 1
import Footer from '../Components/Footer'

// 2. Sections
import Hero from '../Sections/Hero'
import SmallAbout from '../Sections/SmallAbout' // Assuming this is MissionVision or similar
import WhyChooseUs from '../Sections/WhyChooseUs'
import ServicesStack from '../Sections/ServicesStack' // Assuming this is the Services3D component
import SmallProjects from '../Sections/SmallProjects'
import Testimonials from '../Sections/Testimonials'
import ContactForm from '../Sections/ContactForm'

const Home = () => {
  return (
    <SmoothScroll>
      {/* 'overflow-x-hidden' is CRITICAL here. 
         It prevents 3D elements/glows from breaking the mobile layout.
      */}
      <main className="w-full relative overflow-x-hidden bg-zinc-950">
        
        {/* Hero Section (Contains 3D Spline & Loop) */}
        <Hero />

        {/* Core Values / About */}
        <SmallAbout />

        {/* Features / Why Us */}
        <WhyChooseUs />

        {/* 3D Services Tilt Cards */}
        <ServicesStack />

        {/* Project Carousel (Mobile optimized) */}
        <SmallProjects />

        {/* Testimonials (Swipeable) */}
        <Testimonials />

        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <Footer />
        
      </main>
    </SmoothScroll>
  )
}

export default Home