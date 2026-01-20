import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async' // 1. Import Helmet
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ScrollToTop from './Components/ScrollToTop'
import ServiceDetail from './Pages/ServiceDetail'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsOfService from './Pages/TermsOfService'
import NotFound from './Pages/NotFound'
import Careers from './Pages/Careers'
import WhatsAppButton from './Components/WhatsAppButton'
import SeoPage from './Pages/SEO_Pages/Best-Digital-Marketing-Agency-in-Kerala'

const App = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-x-hidden">
      {/* 2. Define Global Default SEO Settings */}
      <Helmet>
        <title>Zaynlo - Best Advertising Agency in Kerala</title>
        <meta name="description" content="Zaynlo is a premium advertising and digital marketing agency in Kerala providing branding, web development, and SEO services." />
        <meta name="keywords" content="advertising agency, kerala, web design, digital marketing, zaynlo" />
        <link rel="canonical" href="https://www.zaynlo.com/" />
      </Helmet>

      <ScrollToTop />
      <Navbar />
      <WhatsAppButton />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/best-digital-marketing-agency-in-kerala' element={<SeoPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App