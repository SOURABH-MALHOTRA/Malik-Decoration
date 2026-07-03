import React from 'react'

const services = [
  {
    title: 'Modular Interiors',
    desc: 'Thoughtfully designed kitchens, wardrobes, and storage that maximize space without compromising style.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    title: 'Full Home Interiors',
    desc: 'Complete, turnkey interiors tailored to fit every space in your home.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    title: 'Luxury Interiors',
    desc: 'Tailored designs that reflect your taste, defined by timeless sophistication.',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
  },
  {
    title: 'Renovations',
    desc: 'Expert renovation services to upgrade, refresh, and redefine your space effortlessly.',
    img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            Malik Decoration – One Destination. Endless Interior Inspiration.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Be it seamless renovations or tailored modular solutions, Malik Decoration brings your ideas to life in every space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              {/* Image with arrow button */}
             {/* Image container — overflow-hidden sirf image pe, parent pe nahi */}
<div className="relative" style={{ height: '220px' }}>
  
  {/* Alag div sirf image ke liye overflow-hidden */}
  <div className="absolute inset-0 rounded-t-2xl overflow-hidden">
    <img
      src={s.img}
      alt={s.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Button ab clip nahi hoga */}
  <div
    className="absolute left-1/2 bottom-0"
    style={{ transform: 'translate(-50%, 50%)', zIndex: 10 }}
  >
    <button className="w-11 h-11 rounded-full bg-[#c9a96e] hover:bg-[#4a3728] flex items-center justify-center transition-colors shadow-md">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M5 9 H13 M9 5 L13 9 L9 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>

</div>

              {/* Text */}
              <div className="pt-8 pb-5 px-5 text-center">
                <h3 className="font-semibold text-[#7a5c3a] text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
