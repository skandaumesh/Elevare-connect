"use client";
import { useState } from "react";
import Link from "next/link";
import { X, Search, Camera, ArrowRight } from "lucide-react";
import { useReveal } from "@/components/Animations";
import { motion } from "framer-motion";

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

export default function GalleryPage() {
    const [selectedImg, setSelectedImg] = useState(null);
    const addToRefs = useReveal();

    return (
        <div className="relative bg-[#F9F8F3] min-h-screen">
            <style dangerouslySetInnerHTML={{
                __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
                    .font-instrument-serif { font-family: 'Instrument Serif', serif; }
                `}} />

            <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-[#A87ED7]/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Hero */}
            <section className="relative text-center pt-40 pb-24 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-28 left-20 pointer-events-none hidden lg:block"
                >
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M18 35 L26 8" stroke="#2B124C" strokeWidth="4" strokeLinecap="round" />
                        <path d="M25 40 L48 20" stroke="#A87ED7" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </motion.div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                    <div ref={addToRefs} className="space-y-10 reveal flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase">
                            GALLERY
                        </div>
                        <h1 className="font-instrument-serif text-[#2B124C]" style={{ fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                            Moments of <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">Growth.</span>
                        </h1>
                        <p className="text-gray-500 font-medium max-w-lg mx-auto" style={{ fontSize: "20px", lineHeight: 1.6 }}>
                            From vibrant workshops to personal sessions — snapshots of transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="px-6 py-24 max-w-7xl mx-auto relative border-t border-[#2B124C]/5">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, idx) => (
                        <div key={idx} ref={addToRefs} className="reveal relative cursor-pointer group flex flex-col aspect-[4/3] rounded-[32px] hover:-translate-y-2 transition-all duration-500 p-2 md:p-3"
                            style={{
                                background: 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1.5px solid rgba(255, 255, 255, 0.9)',
                                boxShadow: '0 8px 32px rgba(43, 18, 76, 0.08)',
                            }}
                            onClick={() => setSelectedImg(item.src)}>
                            <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#2B124C]/5">
                                <img src={item.src} alt="Gallery item" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2B124C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                                        <Search size={24} strokeWidth={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section ref={addToRefs} className="reveal px-6 pb-40 relative">
                <div className="max-w-4xl mx-auto relative overflow-hidden text-center flex flex-col items-center px-10 py-20 bg-white shadow-2xl rounded-[48px]"
                    style={{
                        background: 'rgba(255,255,255,0.7)',
                        backdropFilter: 'blur(20px)',
                        border: '1.5px solid rgba(255,255,255,0.9)',
                    }}
                >
                    <div className="relative z-10 space-y-10 max-w-2xl mx-auto flex flex-col items-center">
                        <h2 className="font-instrument-serif text-[#2B124C] tracking-wide" style={{ fontSize: "clamp(48px, 6vw, 76px)", lineHeight: 1 }}>Want Us at <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">Your Campus?</span>
                        </h2>
                        <p className="text-gray-500 font-medium max-w-sm mx-auto" style={{ fontSize: "20px", lineHeight: 1.6 }}>Let&apos;s create more impactful moments together.</p>
                        <div className="pt-4 flex justify-center gap-6">
                            <Link href="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-[#A87ED7] to-[#2B124C] text-white font-bold text-[15px] uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-xl inline-flex items-center gap-3">
                                Get in Touch <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImg && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/50 backdrop-blur-3xl transition-all" onClick={() => setSelectedImg(null)}>
                    <button className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white border border-[#2B124C]/10 flex items-center justify-center text-[#2B124C] hover:bg-gray-50 hover:scale-110 transition-all shadow-xl"><X size={24} /></button>
                    <img src={selectedImg} alt="Gallery" className="max-w-full max-h-[85vh] rounded-[32px] shadow-[0_20px_60px_rgba(43,18,76,0.3)] border border-white" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
}
