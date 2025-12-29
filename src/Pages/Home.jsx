import React from 'react'
import Hero from '../Sections/Hero'
import SmallAbout from '../Sections/SmallAbout'
import WhyChooseUs from '../Sections/WhyChooseUs'
import ServicesDiagram from '../Sections/SmallServices'
import ServiceModules from '../Sections/ServicesModule'
import ServicesStack from '../Sections/ServicesStack'
import SmallProjects from '../Sections/SmallProjects'
import Testimonials from '../Sections/Testimonials'
import ContactForm from '../Sections/ContactForm'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <SmallAbout />
        <WhyChooseUs />
        {/* <ServicesDiagram /> */}
        {/* <ServiceModules /> */}
        <ServicesStack />
        <SmallProjects />
        <Testimonials />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Home