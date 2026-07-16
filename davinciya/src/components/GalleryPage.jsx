import React from "react";
import Gallery from "./Gallery";
import { useEffect, useRef, useState } from "react";
import apartmentbanner from "../assets/apartmentbanner.jpg";

function Counter({ target }) {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const num = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[0-9]/g, "");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(num / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= num) {
              setCount(num + suffix);
              clearInterval(timer);
            } else setCount(start + suffix);
          }, 25);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

export default function GalleryPage() {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "1000+", label: "Projects Completed" },
    { value: "20+", label: "Team Members" },
    { value: "15", label: "Years Experience" },
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="relative h-[300px] sm:h-80 lg:h-[420px] bg-[#4a3728] flex items-center overflow-hidden">
        {/* Background Circles */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white rounded-full"
              style={{
                width: 150 + i * 120,
                height: 150 + i * 120,
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
          ))}
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={apartmentbanner}
            alt="Gallery hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
          <p className="text-[#c9a96e] font-semibold text-[11px] sm:text-xs tracking-[2px] sm:tracking-[4px] uppercase mb-3">
            Our Work
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
            Design Gallery
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-xl">
            A curated showcase of our finest interiors — from luxury apartments
            to corporate spaces, every project tells a unique story of design
            excellence
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f5f0eb] py-12 sm:py-14 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c9a96e] mb-2">
                  <Counter target={s.value} />
                </p>

                <p className="text-[#4e3d30] text-xs sm:text-sm font-medium leading-relaxed max-w-[130px] sm:max-w-none">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Our Design Process */}
      <section className="py-14 sm:py-16 bg-[#f5f0eb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[#c9a96e] font-semibold text-[11px] sm:text-xs tracking-[2px] sm:tracking-[4px] uppercase mb-3">
              How We Work
            </p>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#4a3728] leading-tight">
              Our Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We understand your space, needs, and style preferences.",
              },
              {
                step: "02",
                title: "Concept & Design",
                desc: "Our team creates a tailored design plan and 3D visuals.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Skilled craftsmen bring the design to life with precision.",
              },
              {
                step: "04",
                title: "Handover",
                desc: "Final walkthrough and handover of your finished space.",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                <p className="font-serif text-4xl sm:text-5xl font-bold text-[#c9a96e]/30 mb-3">
                  {item.step}
                </p>

                <h3 className="font-serif text-lg font-bold text-[#4a3728] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {i < 3 && (
                  <div className="hidden lg:block absolute top-6 -right-4 text-[#c9a96e]/40 text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[#c9a96e] font-semibold text-[11px] sm:text-xs tracking-[2px] sm:tracking-[4px] uppercase mb-3">
              Client Love
            </p>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#4a3728] leading-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                name: "Ritu Sharma",
                role: "Homeowner, Delhi",
                text: "They transformed our 3BHK into a warm, elegant home. Every detail was thought through beautifully.",
              },
              {
                name: "Amit Verma",
                role: "Founder, Verma Enterprises",
                text: "Our office redesign boosted the whole team's mood. Professional, on-time, and genuinely creative.",
              },
              {
                name: "Neha Gupta",
                role: "Homeowners, Gurgaon",
                text: "From concept to execution, the process was smooth. Our living room is now our favorite spot at home.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-[#f5f0eb] rounded-2xl p-6 sm:p-8 border border-[#e5ddd0] transition-all duration-300 hover:shadow-md"
              >
                <div className="flex gap-1 mb-4 text-[#c9a96e] text-sm sm:text-base">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t.text}
                </p>

                <p className="font-serif font-bold text-[#4a3728] text-base">
                  {t.name}
                </p>

                <p className="text-gray-400 text-xs sm:text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a1209]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
            Let's Build Together
          </p>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl leading-snug mb-6 text-white">
            Let's Create Your Dream Space
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#c9a96e] hover:bg-[#b8935a] text-white text-sm sm:text-base font-semibold px-7 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Free Consultation
            </a>

            <a
              href="tel:+918791379047"
              className="inline-block border border-white/30 hover:border-[#c9a96e] text-white hover:text-[#c9a96e] text-sm sm:text-base font-semibold px-7 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
