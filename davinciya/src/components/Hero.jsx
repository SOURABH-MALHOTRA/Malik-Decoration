import React, { useState, useEffect } from 'react'

const slides = [
  { label: 'Apartment',  bg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80' },
  { label: 'Penthouse',  bg: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80' },
  { label: 'Villa',      bg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
   <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.bg} alt={slide.label} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/35"/>
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal mb-6 drop-shadow-md">
          {slides[current].label}
        </h1>
        <a href="#" className="inline-block bg-[#7a5c3a]/90 hover:bg-[#4a3728] text-white font-medium text-sm uppercase tracking-widest px-8 py-3 rounded-full w-fit transition-colors">
          Let's Connect
        </a>
      </div>

      <div className="absolute bottom-8 right-8 sm:right-12 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? 'bg-[#c9a96e] w-6' : 'bg-white/60 w-2'}`}
            aria-label={`Slide ${i + 1}`}/>
        ))}
      </div>
    </section>
  )
}
