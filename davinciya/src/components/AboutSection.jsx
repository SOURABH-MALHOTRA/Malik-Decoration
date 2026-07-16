import React from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import kitchen1 from "../../src/assets/kitchen1.avif";
import kitchen2 from "../../src/assets/kitchen2.avif";
import kitchen3 from "../../src/assets/kitchen3.avif";
import kitchen4 from "../../src/assets/kitchen4.avif";

const features = [
  { title: "Space Optimization" },
  { title: "Personalized Aesthetics" },
  { title: "Modular Elegance" },
  { title: "Lighting & Ambience" },
];

const modularkitchen = [
  {
    title: "Elegant Wood & Beige Modular Kitchen",
    img: kitchen1,
  },
  { title: "Modern White Island Kitchen", img: kitchen2 },
  {
    title: "Luxury Open-Concept Modular Kitchen",
    img: kitchen3,
  },
  {
    title: "Contemporary Black & Wood Kitchen Design",
    img: kitchen4,
  },
];

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

export default function AboutSection() {
  return (
    <>
      <section className="py-20 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left images */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="flex gap-3 mb-1 opacity-50 justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle
                    cx="28"
                    cy="28"
                    r="26"
                    stroke="#4a3728"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <line
                    x1="28"
                    y1="8"
                    x2="28"
                    y2="48"
                    stroke="#4a3728"
                    strokeWidth="0.9"
                  />
                  <line
                    x1="18"
                    y1="28"
                    x2="38"
                    y2="28"
                    stroke="#4a3728"
                    strokeWidth="0.9"
                  />
                  <line
                    x1="26"
                    y1="20"
                    x2="30"
                    y2="20"
                    stroke="#4a3728"
                    strokeWidth="0.9"
                  />
                </svg>
                <div className="flex flex-col gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="border border-[#4a3728]/30 rounded p-1.5"
                      style={{ width: 52 - i * 6, height: 40 - i * 4 }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden h-60">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
                  alt="Interior detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center */}
            <div className="text-center">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#4a3728] mb-3 leading-snug">
                Designing Elevated Spaces for Elevated Living.
              </h2>
              <p className="font-serif text-lg text-[#7a5c3a] font-medium mb-5">
                Living Smart, Stylish & Seamlessly Yours.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-sm mx-auto">
                At Malik Decoration, we transform apartments and penthouses into
                personalized sanctuaries—blending functionality, elegance, and
                space-smart design to reflect your unique lifestyle.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm border border-[#e8ddd4]"
                  >
                    <span className="text-[#7a5c3a] text-base">✦</span>
                    <span className="font-semibold text-gray-800 text-sm leading-tight">
                      {f.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <span className="font-serif text-2xl italic text-[#4a3728] opacity-60">
                  Malik Decoration
                </span>
              </div>
            </div>

            {/* Right images */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden h-68">
                <img
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80"
                  alt="Luxury dining"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Kitchen Slider Section */}
      <section className="py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 gap-2 sm:gap-4 whitespace-nowrap">
            <h2 className="font-serif text-lg sm:text-3xl font-bold text-gray-900 overflow-hidden text-ellipsis">
              Modular Kitchen Designs
            </h2>
            <a
              href="/gallery"
              className="shrink-0 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white text-[11px] sm:text-sm font-semibold px-3 py-1.5 sm:px-6 sm:py-2 rounded-lg transition-all duration-300"
            >
              View More
            </a>
          </div>

          <Swiper
            spaceBetween={16} // Mobile pe gap thoda kam rakha hai taaki jagah bache
            slidesPerView={2} // Mobile pe hamesha 2 dikhenge
            breakpoints={{
              // Tablet aur Desktop ke liye settings
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className=""
          >
            {modularkitchen.map((d, i) => (
              <SwiperSlide key={i} className="h-auto">
                <DesignCard title={d.title} img={d.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
