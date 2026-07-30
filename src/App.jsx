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

// Existing SEO Pages
import Best_Digital_Marketing_Agency_In_Kerala from './Pages/SEO_Pages/Best-Digital-Marketing-Agency-in-Kerala'
import Top_Digital_Marketing_Company_In_Kerala from './Pages/SEO_Pages/Top-Digital-Marketing-Comapny-In-Kerala'
import Best_Digital_Marketing_Agency_In_Perinthalmanna from './Pages/SEO_Pages/Best-Digital-Marketing-Agency-In-Perinthalmanna'
import Best_Digital_Advertising_Agency_In_Kerala from './Pages/SEO_Pages/Best Digital Advertising Agency In Kerala'
import BestBrandingAgencyKerala from './Pages/SEO_Pages/BestBrandingAgencyInKerala'
import BestWebDevelopmentAgencyInKerala from './Pages/SEO_Pages/BestWebDevelopmentAgencyInKerala'
import SeoServicesCompanyInKerala from './Pages/SEO_Pages/SEOServicesCompanyInKerala'

// ✅ NEWLY ADDED SEO PAGES
import Best_SEO_Company_In_Kerala from './Pages/SEO_Pages/Best_SEO_Company_In_Kerala'
import Seo_Agency_In_Kerala from './Pages/SEO_Pages/Seo_Agency_In_Kerala'
import Top_Digital_Marketing_Company_In_Perinthalmanna from './Pages/SEO_Pages/Top_Digital_Marketing_Company_In_Perinthalmanna'
import Best_Digital_Advertising_Agency_In_Perinthalmanna from './Pages/SEO_Pages/Best_Digital_Advertising_Agency_In_Perinthalmanna'
import Best_Branding_Agency_In_Perinthalmanna from './Pages/SEO_Pages/Best_Branding_Agency_In_Perinthalmanna'
import Best_Web_Development_Agency_In_Perinthalmanna from './Pages/SEO_Pages/Best_Web_Development_Agency_In_Perinthalmanna'
import SEO_Services_Company_In_Perinthalmanna from './Pages/SEO_Pages/SEO_Services_Company_In_Perinthalmanna'
import Best_SEO_Company_Perinthalmanna from './Pages/SEO_Pages/Best_SEO_Company_Perinthalmanna'
import Seo_Agency_In_Perinthalmanna from './Pages/SEO_Pages/Seo_Agency_In_Perinthalmanna'

// UAE SEO Pages
import BestDigitalMarketingAgencyInUAE from './Pages/SEO_Pages/BestDigitalMarketingAgencyInUAE'
import TopDigitalMarketingCompanyInUAE from './Pages/SEO_Pages/TopDigitalMarketingCompanyInUAE'
import BestDigitalAdvertisingAgencyInUAE from './Pages/SEO_Pages/BestDigitalAdvertisingAgencyInUAE'
import BestBrandingAgencyInUAE from './Pages/SEO_Pages/BestBrandingAgencyInUAE'
import BestWebDevelopmentAgencyInUAE from './Pages/SEO_Pages/BestWebDevelopmentAgencyInUAE'
import SEOServicesCompanyInUAE from './Pages/SEO_Pages/SEOServicesCompanyInUAE'

const App = () => {

  const site_url = import.meta.env.VITE_SITE_URL;
  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-x-hidden">
      {/* 2. Define Global Default SEO Settings */}
      <Helmet>
        <title>Zaynlo - Best Digital Marketing Agency in Kerala</title>
        <meta name="description" content="Zaynlo is a premium advertising and digital marketing agency in Kerala providing branding, web development, and SEO services." />
        <meta name="keywords" content="advertising agency, kerala, web design, digital marketing, zaynlo" />
        <link rel="canonical" href={site_url} />
      </Helmet>

      <ScrollToTop />
      <Navbar />
      <WhatsAppButton />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path='/careers' element={<Careers />} />

        {/* ========================================= */}
        {/* SEO Pages Routing */}
        {/* ========================================= */}

        {/* Existing Routes */}
        <Route path='/best-digital-marketing-agency-in-kerala' element={<Best_Digital_Marketing_Agency_In_Kerala/>} />
        <Route path='/top-digital-marketing-company-in-kerala' element={ <Top_Digital_Marketing_Company_In_Kerala />} />
        <Route path='/best-digital-marketing-agency-in-perinthalmanna' element={ <Best_Digital_Marketing_Agency_In_Perinthalmanna />} />
        <Route path='/best-digital-advertising-agency-in-kerala' element={ <Best_Digital_Advertising_Agency_In_Kerala />} />
        <Route path='/best-branding-agency-in-kerala' element={ <BestBrandingAgencyKerala/>} />
        <Route path='/best-web-development-agency-in-kerala' element={ <BestWebDevelopmentAgencyInKerala/>} />
        <Route path='/seo-services-company-in-kerala' element={ <SeoServicesCompanyInKerala/>} />

        {/* ✅ NEWLY ADDED ROUTES */}
        <Route path='/best-seo-company-in-kerala' element={<Best_SEO_Company_In_Kerala />} />
        <Route path='/seo-agency-in-kerala' element={<Seo_Agency_In_Kerala />} />
        <Route path='/top-digital-marketing-company-in-perinthalmanna' element={<Top_Digital_Marketing_Company_In_Perinthalmanna />} />
        <Route path='/best-digital-advertising-agency-in-perinthalmanna' element={<Best_Digital_Advertising_Agency_In_Perinthalmanna />} />
        <Route path='/best-branding-agency-in-perinthalmanna' element={<Best_Branding_Agency_In_Perinthalmanna />} />
        <Route path='/best-web-development-agency-in-perinthalmanna' element={<Best_Web_Development_Agency_In_Perinthalmanna />} />
        <Route path='/seo-services-company-in-perinthalmanna' element={<SEO_Services_Company_In_Perinthalmanna />} />
        <Route path='/best-seo-company-perinthalmanna' element={<Best_SEO_Company_Perinthalmanna />} />
        <Route path='/seo-agency-in-perinthalmanna' element={<Seo_Agency_In_Perinthalmanna />} />

        {/* UAE SEO Pages */}
        <Route path='/best-digital-marketing-agency-in-uae' element={<BestDigitalMarketingAgencyInUAE />} />
        <Route path='/top-digital-marketing-company-in-uae' element={<TopDigitalMarketingCompanyInUAE />} />
        <Route path='/best-digital-advertising-agency-in-uae' element={<BestDigitalAdvertisingAgencyInUAE />} />
        <Route path='/best-branding-agency-in-uae' element={<BestBrandingAgencyInUAE />} />
        <Route path='/best-web-development-agency-in-uae' element={<BestWebDevelopmentAgencyInUAE />} />
        <Route path='/seo-services-company-in-uae' element={<SEOServicesCompanyInUAE />} />

        {/* Page Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App