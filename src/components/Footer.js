import Link from "next/link";
import {
    Linkedin,
    Instagram,
    Facebook,
    Twitter,
    ArrowUpRight,
    Mail,
    Phone,
} from "lucide-react";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Collaborate", href: "/contact" },
];

const socials = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582428213379", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/elevare-academy-791889379/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/ElevareA49358", label: "X" },
    { icon: Instagram, href: "https://www.instagram.com/elevare05/", label: "Instagram" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2B124C] text-[#F9F8F3]/60 pt-24 pb-8 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A87ED7]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block group">
                            <img src="/elevera.png" alt="Elevare Connect" className="h-[45px] w-auto object-contain invert-[0.9] opacity-90 transition-opacity group-hover:opacity-100" />
                        </Link>
                        <p className="text-[#F9F8F3]/70 text-[15px] leading-relaxed max-w-sm font-medium">
                            &ldquo;While degrees open doors, skills and self-confidence hold the key to success.&rdquo;
                        </p>
                    </div>

                    {/* Quick Menu */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[#A87ED7] font-bold text-[11px] uppercase tracking-[0.2em] mb-8">Navigation</h4>
                        <ul className="space-y-4 list-none p-0">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="group flex items-center text-[#F9F8F3]/70 hover:text-white text-sm font-bold tracking-wider uppercase transition-colors w-fit">
                                        {link.name}
                                        <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info & Socials */}
                    <div className="lg:col-span-4 space-y-12">
                        <div>
                            <h4 className="text-[#A87ED7] font-bold text-[11px] uppercase tracking-[0.2em] mb-8">Contact</h4>
                            <ul className="space-y-4 list-none p-0">
                                <li>
                                    <a href="mailto:info@elevareacademy.com" className="group flex items-center gap-4 text-[#F9F8F3]/70 hover:text-white text-[15px] font-medium transition-colors w-fit">
                                        <div className="w-8 h-8 rounded-full bg-[#A87ED7]/10 flex items-center justify-center group-hover:bg-[#A87ED7]/20 transition-colors text-[#A87ED7]">
                                            <Mail size={14} />
                                        </div>
                                        info@elevareacademy.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-4 text-[#F9F8F3]/70 text-[15px] font-medium">
                                    <div className="w-8 h-8 rounded-full bg-[#A87ED7]/10 flex items-center justify-center text-[#A87ED7]">
                                        <Phone size={14} />
                                    </div>
                                    Connect with us locally
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex gap-3">
                                {socials.map((s, idx) => {
                                    const Icon = s.icon;
                                    return (
                                        <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-[#A87ED7]/10 flex items-center justify-center text-[#A87ED7] hover:text-white hover:bg-[#A87ED7] hover:-translate-y-1 transition-all duration-300"
                                            aria-label={s.label}>
                                            <Icon size={16} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-[#A87ED7]/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[#F9F8F3]/50 text-xs tracking-widest uppercase font-bold">
                        © {currentYear} Elevare Connect
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-[#F9F8F3]/50 hover:text-white text-xs tracking-widest uppercase font-bold transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-[#F9F8F3]/50 hover:text-white text-xs tracking-widest uppercase font-bold transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}