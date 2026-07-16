import React, { useState } from "react";
import retail1 from "../../assets/retail1.avif";
import retail2 from "../../assets/retail2.avif";
import retail3 from "../../assets/retail3.avif";
import retail4 from "../../assets/retail4.avif";
import MarqueeSection from "../../components/MarqueeSection";
import retailofferingbanner from "../../assets/retailofferingbanner.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    num: "01",
    title: "Storefront Design",
    desc: "Striking façades and entrances that create a powerful first impression.",
    img: retail1,
  },
  {
    num: "02",
    title: "Product Display Zones",
    desc: "Strategic product placement zones that attract attention and boost sales.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
  {
    num: "03",
    title: "Luxury Trial Rooms",
    desc: "Spacious, well-lit fitting zones that boost shopper experience and drive sales.",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
  },
  {
    num: "04",
    title: "Cash & Checkout Zones",
    desc: "Ergonomic, tech-enabled counters for seamless billing and customer comfort.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    num: "05",
    title: "Brand Visual Merchandising",
    desc: "Curated displays that tell your brand story and convert browsers into buyers.",
    img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
  },
  {
    num: "06",
    title: "Lighting & Ambience",
    desc: "Retail lighting solutions that highlight products and set the perfect mood.",
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&q=80",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    alt: "Luxury retail store",
  },
  {
    src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80",
    alt: "Retail lighting",
  },
  { src: retail2, alt: "Storefront design" },
  {
    src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
    alt: "Fashion retail interior",
  },
  { src: retail4, alt: "Boutique interior" },

  { src: retail3, alt: "Checkout zone" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Retail() {
  const [current, setCurrent] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [lightbox, setLightbox] = useState(null);

  const visibleCards = 3;
  const maxIndex = services.length - visibleCards;
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <div className="pt-16 bg-white">
      {/* ── 1. HERO ── */}
      <section className="relative h-[55vh] sm:h-[65vh] lg:h-[75vh] min-h-[340px] sm:min-h-[440px] overflow-hidden">
        {/* Background */}
        <img
          src={retailofferingbanner}
          alt="Luxury retail interior"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end pb-8 sm:pb-12 lg:pb-16 px-5 sm:px-8 lg:px-20">
          <div className="max-w-xl">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2 sm:mb-3">
              Retail
            </h1>

            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6 max-w-md">
              A perfect blend of design and quality
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#c9a96e] hover:bg-[#b8935a] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES SLIDER ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-4">
                What We Do
              </p>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex gap-3 mb-6">
                <button
                  onClick={prev}
                  disabled={current === 0}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    current === 0
                      ? "border-gray-200 text-gray-300 cursor-not-allowed"
                      : "border-gray-400 text-gray-700 hover:border-[#c9a96e] hover:text-[#c9a96e]"
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
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    current === maxIndex
                      ? "bg-[#c9a96e]/30 text-white/40 cursor-not-allowed"
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

              <p className="text-gray-600 text-sm leading-relaxed">
                Expert designers and retail strategists ready to elevate your
                brand environment.
              </p>
            </div>

            {/* Right */}
            <div>
              {/* ================= Desktop ================= */}
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
                      className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
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

                        <h3 className="font-bold text-[#4a3728] text-base mb-2">
                          {s.title}
                        </h3>

                        <p className="text-gray-500 text-xs leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= Mobile ================= */}
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
                    <SwiperSlide key={s.num}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full">
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

                          <h3 className="font-bold text-[#4a3728] text-xs leading-snug line-clamp-2 min-h-[36px] mb-2">
                            {s.title}
                          </h3>

                          <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-3">
                            {s.desc}
                          </p>
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
      <MarqueeSection />
      {/* ── 3. ADVANTAGES — Left image | Right content ── */}
      <section className="py-14 sm:py-20 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[280px] sm:h-[420px] lg:h-[460px]">
              <img
                src={retail2}
                alt="Retail design consultation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-5 sm:mb-6">
                The Advantages of Working with Malik Decoration
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-5">
                At Malik Decoration, we bring over a decade of excellence in
                crafting high-impact retail interiors. Our spaces are designed
                not just to look stunning — but to elevate foot traffic,
                influence buyer behavior, and drive conversions.
              </p>

              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-5">
                We integrate brand storytelling, shopper psychology, and spatial
                design to create immersive retail experiences — whether for
                luxury boutiques, flagship showrooms, or multi-brand stores.
              </p>

              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 sm:mb-8">
                From concept to handover, our process is seamless, strategic,
                and entirely tailored to your brand.
              </p>

              <p className="font-serif text-xl sm:text-2xl italic text-[#c9a96e] opacity-70">
                Malik Decoration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. STATS ── */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#4a3728]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
            {[
              { val: "70+", label: "Retail Spaces Designed" },
              { val: "15+", label: "Years Experience" },
              { val: "98%", label: "Client Satisfaction" },
              { val: "50+", label: "Expert Professionals" },
            ].map((s) => (
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

      {/* ── 5. HOW OUR PROCESS WORKS — accordion style ── */}

      {/* ── 6. GALLERY ── */}
      <section id="gallery" className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3">
              Portfolio
            </p>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Retail Design Gallery
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
            alt="Retail Design"
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
            Ready to Transform Your Retail Space?
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
