"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { pageContent } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden bg-bg">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-lal.jpg" 
          alt="Lal Divane Signature Visual" 
          fill
          priority
          className="object-cover opacity-60 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/80" />
        <div className="absolute inset-0 bg-crimson/5 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block px-3 sm:px-4 py-1 rounded-full border border-crimson/30 bg-crimson/10 text-[8px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.4em] text-crimson uppercase mb-6 sm:mb-8">
            {pageContent.hero.badge}
          </span>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-black leading-none tracking-tighter mb-4 sm:mb-6 text-foreground">
            {pageContent.hero.titlePrefix} <span className="text-crimson drop-shadow-[0_0_30px_rgba(244,30,66,0.4)]">{pageContent.hero.titleMain}</span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-muted max-w-xl sm:max-w-2xl mx-auto uppercase mb-8 sm:mb-12 px-2">
            {pageContent.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="/releases" 
              className="w-full sm:w-auto bg-foreground text-bg px-8 sm:px-10 py-3 sm:py-4 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-crimson hover:text-foreground transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(244,30,66,0.4)]"
            >
              {pageContent.hero.ctaPrimary}
            </Link>
            <Link 
              href="/story" 
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-white/10 font-black text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-white/5 transition-all duration-500"
            >
              {pageContent.hero.ctaSecondary}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-4"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-muted">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-crimson to-transparent" />
      </motion.div>
    </section>
  );
}
