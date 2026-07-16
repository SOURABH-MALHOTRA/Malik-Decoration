import React, { useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);

      setForm({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Yahan pt-20 add kiya hai taaki header ke saath chipke nahi
    <div className="bg-white pt-16">
      {/* ── 1. HERO BANNER ── */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#4a3728] border-b border-[#4a3728]/40 flex items-center justify-center overflow-hidden">
        {/* Background Circles */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white rounded-full"
              style={{
                width: 200 + i * 150,
                height: 200 + i * 150,
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <p className="text-[#c9a96e] font-semibold tracking-[2px] sm:tracking-[0.3em] uppercase text-[11px] sm:text-sm mb-3 sm:mb-4">
            Get In Touch
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Contact Us
          </h1>
        </div>
      </section>
      {/* ── 2. CONTACT INFO CARDS ── */}
      <section className="relative px-4 sm:px-6 -mt-10 sm:-mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {[
            {
              title: "Visit Us",
              text: "A-816, F/F, Shri Ram Colony, Gali No-16, Rajeev Nagar, New Delhi, 110094",
            },
            {
              title: "Call Us",
              text: "+91 87913 79047",
            },
            {
              title: "Email Us",
              text: "info@malikdecoration.in",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#4a3728]/40 shadow-[0_10px_30px_rgba(74,55,40,0.05)] text-center transition-all hover:border-[#4a3728]/60"
            >
              <h3 className="text-[#4a3728] font-bold text-base sm:text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed break-words">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. FORM & MAP ── */}
      {/* ── 3. FORM & MAP (Updated) ── */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* FORM */}
          <div className="bg-[#fcfbf9] p-5 sm:p-8 lg:p-12 rounded-3xl border border-[#4a3728]/40 w-full">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4a3728] mb-6 sm:mb-8">
              Send A Message
            </h2>

            {submitted && (
              <div className="mb-6 sm:mb-8 p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl text-sm font-medium">
                Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[11px] sm:text-xs font-bold uppercase tracking-[2px] text-[#4a3728] ml-1">
                  Full Name
                </label>

                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full p-3 sm:p-4 rounded-xl border border-[#4a3728]/40 outline-none bg-white focus:border-[#c9a96e] transition-colors"
                />
              </div>

              {/* Email + Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold uppercase tracking-[2px] text-[#4a3728] ml-1">
                    Email Address
                  </label>

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full p-3 sm:p-4 rounded-xl border border-[#4a3728]/40 outline-none bg-white focus:border-[#c9a96e] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold uppercase tracking-[2px] text-[#4a3728] ml-1">
                    Mobile Number
                  </label>

                  <input
                    name="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    required
                    className="w-full p-3 sm:p-4 rounded-xl border border-[#4a3728]/40 outline-none bg-white focus:border-[#c9a96e] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[11px] sm:text-xs font-bold uppercase tracking-[2px] text-[#4a3728] ml-1">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="5"
                  required
                  className="w-full p-3 sm:p-4 rounded-xl border border-[#4a3728]/40 outline-none bg-white resize-none focus:border-[#c9a96e] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#4e3d30] hover:bg-[#5d4632] disabled:opacity-70 text-white text-sm sm:text-base font-semibold py-3.5 sm:py-4 rounded-xl transition-all duration-300"
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </div>

          {/* MAP */}
          <div className="w-full h-[280px] sm:h-[400px] lg:h-[580px] rounded-3xl overflow-hidden border border-[#4e3d30]/40 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.35581220987!2d77.24989879678954!3d28.708910699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc251e8de2e9%3A0x43bb1160c4cac2c5!2sSmile%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1784055374568!5m2!1sen!2sin"
              title="Location"
              width="100%"
              height="100%"
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1a1209] py-16 sm:py-20 text-center px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c9a96e] font-semibold text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
            Let's Build Together
          </p>
          <h2 className="font-serif text-white text-2xl sm:text-4xl lg:text-5xl leading-snug mb-8">
            Ready to Start Your Journey?
          </h2>

          <a
            href="tel:+918791379047"
            className="inline-block bg-[#c9a96e] hover:bg-[#b8935a] text-white text-sm sm:text-base font-semibold px-7 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
