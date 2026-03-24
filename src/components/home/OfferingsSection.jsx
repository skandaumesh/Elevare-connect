"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OfferingsSection() {
    const offerings = [
        {
            img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
            title: "Career Readiness",
            bullets: [
                "Campus-to-Corporate transition workshops",
                "Resume & LinkedIn profile optimization",
                "Mock Interviews with tailored, actionable feedback"
            ],
        },
        {
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            title: "Skill Enhancement",
            bullets: [
                "Communication and Time Management",
                "Workplace Etiquette & Professional Writing",
                "Emotional Intelligence for today's work culture"
            ],
        },
        {
            img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
            title: "Academic to Industry Bridge",
            bullets: [
                "Industry guest lectures & Interactive sessions",
                "Final-year project mentoring with a Career focus",
                "Align academic content with current industry practices"
            ],
        },
        {
            img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
            title: "Mentorship & Development",
            bullets: [
                "1:1 and group mentorship programs",
                "Goal-setting and Personal Branding sessions",
                "Self-awareness and Decision-making frameworks"
            ],
        }
    ];

    return (
        <section id="services" className="py-24 relative bg-[#F8F9FA] overflow-hidden">

            {/* Subtle light diagonal grid background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 20px)'
                }}
            ></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[#0f172a] text-4xl md:text-5xl font-medium tracking-tight">
                        Our Key Offerings
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offerings.map((offering, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white rounded-[24px] shadow-sm border border-[rgba(0,0,0,0.04)] p-3 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                        >
                            {/* Inner Padded Image matching the screenshot visual padding */}
                            <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-6 bg-gray-100">
                                <Image
                                    src={offering.img}
                                    alt={offering.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Text Area */}
                            <div className="px-4 pb-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-[#0f172a] text-center tracking-tight mb-5">
                                    {offering.title}
                                </h3>
                                <ul className="space-y-3">
                                    {offering.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
                                            <span className="text-gray-500 text-[14px] leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
