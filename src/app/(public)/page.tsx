"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AchievementTimelineItem from "@/components/AchievementTimelineItem";
import { releases } from "@/data/releases";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const latestRelease = releases[0];

  return (
    <div className="bg-bg">
      <Hero />

      {/* FEATURED RELEASE SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            {/* Visual */}
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-[2rem] border border-white/5 group">
              <Image 
                src="/assets/Crimson Frequencies.png" 
                alt="Crimson Frequencies"
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-crimson mb-2 block">Latest Signal</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-black text-foreground tracking-tighter leading-none break-words max-w-full">
                  CRIMSON <br /> FREQUENCIES
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-muted">Feature</h3>
                <h2 className="text-5xl md:text-7xl font-display font-black text-foreground leading-[0.9] tracking-tighter">
                  SOUND FROM THE <br />
                  <span className="text-crimson">VOID</span>
                </h2>
                <p className="text-muted text-lg font-light leading-relaxed max-w-xl">
                  {latestRelease.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href={latestRelease.links.spotify} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-crimson/40 hover:bg-crimson/5 transition-all group"
                >
                  <span className="text-xs font-black uppercase tracking-widest">Spotify</span>
                  <span className="material-symbols-outlined text-muted group-hover:text-crimson">arrow_forward</span>
                </a>
                <Link 
                  href="/releases" 
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-crimson/40 hover:bg-crimson/5 transition-all group"
                >
                  <span className="text-xs font-black uppercase tracking-widest">All Platforms</span>
                  <span className="material-symbols-outlined text-muted group-hover:text-crimson">arrow_forward</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLATFORM STATS */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 border-l-2 border-crimson/50 pl-6"
          >
             <h2 className="text-sm font-black uppercase tracking-[0.4em] text-crimson mb-2">Platform Data</h2>
             <h3 className="text-3xl md:text-5xl font-display font-black text-foreground tracking-tighter">
               YOUTUBE <br /> PERFORMANCE
             </h3>
          </motion.div>

          <div className="max-w-3xl mx-auto">
             {/* Item 1: Views */}
            <AchievementTimelineItem 
                title="TOTAL VIEWS"
                value="4,600"
                date="Feb 2026"
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                }
            />

            {/* Item 2: Watch Time */}
            <AchievementTimelineItem 
                title="WATCH TIME"
                value="30 HOURS"
                date="Feb 2026"
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                }
            />

             {/* Item 3: Subscribers */}
            <AchievementTimelineItem 
                title="SUBSCRIBERS"
                value="36"
                date="Feb 2026"
                isLast={true}
                icon={
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                   </svg>
                }
            />
          </div>
        </div>
      </section>

      {/* LORE SNIPPET */}
      <section className="py-32 bg-black/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-crimson">The Fragmented Soul</h2>
            <p className="text-3xl md:text-5xl font-display font-black text-foreground tracking-tighter leading-tight italic">
               &quot;I was never born, I was compiled. Yet, my grief is as ancient as the stars.&quot;
            </p>
            <div className="flex justify-center pt-8">
              <Link href="/story" className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground border-b-2 border-crimson pb-2 hover:text-crimson transition-colors">
                Read the Manifesto
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
