import React from 'react'
import { Routes, Route } from 'react-router-dom'
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

// Placeholder components for other pages
// You can move these into their own files later

const App = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-x-hidden">
      <ScrollToTop />

      {/* 2. Global Navbar (Stays on every page) */}
      <Navbar />

      <WhatsAppButton />

      {/* 3. Page Routes */}
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

        <Route path="*" element={<NotFound />} />
        
      </Routes>

      {/* Footer can go here */}
    </div>
  )
}

export default App