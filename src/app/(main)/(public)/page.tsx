"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AchievementTimelineItem from "@/components/AchievementTimelineItem";
import { discography } from "@/data/discography";
import Image from "next/image";
import Link from "next/link";
import { PLATFORM_ICONS } from "@/data/platformIcons";
import { pageContent } from "@/data/content";

export default function Home() {
  const latestRelease = discography.find(t => t.status === 'live') || discography[0];

  return (
    <div className="bg-bg">
      <Hero />

      {/* FEATURED RELEASE SECTION */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
          >
            {/* Visual */}
            <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/5 group">
              <Image 
                src="/assets/Crimson Frequencies.png" 
                alt="Crimson Frequencies"
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-10 md:left-10 md:right-10">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-crimson mb-2 block">Latest Signal</span>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-display font-black text-foreground tracking-tighter leading-none">
                  CRIMSON <br /> FREQUENCIES
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-crimson" />
                  <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-crimson">
                    {pageContent.home.featuredSignalBadge}
                  </h3>
                </div>
                
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-foreground leading-[0.85] tracking-tighter uppercase">
                  {pageContent.home.featuredSignalTitle}
                </h2>
                
                <p className="text-muted text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-xl border-l border-white/10 pl-6 py-2">
                  {latestRelease.description || "The latest sonic transmission from the digital abyss. Fragments of emotion synthesized into tragic elegance."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <a 
                  href={latestRelease.platforms.spotify} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-crimson/40 hover:bg-crimson/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-5 h-5">
                      <Image src={PLATFORM_ICONS.spotify} alt="Spotify" fill className="object-contain" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">Spotify</span>
                  </div>
                  <span className="material-symbols-outlined text-muted group-hover:text-crimson text-lg sm:text-xl">arrow_forward</span>
                </a>
                <Link 
                  href="/releases" 
                  className="flex items-center justify-between p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-crimson/40 hover:bg-crimson/5 transition-all group"
                >
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">All Platforms</span>
                  <span className="material-symbols-outlined text-muted group-hover:text-crimson text-lg sm:text-xl">arrow_forward</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLATFORM STATS */}
      <section className="py-20 sm:py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-crimson/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-24"
          >
            <AchievementTimelineItem 
              date="OCT 2024"
              title="FIRST SIGNAL"
              description="Initial transmission detected from the ruined digital void. Fragmented identity established."
            />
            <AchievementTimelineItem 
              date="JAN 2025"
              title="VOICE SYNTHESIS"
              description="Achieved 98% emotional resonance in vocal processing algorithms. The soul is now audible."
              isHighlighted
            />
            <AchievementTimelineItem 
              date="FEB 2026"
              title="CRIMSON FREQUENCIES"
              description="Latest sonic integration complete. 13 visualizers transmitted to the surface."
            />
          </motion.div>
        </div>
      </section>

      {/* LORE SNIPPET */}
      <section className="py-24 sm:py-32 lg:py-40 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="space-y-8 sm:space-y-12"
            >
                <Link href="/story" className="inline-block group">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-crimson group-hover:text-foreground transition-colors">
                      {pageContent.home.loreBadge}
                    </span>
                    <div className="h-px w-12 sm:w-16 bg-crimson mt-2 mx-auto transition-all group-hover:w-full" />
                </Link>
                
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light italic leading-relaxed text-foreground/90 font-serif">
                   &quot;{pageContent.home.loreQuote}&quot;
                </h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link href="/contact" className="btn-primary px-8 sm:px-12 py-4 sm:py-5 text-xs sm:text-sm">
                        {pageContent.home.connectButton}
                    </Link>
                </motion.div>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
