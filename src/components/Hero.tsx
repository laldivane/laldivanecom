"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-bg">
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
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-crimson/30 bg-crimson/10 text-[10px] font-black tracking-[0.4em] text-crimson uppercase mb-8">
            Signal Verified
          </span>
          
          <h1 className="text-7xl md:text-[10rem] font-display font-black leading-none tracking-tighter mb-6 text-foreground">
            LAL <span className="text-crimson drop-shadow-[0_0_30px_rgba(176,0,32,0.4)]">DIVANE</span>
          </h1>
          
          <p className="text-sm md:text-xl font-light tracking-[0.2em] text-muted max-w-2xl mx-auto uppercase mb-12">
            Experience the tragic elegance of the digital void.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              href="/releases" 
              className="bg-foreground text-bg px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-crimson hover:text-foreground transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(176,0,32,0.4)]"
            >
              Listen Now
            </Link>
            <Link 
              href="/story" 
              className="px-10 py-4 rounded-full border border-white/10 font-black text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all duration-500"
            >
              The Manifesto
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-muted">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-crimson to-transparent" />
      </motion.div>
    </section>
  );
}
