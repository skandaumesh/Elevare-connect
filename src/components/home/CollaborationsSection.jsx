"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CollaborationsSection() {
    const partners = [
        { name: "SRI IN5NET", src: "/sriin5net-logo.png" },
        { name: "MLA Academy", src: "/elevera.png" },
        { name: "INCODE", src: "/incode-logo.png" },
        { name: "Career Mantra", src: "/career-mantra.png" },
        { name: "Logo 1", src: "/logo-1.jpg" },
        // Duplicated set to ensure a seamless seamless scroll transition
        { name: "SRI IN5NET", src: "/sriin5net-logo.png" },
        { name: "MLA Academy", src: "/elevera.png" },
        { name: "INCODE", src: "/incode-logo.png" },
        { name: "Career Mantra", src: "/career-mantra.png" },
        { name: "Logo 1", src: "/logo-1.jpg" }
    ];

    return (
        <section id="collaborate" className="py-20 bg-[#F9F8F3] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <motion.h2
                    className="text-center text-3xl font-medium text-[#0D0D0D] tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Trusted Collaborations
                </motion.h2>
            </div>

            {/* Infinite Marquee Track */}
            <div className="relative flex w-full overflow-hidden">
                <motion.div
                    className="flex gap-10 whitespace-nowrap px-5 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25
                    }}
                >
                    {partners.map((partner, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 relative flex items-center justify-center bg-white border border-[rgba(0,0,0,0.04)] rounded-[20px] h-28 w-64 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 overflow-hidden"
                        >
                            <Image
                                src={partner.src}
                                alt={`${partner.name} logo`}
                                fill
                                className="object-contain p-4 mix-blend-multiply"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
