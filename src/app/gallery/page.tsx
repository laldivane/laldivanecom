"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadAssetsFromCloud } from "@/lib/firebaseDb";
import { assetTypeLabels, profileLabels, renderStars, type AssetItem } from "@/lib/assets";

export default function PublicGalleryPage() {
  const [assets, setAssets] = useState<AssetItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewingAsset, setViewingAsset] = useState<AssetItem | null>(null);
  const [typeFilter, setTypeFilter] = useState<AssetItem["type"] | "all">("all");
  const [profileFilter, setProfileFilter] = useState<AssetItem["profile"] | "all">("all");

  useEffect(() => {
    async function fetchAssets() {
      try {
        const data = await loadAssetsFromCloud();
        setAssets(data.sort((a, b) => b.createdAt - a.createdAt));
      } catch (error) {
        console.error("Error loading gallery:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAssets();
  }, []);

  const filteredAssets = assets.filter((a) => {
    if (typeFilter !== "all" && a.type !== typeFilter) return false;
    if (profileFilter !== "all" && a.profile !== profileFilter) return false;
    return true;
  });

  return (
    <main className="relative min-h-screen bg-[#0a0a0c] text-white">
      {/* Cinematic Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-crimson/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-crimson/5 blur-[100px]" />
      </div>

      <div className="relative z-10 px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="gradient-text">Lal Divane Gallery</span>
            </h1>
            <p className="text-muted max-w-2xl mx-auto">
              AI tarafından üretilen Lal Divane görsellerinin resmi arşivi. 
              Melankolik ve hipnotik bir yolculuk.
            </p>
          </header>

          {!loading && assets.length > 0 && (
            <div className="mb-12 space-y-6">
              {/* Type Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setTypeFilter("all")}
                  className={[
                    "px-5 py-2 rounded-xl text-sm font-medium transition-all",
                    typeFilter === "all"
                      ? "bg-crimson text-white glow-crimson-sm"
                      : "bg-panel/40 text-muted hover:text-textc border border-borderc",
                  ].join(" ")}
                >
                  Tümü
                </button>
                {(Object.keys(assetTypeLabels) as AssetItem["type"][]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={[
                      "flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition-all",
                      typeFilter === t
                        ? "bg-crimson text-white glow-crimson-sm"
                        : "bg-panel/40 text-muted hover:text-textc border border-borderc",
                    ].join(" ")}
                  >
                    <span>{assetTypeLabels[t].emoji}</span>
                    {assetTypeLabels[t].label}
                  </button>
                ))}
              </div>

              {/* Profile Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setProfileFilter("all")}
                  className={[
                    "px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all",
                    profileFilter === "all"
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-muted hover:text-textc",
                  ].join(" ")}
                >
                  All Engines
                </button>
                {(Object.keys(profileLabels) as AssetItem["profile"][]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setProfileFilter(p)}
                    className={[
                      "px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all",
                      profileFilter === p
                        ? "bg-white/10 text-white border border-white/20"
                        : "text-muted hover:text-textc",
                    ].join(" ")}
                  >
                    {profileLabels[p].label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-crimson/20 border-t-crimson mb-4"></div>
              <p className="text-sm text-muted animate-pulse">Koleksiyon Hazırlanıyor...</p>
            </div>
          ) : filteredAssets.length === 0 ? (
            <div className="text-center py-32 border border-dashed border-borderc rounded-3xl bg-panel/20">
              <p className="text-muted">
                {assets.length === 0 
                  ? "Henüz yayınlanmış bir görsel bulunmuyor."
                  : "Bu filtreye uygun görsel bulunamadı."}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredAssets.map((asset) => (
                <div
                  key={asset.id}
                  onClick={() => setViewingAsset(asset)}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-borderc bg-panel/40 cursor-pointer transition-all hover:border-crimson/40"
                >
                  <img
                    src={asset.thumbnail || ""}
                    alt={asset.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-bold text-lg">{asset.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted mt-1">
                      <span>{assetTypeLabels[asset.type].emoji} {assetTypeLabels[asset.type].label}</span>
                      <span>•</span>
                      <span className="text-amber-400">{renderStars(asset.rating)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Asset View Modal */}
      {viewingAsset && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md" 
            onClick={() => setViewingAsset(null)} 
          />
          <div className="relative max-w-5xl w-full max-h-screen overflow-y-auto rounded-3xl border border-borderc bg-panel shadow-2xl overflow-hidden">
            <button
              onClick={() => setViewingAsset(null)}
              className="absolute top-6 right-6 z-10 h-10 w-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <div className="grid md:grid-cols-2">
              <div className="p-4 bg-black/20 flex items-center justify-center">
                <img
                  src={viewingAsset.thumbnail || ""}
                  alt={viewingAsset.name}
                  className="max-h-[80vh] w-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">{viewingAsset.name}</h2>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${profileLabels[viewingAsset.profile].color}`}>
                      {profileLabels[viewingAsset.profile].label}
                    </span>
                    <span className="text-amber-400">{renderStars(viewingAsset.rating)}</span>
                  </div>
                </div>

                {viewingAsset.songTitle && (
                  <div className="mb-6 p-4 rounded-2xl bg-crimson/5 border border-crimson/10">
                    <p className="text-xs text-muted uppercase font-bold tracking-widest mb-1">Inspiration</p>
                    <p className="text-lg font-medium">🎵 {viewingAsset.songTitle}</p>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-muted uppercase font-bold tracking-widest mb-3 text-crimson">Prompt</p>
                    <p className="text-sm text-text-secondary leading-relaxed font-mono p-4 rounded-xl bg-panel2 border border-borderc">
                      {viewingAsset.prompt}
                    </p>
                  </div>
                  {viewingAsset.notes && (
                    <div>
                      <p className="text-xs text-muted uppercase font-bold tracking-widest mb-2">Director&apos;s Notes</p>
                      <p className="text-sm text-text-secondary leading-relaxed italic">
                        &quot;{viewingAsset.notes}&quot;
                      </p>
                    </div>
                  )}
                  {viewingAsset.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {viewingAsset.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs bg-panel2 border border-borderc text-muted">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer / Login Link */}
      <footer className="relative z-10 py-12 text-center border-t border-borderc/50 mt-20">
        <Link 
          href="/login" 
          className="text-xs text-muted hover:text-crimson transition-all"
        >
          Admin Portal &bull; Lal Divane Engine v2.5
        </Link>
      </footer>
    </main>
  );
}
