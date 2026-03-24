"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Collaborate with Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white shadow-sm flex items-center ${scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12 w-full flex items-center justify-between h-full overflow-visible">
          {/* Logo - Pop-out Overflow Sizing */}
          <Link href="/" className="flex items-center no-underline shrink-0 group relative z-10 overflow-visible">
            <img
              src="/elevare.png"
              alt="Elevare Academy"
              className={`transition-all duration-500 w-auto object-contain pointer-events-none drop-shadow-md
                ${scrolled ? "h-20 md:h-24 translate-y-2" : "h-24 md:h-32 translate-y-3"}`}
            />
          </Link>

          {/* Nav Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] xl:text-[15px] font-bold transition-all duration-300 no-underline
                    ${isActive
                      ? "text-[#0047AB]"
                      : "text-slate-600 hover:text-[#0047AB]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-slate-800 cursor-pointer border-none bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Full Screen with Animations */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "110%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[150] bg-white flex flex-col p-8 pt-24"
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-[28px] md:text-[36px] font-black no-underline transition-colors block
                        ${isActive ? "text-[#0047AB]" : "text-slate-400"}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pt-10 border-t border-slate-100 space-y-4"
            >
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Empowering Futures</p>
              <h3 className="text-[#0047AB] text-xl font-black">Elevare Academy</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}