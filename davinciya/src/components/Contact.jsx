import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    // Yahan pt-20 add kiya hai taaki header ke saath chipke nahi
    <div className="bg-white pt-16"> 
      {/* ── 1. HERO BANNER ── */}
      <section className="relative py-24 bg-[#4e3d30] border-b border-[#4a3728]/40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute border border-white rounded-full"
              style={{ width: 200 + i * 150, height: 200 + i * 150, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
          ))}
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-[#c9a96e] font-semibold tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold">Contact Us</h1>
        </div>
      </section>

      {/* ── 2. CONTACT INFO CARDS ── */}
      <section className="relative px-6 -mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Visit Us", text: "A-816, F/F, Shri Ram Colony, Gali No-16, Rajeev Nagar, New Delhi, 110094" },
            { title: "Call Us", text: "+91 87913 79047" },
            { title: "Email Us", text: "info@malikdecoration.com" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-[#4e3d30]/40 shadow-[0_10px_30px_rgba(78,61,48,0.05)] text-center transition-all hover:border-[#4e3d30]/60">
              <h3 className="text-[#4e3d30] font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. FORM & MAP ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="bg-[#fcfbf9] p-10 md:p-12 rounded-3xl border border-[#4e3d30]/40">
            <h2 className="text-3xl font-serif font-bold text-[#4e3d30] mb-8">Send A Message</h2>
            {submitted && <div className="mb-8 p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl text-sm font-medium">Message sent successfully!</div>}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4e3d30] uppercase tracking-wider ml-1">Full Name</label>
                <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="John Doe" required 
                  className="w-full p-4 rounded-xl border border-[#4e3d30]/40 focus:border-[#4e3d30] focus:ring-1 focus:ring-[#4e3d30] outline-none transition-all bg-white" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#4e3d30] uppercase tracking-wider ml-1">Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required 
                    className="w-full p-4 rounded-xl border border-[#4e3d30]/40 focus:border-[#4e3d30] focus:ring-1 focus:ring-[#4e3d30] outline-none transition-all bg-white" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#4e3d30] uppercase tracking-wider ml-1">Mobile Number</label>
                  <input name="mobile" type="tel" value={form.mobile} onChange={handleChange} placeholder="+91 00000 00000" required 
                    className="w-full p-4 rounded-xl border border-[#4e3d30]/40 focus:border-[#4e3d30] focus:ring-1 focus:ring-[#4e3d30] outline-none transition-all bg-white" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4e3d30] uppercase tracking-wider ml-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" rows="5" required
                  className="w-full p-4 rounded-xl border border-[#4e3d30]/40 focus:border-[#4e3d30] focus:ring-1 focus:ring-[#4e3d30] outline-none transition-all bg-white resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#4e3d30] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#5d4632] transition-all">Submit Request</button>
            </form>
          </div>
          
          <div className="w-full h-[580px] rounded-3xl overflow-hidden border border-[#4e3d30]/40 shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.468202450849!2d77.0519348!3d28.5833446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b9549f3e497%3A0x64e320f7881c1c1a!2sRamphal%20Chowk!5e0!3m2!1sen!2sin!4v1686745492418!5m2!1sen!2sin"
              width="100%" height="100%" title="Location" loading="lazy" className="grayscale hover:grayscale-0 transition-all duration-500">
            </iframe>
          </div>
        </div>
      </section>

      <section className="bg-[#4e3d30] py-20 text-center px-6">
        <h2 className="text-white text-3xl font-serif mb-8">Ready to start your journey?</h2>
        <a href="tel:+918791379047" className="inline-block bg-[#c9a96e] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#b8935a] transition-all shadow-lg">
          Call: +91 87913 79047
        </a>
      </section>
    </div>
  );
}