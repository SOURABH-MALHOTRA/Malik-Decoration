import React from 'react'
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import logo from '../assets/logo.jpeg'

const footerLinks = {
  'Interior Design':       ['Malik Decoration', 'Trending Designs', 'Master Bedroom', 'Living Room', 'Balcony & Terrace'],
  'Our Offerings':         ['Our Offerings', 'Available Cities', 'Partner With Us', 'Contact Us', 'Blog'],
  'Company':               ['Home', 'About Us', 'Contact Us', 'Refund Policy', 'Terms & Condition', 'Privacy Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Malik Decoration Pvt. Ltd." className="h-32 w-auto object-contain mb-4"/>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex gap-2 items-start">
                <span className="mt-0.5">📍</span>
                <p>A-816, F/F, Shri Ram Colony, Gali No-16, Rajeev Nagar, New Delhi, 110094</p>
              </div>
              <div className="flex gap-2 items-center">
                <span>📞</span>
                <a href="tel:+918791379047" className="hover:text-[#4a3728]">+91 8791379047</a>
              </div>
              <div className="flex gap-2 items-center">
                <span>✉️</span>
                <a href="mailto:info@malikdecoration.com" className="hover:text-[#4a3728]">info@malikdecoration.com</a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-gray-900 text-sm mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-[#4a3728] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-4">Newsletters</h4>
            <div className="flex gap-2 mb-5">
              <input type="email" placeholder="Your email"
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#4a3728] min-w-0"/>
              <button className="bg-[#2a1e14] hover:bg-[#4a3728] text-white text-sm font-medium px-4 py-2 rounded transition-colors">
                Submit
              </button>
            </div>
            <div className="flex gap-3">
              {[
                { Icon: Facebook,  label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube,   label: 'YouTube' },
                { Icon: Linkedin,  label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="text-gray-500 hover:text-[#4a3728] transition-colors">
                  <Icon size={18}/>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">Copyright © 2025 Malik Decoration Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-2 items-center">
            {['AMEX', 'DINERS', 'MAESTRO', 'MASTERCARD'].map(card => (
              <span key={card} className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-0.5 bg-white">{card}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
