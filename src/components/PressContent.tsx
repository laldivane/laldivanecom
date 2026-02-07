"use client";

import Image from "next/image";
import { PLATFORM_ICONS } from "@/data/platformIcons";

const COLORS = [
  { name: "Obsidian", hex: "#050508", usage: "Primary Background" },
  { name: "Crimson", hex: "#B00020", usage: "Action & Identity" },
  { name: "Foreground", hex: "#EDEDED", usage: "Primary Typography" },
  { name: "Muted", hex: "#EDEDED", opacity: "65%", usage: "Secondary Details" },
];

const FONTS = [
  { name: "Syne", type: "Display", source: "Google Fonts", description: "Bold, mechanical, and futuristic. Used for major headers." },
  { name: "Outfit", type: "Sans", source: "Google Fonts", description: "Clean and professional. Used for body text and navigation." },
];

export default function PressContent() {
  return (
    <div className="min-h-screen bg-bg pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-12 sm:mb-20 space-y-3 sm:space-y-4">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black tracking-tighter uppercase leading-[0.8]">BRAND KIT</h1>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-crimson" />
            <p className="text-muted tracking-[0.4em] font-light uppercase text-[10px] sm:text-xs">Official visual assets & identity guide</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-20 sm:space-y-32">
            
            {/* Identity Section */}
            <section className="space-y-8 sm:space-y-12">
              <div className="space-y-4">
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-crimson">The Identity</h2>
                <h3 className="text-3xl sm:text-5xl font-display font-black tracking-tighter uppercase">Visual Philosophy</h3>
              </div>
              <p className="text-muted text-lg sm:text-xl font-light leading-relaxed max-w-2xl border-l border-crimson/30 pl-8">
                Lal Divane&apos;s visual language is built on the contrast between an obsidian abyss and a raw, digital crimson. Every asset is designed to evoke a sense of high-end tragedy and synthetic elegance.
              </p>
            </section>

            {/* Typography Section */}
            <section className="space-y-12">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-crimson">Typography</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {FONTS.map(font => (
                  <div key={font.name} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-2">{font.type}</h4>
                      <p className={`text-4xl sm:text-5xl font-black tracking-tighter text-foreground ${font.name.toLowerCase() === 'syne' ? 'font-display' : 'font-sans'}`}>
                        {font.name}
                      </p>
                    </div>
                    <p className="text-sm text-muted/80 leading-relaxed">{font.description}</p>
                    <a 
                      href={`https://fonts.google.com/specimen/${font.name}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-crimson hover:text-foreground transition-colors"
                    >
                      Google Fonts Link <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Color Palette */}
            <section className="space-y-12">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-crimson">Digital Colors</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {COLORS.map(color => (
                  <div key={color.name} className="space-y-4">
                    <div 
                      className="aspect-square rounded-2xl border border-white/10 shadow-xl overflow-hidden" 
                      style={{ background: color.hex, opacity: color.opacity ? 0.65 : 1 }}
                    />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-foreground">{color.name}</p>
                      <p className="text-[10px] font-mono text-muted">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Icons Section */}
            <section className="space-y-12">
                <div className="flex items-center justify-between">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-crimson">Icons & Assets</h2>
                    <span className="text-[8px] font-black uppercase tracking-widest text-muted">Crimson Normalized</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                    {Object.entries(PLATFORM_ICONS).map(([name, url]) => (
                        <div key={name} className="aspect-square p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group hover:border-crimson/50 transition-all duration-500">
                            <div className="relative w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
                                <Image src={url} alt={name} fill className="object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-16">
            {/* Quick Links */}
            <section className="space-y-8 p-8 rounded-3xl bg-white/[0.02] border border-white/5 sticky top-32">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-crimson">Downloads</h2>
                <div className="space-y-4">
                    <a href="/hero-lal.jpg" download className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-crimson/40 hover:bg-crimson/5 transition-all group">
                        <span className="text-[10px] font-black uppercase tracking-widest">Master Visual 01</span>
                        <span className="material-symbols-outlined text-muted group-hover:text-crimson">download</span>
                    </a>
                    <a href="/assets/Crimson Frequencies.png" download className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-crimson/40 hover:bg-crimson/5 transition-all group">
                        <span className="text-[10px] font-black uppercase tracking-widest">Sana Yanık Cover</span>
                        <span className="material-symbols-outlined text-muted group-hover:text-crimson">download</span>
                    </a>
                    <div className="pt-4">
                        <p className="text-[9px] text-muted uppercase tracking-widest font-black leading-relaxed">
                            All visual assets are © 2026 Lal Divane. 
                            Unauthorized manipulation is prohibited.
                        </p>
                    </div>
                </div>

                <div className="pt-8">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-crimson mb-6">Contact</h2>
                    <p className="text-xs text-muted/60 leading-relaxed mb-4">For hi-res RAW files and licensing inquiries:</p>
                    <a href="mailto:press@laldivane.com" className="text-sm font-black text-foreground hover:text-crimson transition-colors uppercase tracking-widest block border-b border-white/10 pb-2">
                        press@laldivane.com
                    </a>
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
