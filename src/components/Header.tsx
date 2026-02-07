"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, socialLinks } from "@/data/links";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-bg/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-display font-black tracking-tighter hover:text-crimson transition-colors duration-500"
        >
          LAL <span className="text-crimson">DIVANE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-crimson ${
                pathname === link.href ? "text-crimson" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA / Socials */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href={socialLinks.spotify} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
          >
            <span className="material-symbols-outlined text-[20px]">headphones</span>
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <HamburgerMenu />
      </div>
    </header>
  );
}
