"use client";
import { motion } from "framer-motion";
import { FileText, Users, Mic, MonitorPlay, ClipboardCheck, Megaphone } from "lucide-react";

export default function ProgramAddOnsSection() {
    const addons = [
        {
            id: 1,
            icon: <FileText size={48} strokeWidth={1.5} className="text-[#3b82f6] relative z-10" />,
            label: "Placement Oriented\nPrograms",
            blob1: "bg-blue-100", blob2: "bg-blue-50"
        },
        {
            id: 2,
            icon: <Users size={48} strokeWidth={1.5} className="text-[#8b5cf6] relative z-10" />,
            label: "Interview\nPreparations",
            blob1: "bg-purple-100", blob2: "bg-purple-50"
        },
        {
            id: 3,
            icon: <Mic size={48} strokeWidth={1.5} className="text-[#10b981] relative z-10" />,
            label: "Industry Talks and\nGuest Lectures",
            blob1: "bg-emerald-100", blob2: "bg-emerald-50"
        },
        {
            id: 4,
            icon: <MonitorPlay size={48} strokeWidth={1.5} className="text-[#f59e0b] relative z-10" />,
            label: "Workshops and\nWebinars",
            blob1: "bg-amber-100", blob2: "bg-amber-50"
        },
        {
            id: 5,
            icon: <ClipboardCheck size={48} strokeWidth={1.5} className="text-[#f43f5e] relative z-10" />,
            label: "Job Description\nBased Training",
            blob1: "bg-rose-100", blob2: "bg-rose-50"
        },
        {
            id: 6,
            icon: <Megaphone size={48} strokeWidth={1.5} className="text-[#06b6d4] relative z-10" />,
            label: "Communication &\nPublic Speaking",
            blob1: "bg-cyan-100", blob2: "bg-cyan-50"
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
            {/* Design Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[140px]" />
                <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#CBD5E1 0.8px, transparent 0.8px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-blue-600 text-xs font-bold tracking-[0.2em] uppercase bg-blue-50 rounded-full">
                        Enrichment Programs
                    </div>
                    <h2 className="text-[#0f172a] text-4xl md:text-[42px] font-bold tracking-tight">
                        Program Add-Ons & Enrichments
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {addons.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-10 flex flex-col items-center justify-center text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Card Decorative Accent */}
                            <div className={`absolute top-0 right-0 w-24 h-24 translate-x-12 -translate-y-12 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700 ${item.blob1}`} />

                            <div className="relative z-10">
                                {/* Graphic Placeholder mimicking the illustration footprint */}
                                <div className="relative w-32 h-28 flex items-center justify-center mb-8">
                                    <div className={`absolute inset-0 ${item.blob1} rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-60 transform group-hover:rotate-12 transition-transform duration-700`}></div>
                                    <div className={`absolute inset-2 ${item.blob2} rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-80 transform -rotate-6 group-hover:-rotate-12 transition-transform duration-700`}></div>
                                    {item.icon}
                                </div>

                                {/* Text */}
                                <h3 className="text-[#0f172a] text-[19px] leading-snug font-bold">
                                    {item.label.split('\n').map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i !== item.label.split('\n').length - 1 && <br />}
                                        </span>
                                    ))}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
