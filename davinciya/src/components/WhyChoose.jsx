import React from 'react'

const leftStats = [
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="4" y="6" width="28" height="34" rx="3" stroke="#4a3728" strokeWidth="1.4" fill="none"/>
        <text x="10" y="26" fontSize="11" fill="#4a3728" fontWeight="700">15</text>
        <circle cx="34" cy="34" r="8" stroke="#4a3728" strokeWidth="1.2" fill="none"/>
        <path d="M30 34 L33 37 L38 31" stroke="#4a3728" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '15-Year Warranty',
    desc: 'Peace of mind that lasts—solid craftsmanship, guaranteed.',
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="18" stroke="#4a3728" strokeWidth="1.4" fill="none"/>
        <text x="14" y="20" fontSize="8" fill="#4a3728">₹</text>
        <path d="M14 26 Q22 18 30 26" stroke="#4a3728" strokeWidth="1.2" fill="none"/>
        <circle cx="22" cy="30" r="3" stroke="#4a3728" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    title: 'Easy EMIs',
    desc: 'Flexible payment plans to suit every budget.',
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="18" stroke="#4a3728" strokeWidth="1.4" fill="none"/>
        <text x="12" y="20" fontSize="9" fill="#4a3728" fontWeight="700">45</text>
        <path d="M12 26 L32 26" stroke="#4a3728" strokeWidth="1.2"/>
        <path d="M26 30 L32 26 L26 22" stroke="#4a3728" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Move-in Ready in 45 Days*',
    desc: 'Move in ready in just 45 days!',
  },
]

const rightStats = [
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="6" y="8" width="32" height="28" rx="3" stroke="#4a3728" strokeWidth="1.4" fill="none"/>
        <path d="M14 20 L20 26 L30 16" stroke="#4a3728" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 20 L20 26 L30 16" stroke="#4a3728" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" transform="translate(4,4) scale(0.6)" opacity="0.4"/>
      </svg>
    ),
    title: '140+ Quality Checks',
    desc: 'Every detail matters. We double (and triple) check it.',
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 6 L36 14 L36 30 Q36 38 22 42 Q8 38 8 30 L8 14 Z" stroke="#4a3728" strokeWidth="1.4" fill="none"/>
        <path d="M16 22 L20 26 L28 18" stroke="#4a3728" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Happy Homes & Clients',
    desc: 'A growing family of satisfied customers across Delhi NCR.',
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 8 L14 16 L8 18 L8 28 L14 28 L22 36 L30 28 L36 28 L36 18 L30 16 Z" stroke="#4a3728" strokeWidth="1.3" fill="none"/>
      </svg>
    ),
    title: 'Proudly Serving Bharat',
    desc: 'Local expertise, personalized touch—right where you are.',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-semibold text-gray-900 mb-14">
          Why Choose Malik Decoration?
        </h2>

        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Left stats */}
          <div className="space-y-8">
            {leftStats.map(s => (
              <div key={s.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0">{s.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center circle image */}
          <div className="flex justify-center">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#c9a96e] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                alt="Beautiful interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right stats */}
          <div className="space-y-8">
            {rightStats.map(s => (
              <div key={s.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0">{s.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
