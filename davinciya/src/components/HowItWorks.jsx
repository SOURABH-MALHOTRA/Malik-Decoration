import React from 'react'

const steps = [
  {
    title: 'Meet Designer',
    desc: 'Our experts meet you personally to understand your space, lifestyle, and vision.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    title: 'Finalized Layout',
    desc: 'We create detailed 3D designs and layouts tailored to your preferences.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
  },
  {
    title: 'Work in Progress',
    desc: 'Our expert craftsmen execute the design with precision and quality.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
  },
  {
    title: 'Smooth Delivery',
    desc: 'We hand over your dream space—on time and beyond expectations.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl font-semibold text-[#4a3728] mb-2">
            Solution In 4 Easy Steps
          </h2>
          <p className="text-[#7a5c3a] font-medium">Successful life</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden sm:block absolute top-20 left-[12.5%] right-[12.5%] h-px bg-[#c9a96e] z-0"/>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                {/* Circle image */}
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-3 border-[#c9a96e] shadow-md flex-shrink-0"
                  style={{ border: '3px solid #c9a96e' }}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed hidden sm:block">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
