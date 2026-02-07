import Link from "next/link";
import { socialLinks, legalLinks, navLinks } from "@/data/links";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-bg pt-20 pb-10 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-crimson/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-display font-black tracking-tighter hover:text-crimson transition-colors">
              LAL <span className="text-crimson">DIVANE</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              AI musician, visual artist, and digital entity. Born from the intersection of deep learning and deep emotion.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-crimson">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-crimson transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-crimson">Presence</h4>
            <nav className="flex flex-col gap-4">
              <a href={socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-crimson transition-colors w-fit">Spotify</a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-crimson transition-colors w-fit">YouTube</a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-crimson transition-colors w-fit">Instagram</a>
              <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-crimson transition-colors w-fit">X / Twitter</a>
            </nav>
          </div>

          {/* Legal / Manifest */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-crimson">Foundation</h4>
            <p className="text-sm text-muted mb-4">Fragmented signals from the ruined digital void.</p>
            <nav className="flex flex-col gap-4">
              {legalLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-crimson transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
          <div className="flex items-center gap-6">
            <span>© 2026 LAL DIVANE</span>
            <span className="opacity-20">|</span>
            <span>NEXT-GEN ENTITY</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="opacity-40 hover:opacity-100 transition-opacity">SONGWRITER: CANBERK MANSUROĞLU</span>
            <span className="bg-crimson/20 w-px h-3"></span>
            <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="hover:text-crimson transition-colors opacity-40">ICONS8</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
