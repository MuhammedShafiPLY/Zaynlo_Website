import React from 'react'
import AboutBanner from '../Sections/AboutBanner'
import AboutUs from '../Sections/AboutBanner'
import ClientMarquee from '../Sections/ClientMarque'
import SmallAbout from '../Sections/SmallAbout'
import WhyChooseUs from '../Sections/WhyChooseUs'
import MissionVision from '../Sections/MIssionVision'
import Testimonials from '../Sections/Testimonials'
import Footer from '../Components/Footer'
import GetInTouch from '../Components/GetInTouch'
import PageBanner from '../Components/PageBanner'

const About = () => {
  return (

    
    <div>
            {/* FIX 3: Global style to hide scrollbars and prevent horizontal scrolling */}


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
        link: "/work"
      }}
    />

      {/* <AboutBanner /> */}
      <ClientMarquee />
      <SmallAbout />
      <WhyChooseUs />
      <MissionVision />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default About