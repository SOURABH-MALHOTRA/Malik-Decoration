import React, { useEffect, useRef, useState } from "react";
import alam from "../assets/alam.jpeg";
import aslam from "../assets/aslam.jpeg";
import gaurav from "../assets/gaurav.jpg";
import sahil from "../assets/sahil.jpeg";
import naseem from "../assets/naseem.jpeg";
import arif from "../assets/arif.jpeg";
const team = [
  { name: "Aslam", role: "Director", img: aslam },
  { name: "Naseem Malik", role: "COO", img: naseem },
  { name: "Mohm Arif", role: "Second Director", img: arif },
  {
    name: "Gaurav",
    role: "Architect & Interior Designer",

    img: gaurav,
  },
  {
    name: "Shail",
    role: "Regional Operations Lead",

    img: sahil,
  },
  {
    name: "Alam",
    role: "Finance & Accounts Head",

    img: alam,
  },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "1000+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "15", label: "Years Experience" },
];

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

export default function About() {
  return (
    <div className="pt-16 bg-white">
      {/* ── 1. HERO WITH BACKGROUND PATTERN ── */}
      <section className="relative min-h-[480px] flex overflow-hidden">
        <div
          className="relative z-10 w-full lg:w-[45%] flex flex-col justify-center px-10 sm:px-16 py-16"
          style={{
            backgroundColor: "#4e3d30",
            // Diagonal line pattern design
            backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)`,
          }}
        >
          <p className="text-[#c9a96e] text-xs font-semibold tracking-[4px] uppercase mb-4">
            About Us
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Malik
            <br />
            Decoration
          </h1>
          <p className="text-white/90 text-base sm:text-lg mb-8 leading-relaxed">
            A perfect blend of design and quality.
          </p>

          <a
            href="#story"
            className="inline-flex items-center gap-2 bg-[#c9a96e] text-white font-semibold text-sm px-7 py-3 rounded-full w-fit hover:bg-[#b8935a] transition-all duration-300 shadow-md"
          >
            Our Story
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="hidden lg:block w-[55%] relative">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85"
            alt="Luxury interior"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── 2. STATS ── */}
      <section className="bg-[#f5f0eb] py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-[#c9a96e] mb-2">
                  <Counter target={s.value} />
                </p>
                <p className="text-[#4e3d30] text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR STORY ── */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a96e] font-semibold text-xs tracking-[3px] uppercase mb-3">
                Who We Are
              </p>
              <h2 className="font-serif text-4xl font-bold text-[#4e3d30] mb-4 leading-tight">
                Our Story
              </h2>
              <div className="w-12 h-1 bg-[#c9a96e] rounded mb-8" />
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                At Malik Decoration Pvt. Ltd., we bring over a decade of
                experience in delivering high-quality interior, construction,
                and specialized services.
              </p>
              <p className="text-[#4e3d30] font-semibold mb-2">
                We are known for:
              </p>
              <ul className="text-gray-600 space-y-2 mb-6 list-disc list-inside">
                <li>Professional expertise</li>
                <li>Client-centric approach</li>
                <li>Timely execution</li>
                <li>Quality assurance</li>
              </ul>
              <p className="text-gray-600 text-base leading-relaxed">
                Whether it is a commercial fit-out, hospital space, or a
                residential makeover, we commit to excellence in every brick,
                beam, and brushstroke.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c9a96e]/30 rounded-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85"
                  alt="Our team"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TEAM ── */}
      <section className="py-20 bg-[#f5f0eb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#4e3d30]">
              Team <span className="italic text-[#c9a96e]">in the Room</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative mx-auto mb-5 w-32 h-32 sm:w-40 sm:h-40">
                  <div className="absolute inset-0 rounded-full border-2 border-[#c9a96e] scale-100 group-hover:scale-110 transition-transform duration-300" />
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-[#4e3d30] text-sm sm:text-base">
                  {member.name}
                </h3>
                <p className="text-[#c9a96e] text-xs font-medium uppercase">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="py-20 bg-[#4e3d30] text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Your dream home is just a click away
        </h2>
        <a
          href="#"
          className="bg-[#c9a96e] hover:bg-[#b8935a] text-white px-8 py-4 rounded-full transition-all"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
