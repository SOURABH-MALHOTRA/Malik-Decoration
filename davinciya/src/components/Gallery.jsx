import React, { useState } from 'react'

const categories = ['All', 'Living Room', 'Bedroom', 'Modular Kitchens', 'Dining Areas', 'Entry & Foyer', 'Balconies', 'Bathrooms']

const galleryImages = [
  { cat: 'Living Room',      src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80', alt: 'Modern living room' },
  { cat: 'Living Room',      src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80', alt: 'Luxury living room' },
  { cat: 'Living Room',      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', alt: 'Contemporary living' },
  { cat: 'Bedroom',          src: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&q=80', alt: 'Master bedroom' },
  { cat: 'Bedroom',          src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80', alt: 'Luxury bedroom' },
  { cat: 'Bedroom',          src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80', alt: 'Modern bedroom' },
  { cat: 'Bedroom',          src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80', alt: 'Minimalist bedroom' },
  { cat: 'Modular Kitchens', src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', alt: 'Modular kitchen' },
  { cat: 'Modular Kitchens', src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80', alt: 'Modern kitchen' },
  { cat: 'Dining Areas',     src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80', alt: 'Elegant dining' },
  { cat: 'Dining Areas',     src: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&q=80', alt: 'Dining area' },
  { cat: 'Bathrooms',        src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', alt: 'Luxury bathroom' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? galleryImages : galleryImages.filter(img => img.cat === active)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-semibold text-[#4a3728] mb-8">
          See our latest Gallery
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-[#4a3728] text-white border-[#4a3728]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#4a3728] hover:text-[#4a3728]'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] gallery-img cursor-pointer">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy"/>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">No images in this category yet.</div>
        )}
      </div>
    </section>
  )
}
