"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Heart, Lightbulb, Shield, Zap, Sparkles, Quote, Users, Award, BookOpen, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function useReveal() {
    const refs = useRef([]);
    const add = useCallback((el) => { if (el && !refs.current.includes(el)) refs.current.push(el); }, []);
    useEffect(() => {
        const obs = new IntersectionObserver((e) => e.forEach((x) => { if (x.isIntersecting) x.target.classList.add("active"); }), { threshold: 0.1 });
        refs.current.forEach((r) => obs.observe(r));
        return () => obs.disconnect();
    }, []);
    return add;
}

export default function AboutPage() {
    const r = useReveal();
    const [m, setM] = useState(false);
    useEffect(() => setM(true), []);

    return (
        <div className="relative min-h-screen bg-[#F9F8F3]">
            <style dangerouslySetInnerHTML={{
                __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
                    .font-instrument-serif { font-family: 'Instrument Serif', serif; }
                `}} />

            {/* Decorative Blurs */}
            <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#A87ED7]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#2B124C]/5 rounded-full blur-[140px] pointer-events-none" />

            {/* ─── SECTION 1: HERO ─── */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Decorative SVG */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-32 left-16 pointer-events-none hidden lg:block"
                >
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                        <path d="M40 10 Q40 40 10 40 Q40 40 40 70 Q40 40 70 40 Q40 40 40 10 Z" stroke="#2B124C" strokeWidth="2" />
                        <path d="M75 15 Q75 25 65 25 Q75 25 75 35 Q75 25 85 25 Q75 25 75 15 Z" stroke="#A87ED7" strokeWidth="1.5" />
                    </svg>
                </motion.div>

                <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto flex flex-col items-center" style={{ opacity: m ? 1 : 0, transform: m ? "none" : "translateY(24px)", transition: "all 0.8s cubic-bezier(.16,1,.3,1)" }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase mb-10">
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L11 8L17 9L11 10L10 16L9 10L3 9L9 8L10 2Z" fill="#A87ED7" /></svg>
                            ABOUT ELEVARE CONNECT
                        </div>
                        <h1 className="font-instrument-serif text-[#2B124C]" style={{ fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "32px" }}>
                            Empowering with <br />
                            <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">Human-Centric Skills.</span>
                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: 1.6, color: "#6B7280", maxWidth: "640px", marginBottom: "48px", fontWeight: 500 }}>
                            We partner with institutions to unlock every student&apos;s potential — enhancing communication, leadership, and emotional intelligence.
                        </p>

                        <div className="flex gap-12 md:gap-20 justify-center flex-wrap">
                            {[{ v: "20+", l: "Partner Colleges" }, { v: "500+", l: "Students Trained" }, { v: "50+", l: "Workshops Delivered" }].map((s) => (
                                <div key={s.l} className="flex flex-col items-center">
                                    <p className="font-instrument-serif text-[#2B124C] tracking-wide" style={{ fontSize: "40px" }}>{s.v}</p>
                                    <p className="text-[#A87ED7] font-bold" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 2: FOUNDER ─── */}
            <section className="px-6 py-32 relative border-t border-[#2B124C]/5">
                <div ref={r} className="reveal max-w-6xl mx-auto">
                    <div className="overflow-hidden rounded-[40px]"
                        style={{
                            background: 'rgba(255, 255, 255, 0.5)',
                            backdropFilter: 'blur(20px)',
                            border: '1.5px solid rgba(255, 255, 255, 0.8)',
                            boxShadow: '0 10px 40px rgba(43, 18, 76, 0.05)',
                        }}
                    >
                        <div className="grid md:grid-cols-2 lg:grid-cols-5">
                            <div className="md:col-span-2 relative min-h-[500px] border-r border-[#2B124C]/10">
                                <img src="/founder.jpeg" alt="Wilma Merina D'Sa" className="absolute inset-0 w-full h-full object-cover transition-all duration-1000" />
                            </div>
                            <div className="md:col-span-3 p-10 lg:p-20 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 w-fit rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                                    THE VISIONARY
                                </div>
                                <h2 className="font-instrument-serif text-[#2B124C] mb-8 tracking-wide" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: 1.1 }}>
                                    Wilma Merina D&apos;Sa
                                </h2>

                                <div className="space-y-6">
                                    <p className="text-gray-500 font-medium" style={{ fontSize: "18px", lineHeight: 1.7 }}>
                                        At Elevare Connect, we are passionate about partnering with institutions that share our vision of holistic student development. With a strong foundation in HR and academia, I founded Elevare Connect to support colleges in preparing students not just for jobs, but for confident, impactful careers.
                                    </p>
                                    <p className="text-gray-500 font-medium" style={{ fontSize: "18px", lineHeight: 1.7 }}>
                                        I warmly invite your institution to collaborate with us in equipping students with the essential soft skills, professional grooming, and career readiness they need to thrive beyond campus.
                                    </p>
                                </div>

                                <div className="mt-12 pt-10 flex flex-col gap-1 border-t border-[#2B124C]/10">
                                    <p className="font-bold text-[#111827]" style={{ fontSize: "16px" }}>Founder, Elevare Connect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 3: STRATEGY ─── */}
            <section className="px-6 py-32 relative bg-white border-t border-[#2B124C]/5">
                <div className="max-w-6xl mx-auto text-center mb-20">
                    <div ref={r} className="reveal flex flex-col items-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase">
                            OUR PHILOSOPHY
                        </div>
                        <h2 className="font-instrument-serif text-[#2B124C]" style={{ fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1 }}>
                            Why <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">Elevare.</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl font-medium" style={{ fontSize: "20px", lineHeight: 1.6 }}>High-performance methodology combined with deep academic empathy.</p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Expertise", desc: "Led by a seasoned HR Professional & Academician bridging theory and practice.", icon: Award },
                        { title: "Personalized", desc: "Adapting to each student's unique personality and career aspirations.", icon: Users },
                        { title: "Holistic", desc: "Nurturing emotional intelligence, critical thinking, and leadership.", icon: BookOpen },
                        { title: "Aligned", desc: "Real-world alignment with current market demands and global practices.", icon: Target },
                    ].map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div key={i} ref={r} className="reveal p-10 rounded-[32px] group hover:-translate-y-2 transition-all duration-500"
                                style={{
                                    background: 'rgba(249, 248, 243, 0.7)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1.5px solid rgba(43, 18, 76, 0.05)',
                                }}
                            >
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#A87ED7]/10 text-[#A87ED7] mb-8 group-hover:scale-110 transition-transform">
                                    <Icon size={26} />
                                </div>
                                <h4 className="font-instrument-serif text-3xl tracking-wide text-[#2B124C] mb-4">{s.title}</h4>
                                <p className="text-gray-500 text-[15px] font-medium leading-relaxed">{s.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ─── SECTION 6: CTA ─── */}
            <section className="px-6 py-40 border-t border-[#2B124C]/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A87ED7]/10 rounded-full blur-[140px] pointer-events-none" />
                <div ref={r} className="reveal max-w-4xl mx-auto text-center relative z-10">
                    <div className="space-y-10">
                        <h2 className="font-instrument-serif text-[#2B124C]" style={{ fontSize: "clamp(48px, 6vw, 76px)", lineHeight: 1 }}>
                            Collaborate <br />
                            <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">with us today.</span>
                        </h2>
                        <p className="text-gray-500 font-medium max-w-lg mx-auto" style={{ fontSize: "20px", lineHeight: 1.6 }}>
                            Let&apos;s shape the next generation of confident, career-ready professionals together.
                        </p>
                        <div className="flex justify-center gap-6 pt-10">
                            <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-[#A87ED7] to-[#2B124C] text-white font-bold text-[15px] uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-xl hover:opacity-90">
                                Get Started
                            </Link>
                            <Link href="/services" className="px-10 py-5 rounded-full bg-white border border-[#2B124C]/10 text-[#2B124C] font-bold text-[15px] uppercase tracking-widest transition-all hover:bg-[#F9F8F3]">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
