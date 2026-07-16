import React, { useState, useEffect } from "react";

// Assets import
import medical from "../assets/medical.jpeg";
import penthousebanner from "../assets/penthousebanner.avif";
import villabanner from "../assets/villabanner.avif";
import corporatebanner from "../assets/corporatebanner.jpg";
import apartmentbanner from "../assets/apartmentbanner.jpg";

const slides = [
  {
    label: "Apartment",
    tag: "Luxury Living",
    desc: "Smartly designed city homes, reimagined with elegance and comfort.",
    bg: apartmentbanner,
  },
  {
    label: "Penthouse",
    tag: "Exclusive",
    desc: "Sky-high living redefined with premium design.",
    bg: penthousebanner,
  },
  {
    label: "Villa",
    tag: "Premium",
    desc: "Luxury villa interiors crafted for the finest taste.",
    bg: villabanner,
  },
  {
    label: "Corporate",
    tag: "Trending",
    desc: "Professional office spaces built for productivity and style.",
    bg: corporatebanner,
  },
  {
    label: "Healthcare",
    tag: "Designed to Heal",
    desc: "Modern Healthcare Spaces Built for Healing and Efficiency.",
    bg: medical,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="pt-3 md:pt-20 bg-white px-3 sm:px-5">
      {/* Container - Fixed height */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-black h-[55vh] sm:h-[75vh] min-h-[400px]">
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            {/* Background Blur Fill - Ye image ke baahar ki khali jagah ko blur se bharega */}
            <div
              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-60"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />

            {/* Main Image - object-contain se image cut nahi hogi */}
            <img
              src={slide.bg}
              alt={slide.label}
              className="relative w-full h-full object-fit-cover"
            />

            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white items-center justify-center transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={next}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white items-center justify-center transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Content Area */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-10 flex flex-col items-start">
          <div className="mb-2">
            <p className="text-[#c9a96e] text-[10px] sm:text-xs font-bold tracking-[2px] sm:tracking-[3px] uppercase mb-1">
              {slides[current].tag}
            </p>
            <h1 className="font-serif text-3xl sm:text-6xl text-white font-bold mb-2">
              {slides[current].label}
            </h1>
            <p className="text-white/90 text-xs sm:text-base max-w-[280px] sm:max-w-md line-clamp-2 mb-4">
              {slides[current].desc}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
            <a
              href="#"
              className="w-full sm:w-auto text-center bg-[#c9a96e] hover:bg-[#b8935a] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all whitespace-nowrap"
            >
              Book Consultation
            </a>
            <a
              href="#"
              className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all whitespace-nowrap"
            >
              View More
            </a>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute top-6 right-6 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#c9a96e] w-8" : "bg-white/50 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
