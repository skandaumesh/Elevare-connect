"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, ChartLine, Ship, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Career Readiness",
        icon: Briefcase,
        image: "/service1.jpg",
        desc: "Equipping students with the tools and mindset needed to excel in the competitive global job market.",
        points: [
            "Resume & LinkedIn profile optimization",
            "Campus-to-Corporate transition workshops",
            "Mock Interviews with tailored, actionable feedback"
        ]
    },
    {
        title: "Skill Enhancement",
        icon: ChartLine,
        image: "/service2.jpg",
        desc: "Bridging the soft skill gap with hands-on training tailored for modern workplace environments.",
        points: [
            "Communication and Time Management",
            "Workplace Etiquette & Professional Writing",
            "Emotional Intelligence for today's work culture"
        ]
    },
    {
        title: "Academic to Industry Bridge",
        icon: Ship,
        image: "/service3.jpg",
        desc: "Connecting theoretical knowledge with practical industry logic to ensure day-one readiness.",
        points: [
            "Industry guest lectures & Interactive sessions",
            "Final-year project mentoring with a Career focus",
            "Align academic content with current industry practices"
        ]
    }
];

const LowPolyBackground = () => (
    <div className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#E2E8F0" strokeWidth="0.5">
                <path d="M0,0 L300,200 L100,400 L0,300 Z" fill="#F8FAFC" />
                <path d="M300,200 L600,0 L800,300 L300,200 Z" fill="#FFFFFF" />
                <path d="M600,0 L1000,0 L800,300 L600,0 Z" fill="#F1F5F9" />
                <path d="M800,300 L1000,0 L1000,500 L800,300 Z" fill="#F8FAFC" />
                <path d="M300,200 L800,300 L500,600 L300,200 Z" fill="#FBFDFF" />
                <path d="M100,400 L300,200 L500,600 L100,400 Z" fill="#F1F5F9" />
                <path d="M0,300 L100,400 L0,700 Z" fill="#FFFFFF" />
                <path d="M100,400 L500,600 L300,800 L100,400 Z" fill="#F8FAFC" />
                <path d="M500,600 L800,300 L1000,500 L500,600 Z" fill="#FFFFFF" />
                <path d="M800,300 L1000,500 L1000,800 L800,300 Z" fill="#F1F5F9" />
                <path d="M500,600 L1000,800 L700,1000 L500,600 Z" fill="#F8FAFC" />
                <path d="M300,800 L500,600 L700,1000 L300,800 Z" fill="#FFFFFF" />
                <path d="M100,400 L300,800 L0,1000 L0,700 Z" fill="#F1F5F9" />
                <path d="M300,800 L700,1000 L0,1000 L300,800 Z" fill="#F8FAFC" />
                <path d="M700,1000 L1000,800 L1000,1000 L700,1000 Z" fill="#FFFFFF" />
            </g>
        </svg>
    </div>
);

export default function ServicesPage() {
    return (
        <div className="relative bg-white min-h-screen overflow-hidden pt-20 md:pt-28">
            {/* HERO SECTION */}
            <section className="relative pt-16 md:pt-24 pb-12 md:pb-20 px-6 overflow-hidden border-b border-slate-100">
                <LowPolyBackground />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-8 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-[10px] font-bold tracking-[0.3em] uppercase">
                            Impact Programs
                        </div>
                        <h1 className="text-[#0f172a] text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1] font-['Roboto',sans-serif]">
                            Elevating <br className="hidden md:block" />
                            <span className="text-[#7C3AED]">Professional</span> Futures.
                        </h1>
                        <p className="text-[#475569] text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            A comprehensive roadmap designed to align institutional potential with global industry standards.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES LISTING */}
            <section className="px-6 py-16 md:py-24 relative z-10 max-w-7xl mx-auto space-y-20 md:space-y-32">
                {services.map((s, idx) => {
                    const Icon = s.icon;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row gap-8 md:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Container */}
                            <motion.div
                                initial={{ scale: 0.98, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="w-full lg:w-1/2 relative aspect-[16/10] rounded-[32px] md:rounded-[48px] overflow-hidden group shadow-[0_40px_80px_-20px_rgba(15,23,42,0.08)]"
                            >
                                <Image
                                    src={s.image}
                                    alt={s.title}
                                    fill
                                    className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-[#0f172a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                {/* Badge Icon */}
                                <div className="absolute top-6 left-6 md:top-10 md:left-10 w-12 h-12 md:w-16 md:h-16 rounded-[16px] md:rounded-[24px] bg-white/95 backdrop-blur-3xl flex items-center justify-center text-[#7C3AED] shadow-2xl transition-transform duration-700 group-hover:scale-110">
                                    <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.2} />
                                </div>
                            </motion.div>

                            {/* Content Container */}
                            <div className="w-full lg:w-1/2 space-y-6 md:space-y-10">
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="space-y-4"
                                >
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#0f172a] leading-[1.2] font-['Roboto',sans-serif]">
                                        {s.title}
                                    </h2>
                                    <p className="text-[#475569] text-base md:text-lg font-medium leading-relaxed">
                                        {s.desc}
                                    </p>
                                </motion.div>

                                <div className="grid gap-3">
                                    {s.points.map((p, pIdx) => (
                                        <motion.div
                                            key={pIdx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 + (pIdx * 0.1) }}
                                            viewport={{ once: true }}
                                            className="flex gap-3 items-center bg-slate-50/50 p-4 rounded-xl md:rounded-2xl border border-slate-100 group/item hover:bg-white hover:shadow-lg hover:border-transparent transition-all duration-300"
                                        >
                                            <div className="w-6 h-6 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover/item:bg-[#7C3AED] group-hover/item:text-white">
                                                <Check size={14} className="transition-transform duration-500 group-hover/item:scale-110" />
                                            </div>
                                            <span className="text-[#1e293b] font-bold text-sm md:text-base leading-snug">{p}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <Link href="/contact" className="inline-flex items-center gap-3 text-[#7C3AED] font-bold text-lg hover:gap-6 transition-all duration-500 group">
                                        Partner with us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-500" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </section>

            {/* BENEFITS SECTION */}
            <section className="px-6 pb-16 md:pb-32 relative z-10">
                <div className="max-w-7xl mx-auto overflow-hidden rounded-[32px] md:rounded-[48px] bg-[#0047AB] text-white p-8 md:p-20 shadow-2xl relative">
                    {/* Decorative Mesh */}
                    <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-32 items-center relative z-10">
                        {/* Left Column */}
                        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-black font-['Roboto',sans-serif] tracking-tight">
                                Take the Next Step
                            </h2>
                            <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                                Transform your career with expert-led training programs built to unlock your true potential. Whether you&apos;re a student, a professional, or an organization, we&apos;ll guide you towards growth and success.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8 md:space-y-10 pl-0 lg:pl-16 border-l-0 lg:border-l border-white/20">
                            <div className="space-y-6 md:space-y-8">
                                <h3 className="text-2xl md:text-3xl font-black font-['Roboto',sans-serif] tracking-tight text-white text-center lg:text-left">
                                    Is Elevare Academy Right for You?
                                </h3>
                                <div className="space-y-4 md:space-y-5">
                                    {[
                                        "Gain confidence to excel in interviews & workplace",
                                        "Build practical skills beyond academics",
                                        "Communicate effectively & lead with impact",
                                        "Boost team performance with tailored training"
                                    ].map((benefit, bIdx) => (
                                        <div key={bIdx} className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Check size={14} className="text-white" />
                                            </div>
                                            <span className="text-blue-50 text-base md:text-lg font-bold">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center lg:justify-start">
                                <Link href="/contact" className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full border-2 border-white/40 bg-white/10 text-white font-bold text-sm tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-blue-800 backdrop-blur-md">
                                    Book A Session
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="px-6 py-20 md:py-40 relative">
                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-[40px] md:rounded-[56px] bg-[#0f172a] p-10 md:p-24"
                    >
                        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#7C3AED]/10 rounded-full blur-[80px] md:blur-[140px] pointer-events-none" />

                        <div className="relative z-10 max-w-xl mx-auto">
                            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">
                                Ready to <br className="hidden sm:block" />
                                Join <span className="text-[#7C3AED]">Elevare?</span>
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg font-medium mb-10 md:mb-12 leading-relaxed">
                                Connect with our experts to design a tailored roadmap for your institution.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-[#7C3AED] text-white font-bold text-sm tracking-[0.2em] uppercase transition-all hover:bg-[#6D28D9] hover:-translate-y-1 hover:shadow-2xl shadow-[#7C3AED]/40">
                                Connect with us <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
