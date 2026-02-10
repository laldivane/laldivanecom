import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

export default async function VideosPage() {
  // Fetch tracks that have a visualizerId
  const query = `*[_type == "track" && defined(visualizerId) && visualizerId != ""] | order(releaseDate desc) {
     title,
     visualizerId,
     releaseDate
  }`;
  
  const videos = await client.fetch(query);

  return (
    <div className="min-h-screen bg-bg text-foreground pt-24 sm:pt-32 pb-16 sm:pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-3 sm:mb-4 font-display">
          VIDEOS
        </h1>
        <p className="text-base sm:text-xl text-white/50 max-w-2xl font-light">
           Visual signals and broadcast archives.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((video: any, index: number) => {
                const thumbnailUrl = `https://img.youtube.com/vi/${video.visualizerId}/maxresdefault.jpg`;
                const videoUrl = `https://www.youtube.com/watch?v=${video.visualizerId}`;
                const cleanTitle = video.title.replace("Lal Divane - ", "").replace(" (Official Visualizer)", "");

                return (
                    <a 
                        key={video.visualizerId}
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        {/* Thumbnail Card */}
                        <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 border border-white/5 bg-bg-elevated group-hover:border-crimson/50 transition-all duration-500 shadow-lg">
                            <Image 
                                src={thumbnailUrl} 
                                alt={cleanTitle}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                            />
                            
                            {/* Overlay Play Button */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-crimson group-hover:scale-110 transition-all duration-300">
                                     <span className="material-symbols-outlined text-white text-2xl sm:text-3xl">play_arrow</span>
                                </div>
                            </div>

                            {/* Corner Badge */}
                            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/10">
                                Visualizer
                            </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-col">
                            <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-crimson transition-colors leading-tight mb-1">
                                {cleanTitle}
                            </h3>
                            <span className="text-[10px] sm:text-xs text-white/40 font-mono">
                                BROADCAST #{videos.length - index}
                            </span>
                        </div>
                    </a>
                );
            })}
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="fixed bottom-0 left-0 w-full h-[300px] sm:h-[500px] bg-gradient-to-t from-crimson/5 to-transparent pointer-events-none -z-10"></div>
    </div>
  );
}
