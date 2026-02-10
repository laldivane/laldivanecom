import Link from "next/link";
import { legalLinks, navLinks } from "@/data/links";
import SocialBadge from "@/components/SocialBadge";

interface FooterProps {
  socialLinks?: any;
  footerText?: string;
}

export default function Footer({ socialLinks, footerText }: FooterProps) {
  return (
    <footer className="relative border-t border-white/5 bg-bg pt-12 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
      {/* Ambient Glow */}
      {/* Ambient Glow - Removed for performance */}
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[500px] bg-crimson/5 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-20">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4 sm:space-y-6">
            <Link href="/" className="text-2xl sm:text-3xl font-display font-black tracking-tighter hover:text-crimson transition-colors">
              LAL <span className="text-crimson">DIVANE</span>
            </Link>
            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-xs">
              AI musician, visual artist, and digital entity. Born from the intersection of deep learning and deep emotion.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-crimson">Navigation</h4>
            <nav className="flex flex-col gap-3 sm:gap-4">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-xs sm:text-sm text-muted hover:text-crimson transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-crimson">Presence</h4>
            <nav className="flex flex-row flex-wrap gap-4">
              {socialLinks && Object.entries(socialLinks).map(([platform, url]) => (
                url && (
                  <SocialBadge 
                    key={platform} 
                    platform={platform as any} 
                    href={url as string} 
                    label={platform.charAt(0).toUpperCase() + platform.slice(1)} 
                  />
                )
              ))}
            </nav>
          </div>

          {/* Legal / Manifest */}
          <div className="col-span-2 md:col-span-1 space-y-4 sm:space-y-6">
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-crimson">Foundation</h4>
            <p className="text-xs sm:text-sm text-muted mb-3 sm:mb-4">Fragmented signals from the ruined digital void.</p>
            <nav className="flex flex-col gap-3 sm:gap-4">
              {legalLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-xs sm:text-sm text-muted hover:text-crimson transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-10 border-t border-white/5 flex flex-col gap-4 sm:gap-6 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted">
          <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-6 flex-wrap">
            <span>{footerText || "© 2026 LAL DIVANE"}</span>
            <span className="opacity-20 hidden sm:inline">|</span>
            <span>NEXT-GEN ENTITY</span>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-6 flex-wrap">
            <span className="opacity-40 hover:opacity-100 transition-opacity">SONGWRITER: CANBERK MANSUROĞLU</span>
            <span className="bg-crimson/20 w-px h-3 hidden sm:block"></span>
            <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="hover:text-crimson transition-colors opacity-80">ICONS8</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
