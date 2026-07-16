import React from "react";
import resto4 from "../../src/assets/resto4.webp";
import luxuryhomeinterior from "../../src/assets/luxuryhomeinterior.jpg";
import homeinterior from "../../src/assets/homeinterior.avif";
import kitchen4 from "../../src/assets/kitchen4.avif";
const services = [
  {
    title: "Modular Interiors",
    desc: "Thoughtfully designed kitchens, wardrobes, and storage that maximize space without compromising style.",
    img: kitchen4,
  },
  {
    title: "Full Home Interiors",
    desc: "Complete, turnkey interiors tailored to fit every space in your home.",
    img: homeinterior,
  },
  {
    title: "Luxury Interiors",
    desc: "Tailored designs that reflect your taste, defined by timeless sophistication.",
    img: luxuryhomeinterior,
  },
  {
    title: "Renovations",
    desc: "Expert renovation services to upgrade, refresh, and redefine your space effortlessly.",
    img: resto4,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug mb-4">
            Malik Decoration – One Destination.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            Endless Interior Inspiration.
          </h2>

          <p className="text-gray-500 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Be it seamless renovations or tailored modular solutions, Malik
            Decoration brings your ideas to life in every space.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 lg:h-[220px]">
                <div className="absolute inset-0 rounded-t-2xl overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-5 sm:pt-7 sm:pb-6 text-center">
                <h3 className="font-semibold text-[#7a5c3a] text-lg sm:text-base mb-2 leading-snug">
                  {s.title}
                </h3>

                <p className="text-gray-500 text-sm sm:text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
