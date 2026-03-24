"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://elevareacademy.in/wp-content/uploads/2026/02/george-van-gosh-5vK7nSavAjk-unsplash-2-3772x1551.jpg')", transform: "scale(1.05)" }}
      />

      {/* Dark overlay fading from left to right to ensure left text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 z-0 bg-black/10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl mt-16 md:mt-24 text-center sm:text-left mx-auto sm:mx-0"
        >
          {/* Eyebrow - Vista Style */}
          <div className="inline-block mb-4">
            <span className="text-white text-base md:text-xl font-medium tracking-wide border-b-2 border-[#7C3AED] pb-1">
              Elevare Connect
            </span>
          </div>

          {/* Heading - Vista Style */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-[76px] font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] font-['Roboto',sans-serif]">
            Where Ambition Finds <br className="hidden sm:block" />
            <span className="text-[#7C3AED]">its Direction.</span>
          </h1>

          {/* Subheading - Vista Style */}
          <p className="text-white/90 text-base md:text-xl font-medium mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto sm:mx-0">
            Expert-led soft skills, campus-to-career mentoring and professional grooming for students and young professionals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 md:gap-5">
            <a href="/services" className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-[#7C3AED] text-white font-bold rounded-full hover:bg-[#6D28D9] transition-all text-center tracking-wide uppercase text-xs md:text-sm shadow-xl hover:-translate-y-1">
              Discover More
            </a>
            <a href="/contact" className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-black transition-all text-center tracking-wide uppercase text-xs md:text-sm">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}