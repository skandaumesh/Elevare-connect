"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, Search, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const galleryItems = [
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-06-at-17.50.34.jpeg", title: "Workshop Session", type: "Interactive Training" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-06-at-17.50.35-1.jpeg", title: "Training Program", type: "Skill Enhancement" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-06-at-17.50.35.jpeg", title: "Campus Engagement", type: "Institution Bridge" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-06-at-17.50.36.jpeg", title: "Interactive Session", type: "Peer Discussion" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-20.57.02.jpeg", title: "Mentoring Program", type: "1:1 Coaching" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-20.57.03-1.jpeg", title: "Leadership Workshop", type: "Career Readiness" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-20.57.03-2.jpeg", title: "Group Activity", type: "Team Building" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-20.57.03.jpeg", title: "Collaboration", type: "Impact Program" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-21.29.22.jpeg", title: "Student Engagement", type: "Campus Event" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-21.29.23.jpeg", title: "Campus Event", type: "Institutional Bridge" },
];

const LowPolyBackground = () => (
    <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none overflow-hidden">
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

export default function GalleryPage() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="relative bg-[#F8FAFC] min-h-screen overflow-hidden pt-20 md:pt-28">
            {/* HERO SECTION with Textured Poly Background */}
            <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 px-6 overflow-hidden border-b border-slate-100">
                <LowPolyBackground />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-8 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-[10px] font-bold tracking-[0.3em] uppercase">
                            Visual Impact
                        </div>
                        <h1 className="text-[#0f172a] text-3xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1] font-['Roboto',sans-serif]">
                            A Glimpse into <br className="hidden md:block" />
                            <span className="text-[#7C3AED]">Our Impact.</span>
                        </h1>
                        <p className="text-[#475569] text-base md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12">
                            From vibrant workshops to campus engagements, each snapshot tells a story of transformation, collaboration, and growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* GALLERY GRID */}
            <section className="px-6 py-12 md:py-20 relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {galleryItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group relative cursor-pointer aspect-[4/3] rounded-[32px] md:rounded-[48px] overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border-2 md:border-4 border-white hover:shadow-[0_40px_100px_-20px_rgba(124,58,237,0.2)] transition-all duration-500"
                            onClick={() => setSelectedImg(item.src)}
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10">
                                <span className="text-white/60 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.type}
                                </span>
                                <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {item.title}
                                </h3>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-150 shadow-2xl">
                                    <Search className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="px-6 py-16 md:py-32 relative">
                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-[40px] md:rounded-[56px] bg-white border border-slate-100 p-10 md:p-24 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)]"
                    >
                        <h2 className="text-[#0f172a] text-3xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] font-['Roboto',sans-serif]">
                            Want us at <br className="hidden sm:block" />
                            <span className="text-[#7C3AED]">Your Campus?</span>
                        </h2>
                        <p className="text-[#475569] text-base md:text-xl font-medium max-w-lg mx-auto mb-10 md:mb-12">
                            Let&apos;s create more impactful moments together and empower your students for the future.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full bg-[#7C3AED] text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-all hover:bg-[#6D28D9] group shadow-xl shadow-[#7C3AED]/30">
                            Connect with us <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-12 bg-white/95 backdrop-blur-3xl cursor-zoom-out"
                        onClick={() => setSelectedImg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative max-w-6xl w-full h-auto max-h-[90vh] rounded-[24px] md:rounded-[48px] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full aspect-[4/3] md:aspect-auto">
                                <Image
                                    src={selectedImg}
                                    alt="Gallery View"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <button
                                className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0f172a] text-white flex items-center justify-center hover:bg-[#7C3AED] hover:scale-110 transition-all shadow-2xl cursor-pointer pointer-events-auto"
                                onClick={() => setSelectedImg(null)}
                            >
                                <X size={24} className="md:w-7 md:h-7" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
