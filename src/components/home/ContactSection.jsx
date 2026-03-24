"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-[#F9F8F3]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[rgba(0,0,0,0.07)]"
                    >
                        <h2 className="text-[#0D0D0D] text-3xl font-bold mb-2 tracking-tight">Let&apos;s Connect</h2>
                        <p className="text-[#52525B] font-medium mb-8">Partner with us to shape career-ready professionals.</p>

                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-[#0D0D0D] mb-2">Name</label>
                                    <input type="text" className="w-full bg-[#F5F3FF] border border-transparent focus:border-[#7C3AED] focus:ring-0 rounded-xl px-4 py-3 outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#0D0D0D] mb-2">Email</label>
                                    <input type="email" className="w-full bg-[#F5F3FF] border border-transparent focus:border-[#7C3AED] focus:ring-0 rounded-xl px-4 py-3 outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-[#0D0D0D] mb-2">Phone</label>
                                    <input type="tel" className="w-full bg-[#F5F3FF] border border-transparent focus:border-[#7C3AED] focus:ring-0 rounded-xl px-4 py-3 outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#0D0D0D] mb-2">College / Organisation</label>
                                    <input type="text" className="w-full bg-[#F5F3FF] border border-transparent focus:border-[#7C3AED] focus:ring-0 rounded-xl px-4 py-3 outline-none transition-colors" placeholder="Institution Name" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#0D0D0D] mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-[#F5F3FF] border border-transparent focus:border-[#7C3AED] focus:ring-0 rounded-xl px-4 py-3 outline-none transition-colors resize-none" placeholder="How can we help you?" />
                            </div>
                            <button type="submit" className="w-full flex justify-center items-center gap-2 bg-[#7C3AED] text-white font-bold rounded-xl px-6 py-4 hover:bg-[#6D28D9] transition-all transform hover:scale-[1.02] shadow-md">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center gap-6"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[rgba(0,0,0,0.07)] flex items-start gap-6 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-[#F5F3FF] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#7C3AED]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <div className="text-[#0D0D0D] font-bold text-xl mb-1">Email Us</div>
                                <p className="text-[#52525B] font-medium leading-relaxed">Drop us a line and we&apos;ll get back to you immediately.</p>
                                <a href="mailto:info@elevareconnect.com" className="text-[#7C3AED] font-bold block mt-2 hover:underline">info@elevareconnect.com</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[rgba(0,0,0,0.07)] flex items-start gap-6 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-[#F5F3FF] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#7C3AED]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <div className="text-[#0D0D0D] font-bold text-xl mb-1">Call Us</div>
                                <p className="text-[#52525B] font-medium leading-relaxed">We&apos;re available Monday to Friday, 9:00 AM - 6:00 PM.</p>
                                <a href="tel:+919999999999" className="text-[#7C3AED] font-bold block mt-2 hover:underline">+91 XXXXX XXXXX</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[rgba(0,0,0,0.07)] flex items-start gap-6 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-[#F5F3FF] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#7C3AED]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <div className="text-[#0D0D0D] font-bold text-xl mb-1">Visit Us</div>
                                <p className="text-[#52525B] font-medium leading-relaxed">Bengaluru, Karnataka, India</p>

                                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 mt-4 border-2 border-[#25D366] text-[#25D366] font-bold rounded-full hover:bg-[#25D366] hover:text-white transition-all">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
