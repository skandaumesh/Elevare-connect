"use client";
import React from "react";
import Link from "next/link";
import { Users, Award, BookOpen, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-[#F9F8F3] overflow-hidden pt-20 md:pt-28">

            {/* Premium BG Design Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Mesh Gradient Accents */}
                <div className="absolute top-[5%] left-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#7C3AED]/5 rounded-full blur-[100px] md:blur-[160px]" />
                <div className="absolute bottom-[5%] right-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-500/5 rounded-full blur-[100px] md:blur-[160px]" />

                {/* Subtle Modern Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(90deg, #7C3AED 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
            </div>

            {/* ─── SECTION 1: HERO ─── */}
            <section className="relative pt-16 md:pt-20 pb-16 md:pb-24 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        className="max-w-4xl mx-auto flex flex-col items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 mb-6 md:mb-8 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-[10px] md:text-sm font-bold tracking-widest uppercase">
                            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></span>
                            ABOUT ELEVARE ACADEMY
                        </div>
                        <h1 className="text-[#0D0D0D] text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1] font-['Roboto',sans-serif]">
                            Empowering with <br className="hidden md:block" />
                            <span className="text-[#7C3AED]">Human-Centric Skills.</span>
                        </h1>
                        <p className="text-[#52525B] text-base md:text-xl font-medium mb-10 md:mb-16 leading-relaxed max-w-2xl mx-auto">
                            We partner with institutions to unlock every student&apos;s potential — enhancing communication, leadership, and emotional intelligence.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-20 justify-center w-full max-w-3xl">
                            {[
                                { v: "20+", l: "Partner Colleges" },
                                { v: "20000+", l: "Students Trained" },
                                { v: "50+", l: "Workshops Delivered" }
                            ].map((s, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <p className="text-[#0D0D0D] text-4xl md:text-6xl font-black tracking-tight mb-1 md:mb-2">{s.v}</p>
                                    <p className="text-[#7C3AED] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">{s.l}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── SECTION 2: FOUNDER ─── */}
            <section className="py-20 md:py-28 relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 px-6">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        {/* LEFT COLUMN: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center text-center lg:text-left"
                        >
                            <h2 className="text-[#0f172a] text-3xl md:text-[46px] font-bold mb-8 md:mb-10 tracking-tight leading-[1.2] font-['Roboto',sans-serif]">
                                The Heart <br className="hidden md:block" />
                                <span className="text-[#7C3AED]">Behind Elevare Academy</span>
                            </h2>

                            <div className="space-y-6 text-[#475569] text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                <p>
                                    At Elevare Academy, we are passionate about partnering with institutions that share our vision of holistic student development. With a strong foundation in HR and academia, I founded Elevare Academy to support colleges in preparing students not just for jobs, but for confident, impactful careers.
                                </p>
                                <p>
                                    I warmly invite your institution to collaborate with us in equipping students with the essential soft skills, professional grooming, and career readiness they need to thrive beyond campus.
                                </p>
                            </div>

                            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-4">
                                <div className="hidden md:block w-10 h-[2px] bg-[#7C3AED]" />
                                <p className="text-[#0f172a] text-base md:text-lg font-bold">Wilma Merina D’Sa, <span className="text-slate-500 font-medium ml-1 text-sm md:text-base">Founder</span></p>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN: Floating Image Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex items-center justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-[340px] md:max-w-md aspect-[4/5] rounded-[40px] md:rounded-[56px] overflow-hidden bg-white shadow-2xl border border-slate-100 p-3 md:p-4 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/5 to-transparent z-10 pointer-events-none" />
                                <div className="relative w-full h-full rounded-[28px] md:rounded-[42px] overflow-hidden">
                                    <Image
                                        src="/founder.jpeg"
                                        alt="Wilma Merina D'Sa"
                                        fill
                                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 3: PHILOSOPHY ─── */}
            <section className="px-6 py-20 md:py-32 relative bg-[#F9F8F3]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-[10px] md:text-sm font-bold tracking-widest uppercase">
                            OUR PHILOSOPHY
                        </div>
                        <h2 className="text-[#0D0D0D] text-3xl md:text-6xl font-black tracking-tight mb-6 font-['Roboto',sans-serif]">
                            Why <span className="text-[#7C3AED]">Elevare.</span>
                        </h2>
                        <p className="text-[#52525B] text-lg md:text-xl font-medium leading-relaxed">
                            High-performance methodology combined with deep academic empathy.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Expertise", desc: "Led by a seasoned HR Professional & Academician bridging theory and practice.", icon: Award },
                            { title: "Personalized", desc: "Adapting to each student's unique personality and career aspirations.", icon: Users },
                            { title: "Holistic", desc: "Nurturing emotional intelligence, critical thinking, and leadership.", icon: BookOpen },
                            { title: "Aligned", desc: "Real-world alignment with current market demands and global practices.", icon: Target },
                        ].map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-8 md:p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-[#F5F3FF] text-[#7C3AED] mb-6 md:mb-8 shadow-inner">
                                        <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="font-bold text-xl md:text-[22px] tracking-tight text-[#0D0D0D] mb-4 font-['Roboto',sans-serif]">{s.title}</h4>
                                    <p className="text-[#52525B] text-sm md:text-[15px] font-medium leading-relaxed">{s.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── SECTION 4: CTA ─── */}
            <section className="px-6 py-24 md:py-40 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#7C3AED]/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <h2 className="text-[#0D0D0D] text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] font-['Roboto',sans-serif]">
                        Collaborate <br />
                        <span className="text-[#7C3AED]">with us today.</span>
                    </h2>
                    <p className="text-[#52525B] font-medium text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-12">
                        Let&apos;s shape the next generation of confident, career-ready professionals together.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-5">
                        <Link href="/contact" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full bg-[#7C3AED] text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-all hover:bg-[#6D28D9] group shadow-xl shadow-[#7C3AED]/20">
                            Get Started <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href="/services" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full bg-white border border-slate-200 text-[#0D0D0D] font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-all hover:border-[#7C3AED] hover:text-[#7C3AED]">
                            Our Services
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
