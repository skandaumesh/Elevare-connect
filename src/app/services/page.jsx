"use client";
import Link from "next/link";
import { Briefcase, ChartLine, Ship, Users, Check, ArrowRight, Sparkles } from "lucide-react";
import { useReveal } from "@/components/Animations";
import { motion } from "framer-motion";

const services = [
    { title: "Career Readiness", icon: Briefcase, desc: "Bridges the gap between campus and corporate life.", points: ["Campus-to-Corporate transition", "Resume & LinkedIn optimization", "Mock interviews & feedback"] },
    { title: "Skill Enhancement", icon: ChartLine, desc: "Develop the soft skills that matter most in the industry.", points: ["Communication & Time Management", "Workplace Etiquette", "Emotional Intelligence"] },
    { title: "Industry Bridge", icon: Ship, desc: "Align academic potential with current industry logic.", points: ["Industry Guest Lectures", "Final-year Project Mentoring", "Market-ready Curriculum"] },
    { title: "Mentorship", icon: Users, desc: "Personalized guidance for long-term career growth.", points: ["1:1 Personalized Mentorship", "Personal Branding", "Goal-setting Frameworks"] },
];

export default function ServicesPage() {
    const addToRefs = useReveal();

    return (
        <div className="relative bg-[#F9F8F3] min-h-screen">
            <style dangerouslySetInnerHTML={{
                __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
                    .font-instrument-serif { font-family: 'Instrument Serif', serif; }
                `}} />

            {/* Decorative Blurs */}
            <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-[#A87ED7]/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Hero */}
            <section className="relative text-center pt-40 pb-24 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, rotate: 20 }}
                    animate={{ opacity: 0.1, rotate: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute top-24 right-20 pointer-events-none hidden lg:block"
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="40" stroke="#2B124C" strokeWidth="1" strokeDasharray="8 4" />
                        <path d="M50 20 L50 80 M20 50 L80 50" stroke="#A87ED7" strokeWidth="1" />
                    </svg>
                </motion.div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                    <div ref={addToRefs} className="space-y-10 reveal flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase">
                            OUR SERVICES
                        </div>
                        <h1 className="font-instrument-serif text-[#2B124C]" style={{ fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                            Industry <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">Readiness.</span>
                        </h1>
                        <p className="text-gray-500 font-medium max-w-lg mx-auto" style={{ fontSize: "20px", lineHeight: 1.6 }}>
                            From soft skills to final year projects, we empower students with the tools they need to succeed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Cards */}
            <section className="px-6 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative border-t border-[#2B124C]/5">
                {services.map((s, idx) => {
                    const Icon = s.icon; return (
                        <div key={idx} ref={addToRefs} className="reveal p-10 space-y-8 group hover:-translate-y-2 transition-all duration-500 rounded-[40px]"
                            style={{
                                background: 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1.5px solid rgba(255, 255, 255, 0.8)',
                                boxShadow: '0 4px 30px rgba(43, 18, 76, 0.05)',
                            }}
                        >
                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 rounded-3xl flex items-center justify-center text-[#A87ED7] bg-[#A87ED7]/10 flex-shrink-0 transition-transform group-hover:scale-110">
                                    <Icon size={28} strokeWidth={2} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-instrument-serif tracking-wide text-3xl text-[#2B124C]">{s.title}</h3>
                                    <p className="text-gray-500 font-medium leading-relaxed" style={{ fontSize: "16px" }}>{s.desc}</p>
                                </div>
                            </div>
                            <div className="grid gap-3 pt-4 border-t border-[#2B124C]/5">
                                {s.points.map((p, pIdx) => (
                                    <div key={pIdx} className="flex gap-4 items-center p-4 rounded-2xl bg-[#A87ED7]/5 border border-[#A87ED7]/10 transition-colors group-hover:bg-[#A87ED7]/10">
                                        <Check size={18} className="text-[#2B124C] flex-shrink-0" />
                                        <span className="text-[#2B124C] font-semibold" style={{ fontSize: "14px" }}>{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* CTA */}
            <section ref={addToRefs} className="reveal px-6 max-w-5xl mx-auto pb-40 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2B124C]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="relative overflow-hidden text-center justify-center flex flex-col items-center px-10 py-24 md:px-20 border-[#2B124C]/10 shadow-2xl rounded-[48px]"
                    style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: '1.5px solid rgba(255, 255, 255, 0.9)',
                    }}
                >
                    <div className="relative z-10 space-y-10 flex flex-col items-center">
                        <h2 className="font-instrument-serif text-[#2B124C] tracking-wide" style={{ fontSize: "clamp(48px, 6vw, 76px)", lineHeight: 1 }}>
                            Is Elevare right <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">for your campus?</span>
                        </h2>
                        <p className="text-gray-500 font-medium max-w-lg mx-auto" style={{ fontSize: "20px", lineHeight: 1.6 }}>Empower your student bodies with real-world professional excellence.</p>
                        <div className="pt-4 flex justify-center gap-6">
                            <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-[#A87ED7] to-[#2B124C] text-white font-bold text-[15px] tracking-widest uppercase transition-all hover:-translate-y-1 hover:shadow-xl inline-flex items-center gap-3">
                                Book a Demo <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
