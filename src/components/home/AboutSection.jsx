"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Elegant Minimalist BG */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Soft Gradient Accent */}
                <div className="absolute top-[20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#7C3AED]/[0.02] rounded-full blur-[80px] md:blur-[120px]" />

                {/* Minimalist Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(#7C3AED 0.8px, transparent 0.8px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[#7C3AED] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">About Us</div>
                        <h2 className="text-[#0D0D0D] text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight font-['Roboto',sans-serif]">
                            Paving Path to Professional Excellence
                        </h2>
                        <p className="text-[#52525B] text-base md:text-lg leading-relaxed mb-6">
                            Elevare Academy is a training and development initiative committed to shaping confident, capable, and career-ready individuals. Founded by Ms. Wilma Merina D&apos;Sa, an astute professional with over two decades of experience in corporate and academia, we focus on developing soft skills, enhancing professional grooming, and providing campus-to-career mentoring tailored for students and young professionals.
                        </p>
                        <blockquote className="border-l-4 border-[#7C3AED] pl-6 py-2 mb-8 md:mb-10">
                            <p className="text-[#0D0D0D] text-lg md:text-xl font-medium italic">
                                &quot;While degrees open doors, skills and self-confidence hold the key to success.&quot;
                            </p>
                        </blockquote>

                        {/* Founder Card */}
                        <div className="flex items-center gap-4 bg-white px-5 md:px-6 py-3 md:py-4 rounded-2xl w-max border border-slate-100 shadow-sm">
                            <div>
                                <div className="text-[#0D0D0D] font-bold text-base md:text-lg">Wilma Merina D&apos;Sa</div>
                                <div className="text-[#7C3AED] text-[10px] md:text-sm font-bold uppercase tracking-widest">Founder</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0"
                    >
                        {/* Main Image (Large, Left) */}
                        <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl z-10 bg-[#F5F3FF] border-2 md:border-4 border-white">
                            <Image src="https://elevareacademy.in/wp-content/uploads/2025/08/2151585308.jpg" alt="Training Session" fill className="object-cover" />
                        </div>

                        {/* Overlapping Image (Smaller, Bottom Right) */}
                        <div className="absolute bottom-0 right-0 w-[65%] h-[55%] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl z-20 border-4 md:border-[10px] border-white bg-white">
                            <Image src="/founder2.jpg" alt="Students Collaboration" fill className="object-cover" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
