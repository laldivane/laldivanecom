"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, socialLinks } from "@/data/links";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";
import { PLATFORM_ICONS } from "@/data/platformIcons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? "py-4 bg-bg/80 backdrop-blur-2xl border-b border-white/10" : "py-6 sm:py-8 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl sm:text-3xl font-display font-black tracking-tighter hover:text-crimson transition-all duration-500 group"
        >
          LAL <span className="text-crimson group-hover:drop-shadow-[0_0_15px_rgba(176,0,32,0.6)]">DIVANE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-crimson group ${
                pathname === link.href ? "text-crimson" : "text-muted"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-crimson transition-all duration-500 ${
                pathname === link.href ? "w-full shadow-[0_0_10px_rgba(176,0,32,0.5)]" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </nav>

        {/* CTA / Socials */}
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href={socialLinks.spotify} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-crimson/50 hover:bg-crimson/5 transition-all duration-500 group"
          >
            <div className="relative w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <Image 
                src={PLATFORM_ICONS.spotify} 
                alt="Spotify" 
                fill 
                className="object-contain" 
              />
            </div>
          </a>
          <Link 
            href="/contact" 
            className="text-[10px] font-black uppercase tracking-[0.2em] bg-foreground text-bg px-6 py-3 rounded-full hover:bg-crimson hover:text-foreground transition-all duration-500"
          >
            Connect
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
