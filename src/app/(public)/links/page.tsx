import Image from "next/image";
import { socialLinks } from "@/data/links";
import { PLATFORM_ICONS } from "@/data/platformIcons";

export default function Links() {
  return (
    <div className="min-h-screen bg-bg pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 flex flex-col gap-3 sm:gap-4">
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full mb-4 border-2 border-crimson overflow-hidden relative">
            <Image src="/icon.png" alt="Lal Divane" fill className="object-cover" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-display">LAL DIVANE</h1>
          <p className="text-white/50 text-xs sm:text-sm">Digital Artist & Musician</p>
        </div>

        <LinkButton href={socialLinks.spotify} label="Spotify" icon={PLATFORM_ICONS.spotify} />
        <LinkButton href={socialLinks.appleMusic} label="Apple Music" icon={PLATFORM_ICONS.appleMusic} />
        <LinkButton href={socialLinks.youtube} label="YouTube" icon={PLATFORM_ICONS.youtube} />
        <LinkButton href={socialLinks.instagram} label="Instagram" icon={PLATFORM_ICONS.instagram} />
        <LinkButton href={socialLinks.x} label="Twitter / X" icon={PLATFORM_ICONS.x} />
        <LinkButton href={socialLinks.tiktok} label="TikTok" icon={PLATFORM_ICONS.tiktok} />
        <LinkButton href={socialLinks.soundcloud} label="SoundCloud" icon={PLATFORM_ICONS.soundcloud} />
        
      </div>
    </div>
  )
}

function LinkButton({ href, label, icon }: { href: string; label: string; icon: string }) {
    return (
        <a 
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 bg-white/5 hover:bg-crimson hover:text-white border border-white/10 rounded-xl transition-all group"
        >
            <span className="font-bold tracking-wide text-sm sm:text-base">{label}</span>
            <div className="relative w-5 h-5 group-hover:scale-110 transition-transform">
                <Image src={icon} alt={label} fill className="object-contain brightness-0 invert" />
            </div>
        </a>
    )
}
