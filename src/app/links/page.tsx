"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/links";
import { PLATFORM_ICONS, PlatformKey } from "@/data/platformIcons";

// Link categories for better organization
const MUSIC_PLATFORMS: { key: PlatformKey; label: string }[] = [
  { key: "spotify", label: "Spotify" },
  { key: "appleMusic", label: "Apple Music" },
  { key: "youtubeMusic", label: "YouTube Music" },
  { key: "deezer", label: "Deezer" },
  { key: "amazonMusic", label: "Amazon Music" },
  { key: "tidal", label: "Tidal" },
  { key: "soundcloud", label: "SoundCloud" },
  { key: "audiomack", label: "Audiomack" },
  { key: "qobuz", label: "Qobuz" },
  { key: "anghami", label: "Anghami" },
  { key: "boomplay", label: "Boomplay" },
];

const SOCIAL_PLATFORMS: { key: PlatformKey; label: string }[] = [
  { key: "youtube", label: "YouTube" },
  { key: "instagram", label: "Instagram" },
  { key: "x", label: "Twitter / X" },
  { key: "tiktok", label: "TikTok" },
  { key: "genius", label: "Genius Lyrics" },
];

function LinkButton({ platform, href, label, index }: { platform: PlatformKey; href: string; label: string; index: number }) {
  const iconSrc = PLATFORM_ICONS[platform];
  if (!iconSrc) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-crimson/10 hover:border-crimson/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(244,30,66,0.15)]"
    >
      {/* Icon */}
      <div className="absolute left-5 w-6 h-6 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
        <Image src={iconSrc} alt={label} fill className="object-contain" />
      </div>
      
      {/* Label */}
      <span className="font-display font-bold text-sm tracking-wide text-foreground/90 group-hover:text-foreground transition-colors">
        {label}
      </span>
      
      {/* Arrow indicator */}
      <span className="absolute right-5 material-symbols-outlined text-muted/50 group-hover:text-crimson group-hover:translate-x-1 transition-all text-lg">
        arrow_forward
      </span>
    </motion.a>
  );
}

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-bg relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-crimson/3 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-lg mx-auto px-4 py-12 sm:py-16">
        
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-10"
        >
          {/* Avatar with glow ring */}
          <div className="relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-br from-crimson via-crimson/50 to-transparent rounded-full blur-sm opacity-60" />
            <div className="relative w-28 h-28 rounded-full border-2 border-crimson/80 overflow-hidden bg-bg">
              <Image 
                src="/hero-lal.jpg" 
                alt="Lal Divane" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            {/* Verified badge */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-crimson rounded-full flex items-center justify-center border-2 border-bg">
              <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
            </div>
          </div>
          
          {/* Name & Bio */}
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-foreground mb-2">
            LAL <span className="text-crimson">DIVANE</span>
          </h1>
          <p className="text-muted text-sm font-light text-center max-w-xs leading-relaxed">
            AI Artist & Digital Entity • Tragic Dark-Pop from the Void
          </p>
          
          {/* Stats row */}
          <div className="flex items-center gap-6 mt-5">
            <div className="text-center">
              <p className="text-xl font-black text-foreground">13</p>
              <p className="text-[10px] uppercase tracking-widest text-muted">Tracks</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-xl font-black text-foreground">16+</p>
              <p className="text-[10px] uppercase tracking-widest text-muted">Platforms</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-xl font-black text-crimson">∞</p>
              <p className="text-[10px] uppercase tracking-widest text-muted">Signals</p>
            </div>
          </div>
        </motion.div>
        
        {/* Music Platforms Section */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="material-symbols-outlined text-crimson text-lg">headphones</span>
            <h2 className="text-[11px] font-black uppercase tracking-[0.25em] text-muted">Listen Now</h2>
          </motion.div>
          
          <div className="flex flex-col gap-3">
            {MUSIC_PLATFORMS.map((platform, idx) => {
              const href = socialLinks[platform.key as keyof typeof socialLinks];
              if (!href) return null;
              return <LinkButton key={platform.key} platform={platform.key} href={href} label={platform.label} index={idx} />;
            })}
          </div>
        </div>
        
        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        
        {/* Social Platforms Section */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="material-symbols-outlined text-crimson text-lg">public</span>
            <h2 className="text-[11px] font-black uppercase tracking-[0.25em] text-muted">Connect</h2>
          </motion.div>
          
          <div className="flex flex-col gap-3">
            {SOCIAL_PLATFORMS.map((platform, idx) => {
              const href = socialLinks[platform.key as keyof typeof socialLinks];
              if (!href) return null;
              return <LinkButton key={platform.key} platform={platform.key} href={href} label={platform.label} index={idx + MUSIC_PLATFORMS.length} />;
            })}
          </div>
        </div>
        
        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted/50">
            © 2026 LAL DIVANE
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
