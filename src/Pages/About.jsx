import React from 'react'

// 1. Layout & Scroll Components
import SmoothScroll from '../Components/SmoothScroll'
import Footer from '../Components/Footer'
import PageBanner from '../Components/PageBanner'
import GetInTouch from '../Components/GetInTouch'

// 2. Sections
import ClientMarquee from '../Sections/ClientMarque' // Ensure file name matches your project
import SmallAbout from '../Sections/SmallAbout'
import WhyChooseUs from '../Sections/WhyChooseUs'
import MissionVision from '../Sections/MIssionVision' // Ensure file name matches
import Testimonials from '../Sections/Testimonials'

const About = () => {
  return (
    <SmoothScroll>
      <main className="w-full relative overflow-x-hidden bg-zinc-950">
        
        {/* 1. HERO BANNER */}
        <PageBanner 
          title="About"
          highlight="Us."
          description="We craft premium digital products, brand experiences, and growth strategies for ambitious teams."
          imageSrc="/about_banner.webp"
          primaryBtn={{
            text: "Get Us Now",
            link: "/contact"
          }}
          secondaryBtn={{
            text: "Our Work",
            link: "/projects" // Updated to match your Navbar link
          }}
        />

        {/* 2. CLIENTS MARQUEE */}
        <ClientMarquee />

        {/* 3. INTRO / BENTO GRID */}
        <SmallAbout />

        {/* 4. WHY CHOOSE US (Features) */}
        <WhyChooseUs />

        {/* 5. MISSION & VISION (Core Values) */}
        <MissionVision />

        {/* 6. TESTIMONIALS */}
        <Testimonials />

        {/* 7. CTA SECTION */}
        <GetInTouch />

        {/* 8. FOOTER */}
        <Footer />
        
      </main>
    </SmoothScroll>
  )
}

export default About