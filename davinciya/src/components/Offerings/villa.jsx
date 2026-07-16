import React, { useState } from "react";
import MarqueeSection from "../../components/MarqueeSection";
import villa from "../../assets/villa.jpeg";
import villa1 from "../../assets/villa1.webp";
import villaofferingbanner from "../../assets/villaofferingbanner.jpg";
const features = [
  {
    title: "Transparent Pricing",
    desc: "Clear breakdowns, premium value — no hidden charges, just honest design.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect
          x="3"
          y="4"
          width="16"
          height="20"
          rx="2"
          stroke="#c9a96e"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M7 9h8M7 13h6M7 17h4"
          stroke="#c9a96e"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle
          cx="20"
          cy="20"
          r="5"
          fill="#f5f0eb"
          stroke="#c9a96e"
          strokeWidth="1.3"
        />
        <path
          d="M20 17.5v2.5l1.5 1"
          stroke="#c9a96e"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Professional Team",
    desc: "Skilled designers, artisans, and project managers who bring your villa vision to life.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle
          cx="9"
          cy="8"
          r="4"
          stroke="#c9a96e"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="19"
          cy="8"
          r="3"
          stroke="#c9a96e"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M2 21c0-3.87 3.13-7 7-7s7 3.13 7 7"
          stroke="#c9a96e"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M19 14c2.76 0 5 2.24 5 5"
          stroke="#c9a96e"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Award-Winning Craftsmanship",
    desc: "Recognized for excellence in bespoke luxury villa interiors across India.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M13 3l2.2 5 5.5.7-4 3.9 1 5.4-4.7-2.5-4.7 2.5 1-5.4-4-3.9 5.5-.7z"
          stroke="#c9a96e"
          strokeWidth="1.4"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M9 21v3M13 21v3M17 21v3M7 24h12"
          stroke="#c9a96e"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Advanced Design Tools",
    desc: "Immersive 3D views, material simulations, and modern planning for flawless results.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect
          x="2"
          y="5"
          width="22"
          height="15"
          rx="2"
          stroke="#c9a96e"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M9 20v3M17 20v3M6 23h14"
          stroke="#c9a96e"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M7 14l4-4 3 3 4-5"
          stroke="#c9a96e"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const services = [
  {
    label: "Master Bedroom Suite",
    img: villa1,
  },
  {
    label: "Grand Living Room",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    label: "Grand Foyer Entrance",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    label: "Luxe Walk-in Wardrobe",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
  },
  {
    label: "Statement Dining Space",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
  },
  {
    label: "Villa Outdoor Terrace",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  },
];

const galleryImages = [
  {
    src: villa1,
    alt: "Villa interior luxury",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Villa living area",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    alt: "Villa bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
    alt: "Villa master bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Villa",
  },
  {
    src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
    alt: "Villa kitchen",
  },
];

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We visit your villa and understand your vision, space, and lifestyle.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    num: "02",
    title: "Concept Design",
    desc: "Our designers craft 3D concepts and mood boards tailored to your taste.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    num: "03",
    title: "Finalization",
    desc: "Refine every detail — materials, finishes, lighting — with transparent pricing.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
  },
  {
    num: "04",
    title: "Handover",
    desc: "Flawless execution and on-time delivery. Your dream villa, move-in ready.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
];

export default function Villa() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="pt-16 bg-white">
      {/* ── 1. HERO ── */}
      <section className="relative h-[60vh] sm:h-[75vh] lg:h-[92vh] min-h-[380px] sm:min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src={villaofferingbanner}
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-16">
            <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] uppercase mb-3 sm:mb-4">
              Our Offerings
            </p>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 max-w-2xl">
              Villa
              <br />
              Interiors
            </h1>

            <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-md leading-relaxed mb-6 sm:mb-10">
              Thoughtfully crafted luxury villa interiors that blend
              architectural grandeur with intimate warmth designed around your
              lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#services"
                className="w-full sm:w-auto text-center bg-[#c9a96e] hover:bg-[#b8935a] text-white font-semibold text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Explore Designs
              </a>

              <a
                href="/contact"
                className="w-full sm:w-auto text-center border border-white/50 hover:border-[#c9a96e] text-white hover:text-[#c9a96e] font-semibold text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 animate-bounce">
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Scroll
          </span>

          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M4 7l5 5 5-5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.4"
            />
          </svg>
        </div>
      </section>

      {/* ── 2. INTRO — Left text | Center image | Right features ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            {/* LEFT */}
            <div>
              <p className="text-[#c9a96e] font-semibold text-xs tracking-[3px] uppercase mb-4">
                Welcome to Malik Decoration Studio
              </p>
              <h2 className="font-serif text-3xl font-bold text-gray-900 leading-snug mb-5">
                We design thoughtful, livable luxury villas.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Each villa we craft blends architectural finesse with interior
                warmth — creating spaces that feel as grand as they are
                personal. From serene lounges to statement bedrooms, we design
                with intention, elegance, and your lifestyle in mind.
              </p>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 border-2 border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm"
              >
                Discover More
                <span className="w-7 h-7 rounded-full bg-[#c9a96e]/15 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* CENTER — Villa showcase image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-xs">
                <div className="absolute w-full h-full border-2 border-[#c9a96e]/20 rounded-2xl pointer-events-none" />
                <img
                  src={villa}
                  alt="Villa interior"
                  className="w-full rounded-2xl object-cover"
                  style={{ height: "420px" }}
                />
              </div>
            </div>

            {/* RIGHT — Features */}
            <div className="space-y-7">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-full border-2 border-[#c9a96e] bg-[#f5f0eb] flex items-center justify-center flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <MarqueeSection />
      {/* ── 3. SERVICES — Big image left | Grid right ── */}
      <section id="services" className="py-14 sm:py-20 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[420px] lg:h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85"
                alt="Luxury villa pool and exterior"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Phone Tag */}
              <div className="absolute top-4 right-0 bg-white rounded-l-xl shadow-lg px-2 sm:px-3 py-3 sm:py-4 flex flex-col items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 1A.5.5 0 013 .5h.5a.6.6 0 01.58.43l.52 2a.6.6 0 01-.22.63l-.6.44a5.8 5.8 0 002.72 2.72l.44-.6a.6.6 0 01.63-.22l2 .52A.6.6 0 0110 7v.5A.5.5 0 019.5 8C5.36 8 2 4.64 2 .5"
                    fill="#c9a96e"
                  />
                </svg>

                <span
                  className="text-[#c9a96e] font-bold text-[9px] sm:text-[10px]"
                  style={{
                    writingMode: "vertical-rl",
                    letterSpacing: "1px",
                  }}
                >
                 +91 87913 79047
                </span>
              </div>
            </div>

            {/* Right */}
            <div>
              <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[3px] uppercase mb-2">
                Our Service
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-8">
                What We Offer for
                <br />
                Your Dream Villa
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {services.map((s) => (
                  <div
                    key={s.label}
                    className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={s.img}
                      alt={s.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <p className="absolute bottom-3 left-3 right-3 text-white text-[11px] sm:text-xs font-semibold leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#4a3728]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
            {[
              { val: "80+", label: "Villas Designed" },
              { val: "15+", label: "Years Experience" },
              { val: "98%", label: "Client Satisfaction" },
              { val: "45", label: "Days Delivery*" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c9a96e] mb-2">
                  {s.val}
                </p>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-[120px] sm:max-w-none">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GALLERY with lightbox ── */}
      {/* ── GALLERY ── */}
      <section id="gallery" className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[3px] uppercase mb-3">
              Portfolio
            </p>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Villa Design Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightbox(img.src)}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square sm:aspect-[4/3] cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M5 9h8M9 5v8"
                        stroke="#4a3728"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightbox(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-[#c9a96e] transition-all duration-300 flex items-center justify-center text-white"
          >
            <svg width="22" height="22" viewBox="0 0 30 30" fill="none">
              <path
                d="M7 7L23 23M23 7L7 23"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Image */}
          <img
            src={lightbox}
            alt="Villa Design"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl max-h-[90vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
          />
        </div>
      )}
      {/* ── 6. PROCESS — 4 circle steps with connecting line ── */}

      {/* ── 7. CTA ── */}
      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 bg-[#1a1209] text-center text-white px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
            Let's Build Together
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl leading-snug mb-8">
            Ready to Design Your Dream Villa?
          </h2>

          <a
            href="/contact"
            className="inline-block bg-[#c9a96e] hover:bg-[#b8935a] text-white text-sm sm:text-base font-semibold px-7 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
