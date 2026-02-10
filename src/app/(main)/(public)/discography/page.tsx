"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { discography, getStats, Track } from "@/data/discography";

const STATUS_LABELS: Record<Track["status"], { label: string; color: string }> = {
  draft: { label: "Taslak", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
  distributing: { label: "Dağıtımda", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  live: { label: "Yayında", color: "bg-green-500/20 text-green-400 border-green-500/30" },
};

export default function DiscographyPage() {
  const [filter, setFilter] = useState<"all" | Track["status"]>("all");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const stats = getStats();

  const filteredTracks = useMemo(() => {
    let tracks = [...discography];
    
    // Filter
    if (filter !== "all") {
      tracks = tracks.filter((t) => t.status === filter);
    }

    // Sort
    if (sortBy === "date") {
      tracks.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    } else {
      tracks.sort((a, b) => a.title.localeCompare(b.title, "tr"));
    }

    return tracks;
  }, [filter, sortBy]);

  return (
    <div className="min-h-screen bg-bg pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <header className="mb-12 sm:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black tracking-tighter leading-[0.8]">
                ARCHIVE
              </h1>
              <p className="text-muted tracking-[0.4em] font-light uppercase text-[10px] sm:text-xs">
                The complete sonic and visual catalog
              </p>
            </div>
            
            {/* Stats Dashboard */}
            <div className="flex items-center gap-8 sm:gap-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-2xl font-display font-black text-foreground">{stats.total}</p>
                <p className="text-[8px] font-black uppercase tracking-widest text-muted">Signals</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-display font-black text-green-500">{stats.live}</p>
                <p className="text-[8px] font-black uppercase tracking-widest text-muted">Active</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-display font-black text-crimson">{stats.distributing + stats.draft}</p>
                <p className="text-[8px] font-black uppercase tracking-widest text-muted">Pending</p>
              </div>
            </div>
          </div>
        </header>

        {/* Controls Container */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          {/* Status Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {(["all", "live", "distributing", "draft"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                  filter === status
                    ? "bg-crimson text-white border-crimson shadow-[0_0_20px_rgba(244,30,66,0.3)]"
                    : "bg-white/5 text-muted border-white/5 hover:border-white/20 hover:text-foreground"
                }`}
              >
                {status === "all" ? "All Transmissions" : STATUS_LABELS[status].label}
              </button>
            ))}
          </div>

          {/* Sort & Display Controls */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "date" | "title")}
                className="appearance-none bg-white/5 border border-white/5 rounded-xl pl-4 pr-10 py-3 text-[10px] font-black uppercase tracking-widest text-muted focus:outline-none focus:border-crimson/50 focus:text-foreground transition-all cursor-pointer"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none group-hover:text-crimson transition-colors">expand_more</span>
            </div>

            <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-500 ${viewMode === "grid" ? "bg-crimson text-white shadow-lg" : "text-muted hover:text-foreground"}`}
              >
                <span className="material-symbols-outlined text-lg">grid_view</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-500 ${viewMode === "list" ? "bg-crimson text-white shadow-lg" : "text-muted hover:text-foreground"}`}
              >
                <span className="material-symbols-outlined text-lg">view_list</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {filteredTracks.map((track, idx) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
              >
                <Link href={`/discography/${track.id}`} className="group block">
                  <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden border border-white/5 mb-3 group-hover:border-crimson/50 transition-all">
                    <Image
                      src={`https://img.youtube.com/vi/${track.visualizerId}/maxresdefault.jpg`}
                      alt={track.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Status Badge */}
                    <div className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold uppercase tracking-wider border ${STATUS_LABELS[track.status].color}`}>
                      {STATUS_LABELS[track.status].label}
                    </div>
                    {/* Visualizer Icon */}
                    {track.visualizerId && (
                      <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xs">play_arrow</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-crimson transition-colors truncate">
                    {track.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted">
                    {new Date(track.releaseDate).toLocaleDateString("tr-TR", { year: "numeric", month: "short", day: "numeric" })}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-2">
            {filteredTracks.map((track, idx) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.03 }}
              >
                <Link
                  href={`/discography/${track.id}`}
                  className="group flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-crimson/30 hover:bg-white/[0.04] transition-all"
                >
                  {/* Cover */}
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={`https://img.youtube.com/vi/${track.visualizerId}/maxresdefault.jpg`}
                      alt={track.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-grow min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-crimson transition-colors truncate">
                      {track.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted truncate">
                      {track.catalogId} • {new Date(track.releaseDate).toLocaleDateString("tr-TR")}
                    </p>
                  </div>

                  {/* Status */}
                  <div className={`hidden sm:block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${STATUS_LABELS[track.status].color}`}>
                    {STATUS_LABELS[track.status].label}
                  </div>

                  {/* Platforms Count */}
                  <div className="text-xs text-muted hidden md:block">
                    {Object.keys(track.platforms).length} platform
                  </div>

                  {/* Arrow */}
                  <span className="material-symbols-outlined text-muted group-hover:text-crimson transition-colors">
                    chevron_right
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredTracks.length === 0 && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-4xl text-muted mb-4">library_music</span>
            <p className="text-muted">Bu filtreye uygun şarkı bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
}
