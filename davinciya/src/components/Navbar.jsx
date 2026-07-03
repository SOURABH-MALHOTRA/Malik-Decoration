import React, { useState, useEffect, useRef } from "react";
import { User, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const offerings = [
  { title: "Apartment", desc: "Modern apartment interiors", path: "/offerings/apartment", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&q=80" },
  { title: "Villa", desc: "Luxury villa designs", path: "/offerings/villa", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&q=80" },
  { title: "Corporate", desc: "Professional office spaces", path: "/offerings/corporate", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80" },
  { title: "Healthcare", desc: "MRI, CT scan & clinic interiors", path: "/offerings/healthcare", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&q=80" },
  { title: "Resto", desc: "Restaurant & café designs", path: "/offerings/resto", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&q=80" },
  { title: "Retail", desc: "Showroom & retail interiors", path: "/offerings/retail", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&q=80" },
];

const topLinks = [
  { label: "Home", path: "/" },
  { label: "Gallery", path: "/gallery" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileOfferingsOpen(false);
  }, [location.pathname]);

  const isOfferingsActive = location.pathname.startsWith("/offerings");

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-200">
              <img src={logo} alt="Malik Decoration Pvt. Ltd." className="h-16 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {/* Offerings Dropdown */}
              <div ref={dropdownRef} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className={`relative flex items-center gap-1 text-sm transition-colors duration-200 whitespace-nowrap py-5
                  after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[1.5px] after:bg-[#c9a96e] after:transition-all after:duration-300
                  ${isOfferingsActive ? "text-[#4a3728] after:w-full" : "text-gray-700 hover:text-[#4a3728] after:w-0 hover:after:w-full"}`}>
                  Our Offerings
                  <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 pb-2">Explore Our Interior Solutions</p>
                    {offerings.map((item) => (
                      <Link
                        key={item.title}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-2.5 transition-colors group
                          ${location.pathname === item.path ? "bg-[#f5f0eb]" : "hover:bg-[#f5f0eb]"}`}
                      >
                        <div className="w-14 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div>
                          <p className={`text-sm font-semibold transition-colors ${location.pathname === item.path ? "text-[#4a3728]" : "text-gray-900 group-hover:text-[#4a3728]"}`}>
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Nav Links */}
              {topLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className={`relative text-sm transition-colors duration-200 whitespace-nowrap
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:bg-[#c9a96e] after:transition-all after:duration-300
                    ${location.pathname === l.path
                      ? "text-[#4a3728] after:w-full"
                      : "text-gray-700 hover:text-[#4a3728] after:w-0 hover:after:w-full"
                    }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-block bg-[#4a3728] hover:bg-[#c9a96e] text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap hover:shadow-md hover:scale-[1.03] active:scale-95"
              >
                Talk To Designer
              </Link>
              <button className="p-2 rounded-full text-gray-500 hover:text-[#4a3728] hover:bg-[#f5ede6] transition-all duration-200 active:scale-90" aria-label="Account">
                <User size={20} />
              </button>
              <button
                className="lg:hidden p-2 rounded-full text-gray-600 hover:text-[#4a3728] hover:bg-[#f5ede6] transition-all duration-200 active:scale-90"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {/* Mobile Offerings */}
          <div>
            <button
              onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
              className={`flex items-center justify-between w-full text-sm py-2 px-3 rounded-lg transition-all duration-200
                ${isOfferingsActive ? "text-[#4a3728] bg-[#f5ede6] font-medium" : "text-gray-700 hover:text-[#4a3728] hover:bg-[#f5ede6]"}`}
            >
              Our Offerings
              <ChevronDown size={14} className={`transition-transform duration-200 ${mobileOfferingsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileOfferingsOpen && (
              <div className="pl-3 mt-1 space-y-1 border-l-2 border-[#c9a96e] ml-3">
                {offerings.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className={`flex items-center gap-3 py-2 px-2 rounded-lg transition-colors
                      ${location.pathname === item.path ? "bg-[#f5ede6]" : "hover:bg-[#f5ede6]"}`}
                  >
                    <div className="w-10 h-8 rounded overflow-hidden flex-shrink-0">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${location.pathname === item.path ? "text-[#4a3728]" : "text-gray-800"}`}>
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Mobile Links */}
          {topLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`flex items-center text-sm py-2 px-3 rounded-lg transition-all duration-200
                ${location.pathname === l.path
                  ? "text-[#4a3728] bg-[#f5ede6] font-medium"
                  : "text-gray-700 hover:text-[#4a3728] hover:bg-[#f5ede6]"
                }`}
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="block mt-3 bg-[#4a3728] hover:bg-[#c9a96e] text-white text-sm font-medium px-5 py-2.5 rounded-full text-center transition-all duration-300 hover:shadow-md active:scale-95"
          >
            Talk To Designer
          </Link>
        </div>
      )}
    </header>
  );
}