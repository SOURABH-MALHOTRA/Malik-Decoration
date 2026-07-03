import React from 'react'
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, MessageCircle} from 'lucide-react'
import logo from '../assets/logo.jpeg'

const footerLinks = {
  'Interior Design': ['Malik Decoration', 'Trending Designs', 'Master Bedroom', 'Living Room', 'Balcony & Terrace'],
  'Our Offerings': ['Our Offerings', 'Available Cities', 'Partner With Us', 'Contact Us', 'Blog'],
  'Company': ['Home', 'About Us', 'Contact Us', 'Refund Policy', 'Terms & Condition', 'Privacy Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#4a3728]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* 1. Brand Section */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Malik Decoration" className="h-20 w-auto mb-6 object-contain"/>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex gap-3 items-start hover:text-[#4a3728] transition-colors cursor-pointer">
                <MapPin className="shrink-0 text-[#4a3728]" size={20}/>
                <p>A-816, F/F, Shri Ram Colony, Gali No-16, Rajeev Nagar, New Delhi, 110094</p>
              </div>
              <div className="flex gap-3 items-center hover:text-[#4a3728] transition-colors">
                <Phone className="shrink-0 text-[#4a3728]" size={20}/>
                <a href="tel:+918791379047">+91 87913 79047</a>
              </div>
              <div className="flex gap-3 items-center hover:text-[#4a3728] transition-colors">
                <Mail className="shrink-0 text-[#4a3728]" size={20}/>
                <a href="mailto:info@malikdecoration.com">info@malikdecoration.com</a>
              </div>
            </div>
          </div>

          {/* 2. Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bold text-[#4a3728] text-sm uppercase tracking-wider mb-6">{heading}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-[#4a3728] hover:translate-x-1 transition-all inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. Newsletter & Socials */}
        <div className="border-[#4a3728]/10 flex flex-col lg:flex-row justify-between items-center gap-8">
         

          <div className="flex gap-4">
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Instagram, label: 'Instagram' },
           
             
            ].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#4a3728] hover:bg-[#4a3728] hover:text-white transition-all duration-300">
                <Icon size={20}/>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Malik Decoration Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(item => (
              <a key={item} href="#" className="hover:text-[#4a3728]">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}