"use client";

import { motion } from "framer-motion";
import { releases } from "@/data/releases";
import Image from "next/image";
import CoverArtTimelineItem from "@/components/CoverArtTimelineItem";

// Placeholder data since scraping failed. User needs to fill this.
const COVER_ARTS = [
    { title: "SANA YANIK", url: "https://i.pinimg.com/736x/90/6d/53/906d534667e68bcfc090cfadac16ca40.jpg", date: "FEB 2026" },
    { title: "DUYUYOR MUSUN?", url: "https://i.pinimg.com/736x/8c/76/db/8c76dba7e3c6fa001d1b9872b0ef83a8.jpg", date: "JAN 2026" },
    { title: "OKYANUSLAR YUTTU BENİ", url: "https://i.pinimg.com/736x/0b/ad/c9/0badc9abd52dfc19fa3d096c496e5816.jpg", date: "DEC 2025" },
    { title: "HAPİSHANE", url: "https://i.pinimg.com/736x/72/74/c1/7274c1e55729a6f6da67dd608c68bc0d.jpg", date: "NOV 2025" },
    { title: "CEHENNEM", url: "https://i.pinimg.com/736x/21/93/14/219314d120d1e395d33d9e563bdfee6d.jpg", date: "OCT 2025" },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 space-y-4">
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter">MUSIC</h1>
          <p className="text-muted tracking-[0.3em] font-light uppercase text-sm">Sonic signals from the void</p>
        </header>

        {/* Existing Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {releases.map((release, idx) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/5 mb-6">
                <Image 
                  src={release.coverArt} 
                  alt={release.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="flex gap-4">
                    {release.links.spotify && (
                      <a href={release.links.spotify} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-foreground text-bg flex items-center justify-center hover:bg-crimson transition-colors">
                        <span className="material-symbols-outlined">play_arrow</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">{release.title}</h3>
              <p className="text-xs text-muted uppercase tracking-widest mt-1">{release.type} • {release.releaseDate}</p>
            </motion.div>
          ))}
        </div>
      </div>

       {/* ART COVERS TIMELINE */}
      <section className="relative border-t border-white/5 py-32">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

           <div className="max-w-7xl mx-auto px-6 mb-16">
                <header>
                    <h2 className="text-sm font-black uppercase tracking-[0.4em] text-crimson mb-4">Visual Archives</h2>
                    <h3 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-foreground">COVER ARTS</h3>
                </header>
           </div>

           <div className="max-w-5xl mx-auto px-6">
               <div className="relative border-l border-white/5 ml-4 md:ml-0 md:border-none">
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
