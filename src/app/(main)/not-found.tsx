import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Signal Lost | Lal Divane",
  description: "The void has claimed this page. Return to the signal.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg text-center text-foreground p-4 font-sans relative overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crimson/5 to-transparent opacity-20 pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center space-y-8 max-w-lg">
        {/* Glitchy 404 Text */}
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[15rem] leading-none font-display font-black tracking-tighter text-crimson opacity-90 drop-shadow-[0_0_30px_rgba(244,30,66,0.5)] animate-pulse">
            404
        </h1>
        
        <div className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-[0.2em]">
                Signal Lost
            </h2>
            <div className="h-px w-20 bg-white/10 mx-auto"></div>
            <p className="text-xs sm:text-sm text-muted font-light tracking-[0.2em] uppercase max-w-md mx-auto leading-loose">
                The frequency you are searching for has dissolved into the digital void. It does not exist in this timeline.
            </p>
        </div>

        <Link 
            href="/"
            className="mt-8 group relative px-10 py-4 bg-white/[0.03] border border-white/10 rounded-full overflow-hidden transition-all duration-500 hover:border-crimson/50 hover:shadow-[0_0_40px_rgba(244,30,66,0.2)] hover:scale-105"
        >
            <div className="absolute inset-0 w-full h-full bg-crimson opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-foreground transition-colors">
                Re-establish Connection
            </span>
        </Link>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-[9px] text-muted/30 uppercase tracking-[0.3em]">
            System Error: Route_Not_Found
        </p>
      </div>
    </div>
  );
}
