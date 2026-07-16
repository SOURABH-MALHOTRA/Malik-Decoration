import React, { useState } from "react";
import medical from "../../assets/medical.jpeg";
import medical1 from "../../assets/medical1.jpeg";
import opd1 from "../../assets/opd1.webp";
import opd2 from "../../assets/opd2.webp";
import opd3 from "../../assets/opd3.webp";
import opd4 from "../../assets/opd4.webp";
import healthcare1 from "../../assets/healthcare1.webp";
import healthcare2 from "../../assets/healthcare2.webp";
import healthcare3 from "../../assets/healthcare3.webp";
import healthcare4 from "../../assets/healthcare4.webp";
import hospital1 from "../../assets/hospital1.webp";
import hospital2 from "../../assets/hospital2.jpeg";
import hospital3 from "../../assets/hospital3.webp";
import hospital4 from "../../assets/hospital4.webp";
import hospital5 from "../../assets/hospital5.webp";
import hospital6 from "../../assets/hospital6.webp";
import MarqueeSection from "../../components/MarqueeSection";
import resto4 from "../../assets/resto4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// ── Data ──────────────────────────────────────────────────────────────────────

const specialties = [
  { label: "Hospitals", icon: "🏥" },
  { label: "Clinics", icon: "🏨" },
  { label: "Dental Studios", icon: "🦷" },
  { label: "Diagnostic Labs", icon: "🔬" },
  { label: "Pathology Centers", icon: "🧪" },
  { label: "Physiotherapy & Wellness Spaces", icon: "🏃" },
];

const opdDesigns = [
  {
    title: "Minimalist Doctor's Cabin with Integrated OPD",
    img: opd1,
  },
  {
    title: "Elegant Nature-Lit Consultation Cabin in a Hospital",
    img: opd2,
  },
  {
    title: "Transparent Partitioned Doctor's Cabin with Soft Natural Tones",
    img: opd3,
  },
  {
    title: "Warm & Minimalist Doctor's Consultation Room",
    img: opd4,
  },
];

const pharmacy = [
  {
    title: "Minimalist Doctor's Cabin with Integrated OPD",
    img: healthcare1,
  },
  {
    title: "Elegant Nature-Lit Consultation Cabin in a Hospital",
    img: healthcare2,
  },
  {
    title: "Transparent Partitioned Doctor's Cabin with Soft Natural Tones",
    img: healthcare3,
  },
  {
    title: "Warm & Minimalist Doctor's Consultation Room",
    img: healthcare4,
  },
];

const galleryImages = [
  { src: hospital1, alt: "Hospital" },
  { src: hospital2, alt: "Hospital" },
  { src: hospital3, alt: "Hospital" },
  { src: hospital4, alt: "Hospital" },
  { src: hospital5, alt: "Hospital" },
  { src: hospital6, alt: "Hospital" },
];
const steps = [
  {
    title: "Meet Designer",
    desc: "With Malik Decoration, you can be stress free about the quality of material and workmanship.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    title: "Finalized Layout",
    desc: "Our team of healthcare interior specialists brings years of domain expertise to every project.",
    img: resto4,
  },
  {
    title: "Work in Progress",
    desc: "Every healthcare space is designed keeping patient comfort and staff efficiency at the center.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
  },
  {
    title: "Smooth Delivery",
    desc: "Our team ensures all work is done smoothly and the client is fully satisfied on delivery.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Healthcare() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="pt-16 bg-white">
      {/* ── 1. HERO ── */}
      <section className="relative h-[55vh] sm:h-[65vh] lg:h-[75vh] min-h-[340px] sm:min-h-[440px] overflow-hidden">
        {/* Background Image */}
        <img
          src={medical}
          alt="Healthcare interior"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end pb-8 sm:pb-12 lg:pb-16 px-5 sm:px-8 lg:px-20">
          <div className="max-w-xl">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-5">
              Healthcare
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

      {/* ── 2. INTRO ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[280px] sm:h-[420px] lg:h-[440px]">
                <img
                  src={medical1}
                  alt="Healthcare space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3">
                Since 2010
              </p>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#4a3728] leading-snug mb-5">
                Crafting Healing Spaces That
                <br className="hidden sm:block" />
                Inspire Confidence
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                At Malik Decoration, we believe that healthcare spaces should be
                more than just functional — they should nurture recovery,
                inspire confidence, and promote well-being. Our bespoke
                healthcare interior solutions combine cutting-edge design with
                patient-centric planning to deliver environments that heal,
                comfort, and empower.
              </p>

              {/* Specialties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {specialties.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#c9a96e] hover:bg-[#f5f0eb] transition-all duration-300"
                  >
                    <span className="text-xl">{s.icon}</span>

                    <span className="text-sm sm:text-base font-medium text-gray-800">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <MarqueeSection />
      {/* ── 3. OPD DESIGNS ── */}
      <section className="py-12 sm:py-16 bg-[#f5f0eb] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 gap-2 sm:gap-4 whitespace-nowrap">
            <h2 className="font-serif text-lg sm:text-3xl font-bold text-gray-900 overflow-hidden text-ellipsis">
              OPD Designs
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
            {opdDesigns.map((item, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="overflow-hidden h-40 sm:h-56 lg:h-60">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-3 sm:p-5 flex flex-col flex-grow justify-between gap-3">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 text-center line-clamp-2 leading-snug min-h-[36px] sm:min-h-[42px]">
                      {item.title}
                    </p>

                    <a
                      href="/contact"
                      className="block w-full text-center border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-4 py-2 sm:py-3 rounded-full transition-all duration-300 whitespace-nowrap"
                    >
                      Consult Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#4a3728]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
            {[
              { val: "50+", label: "Healthcare Projects" },
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

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 gap-2 sm:gap-4 whitespace-nowrap">
            <h2 className="font-serif text-lg sm:text-3xl font-bold text-gray-900 overflow-hidden text-ellipsis">
              Pharmacy & Medical Stores Design
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
            {pharmacy.map((item, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="overflow-hidden h-40 sm:h-56 lg:h-60">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-3 sm:p-5 flex flex-col flex-grow justify-between gap-3">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 text-center line-clamp-2 leading-snug min-h-[36px] sm:min-h-[42px]">
                      {item.title}
                    </p>

                    <a
                      href="/contact"
                      className="block w-full text-center border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-4 py-2 sm:py-3 rounded-full transition-all duration-300 whitespace-nowrap"
                    >
                      Consulta Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── 5. STEPS ── */}
      <section className=" sm:py-16 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c9a96e]">
              Solution In 4 Easy Steps
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* Image Circle */}
                <div className="mb-5 sm:mb-6">
                  <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-md border-[3px] border-[#c9a96e] transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-[180px] hidden sm:block">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GALLERY ── */}

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-14 sm:py-16 lg:py-20 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3">
              Portfolio
            </p>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Healthcare Design Gallery
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
            alt="Healthcare Design"
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
            Ready to Design Your Healing Space?
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
