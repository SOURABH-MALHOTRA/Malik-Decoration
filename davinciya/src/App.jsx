import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import MarqueeSection from './components/MarqueeSection'
import ServicesSection from './components/ServicesSection'
import WhyChoose from './components/WhyChoose'
import Gallery from './components/Gallery'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <MarqueeSection />
          <ServicesSection />
          <WhyChoose />
          <Gallery />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
