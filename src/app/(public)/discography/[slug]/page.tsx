import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { discography, getTrackById, Track } from "@/data/discography";

// Platform icons and labels
import { PLATFORM_ICONS } from "@/data/platformIcons";

const PLATFORMS: Record<keyof Track["platforms"], { label: string; icon: string; color: string }> = {
  spotify: { label: "Spotify", icon: PLATFORM_ICONS.spotify, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  appleMusic: { label: "Apple Music", icon: PLATFORM_ICONS.appleMusic, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  youtubeMusic: { label: "YouTube Music", icon: PLATFORM_ICONS.youtubeMusic, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  youtube: { label: "YouTube", icon: PLATFORM_ICONS.youtube, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  deezer: { label: "Deezer", icon: PLATFORM_ICONS.deezer, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  amazonMusic: { label: "Amazon Music", icon: PLATFORM_ICONS.amazonMusic, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  tidal: { label: "Tidal", icon: PLATFORM_ICONS.tidal, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  soundcloud: { label: "SoundCloud", icon: PLATFORM_ICONS.soundcloud, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  anghami: { label: "Anghami", icon: PLATFORM_ICONS.anghami, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  itunes: { label: "iTunes", icon: PLATFORM_ICONS.itunes, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  pandora: { label: "Pandora", icon: PLATFORM_ICONS.pandora, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  boomplay: { label: "Boomplay", icon: PLATFORM_ICONS.boomplay, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  qobuz: { label: "Qobuz", icon: PLATFORM_ICONS.qobuz, color: "hover:bg-crimson/10 hover:border-crimson/40" },
};

const STATUS_LABELS: Record<Track["status"], { label: string; color: string }> = {
  draft: { label: "Taslak", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
  distributing: { label: "Dağıtımda", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  live: { label: "Yayında", color: "bg-green-500/20 text-green-400 border-green-500/30" },
};

// Generate static params for all tracks
export async function generateStaticParams() {
  return discography.map((track) => ({
    slug: track.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = getTrackById(slug);
  if (!track) return { title: "Not Found" };
  
  return {
    title: `${track.title} - Lal Divane`,
    description: `Listen to ${track.title} by Lal Divane on all platforms.`,
  };
}

export default async function TrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = getTrackById(slug);

  if (!track) {
    notFound();
  }

  const platformEntries = Object.entries(track.platforms).filter(([, url]) => url) as [keyof Track["platforms"], string][];

  return (
    <div className="min-h-screen bg-bg pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <div className="mb-12 sm:mb-16">
          <Link
            href="/discography"
            className="group inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-muted hover:text-crimson transition-all"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-crimson/40 group-hover:bg-crimson/5 transition-all">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </div>
            Back to Archive
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 sm:mb-32">
          
          {/* Cover Art */}
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
            <Image
              src={`https://img.youtube.com/vi/${track.visualizerId}/maxresdefault.jpg`}
              alt={track.title}
              fill
              priority
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-60" />
            {/* Status Badge */}
            <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-md ${STATUS_LABELS[track.status].color}`}>
              {STATUS_LABELS[track.status].label}
            </div>
          </div>

          {/* Track Info */}
          <div className="flex flex-col justify-center space-y-10 sm:space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-crimson" />
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-crimson">
                  {track.type === "single" ? "Original Signal" : track.type === "album" ? "Full Integration" : "EP Signal"}
                </p>
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-foreground leading-[0.85] uppercase mb-6">
                {track.title}
              </h1>
              <p className="text-base sm:text-lg text-muted font-light uppercase tracking-widest pl-1">
                Transmitted on {new Date(track.releaseDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Catalog Details Panel */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl space-y-6">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-muted">Catalog Identification</span>
                <span className="text-foreground font-mono bg-white/5 px-3 py-1 rounded-lg">{track.catalogId}</span>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-muted">Entity Status</span>
                <span className={`px-3 py-1 rounded-lg border ${STATUS_LABELS[track.status].color}`}>
                  {STATUS_LABELS[track.status].label}
                </span>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-muted">Network Distribution</span>
                <span className="text-foreground">{platformEntries.length} Active Nodes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Links Section - Redesigned for Breathing Space */}
        <section className="border-t border-white/5 pt-12 sm:pt-16 mb-16 sm:mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-crimson mb-3">Availability</h2>
              <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tighter text-foreground">LISTEN ON</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted font-medium uppercase tracking-widest bg-white/[0.03] px-4 py-2 rounded-full border border-white/5">
              {platformEntries.length} Active Markets
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {Object.entries(PLATFORMS).map(([key, platform]) => {
              const platformKey = key as keyof Track["platforms"];
              const url = track.platforms[platformKey];
              
              if (url) {
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center justify-center gap-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/5 transition-all duration-500 ${platform.color} hover:translate-y-[-4px] hover:shadow-[0_20px_40px_-15px_rgba(176,0,32,0.15)]`}
                  >
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:scale-110">
                      <Image 
                        src={platform.icon} 
                        alt={platform.label} 
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-muted group-hover:text-foreground transition-colors">{platform.label}</span>
                  </a>
                );
              }

              return (
                <div
                  key={key}
                  className="flex flex-col items-center justify-center gap-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.01] border border-white/5 opacity-30 grayscale cursor-default"
                >
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                    <Image 
                      src={platform.icon} 
                      alt={platform.label} 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-muted mb-1">{platform.label}</p>
                    <span className="text-[8px] font-bold uppercase tracking-tighter text-crimson/40">Coming Soon</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Visualizer Section */}
        {track.visualizerId && (
          <section className="border-t border-white/5 pt-8 sm:pt-12">
            <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-crimson mb-6">
              Official Visualizer
            </h2>
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${track.visualizerId}?rel=0`}
                title={`${track.title} - Official Visualizer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
