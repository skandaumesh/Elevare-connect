"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Building2, GraduationCap, Users, Handshake } from "lucide-react";

function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, isInView]);

  return { count, ref };
}

function StatItem({ icon, label, target, suffix }) {
  const { count, ref } = useCounter(target);

  return (
    <div ref={ref} className="relative z-10 flex flex-col items-center justify-center py-8 px-4 bg-[#ffffff0a] backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/[0.08] transition-all duration-300 shadow-xl">
      <div className="text-white mb-4 transform hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
        {count} {suffix}
      </div>
      <div className="text-white/80 font-medium text-center text-sm md:text-sm tracking-wide mt-1">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-[#020617]">

      {/* Actual Abstract Tech "Design" Image Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-screen mix-blend-lighten"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')" }}
      ></div>

      {/* Deep Dark Blue to Purple Overlay for contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0D0D12]/95 via-[#1e1b4b]/80 to-[#020617]/95"></div>

      {/* Light Starry effect on top */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(1px 1px at 30px 40px, white, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 120px 80px, rgba(255,255,255,0.8), rgba(0,0,0,0)), radial-gradient(1px 1px at 180px 150px, rgba(255,255,255,0.5), rgba(0,0,0,0))',
          backgroundRepeat: 'repeat',
          backgroundSize: '250px 250px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatItem icon={<Building2 size={32} strokeWidth={2} />} target={20} suffix="+" label="Colleges Impacted" />
        <StatItem icon={<GraduationCap size={32} strokeWidth={2} />} target={20000} suffix="+" label="Students Trained" />
        <StatItem icon={<Users size={32} strokeWidth={2} />} target={10} suffix="+" label="Industry Experts" />
        <StatItem icon={<Handshake size={32} strokeWidth={2} />} target={50} suffix="+" label="Programs Delivered" />
      </div>

    </section>
  );
}