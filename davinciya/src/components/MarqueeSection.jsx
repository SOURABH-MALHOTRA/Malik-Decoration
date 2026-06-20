import React from 'react'
const items = ['Kitchen', 'Dining Area', 'Balcony', 'Bathroom', 'Study Corner', 'Living Room', 'Bedroom']
export default function MarqueeSection() {
  const doubled = [...items, ...items]
  return (
    <div className="bg-[#2a1e14] py-4 overflow-hidden">
      <div className="marquee-track flex gap-0">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap text-white font-semibold text-lg tracking-wide">
            <span className="text-[#c9a96e] mx-4 text-xl">+</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
