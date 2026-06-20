import React, { useState, useEffect } from "react";
import { Search, User, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const topLinks = [
    "Home",
    "Our Offerings",
    "Partner With Us",
    "About Us",
    "Contact Us",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-md" : ""}`}
    >
      {/* Top nav */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <img
                src={logo}
                alt="Malik Decoration Pvt. Ltd."
                className="h-16 w-auto object-contain"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-7">
              {topLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-sm text-gray-700 hover:text-[#4a3728] transition-colors whitespace-nowrap"
                >
                  {l}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 :hidden">
              <a
                href="#"
                className="hidden lg:inline-block bg-[#4a3728] hover:bg-[#3a2a1e] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors whitespace-nowrap"
              >
                Talk To Designer
              </a>

              <button
                className="p-1 text-gray-500 hover:text-[#4a3728]"
                aria-label="Account"
              >
                <User size={20} />
              </button>
              <button
                className="lg:hidden p-1 text-gray-600"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {[...topLinks].map((l) => (
            <a
              key={l}
              href="#"
              className="block text-sm text-gray-700 py-1.5 hover:text-[#4a3728]"
            >
              {l}
            </a>
          ))}
          <a
            href="#"
            className="block mt-3 bg-[#4a3728] text-white text-sm font-medium px-5 py-2.5 rounded-full text-center"
          >
            Talk To Designer
          </a>
        </div>
      )}
    </header>
  );
}
