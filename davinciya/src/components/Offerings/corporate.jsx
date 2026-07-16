import React, { useState } from "react";
import corporate from "../../assets/corporate.jpg";
import MarqueeSection from "../../components/MarqueeSection";
import corporateimg from "../../assets/corporateimg.avif";
import corporateofferingbanner from "../../assets/corporateofferingbanner.jpg";
// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    label: "Turnkey Corporate Fitouts",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
  },
  {
    label: "Custom Workspace Design",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    label: "Premium Finishes & Materials",
    img: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=600&q=80",
  },
  {
    label: "Modular & AV Integration",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
  },
  {
    label: "Premium Finishes & Detailing",
    img: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=600&q=80",
  },
];

const galleryImages = [
  { src: corporateimg, alt: "Corporate lobby" },
  {
    src: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&q=80",
    alt: "Open office space",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    alt: "Conference room",
  },
  {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
    alt: "Executive cabin",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    alt: "Collaborative lounge",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    alt: "Modern boardroom",
  },
];

const steps = [
  {
    num: "01",
    title: "Meet Your Designer",
    desc: "Discuss your workspace goals, team needs, and brand aesthetics with our design experts.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle
          cx="16"
          cy="10"
          r="5"
          stroke="#c9a96e"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M6 26c0-5.52 4.48-10 10-10s10 4.48 10 10"
          stroke="#c9a96e"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Finalized Layout",
    desc: "Get custom office plans with 3D views, tailored to boost productivity and reflect your brand.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="3"
          stroke="#c9a96e"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M10 16h12M16 10v12"
          stroke="#c9a96e"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Work in Progress",
    desc: "Our skilled team executes the project with minimal disruption to your business operations.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 26l5-5 4 4 6-8 5 5"
          stroke="#c9a96e"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle
          cx="26"
          cy="8"
          r="4"
          stroke="#c9a96e"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M24 8h4M26 6v4"
          stroke="#c9a96e"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Smooth Delivery",
    desc: "After quality checks and detailing, we hand over your ready-to-use corporate space — on time.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="10"
          width="20"
          height="16"
          rx="2"
          stroke="#c9a96e"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M24 14l4 2v10H24"
          stroke="#c9a96e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M9 18l3 3 6-6"
          stroke="#c9a96e"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const stats = [
  {
    val: "70+",
    label: "Verified Client Reviews",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M18 4 L20 12 L28 12 L22 17 L24 25 L18 20 L12 25 L14 17 L8 12 L16 12 Z"
          stroke="#c9a96e"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    val: "120+",
    label: "Work Zones Delivered",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M6 30 L6 16 L18 6 L30 16 L30 30 Z"
          stroke="#c9a96e"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <rect
          x="13"
          y="20"
          width="10"
          height="10"
          stroke="#c9a96e"
          strokeWidth="1.3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    val: "230K",
    label: "Clients Served",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle
          cx="18"
          cy="18"
          r="14"
          stroke="#c9a96e"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M18 8v10l6 4"
          stroke="#c9a96e"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    val: "50+",
    label: "Dedicated Professionals",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="#c9a96e"
          strokeWidth="1.4"
          fill="none"
        />
        <circle
          cx="24"
          cy="12"
          r="4"
          stroke="#c9a96e"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M2 28c0-5 4.5-9 10-9s10 4 10 9"
          stroke="#c9a96e"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M26 19c3 0 6 2.5 6 7"
          stroke="#c9a96e"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Corporate() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="pt-16 bg-white">
      {/* ── 1. HERO ── */}
      <section className="relative h-[55vh] sm:h-[65vh] lg:h-[75vh] min-h-[340px] sm:min-h-[440px] overflow-hidden">
        {/* Background Image */}
        <img
          src={corporateofferingbanner}
          alt="Corporate office interior"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end pb-8 sm:pb-12 lg:pb-16 px-5 sm:px-8 lg:px-20">
          <div className="max-w-xl">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-5">
              Corporate
            </h1>

            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#c9a96e] hover:bg-[#b8935a] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              LET'S CONNECT
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO — Image left | Content right ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[280px] sm:h-[420px]">
              <img
                src={corporate}
                alt="Corporate design team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3">
                Since 2010
              </p>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#4a3728] leading-snug mb-5">
                Designing Purpose-Driven,
                <br className="hidden sm:block" />
                Productive Workspaces
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                At Malik Decoration, we specialize in creating corporate
                interiors that inspire productivity, foster collaboration, and
                reflect brand identity. Every workspace we craft is a balance of
                functionality, aesthetics, and your company culture.
              </p>

              {/* Features + Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Left */}
                <ul className="space-y-4">
                  {[
                    "Future-Ready Technology Integration",
                    "5-Year Structural & Finish Warranty",
                    "Tailored, High-Performance Layouts",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-gray-700 font-medium"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#c9a96e] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Right */}
                <div className="space-y-5">
                  {[
                    {
                      pct: "96%",
                      label: "Client Satisfaction Across Projects",
                    },
                    {
                      pct: "85%",
                      label: "Rated Excellence in Design Functionality",
                    },
                  ].map((item) => (
                    <div key={item.pct} className="flex items-center gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#c9a96e] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm sm:text-base">
                          {item.pct}
                        </span>
                      </div>

                      <p className="text-gray-700 text-xs sm:text-sm font-semibold leading-tight">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE OFFER — scrollable card row ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-2">
            We Provide
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4a3728] mb-8 sm:mb-10">
            What We Offer For You
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {services.slice(0, 5).map((s) => (
              <div
                key={s.label}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={s.img}
                  alt={s.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <p className="absolute bottom-3 left-3 right-3 text-white font-semibold text-[11px] sm:text-xs leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MarqueeSection />
      {/* ── 4. STATS ── */}
     <section className="py-12 sm:py-16 border-b border-gray-100">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">

      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center"
        >
          <div className="mb-3 scale-90 sm:scale-100">
            {s.icon}
          </div>

          <p className="text-[#c9a96e] text-xs sm:text-sm font-medium mb-2">
            {s.label}
          </p>

          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#2a1e14]">
            {s.val}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* ── 5. HOW WE WORK — 4 icon steps ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-10 sm:mb-14">
      <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3">
        Steps
      </p>

      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4a3728]">
        How Our Organization Works
      </h2>
    </div>

    <div className="relative">

      {/* Dotted Line */}
      <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#c9a96e]/30 z-0" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative z-10">

        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="relative mb-5 sm:mb-6">

              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#f5f0eb] border border-[#e8ddd4] shadow-sm flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105">

                <div className="scale-75 sm:scale-100">
                  {step.icon}
                </div>

              </div>

              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-[#c9a96e] font-bold text-[10px] sm:text-xs">
                {step.num}
              </span>

            </div>

            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">
              {step.title}
            </h3>

            <p className="text-gray-500 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-[180px]">
              {step.desc}
            </p>

          </div>
        ))}

      </div>
    </div>

  </div>
</section>
      {/* ── 6. GALLERY with lightbox ── */}
     {/* ── GALLERY ── */}
<section className="py-14 sm:py-16 lg:py-20 bg-[#f5f0eb]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-8 sm:mb-12">
      <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3">
        Portfolio
      </p>

      <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
        Corporate Design Gallery
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

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
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
      <svg
        width="22"
        height="22"
        viewBox="0 0 30 30"
        fill="none"
      >
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
      alt="Corporate Design"
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-6xl max-h-[90vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
    />
  </div>
)}

      
      {/* ── CTA ── */}
<section className="py-16 sm:py-20 bg-[#1a1209] text-center text-white px-4">
  <div className="max-w-2xl mx-auto">
    <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
            Let's Build Together
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl leading-snug mb-8">
      Ready to Transform Your Workspace?
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
