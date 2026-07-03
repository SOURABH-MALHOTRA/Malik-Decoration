import React, { useState, useEffect } from 'react'
import medical from "../assets/medical.jpeg"
const slides = [
  {
    label: 'Apartment',
    tag: 'Luxury Living',
    desc: 'Smartly designed city homes, reimagined with elegance and comfort.',
    bg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80',
  },
  {
    label: 'Villa',
    tag: 'Premium',
    desc: 'Luxury villa interiors crafted for the finest taste.',
    bg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80',
  },
  {
    label: 'Corporate',
    tag: 'Trending',
    desc: 'Professional office spaces built for productivity and style.',
    bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
  },
  {
    label: 'Healthcare',
    tag: 'Designed to Heal',
    desc: 'Modern Healthcare Spaces Built for Healing and Efficiency.',
    bg: medical,
  },
  {
    label: 'Penthouse',
    tag: 'Exclusive',
    desc: 'Sky-high living redefined with premium design.',
    bg: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent(c => (c + 1) % slides.length)

  return (
    <section className="pt-20 bg-white px-3 sm:px-5">
      {/* Container - yaha image puri dikhegi */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
           style={{ height: '75vh', minHeight: '450px', maxHeight: '650px' }}>

        {/* Slides */}
        {slides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            {/* Background blur layer for filling empty spaces */}
            <div className="absolute inset-0 bg-cover bg-center blur-lg scale-110" style={{ backgroundImage: `url(${slide.bg})` }} />
            
            {/* Main Image - object-contain prevents cutting */}
            <img src={slide.bg} alt={slide.label} className="relative w-full h-full object-fit:cover" />
            
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-all" aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-all" aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8 sm:p-10">
          <div className="mb-4">
            <p className="text-[#c9a96e] text-xs font-bold tracking-[3px] uppercase mb-1">{slides[current].tag}</p>
            <h1 className="font-serif text-4xl sm:text-6xl text-white font-bold mb-2">{slides[current].label}</h1>
            <p className="text-white/90 text-sm sm:text-base max-w-md">{slides[current].desc}</p>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="bg-[#c9a96e] hover:bg-[#b8935a] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all">Book Consultation</a>
            <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all">View More</a>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute top-6 right-6 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#c9a96e] w-8' : 'bg-white/50 w-2'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}