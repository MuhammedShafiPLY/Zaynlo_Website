import React from 'react'

// 1. Layout & Scroll Components
import SmoothScroll from '../Components/SmoothScroll'
import Footer from '../Components/Footer'

// 2. Sections
import Hero from '../Sections/Hero'
import SmallAbout from '../Sections/SmallAbout'
import WhyChooseUs from '../Sections/WhyChooseUs'
import ServicesStack from '../Sections/ServicesStack' // Ensure this matches your file name
import SmallProjects from '../Sections/SmallProjects'
import Testimonials from '../Sections/Testimonials'
import ContactForm from '../Sections/ContactForm'
import ContactUs from '../Components/ContactUs'

const Home = () => {
  return (
    <SmoothScroll>
      {/* OPTIMIZATION APPLIED: 
          1. 'overflow-x-hidden': Prevents horizontal scroll caused by animations.
          2. 'will-change-transform': Forces the browser to use the GPU for scrolling, 
             fixing the lag/stuck feeling on mobile.
      */}
      <main className="w-full relative overflow-x-hidden bg-zinc-950 will-change-transform">
        
        {/* Hero Section (Optimized: No 3D on Mobile) */}
        <Hero />

        {/* Core Values / About */}
        <SmallAbout />

        {/* Features / Why Us */}
        <WhyChooseUs />

        {/* 3D Services Tilt Cards (Optimized: No Tilt on Mobile) */}
        <ServicesStack />

        {/* Project Carousel */}
        <SmallProjects />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Form */}
        <ContactForm />

        {/* <ContactUs /> */}

        {/* Footer */}
        <Footer />
        
      </main>
    </SmoothScroll>
  )
}

export default Home