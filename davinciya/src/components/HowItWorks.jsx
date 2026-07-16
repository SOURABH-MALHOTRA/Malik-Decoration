import React from "react";
import resto4 from "../../src/assets/resto4.webp";
const steps = [
  {
    title: "Meet Designer",
    desc: "Our experts meet you personally to understand your space, lifestyle, and vision.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    title: "Finalized Layout",
    desc: "We create detailed 3D designs and layouts tailored to your preferences.",
    img: resto4,
  },
  {
    title: "Work in Progress",
    desc: "Our expert craftsmen execute the design with precision and quality.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
  },
  {
    title: "Smooth Delivery",
    desc: "We hand over your dream space—on time and beyond expectations.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Steps Section */}
      <section className="py-14 sm:py-20 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#4a3728] mb-2 leading-snug">
              Solution In 4 Easy Steps
            </h2>

            <p className="text-[#7a5c3a] font-medium text-sm sm:text-base">
              Successful life
            </p>
          </div>

          <div className="relative">
            {/* Desktop Line */}
            <div className="hidden sm:block absolute top-20 left-[12.5%] right-[12.5%] h-px bg-[#c9a96e] z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div
                    className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-md flex-shrink-0"
                    style={{ border: "3px solid #c9a96e" }}
                  >
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                      {s.title}
                    </h3>

                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed hidden sm:block">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#1a1209] text-center text-white px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
            Let's Build Together
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl leading-snug mb-8">
            Transform Your Space Into a Masterpiece
          </h2>

          <a
            href="/contact"
            className="inline-block bg-[#c9a96e] hover:bg-[#b8935a] text-white text-sm sm:text-base font-semibold px-7 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}
