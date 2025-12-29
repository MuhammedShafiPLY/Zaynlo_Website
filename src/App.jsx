import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'

// Placeholder components for other pages
// You can move these into their own files later

const App = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-x-hidden">

      {/* 2. Global Navbar (Stays on every page) */}
      <Navbar />

      {/* 3. Page Routes */}
      <Routes>
        

        <Route path='/' element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>

      {/* Footer can go here */}
    </div>
  )
}

export default App