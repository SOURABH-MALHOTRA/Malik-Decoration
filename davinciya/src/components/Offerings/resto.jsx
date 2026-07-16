import React, { useState } from "react";
import resto1 from "../../assets/resto1.webp";
import resto2 from "../../assets/resto2.webp";
import resto3 from "../../assets/resto3.webp";
import resto4 from "../../assets/resto4.webp";
import MarqueeSection from "../../components/MarqueeSection";
import restaurantofferingbanner from "../../assets/restaurantofferingbanner.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    num: "01",
    title: "Concept-to-Completion Design",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    num: "02",
    title: "Professional Interior",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  },
  {
    num: "03",
    title: "Interior Work Plan",
    img: resto4,
  },
  {
    num: "04",
    title: "2D/3D Layouts",
    img: resto1,
  },
  {
    num: "05",
    title: "Bar & Kitchen Setup",
    img: resto2,
  },
  {
    num: "06",
    title: "Lighting & Ambience Design",
    img: resto3,
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Cafe design",
  },
  { src: resto3, alt: "Restaurant interior" },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=90",
    alt: "Fine dining",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Bar interior",
  },
  {
    src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80",
    alt: "Fine dining",
  },

  {
    src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=800&q=80",
    alt: "Rooftop bar",
  },
  ,
];

const stats = [
  { val: "70+", label: "Restaurants Designed" },
  { val: "50+", label: "Bars & Cafes" },
  { val: "98%", label: "Client Satisfaction" },
  { val: "15+", label: "Years Experience" },
];

const whyUs = [
  {
    icon: "🎨",
    title: "Brand-Aligned Design",
    desc: "Every element reflects your brand identity — from color palette to furniture selection.",
  },
  {
    icon: "💡",
    title: "Mood Lighting Mastery",
    desc: "We craft lighting that sets the perfect ambience for any dining or bar experience.",
  },
  {
    icon: "🪑",
    title: "Space & Flow Planning",
    desc: "Optimal table layouts that maximize covers while ensuring guest comfort.",
  },
  {
    icon: "🍳",
    title: "Kitchen & Bar Fitouts",
    desc: "Functional, efficient kitchen and bar setups built for high-volume operations.",
  },
  {
    icon: "🏆",
    title: "Award-Winning Interiors",
    desc: "Recognized for creating signature spaces that guests remember and return to.",
  },
  {
    icon: "⏱️",
    title: "On-Time Delivery",
    desc: "We open your doors on schedule — because every day of delay costs you business.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Resto() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const visibleCards = 3;
  const maxIndex = services.length - visibleCards;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <div className="pt-16 bg-white">
      {/* ── 1. HERO ── */}
      <section className="relative h-[55vh] sm:h-[65vh] lg:h-[75vh] min-h-[340px] sm:min-h-[440px] overflow-hidden">
        {/* Background Image */}
        <img
          src={restaurantofferingbanner}
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end pb-8 sm:pb-12 lg:pb-16 px-5 sm:px-8 lg:px-20">
          <div className="max-w-xl">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-5">
              Resto &amp; Bar
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

      {/* ── 2. INTRO — Left text | Right stacked images ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
                What We Do
              </p>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-5 sm:mb-6">
                Designing Destinations That Keep
                <br className="hidden sm:block" />
                Guests Coming Back
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                With every detail, we turn restaurants, bars, and cafés into
                immersive environments — spaces that engage the senses and
                elevate the brand experience. From mood lighting to spatial
                zoning, our designs are built to inspire loyalty and linger in
                memory.
              </p>

              <div className="space-y-4 mb-8 sm:mb-10">
                {[
                  "01. 20+ Signature Spaces Across India",
                  "02. 1,000+ Tables Designed & Delivered",
                ].map((item) => (
                  <div key={item} className="border-b border-gray-200 pb-4">
                    <p className="font-semibold text-sm sm:text-base text-gray-900">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/about"
                className="inline-flex items-center gap-3 border border-gray-300 hover:border-[#c9a96e] text-gray-700 hover:text-[#c9a96e] font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300"
              >
                More About
                <span className="w-8 h-8 rounded-full bg-[#c9a96e] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Right Images */}
            <div className="relative h-[320px] sm:h-[420px]">
              {/* Back Image */}
              <div className="absolute top-0 right-0 w-[75%] h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=85"
                  alt="Fine dining restaurant"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Image */}
              <div className="absolute bottom-0 left-0 w-[65%] h-[72%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=85"
                  alt="Cafe interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES SLIDER — Dark bg ── */}
      <section className="py-14 sm:py-20 bg-[#3a2a1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-10 items-center">
            {/* Left fixed text */}
            <div>
              <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3">
                What We Do
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
                Shaping the Future of
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Resto &amp; Bar Experiences
              </h2>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex gap-3 mb-6">
                <button
                  onClick={prev}
                  disabled={current === 0}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    current === 0
                      ? "border-white/20 text-white/20 cursor-not-allowed"
                      : "border-white/50 text-white hover:border-[#c9a96e] hover:text-[#c9a96e]"
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 12L6 8l4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={next}
                  disabled={current === maxIndex}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                    current === maxIndex
                      ? "bg-[#c9a96e]/30 text-white/30 cursor-not-allowed"
                      : "bg-[#c9a96e] text-white hover:bg-[#b8935a]"
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-white/60 text-sm leading-relaxed">
                Expert designers and resto strategists ready to elevate your
                brand environment.
              </p>
            </div>

            {/* Right Side */}
            <div>
              {/* ================= Desktop Slider ================= */}
              <div className="hidden lg:block overflow-hidden">
                <div
                  className="flex gap-5 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(calc(-${
                      current * (100 / visibleCards)
                    }% - ${(current * 20) / visibleCards}px))`,
                  }}
                >
                  {services.map((s) => (
                    <div
                      key={s.num}
                      className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-md"
                      style={{
                        width: `calc(${100 / visibleCards}% - 14px)`,
                      }}
                    >
                      <div className="h-56 overflow-hidden">
                        <img
                          src={s.img}
                          alt={s.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-5">
                        <p className="text-[#c9a96e] text-xs font-semibold mb-1">
                          {s.num}
                        </p>

                        <h3 className="font-bold text-[#4a3728] text-base">
                          {s.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= Mobile Slider starts here ================= */}
              <div className="lg:hidden">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={12}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 16,
                    },
                  }}
                >
                  {services.map((s) => (
                    <SwiperSlide key={s.num} className="h-auto">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full">
                        <div className="h-40 overflow-hidden">
                          <img
                            src={s.img}
                            alt={s.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="p-3">
                          <p className="text-[#c9a96e] text-[11px] font-semibold mb-1">
                            {s.num}
                          </p>

                          <h3 className="font-bold text-[#4a3728] text-xs leading-snug line-clamp-2 min-h-[38px]">
                            {s.title}
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── 4. STATS ── */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#4a3728]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c9a96e] mb-2">
                  {s.val}
                </p>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-[130px] sm:max-w-none">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MarqueeSection />
      {/* ── 5. WHY US ── */}
      <section className="py-14 sm:py-20 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3">
              Why Us
            </p>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Why Choose Malik Decoration?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl mb-4">{item.icon}</div>

                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2 group-hover:text-[#4a3728] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GALLERY ── */}
      <section id="gallery" className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3">
              Portfolio
            </p>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Resto &amp; Bar Design Gallery
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
            alt="Resto & Bar Design"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl max-h-[90vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
          />
        </div>
      )}
      {/* ── 7. CTA ── */}
      <section className="py-16 sm:py-20 bg-[#1a1209] text-center text-white px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
            Let's Build Together
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl leading-snug mb-8">
            Ready to Design Your Dream Restaurant?
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
