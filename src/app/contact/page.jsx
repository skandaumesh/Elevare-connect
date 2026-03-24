"use client";
import React from "react";
import { motion } from "framer-motion";

const LowPolyBackground = () => (
    <div className="absolute inset-0 z-0 opacity-[0.8] pointer-events-none overflow-hidden bg-[#F1F5F9]">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#CBD5E1" strokeWidth="0.5">
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

export default function ContactPage() {
    return (
        <div className="relative min-h-screen pt-32 lg:pt-40 pb-20 overflow-hidden">
            <LowPolyBackground />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 md:space-y-12"
                    >
                        <div className="space-y-6">
                            <h1 className="text-[#0f172a] text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] font-['Roboto',sans-serif]">
                                Get in Touch With Us
                            </h1>
                            <p className="text-[#475569] text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                                Are you a Institute interested in empowering your students with communication, leadership, and workplace-ready skills? Fill the form and we&apos;ll be in touch!
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-[#0f172a] text-xl md:text-2xl font-bold font-['Roboto',sans-serif]">
                                Email ID
                            </h3>
                            <a href="mailto:info@elevareacademy.com" className="text-[#0047AB] text-lg md:text-xl font-medium hover:underline break-all">
                                info@elevareacademy.com
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-xl rounded-[32px] md:rounded-[40px] p-6 md:p-12 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.1)] border border-white/50"
                    >
                        <h2 className="text-[#0047AB] text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 font-['Roboto',sans-serif]">
                            Fill Out the Form to Connect
                        </h2>

                        <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-5 md:space-y-6">
                                {/* Institute name */}
                                <div className="border-b border-slate-300 pb-2">
                                    <input
                                        type="text"
                                        placeholder="Institute name"
                                        className="w-full bg-transparent border-none text-slate-800 focus:outline-none placeholder-slate-400 text-base md:text-lg"
                                    />
                                </div>

                                {/* Person Name & Designation */}
                                <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                                    <div className="border-b border-slate-300 pb-2">
                                        <input
                                            type="text"
                                            placeholder="Person Name"
                                            className="w-full bg-transparent border-none text-slate-800 focus:outline-none placeholder-slate-400 text-base md:text-lg"
                                        />
                                    </div>
                                    <div className="border-b border-slate-300 pb-2">
                                        <input
                                            type="text"
                                            placeholder="Designation"
                                            className="w-full bg-transparent border-none text-slate-800 focus:outline-none placeholder-slate-400 text-base md:text-lg"
                                        />
                                    </div>
                                </div>

                                {/* Phone Number & Email ID */}
                                <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                                    <div className="border-b border-slate-300 pb-2">
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            className="w-full bg-transparent border-none text-slate-800 focus:outline-none placeholder-slate-400 text-base md:text-lg"
                                        />
                                    </div>
                                    <div className="border-b border-slate-300 pb-2">
                                        <input
                                            type="email"
                                            placeholder="Email ID"
                                            className="w-full bg-transparent border-none text-slate-800 focus:outline-none placeholder-slate-400 text-base md:text-lg"
                                        />
                                    </div>
                                </div>

                                {/* Postal Address */}
                                <div className="border-b border-slate-300 pb-2">
                                    <input
                                        type="text"
                                        placeholder="Postal Address"
                                        className="w-full bg-transparent border-none text-slate-800 focus:outline-none placeholder-slate-400 text-base md:text-lg"
                                    />
                                </div>

                                {/* Message */}
                                <div className="border-b border-slate-300 pb-2">
                                    <textarea
                                        placeholder="Type your message..."
                                        rows="3"
                                        className="w-full bg-transparent border-none text-slate-800 focus:outline-none placeholder-slate-400 text-base md:text-lg resize-none"
                                    />
                                </div>
                            </div>

                            <button className="w-full py-4 md:py-5 bg-[#0047AB] text-white font-bold text-lg md:text-xl rounded-2xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200">
                                Send
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
