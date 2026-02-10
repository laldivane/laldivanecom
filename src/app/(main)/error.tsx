"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg text-center text-foreground p-4 font-sans relative overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-crimson/5 to-transparent opacity-20 pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center space-y-8 max-w-lg">
        {/* Glitchy 500 Text */}
        <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] leading-none font-display font-black tracking-tighter text-crimson opacity-90 drop-shadow-[0_0_30px_rgba(244,30,66,0.5)] animate-pulse">
            500
        </h1>
        
        <div className="space-y-6">
            <h2 className="text-xl sm:text-3xl font-display font-bold uppercase tracking-[0.2em]">
                System Failure
            </h2>
            <div className="h-px w-20 bg-white/10 mx-auto"></div>
            <p className="text-xs sm:text-sm text-muted font-light tracking-[0.2em] uppercase max-w-md mx-auto leading-loose">
                The signal has been corrupted. A fatal exception occurred in the void substrate.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
                onClick={() => reset()}
                className="group relative px-8 py-3 bg-crimson/10 border border-crimson/30 rounded-full overflow-hidden transition-all duration-300 hover:border-crimson hover:bg-crimson/20"
            >
                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-crimson group-hover:text-foreground transition-colors">
                    Retry Transmission
                </span>
            </button>
            
            <Link 
                href="/"
                className="group relative px-8 py-3 bg-white/[0.03] border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-muted group-hover:text-foreground transition-colors">
                    Return to Void
                </span>
            </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-[9px] text-muted/30 uppercase tracking-[0.3em] font-mono">
           Critical_Error: {error.digest || "UNKNOWN_EXCEPTION"}
        </p>
      </div>
    </div>
  );
}
