import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import apartment from "../../assets/apartment.webp";
import apartment1 from "../../assets/apartment1.webp";
import apartment2 from "../../assets/apartment2.webp";
import balcony1 from "../../assets/balcony1.webp";
import balcony2 from "../../assets/balcony2.webp";
import balcony3 from "../../assets/balcony3.webp";
import balcony4 from "../../assets/balcony4.webp";
import balcony5 from "../../assets/balcony5.webp";
import bedroom1 from "../../assets/bedroom1.webp";
import bedroom2 from "../../assets/bedroom2.webp";
import bedroom3 from "../../assets/bedroom3.webp";
import bedroom4 from "../../assets/bedroom4.webp";
import kitchen3 from "../../assets/kitchen3.avif";
import bathroom1 from "../../assets/bathroom1.avif";
import livingroom from "../../assets/livingroom.webp";
import MarqueeSection from "../MarqueeSection";
import apartmentbanner from "../../assets/apartmentbanner.jpg";
// ── Data ──────────────────────────────────────────────────────────────────────

const whyCards = [
  {
    num: "1",
    title: "Tailor-Made Designs",
    desc: "No catalogue-based repetition — your home is uniquely yours.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect
          x="4"
          y="8"
          width="14"
          height="20"
          rx="2"
          stroke="#c9a96e"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M18 18 L30 18 M24 12 L30 18 L24 24"
          stroke="#c9a96e"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Execution Excellence",
    desc: "Trusted team of architects, site supervisors, and craftsmen with zero-compromise quality.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M18 4 L22 14 L32 14 L24 20 L27 30 L18 24 L9 30 L12 20 L4 14 L14 14 Z"
          stroke="#c9a96e"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Premium Materials, Delivered Fast",
    desc: "Branded finishes, timely execution, and transparent processes.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect
          x="4"
          y="16"
          width="28"
          height="16"
          rx="2"
          stroke="#c9a96e"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M10 16 L10 10 Q10 4 18 4 Q26 4 26 10 L26 16"
          stroke="#c9a96e"
          strokeWidth="1.4"
          fill="none"
        />
        <circle
          cx="18"
          cy="24"
          r="3"
          stroke="#c9a96e"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    num: "4",
    title: "End-to-End Services",
    desc: "From concept to completion — including décor, automation, and turnkey handover.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle
          cx="18"
          cy="18"
          r="14"
          stroke="#c9a96e"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M10 18 L16 24 L26 12"
          stroke="#c9a96e"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "5",
    title: "Visual Clarity",
    desc: "3D previews and real-time visualizers before final execution.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect
          x="4"
          y="8"
          width="28"
          height="20"
          rx="2"
          stroke="#c9a96e"
          strokeWidth="1.4"
          fill="none"
        />
        <text x="12" y="23" fontSize="10" fill="#c9a96e" fontWeight="600">
          3D
        </text>
      </svg>
    ),
  },
];

const balconyDesigns = [
  {
    title: "Contemporary Rooftop Lounge with Mediterranean Warmth",
    img: apartment1,
  },
  {
    title: "Contemporary Rooftop Oasis with Natural Textures",
    img: apartment2,
  },
  {
    title: "Minimalist High-Rise Balcony Retreat for an elegant urban escape",
    img: balcony1,
  },
  {
    title: "Modern Zen Balcony Escape for a peaceful urban sanctuary",
    img: balcony5,
  },
];

const bedroomDesigns = [
  {
    title: "Contemporary Luxe Guest Bedroom with Soft Pastel Elegance",
    img: bedroom1,
  },
  {
    title: "Serene Modern Minimalist Bedroom featuring a peaceful sanctuary",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
  },
  {
    title: "Sculptural Serenity in a Modern Luxury Bedroom",
    img: bedroom2,
  },
  {
    title: "Soft Contemporary Bedroom with Floral Feature Wall",
    img: bedroom4,
  },
];

const steps = [
  {
    num: "01",
    title: "We Visit You at Home",
    desc: "Our experts meet you personally to understand your apartment space, lifestyle, and vision.",
  },
  {
    num: "02",
    title: "Concept & Visualization",
    desc: "We craft moodboards and 3D layouts tailored to your apartment's dimensions and needs.",
  },
  {
    num: "03",
    title: "Design Finalization & Costing",
    desc: "We finalize every detail with transparent pricing — no hidden charges.",
  },
  {
    num: "04",
    title: "Execution & Handover",
    desc: "Flawless execution by our expert team. Your dream apartment, move-in ready.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    alt: "Living room",
  },
  {
    src: apartment1,
    alt: "Luxury living",
  },
  {
    src: bedroom2,
    alt: "Master bedroom",
  },
  {
    src: kitchen3,
    alt: "Modular kitchen",
  },
  {
    src: livingroom,
    alt: "Living Area",
  },
  {
    src: bathroom1,
    alt: "Bathroom",
  },
];

// ── Reusable Design Card ───────────────────────────────────────────────────────

function DesignCard({ title, img }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
      {/* Image container */}
      <div className="overflow-hidden h-40 sm:h-64">
        {/* Mobile ke liye image height thodi kam ki hai taaki layout balanced lage */}
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content wrapper */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow justify-between gap-3">
        {/* Title */}
        <p className="text-xs sm:text-sm font-semibold text-gray-900 text-center line-clamp-2 leading-snug min-h-[36px] sm:min-h-[40px]">
          {title}
        </p>

        {/* Button - Single Line Horizontal text for Mobile */}
        <a
          href="/contact"
          className="block text-center border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white text-[10px] sm:text-xs font-bold px-2 py-2 sm:px-4 sm:py-3 rounded-full transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis shrink-0"
        >
          Consult Now
        </a>
      </div>
    </div>
  );
}
// ── Main Component ─────────────────────────────────────────────────────────────

export default function Apartment() {
  const [activeStep, setActiveStep] = useState(1);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="pt-16 bg-white">
      {/* ── 1. HERO ── */}
      <section className="relative h-[55vh] sm:h-[65vh] lg:h-[75vh] min-h-[340px] sm:min-h-[440px] overflow-hidden">
        {/* Background Image */}
        <img
          src={apartmentbanner}
          alt="Luxury apartment interior"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end pb-8 sm:pb-12 lg:pb-16 px-5 sm:px-8 lg:px-20">
          <div className="max-w-xl">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-5">
              Apartment
            </h1>

            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#c9a96e] hover:bg-[#b8935a] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE US — 5 cards ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c9a96e] text-center mb-8 sm:mb-12">
            Why Choose Malik Decoration?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {whyCards.map((card) => (
              <div
                key={card.num}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col justify-between min-h-[190px] sm:min-h-[210px] hover:-translate-y-1"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 text-base sm:text-sm lg:text-base mb-2 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-gray-500 text-sm sm:text-xs lg:text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="scale-90 sm:scale-100">{card.icon}</div>

                  <span className="w-9 h-9 rounded-full bg-[#f7f2eb] text-[#c9a96e] flex items-center justify-center text-sm font-bold">
                    {card.num}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MarqueeSection />

      {/* ── 3. BALCONY & TERRACE DESIGNS ── */}
      <section className="py-12 sm:py-16 bg-[#f5f0eb] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 gap-2 sm:gap-4 whitespace-nowrap">
            <h2 className="font-serif text-lg sm:text-3xl font-bold text-gray-900 overflow-hidden text-ellipsis">
              Balcony & Terrace Designs
            </h2>

            <a
              href="#gallery"
              className="shrink-0 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white text-[11px] sm:text-sm font-semibold px-3 py-1.5 sm:px-6 sm:py-2 rounded-lg transition-all duration-300"
            >
              View More
            </a>
          </div>

          <Swiper
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {balconyDesigns.map((d, i) => (
              <SwiperSlide key={i} className="h-auto">
                <DesignCard title={d.title} img={d.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── 5. STATS ── */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#4a3728]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
            {[
              { val: "500+", label: "Apartments Designed" },
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

      {/* ── 4. MASTER BEDROOM DESIGNS ── */}

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 gap-2 sm:gap-4 whitespace-nowrap">
            <h2 className="font-serif text-lg sm:text-3xl font-bold text-gray-900 overflow-hidden text-ellipsis">
              Master Bedroom Designs
            </h2>

            <a
              href="#gallery"
              className="shrink-0 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white text-[11px] sm:text-sm font-semibold px-3 py-1.5 sm:px-6 sm:py-2 rounded-lg transition-all duration-300"
            >
              View More
            </a>
          </div>

          <Swiper
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {bedroomDesigns.map((d, i) => (
              <SwiperSlide key={i} className="h-auto">
                <DesignCard title={d.title} img={d.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* ── 6. 4 SIMPLE STEPS ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c9a96e] text-center mb-10 sm:mb-14">
            Get Stunning Interiors in 4 Simple Steps
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Steps */}
            <div className="space-y-3 order-2 lg:order-1">
              {steps.map((step, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`flex gap-4 sm:gap-5 rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 ${
                    activeStep === i
                      ? "bg-white shadow-lg"
                      : "bg-transparent hover:bg-white/60"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      activeStep === i
                        ? "bg-[#c9a96e] text-white"
                        : "bg-[#c9a96e]/20 text-[#c9a96e]"
                    }`}
                  >
                    {step.num}
                  </div>

                  <div>
                    <h3
                      className={`font-semibold text-sm sm:text-base mb-2 transition-colors ${
                        activeStep === i ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {activeStep === i && (
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 lg:h-[430px]">
              <img
                src={apartment}
                alt="Design consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. GALLERY ── */}
      <section id="gallery" className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[3px] uppercase mb-3">
              Portfolio
            </p>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Apartment Design Gallery
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
            alt="Apartment Design"
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
            Ready to Design Your Dream Apartment?
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
