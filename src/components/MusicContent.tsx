"use client";

import { motion } from "framer-motion";
import { discography } from "@/data/discography";
import Image from "next/image";
import CoverArtTimelineItem from "@/components/CoverArtTimelineItem";
import { PLATFORM_ICONS } from "@/data/platformIcons";
import { socialLinks } from "@/data/links";

const COVER_ARTS = [
    { title: "SANA YANIK", url: "https://i.pinimg.com/736x/90/6d/53/906d534667e68bcfc090cfadac16ca40.jpg", date: "FEB 2026" },
    { title: "DUYUYOR MUSUN?", url: "https://i.pinimg.com/736x/8c/76/db/8c76dba7e3c6fa001d1b9872b0ef83a8.jpg", date: "JAN 2026" },
    { title: "OKYANUSLAR YUTTU BENİ", url: "https://i.pinimg.com/736x/0b/ad/c9/0badc9abd52dfc19fa3d096c496e5816.jpg", date: "DEC 2025" },
    { title: "HAPİSHANE", url: "https://i.pinimg.com/736x/72/74/c1/7274c1e55729a6f6da67dd608c68bc0d.jpg", date: "NOV 2025" },
    { title: "CEHENNEM", url: "https://i.pinimg.com/736x/21/93/14/219314d120d1e395d33d9e563bdfee6d.jpg", date: "OCT 2025" },
];

export default function MusicContent() {
  return (
    <div className="min-h-screen bg-bg pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-12 sm:mb-20 space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tighter uppercase">MUSIC</h1>
          <p className="text-muted tracking-[0.4em] font-light uppercase text-[10px] sm:text-xs">Sonic signals from the void</p>
        </header>

        {/* Existing Releases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-32">
          {discography.filter(t => t.status === 'live').map((release, idx) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/5 mb-6">
                <Image 
                  src={`https://img.youtube.com/vi/${release.visualizerId}/maxresdefault.jpg`} 
                  alt={release.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="flex gap-4">
                    {release.platforms.spotify && (
                      <a href={release.platforms.spotify} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-bg flex items-center justify-center hover:bg-crimson hover:text-white transition-all group/icon">
                        <div className="relative w-6 h-6 group-hover/icon:scale-110 transition-transform">
                          <Image src={PLATFORM_ICONS.spotify} alt="Spotify" fill className="object-contain" />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-black tracking-tighter text-foreground group-hover:text-crimson transition-colors uppercase leading-none mb-2">{release.title}</h3>
              <p className="text-[10px] sm:text-xs text-muted font-black uppercase tracking-[0.2em]">{release.type} • {release.releaseDate}</p>
            </motion.div>
          ))}
        </div>
      </div>

        {/* YOUTUBE MUSIC CARD */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.a
            href={socialLinks.youtubeMusic}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col sm:flex-row sm:items-center gap-6 p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-crimson/40 hover:bg-crimson/5 transition-all duration-500 mb-20 sm:mb-32 max-w-3xl"
          >
            {/* YouTube Music Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-crimson to-black flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(176,0,32,0.4)] transition-all duration-500 relative overflow-hidden">
                <div className="relative w-8 h-8">
                  <Image src={PLATFORM_ICONS.youtubeMusic} alt="YouTube Music" fill className="object-contain" />
                </div>
            </div>

            {/* Text */}
            <div className="flex-grow">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-foreground tracking-tighter group-hover:text-crimson transition-colors uppercase">
                Official YouTube Music
              </h3>
              <p className="text-[10px] sm:text-xs text-muted tracking-[0.3em] uppercase font-light">
                Listen to the full catalog on the official channel
              </p>
            </div>

            {/* Arrow */}
            <span className="material-symbols-outlined text-muted group-hover:text-crimson group-hover:translate-x-2 transition-all text-2xl hidden sm:block">
              arrow_forward
            </span>
          </motion.a>
        </div>

       {/* ART COVERS TIMELINE */}
      <section className="relative border-t border-white/5 py-24 sm:py-32">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

           <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
                <header>
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-crimson mb-4">Visual Archives</h2>
                    <h3 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tighter text-foreground uppercase leading-[0.85]">COVER ARTS</h3>
                </header>
           </div>

           <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="relative border-l border-white/5">
                    {COVER_ARTS.map((art, idx) => (
                        <CoverArtTimelineItem 
                            key={idx}
                            title={art.title}
                            imageUrl={art.url}
                            date={art.date}
                            isLast={idx === COVER_ARTS.length - 1}
                        />
                    ))}
                </div>
           </div>
      </section>
    </div>
  );
}
