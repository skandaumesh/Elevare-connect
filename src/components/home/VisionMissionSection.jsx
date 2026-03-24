"use client";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
    const cardsData = [
        {
            title: "Our Mission",
            desc: "To elevate potential through personalized coaching, interactive learning, and expert guidance.",
            img: "https://elevareacademy.in/wp-content/uploads/2025/08/33904890_29-min-scaled.jpg",
        },
        {
            title: "Our Vision",
            desc: "To be a trusted catalyst in shaping the next generation of career-ready, emotionally intelligent, and socially responsible professionals.",
            img: "https://elevareacademy.in/wp-content/uploads/2025/08/4949444_19721-scaled-e1756115484675.jpg",
        },
        {
            title: "Our Values",
            desc: "Empowerment, Excellence, Empathy, and lasting Impact — in every session we deliver.",
            img: "https://elevareacademy.in/wp-content/uploads/2025/08/7248995_3558114-scaled-e1756115541942.jpg",
        }
    ];

    return (
        <section className="py-24 bg-[#F9F8F3] relative overflow-hidden">

            {/* Decorative textured visual background similar to the reference screenshot */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#7C3AED] via-transparent to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[#0D0D0D] text-4xl md:text-[44px] font-medium mb-6 tracking-tight">
                        Vision that Inspires Mission that Delivers
                    </h2>
                    <p className="text-[#52525B] text-lg leading-relaxed">
                        At Elevare Connect, our foundation is built on purpose empowering future professionals through mentorship, mindset, and practical mastery.
                    </p>
                </motion.div>

                {/* Mission & Vision Row (2 Columns) */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {cardsData.slice(0, 2).map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="relative w-full aspect-video rounded-[24px] overflow-hidden shadow-lg group"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${card.img})` }}
                            ></div>

                            {/* Dark Gradient Overlay starting from left side as shown in screenshot */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

                            {/* Text Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-center max-w-[80%]">
                                <h3 className="text-white text-4xl font-bold mb-6 tracking-tight drop-shadow-md">
                                    {card.title}
                                </h3>
                                <p className="text-white/90 text-[17px] leading-relaxed font-medium drop-shadow-sm">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Values Row (Full Width spanning bottom) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative w-full h-[250px] md:h-[300px] rounded-[24px] overflow-hidden shadow-lg group"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${cardsData[2].img})` }}
                    ></div>

                    {/* Centralized Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Text Content */}
                    <div className="absolute inset-0 p-10 flex flex-col justify-end items-center text-center">
                        <h3 className="text-white text-4xl font-bold mb-4 tracking-tight drop-shadow-md">
                            {cardsData[2].title}
                        </h3>
                        <p className="text-white/90 text-[17px] leading-relaxed font-medium max-w-3xl drop-shadow-sm">
                            {cardsData[2].desc}
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
