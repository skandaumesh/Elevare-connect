"use client";
import { Mail, Linkedin, Instagram, Send, Facebook, Twitter, Sparkles } from "lucide-react";
import { useReveal } from "@/components/Animations";
import { motion } from "framer-motion";

export default function ContactPage() {
    const addToRefs = useReveal();

    const contactMethods = [
        { icon: Mail, label: "Email", value: "info@elevareacademy.com", href: "mailto:info@elevareacademy.com" },
        { icon: Linkedin, label: "LinkedIn", value: "Elevare Connect", href: "https://www.linkedin.com/in/elevare-academy-791889379/" },
        { icon: Instagram, label: "Instagram", value: "@elevare05", href: "https://www.instagram.com/elevare05/" },
    ];

    return (
        <div className="relative bg-[#F9F8F3] min-h-screen">
            <style dangerouslySetInnerHTML={{
                __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
                    .font-instrument-serif { font-family: 'Instrument Serif', serif; }
                    .input-aesthetic {
                        background: rgba(255,255,255,0.6);
                        border: 1.5px solid rgba(43,18,76,0.06);
                        border-radius: 16px;
                        padding: 0 20px;
                        color: #2B124C;
                        font-weight: 500;
                        transition: all 0.3s ease;
                    }
                    .input-aesthetic:focus {
                        outline: none;
                        border-color: rgba(168,126,215, 0.5);
                        background: rgba(255,255,255,0.9);
                        box-shadow: 0 4px 20px rgba(168,126,215,0.1);
                    }
                `}} />

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A87ED7]/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Hero */}
            <section className="relative text-center pt-40 pb-24 overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                    <div ref={addToRefs} className="space-y-10 reveal flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase">
                            CONTACT US
                        </div>
                        <h1 className="font-instrument-serif text-[#2B124C]" style={{ fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                            Collaborate <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">With Us.</span>
                        </h1>
                        <p className="text-gray-500 max-w-lg mx-auto font-medium" style={{ fontSize: "20px", lineHeight: 1.6 }}>
                            Reach out to empower your students with professional excellence and world-class training.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-6 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32 items-start relative border-t border-[#2B124C]/5">
                {/* Left: Contact Info */}
                <div ref={addToRefs} className="reveal space-y-12">
                    <div className="space-y-6">
                        <h2 className="font-instrument-serif text-[#2B124C] tracking-wide" style={{ fontSize: "clamp(40px, 4.5vw, 64px)", lineHeight: 1.1 }}>Start a Conversation.</h2>
                        <p className="text-gray-500 font-medium max-w-sm" style={{ fontSize: "18px", lineHeight: 1.65 }}>Whether you&apos;re an institution or individual seeking mentorship, we&apos;ll respond within 24 hours.</p>
                    </div>

                    <div className="grid gap-4">
                        {contactMethods.map((item, idx) => {
                            const Icon = item.icon; return (
                                <div key={idx} className="flex items-center gap-6 p-6 group cursor-pointer border-[#2B124C]/5 hover:border-[#A87ED7]/20 shadow-sm transition-all duration-500 rounded-[24px]"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.6)',
                                        backdropFilter: 'blur(16px)',
                                        border: '1.5px solid rgba(255, 255, 255, 0.8)',
                                    }}
                                >
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all bg-[#A87ED7]/10 text-[#A87ED7] group-hover:scale-110 group-hover:bg-[#A87ED7] group-hover:text-white"><Icon size={22} /></div>
                                    <div>
                                        <span className="font-bold text-[#A87ED7] block mb-1" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}>{item.label}</span>
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[17px] font-bold text-[#2B124C] no-underline transition-colors">{item.value}</a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="space-y-5 pt-8 border-t border-[#2B124C]/5">
                        <span className="font-bold text-[#A87ED7]" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Follow the impact</span>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582428213379" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/elevare-academy-791889379/" },
                                { icon: Twitter, href: "https://x.com/ElevareA49358" },
                                { icon: Instagram, href: "https://www.instagram.com/elevare05/" },
                            ].map((s, i) => {
                                const Icon = s.icon; return (
                                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-white border border-[#2B124C]/10 text-[#A87ED7] hover:bg-[#A87ED7] hover:text-white hover:border-[#A87ED7] hover:-translate-y-1 shadow-sm hover:shadow-lg">
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div ref={addToRefs} className="reveal delay-1">
                    <form className="p-10 md:p-14 space-y-8 rounded-[40px] w-full max-w-[540px]"
                        style={{
                            background: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(20px)',
                            border: '1.5px solid rgba(255, 255, 255, 0.9)',
                            boxShadow: '0 10px 40px rgba(43, 18, 76, 0.05)',
                        }}
                    >
                        <div className="space-y-4">
                            <h3 className="font-instrument-serif text-4xl text-[#2B124C] tracking-wide">Get in touch</h3>
                            <p className="text-gray-500 font-medium" style={{ fontSize: "16px" }}>We&apos;ll get back with a roadmap for impact.</p>
                        </div>
                        <div className="grid gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-[#2B124C] pl-1" style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Institution</label>
                                <input type="text" placeholder="Your organization" className="input-aesthetic h-14" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-[#2B124C] pl-1" style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Name</label>
                                    <input type="text" placeholder="Your name" className="input-aesthetic h-14" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-[#2B124C] pl-1" style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Phone</label>
                                    <input type="tel" placeholder="+91 00000 00000" className="input-aesthetic h-14" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-[#2B124C] pl-1" style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Email</label>
                                <input type="email" placeholder="name@institution.com" className="input-aesthetic h-14" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-[#2B124C] pl-1" style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Message</label>
                                <textarea rows="3" placeholder="How can we help?" className="input-aesthetic resize-none py-4" />
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white rounded-full font-bold h-16 flex items-center justify-center gap-3 transition-all bg-gradient-to-r from-[#A87ED7] to-[#2B124C] hover:opacity-90 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] text-[15px] tracking-widest uppercase border-none cursor-pointer mt-4">
                            Send Message <Send size={20} />
                        </button>
                    </form>
                </div>
            </section>
            <div className="h-24" />
        </div>
    );
}
