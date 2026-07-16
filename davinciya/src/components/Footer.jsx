import React from "react";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#4a3728]/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">

            <img
              src={logo}
              alt="Malik Decoration"
              className="h-20 w-auto object-contain mb-6"
            />

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-[#4a3728] shrink-0 mt-1"
                />

                <a
                  href="https://maps.google.com/?q=A-816,F/F,Shri Ram Colony,Gali No-16,Rajeev Nagar,New Delhi,110094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#4a3728] leading-relaxed transition"
                >
                  A-816, F/F, Shri Ram Colony,
                  Gali No-16, Rajeev Nagar,
                  New Delhi - 110094
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-[#4a3728] shrink-0"
                />

                <a
                  href="tel:+918791379047"
                  className="text-sm text-gray-600 hover:text-[#4a3728]"
                >
                  +91 87913 79047
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-[#4a3728] shrink-0"
                />

                <a
                  href="mailto:info@malikdecoration.com"
                  className="text-sm text-gray-600 hover:text-[#4a3728]"
                >
                  info@malikdecoration.in
                </a>
              </div>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-[#4a3728] font-bold uppercase tracking-wider text-sm mb-5">
              Company
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-[#4a3728] transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-[#4a3728] transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/gallery"
                  className="text-gray-600 hover:text-[#4a3728] transition"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-[#4a3728] transition"
                >
                  Contact Us
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-[#4a3728] font-bold uppercase tracking-wider text-sm mb-5">
              Services
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="/offerings/apartment" className="text-gray-600 hover:text-[#4a3728] transition">
                  Apartment
                </a>
              </li>

              <li>
                <a href="/offerings/villa" className="text-gray-600 hover:text-[#4a3728] transition">
                  Villa
                </a>
              </li>

              <li>
                <a href="/offerings/corporate" className="text-gray-600 hover:text-[#4a3728] transition">
                  Corporate
                </a>
              </li>

              <li>
                <a href="/offerings/healthcare" className="text-gray-600 hover:text-[#4a3728] transition">
                  Healthcare
                </a>
              </li>

              <li>
                <a href="/offerings/restaurant" className="text-gray-600 hover:text-[#4a3728] transition">
                  Restaurant & Cafe
                </a>
              </li>

              <li>
                <a href="/offerings/retail" className="text-gray-600 hover:text-[#4a3728] transition">
                  Retail
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-[#4a3728] font-bold uppercase tracking-wider text-sm mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="YOUR_FACEBOOK_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[#4a3728]/20 flex items-center justify-center hover:bg-[#4a3728] hover:text-white transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="YOUR_INSTAGRAM_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[#4a3728]/20 flex items-center justify-center hover:bg-[#4a3728] hover:text-white transition"
              >
                <Instagram size={20} />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-[#4a3728]/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Malik Decoration Pvt. Ltd. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}