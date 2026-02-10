import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { discography, getTrackById, Track } from "@/data/discography";
import { getLyrics } from "@/data/lyrics";
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
  audiomack: { label: "Audiomack", icon: PLATFORM_ICONS.audiomack, color: "hover:bg-crimson/10 hover:border-crimson/40" },
  qobuz: { label: "Qobuz", icon: PLATFORM_ICONS.qobuz, color: "hover:bg-crimson/10 hover:border-crimson/40" },
};

const STATUS_LABELS: Record<Track["status"], { label: string; color: string }> = {
  draft: { label: "Taslak", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
  distributing: { label: "Dağıtımda", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  live: { label: "Yayında", color: "bg-green-500/20 text-green-400 border-green-500/30" },
};

export async function generateStaticParams() {
  return discography.map((track) => ({
    slug: track.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = getTrackById(slug);
  if (!track) return { title: "Not Found" };
  
  return {
    title: `${track.title} - Lal Divane`,
    description: `Listen to ${track.title} by Lal Divane on all platforms.`,
    openGraph: {
      title: `${track.title} - Lal Divane`,
      description: `Listen to ${track.title} by Lal Divane`,
      images: [`https://img.youtube.com/vi/${track.visualizerId}/maxresdefault.jpg`],
    },
  };
}

// Get related tracks (same type or nearby release date)
function getRelatedTracks(currentTrack: Track, limit: number = 4): Track[] {
  return discography
    .filter(t => t.id !== currentTrack.id && t.status === "live")
    .sort((a, b) => {
      // Prefer same type, then by date proximity
      const aTypeMatch = a.type === currentTrack.type ? 1 : 0;
      const bTypeMatch = b.type === currentTrack.type ? 1 : 0;
      if (aTypeMatch !== bTypeMatch) return bTypeMatch - aTypeMatch;
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    })
    .slice(0, limit);
}

export default async function TrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = getTrackById(slug);

  if (!track) {
    notFound();
  }

  const platformEntries = Object.entries(track.platforms).filter(([, url]) => url) as [keyof Track["platforms"], string][];
  const lyrics = getLyrics(track.id);
  const relatedTracks = getRelatedTracks(track);

  return (
    <div className="min-h-screen bg-bg pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-crimson/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-crimson/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Link */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/discography"
            className="group inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-muted hover:text-crimson transition-all"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-crimson/40 group-hover:bg-crimson/5 transition-all duration-300 group-hover:scale-110">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </div>
            Back to Archive
          </Link>
        </div>

        {/* Page Header - Track Title */}
        <header className="mb-12 sm:mb-16">
          {(() => {
            const titleLength = track.title.length;
            const fontClass = titleLength < 15 
              ? "text-5xl sm:text-7xl md:text-8xl lg:text-9xl" 
              : titleLength < 25 
                ? "text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
                : titleLength < 35
                  ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
                  : "text-2xl sm:text-4xl md:text-5xl lg:text-6xl";
            
            return (
              <h1 className={`${fontClass} font-display font-black tracking-tighter uppercase leading-[0.85]`}>
                {track.title}
              </h1>
            );
          })()}
          <div className="flex items-center gap-4 mt-4">
            <div className="h-px w-12 bg-crimson" />
            <p className="text-muted tracking-[0.4em] font-light uppercase text-[10px] sm:text-xs">
              {track.type === "single" ? "Single" : track.type === "album" ? "Album" : "EP"} • {new Date(track.releaseDate).getFullYear()}
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 sm:mb-32">
          
          {/* Cover Art with Enhanced Effects */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-crimson/20 to-transparent rounded-[2rem] blur-2xl opacity-50" />
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src={`https://img.youtube.com/vi/${track.visualizerId}/maxresdefault.jpg`}
                alt={track.title}
                fill
                priority
                className="object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
              
              {/* Status Badge */}
              <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-md ${STATUS_LABELS[track.status].color}`}>
                {STATUS_LABELS[track.status].label}
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href={`https://www.youtube.com/watch?v=${track.visualizerId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-crimson/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_60px_rgba(244,30,66,0.5)] hover:scale-110 transition-transform"
                >
                  <span className="material-symbols-outlined text-white text-4xl ml-1">play_arrow</span>
                </a>
              </div>
            </div>
          </div>


          {/* Track Info */}
          <div className="flex flex-col justify-center space-y-8 sm:space-y-10">

            {/* Catalog Details Panel - Enhanced */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl space-y-5 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-muted flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-crimson/60">tag</span>
                  Catalog ID
                </span>
                <span className="text-foreground font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">{track.catalogId}</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-muted flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-crimson/60">calendar_month</span>
                  Release Date
                </span>
                <span className="text-foreground">{new Date(track.releaseDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-muted flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-crimson/60">signal_cellular_alt</span>
                  Status
                </span>
                <span className={`px-3 py-1.5 rounded-lg border ${STATUS_LABELS[track.status].color}`}>
                  {STATUS_LABELS[track.status].label}
                </span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-muted flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-crimson/60">hub</span>
                  Distribution
                </span>
                <span className="text-foreground">{platformEntries.length} Active Nodes</span>
              </div>
            </div>

            {/* Quick Listen Button */}
            {track.platforms.spotify && (
              <a
                href={track.platforms.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-crimson text-white font-black text-xs uppercase tracking-widest hover:bg-crimson/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(244,30,66,0.4)] hover:scale-[1.02]"
              >
                <Image src={PLATFORM_ICONS.spotify} alt="Spotify" width={20} height={20} />
                Listen on Spotify
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            )}
          </div>
        </div>

        {/* Lyrics Section */}
        {lyrics && lyrics.lyrics !== "[Lyrics coming soon...]" && (
          <section className="border-t border-white/5 pt-12 sm:pt-16 mb-16 sm:mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-crimson">lyrics</span>
              <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-muted">Lyrics</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Lyrics Text */}
              <div className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                <pre className="font-sans text-base sm:text-lg text-muted/90 leading-relaxed whitespace-pre-wrap">
                  {lyrics.lyrics}
                </pre>
              </div>
              
              {/* Credits Sidebar */}
              <div className="space-y-6">
                {lyrics.credits?.writtenBy && (
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-crimson mb-3">Written By</h4>
                    {lyrics.credits.writtenBy.map((writer, i) => (
                      <p key={i} className="text-sm text-foreground">{writer}</p>
                    ))}
                  </div>
                )}
                {lyrics.credits?.producedBy && (
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-crimson mb-3">Produced By</h4>
                    {lyrics.credits.producedBy.map((producer, i) => (
                      <p key={i} className="text-sm text-foreground">{producer}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Platform Links Section */}
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
                    className={`group flex flex-col items-center justify-center gap-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/5 transition-all duration-500 ${platform.color} hover:translate-y-[-4px] hover:shadow-[0_20px_40px_-15px_rgba(244,30,66,0.2)]`}
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
          <section className="border-t border-white/5 pt-8 sm:pt-12 mb-16 sm:mb-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-crimson">smart_display</span>
              <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted">
                Official Visualizer
              </h2>
            </div>
            <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
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

        {/* Related Tracks Section */}
        {relatedTracks.length > 0 && (
          <section className="border-t border-white/5 pt-12 sm:pt-16">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <div>
                <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-crimson mb-3">More Signals</h2>
                <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tighter text-foreground">RELATED TRACKS</h3>
              </div>
              <Link
                href="/discography"
                className="text-[10px] font-black uppercase tracking-widest text-muted hover:text-crimson transition-colors flex items-center gap-2"
              >
                View All
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedTracks.map((relatedTrack) => (
                <Link
                  key={relatedTrack.id}
                  href={`/discography/${relatedTrack.id}`}
                  className="group block"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 mb-4 group-hover:border-crimson/40 transition-all duration-500">
                    <Image
                      src={`https://img.youtube.com/vi/${relatedTrack.visualizerId}/maxresdefault.jpg`}
                      alt={relatedTrack.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-2xl">play_circle</span>
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base font-display font-bold text-foreground group-hover:text-crimson transition-colors truncate">
                    {relatedTrack.title}
                  </h4>
                  <p className="text-[10px] text-muted uppercase tracking-widest">
                    {new Date(relatedTrack.releaseDate).getFullYear()}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
