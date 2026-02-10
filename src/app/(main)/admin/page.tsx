"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"discography" | "links" | "content">("discography");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/data?file=${activeTab}`);
        const json = await res.json();
        if (json.content) {
          setData(json.content);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [activeTab]);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          file: activeTab,
          content: JSON.stringify(data, null, 2),
        }),
      });
      const result = await res.json();
      if (result.success) {
        setMessage({ type: "success", text: "Changes saved successfully! Rebooting signal..." });
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: "error", text: result.error || "Failed to save." });
      }
    } catch (err) {
       console.error("Save error:", err);
      setMessage({ type: "error", text: "Network error." });
    } finally {
      setSaving(false);
    }
  };

  const updateDiscographyItem = (index: number, field: string, value: any) => {
    const newData = [...data];
    if (field.includes(".")) {
      const [p1, p2] = field.split(".");
      newData[index][p1] = { ...newData[index][p1], [p2]: value };
    } else {
      newData[index][field] = value;
    }
    setData(newData);
  };

  const addDiscographyItem = () => {
    const newItem = {
      id: "new-track-" + Date.now(),
      title: "New Track",
      catalogId: "MTS-" + Math.floor(Math.random() * 1000000),
      releaseDate: new Date().toISOString().split("T")[0],
      coverArt: "/assets/covers/default.jpg",
      status: "draft",
      type: "single",
      platforms: {},
      visualizerId: "",
    };
    setData([newItem, ...data]);
  };

  return (
    <div className="min-h-screen bg-bg text-foreground font-sans p-4 sm:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 border-b border-white/5 pb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-display font-black tracking-tighter uppercase mb-2">
              Management <span className="text-crimson">Console</span>
            </h1>
            <p className="text-xs sm:text-sm text-muted uppercase tracking-[0.3em] font-light">
              Live signal manipulation interface
            </p>
          </div>

          <button
            onClick={handleSave}
            disabled={saving || loading}
            className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-500
              ${saving ? "bg-white/10 text-muted" : "bg-crimson text-white hover:scale-105 shadow-[0_0_20px_rgba(244,30,66,0.3)]"}
            `}
          >
            {saving ? "Pulsing..." : "Transmit Changes"}
          </button>
        </header>

        {/* Status Message */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`mb-8 p-4 rounded-xl border text-sm font-bold uppercase tracking-widest text-center
                ${message.type === "success" ? "bg-green-500/10 border-green-500/30 text-green-500" : "bg-red-500/10 border-red-500/30 text-red-500"}
              `}
            >
              {message.text}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {["discography", "links", "content"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                ${activeTab === tab ? "bg-white/10 text-crimson border border-crimson/30" : "text-muted hover:text-foreground"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-10">
          {loading ? (
            <div className="py-20 text-center animate-pulse text-white/20 uppercase tracking-[0.5em] text-xs">
              Synchronizing with void...
            </div>
          ) : activeTab === "discography" ? (
            <div className="space-y-12">
              <button 
                onClick={addDiscographyItem}
                className="w-full py-4 rounded-2xl border border-dashed border-white/10 text-muted hover:text-crimson hover:border-crimson/30 transition-all text-[10px] font-black uppercase tracking-widest"
              >
                + Initialize New Signal
              </button>

              <div className="space-y-8">
                {Array.isArray(data) ? data.map((track: any, idx: number) => (
                  <div key={track.id} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black text-crimson tracking-tighter uppercase">Track #{idx + 1}</span>
                      <button 
                         onClick={() => setData(data.filter((_: any, i: number) => i !== idx))}
                         className="text-[9px] text-white/20 hover:text-red-500 transition-colors uppercase font-bold"
                      >
                         Delete
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-white/30 uppercase">Title</label>
                        <input
                          value={track.title}
                          onChange={(e) => updateDiscographyItem(idx, "title", e.target.value)}
                          className="w-full bg-black/40 border border-white/10 p-3 rounded-lg text-sm focus:border-crimson/50 outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-white/30 uppercase">ID (Slug)</label>
                        <input
                          value={track.id}
                          onChange={(e) => updateDiscographyItem(idx, "id", e.target.value)}
                          className="w-full bg-black/40 border border-white/10 p-3 rounded-lg text-sm focus:border-crimson/50 outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-white/30 uppercase">Catalog ID</label>
                        <input
                          value={track.catalogId}
                          onChange={(e) => updateDiscographyItem(idx, "catalogId", e.target.value)}
                          className="w-full bg-black/40 border border-white/10 p-3 rounded-lg text-sm focus:border-crimson/50 outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-white/30 uppercase">Date</label>
                        <input
                          type="date"
                          value={track.releaseDate}
                          onChange={(e) => updateDiscographyItem(idx, "releaseDate", e.target.value)}
                          className="w-full bg-black/40 border border-white/10 p-3 rounded-lg text-sm focus:border-crimson/50 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div className="space-y-2">
                          <label className="text-[9px] font-black text-white/30 uppercase">Status</label>
                          <select 
                            value={track.status} 
                            onChange={(e) => updateDiscographyItem(idx, "status", e.target.value)}
                            className="w-full bg-black/40 border border-white/10 p-3 rounded-lg text-sm outline-none"
                          >
                            <option value="draft">Draft</option>
                            <option value="distributing">Distributing</option>
                            <option value="live">Live</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[9px] font-black text-white/30 uppercase">Type</label>
                          <select 
                            value={track.type} 
                            onChange={(e) => updateDiscographyItem(idx, "type", e.target.value)}
                            className="w-full bg-black/40 border border-white/10 p-3 rounded-lg text-sm outline-none"
                          >
                            <option value="single">Single</option>
                            <option value="ep">EP</option>
                            <option value="album">Album</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                         <label className="text-[9px] font-black text-white/30 uppercase">Visualizer ID (YT)</label>
                         <input
                          value={track.visualizerId}
                          onChange={(e) => updateDiscographyItem(idx, "visualizerId", e.target.value)}
                          placeholder="e.g. vFmUyZfi4Hw"
                          className="w-full bg-black/40 border border-white/10 p-3 rounded-lg text-sm focus:border-crimson/50 outline-none font-mono"
                        />
                       </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[9px] font-black text-white/30 uppercase">Platform Nodes (URLs)</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["spotify", "youtube", "youtubeMusic", "appleMusic"].map((p) => (
                          <div key={p} className="flex items-center gap-3">
                            <span className="text-[8px] font-bold w-12 text-white/40">{p}</span>
                            <input
                              value={track.platforms[p] || ""}
                              onChange={(e) => updateDiscographyItem(idx, `platforms.${p}`, e.target.value)}
                              placeholder={`https://${p}...`}
                              className="flex-grow bg-black/20 border border-white/5 p-2 rounded-md text-[10px] outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )) : null}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data && Object.keys(data).map((key) => {
                if (typeof data[key] === "object") {
                  return Object.keys(data[key]).map((subKey) => (
                    <div key={`${key}-${subKey}`} className="space-y-2">
                      <label className="text-[10px] font-black text-crimson uppercase tracking-widest">{key} • {subKey}</label>
                      <input
                        value={data[key][subKey]}
                        onChange={(e) => setData({ 
                          ...data, 
                          [key]: { ...data[key], [subKey]: e.target.value } 
                        })}
                        className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-xs focus:border-crimson/50 outline-none"
                      />
                    </div>
                  ));
                }
                return (
                  <div key={key} className="space-y-2">
                    <label className="text-[10px] font-black text-crimson uppercase tracking-widest">{key}</label>
                    <input
                      value={data[key]}
                      onChange={(e) => setData({ ...data, [key]: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-xs focus:border-crimson/50 outline-none"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <footer className="mt-20 py-10 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">Lal Divane Administration Sub-Layer</p>
        </footer>
      </div>
    </div>
  );
}
