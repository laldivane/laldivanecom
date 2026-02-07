"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  loadLore, saveLore, loadSongs, saveSongs, 
  LORE_INSTRUCTIONS, type LoreItem, type SongItem 
} from "@/lib/lore";

export default function LorePage() {
  const [lore, setLore] = useState<LoreItem[]>([]);
  const [songs, setSongs] = useState<SongItem[]>([]);
  const [activeTab, setActiveTab] = useState<"lore" | "songs" | "instructions">("lore");
  
  const [editingLore, setEditingLore] = useState<LoreItem | null>(null);
  const [editingSong, setEditingSong] = useState<SongItem | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    setLore(loadLore());
    setSongs(loadSongs());
  }, []);

  const handleSaveLore = (data: Omit<LoreItem, "id" | "createdAt">) => {
    let newLore;
    if (editingLore) {
      newLore = lore.map(l => l.id === editingLore.id ? { ...l, ...data } : l);
    } else {
      newLore = [...lore, { ...data, id: `lore-${Date.now()}`, createdAt: Date.now() }];
    }
    setLore(newLore);
    saveLore(newLore);
    setEditingLore(null);
    setIsAdding(false);
  };

  const handleSaveSong = (data: Omit<SongItem, "id" | "createdAt">) => {
    let newSongs;
    if (editingSong) {
      newSongs = songs.map(s => s.id === editingSong.id ? { ...s, ...data } : s);
    } else {
      newSongs = [...songs, { ...data, id: `song-${Date.now()}`, createdAt: Date.now() }];
    }
    setSongs(newSongs);
    saveSongs(newSongs);
    setEditingSong(null);
    setIsAdding(false);
  };

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-crimson/5 blur-[80px]" />
      </div>

      <div className="relative z-10 p-6 md:p-8">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <header className="mb-12 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-xl bg-panel border border-borderc hover:border-crimson/40 transition-all">
                <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              </Link>
              <h1 className="text-2xl font-bold tracking-tight">Lyrics & Lore Engine</h1>
            </div>
            <button
              onClick={() => setIsAdding(true)}
              className="px-4 py-2 rounded-xl bg-crimson text-white text-sm font-medium hover:bg-crimson/90 transition-colors shadow-lg shadow-crimson/20"
            >
              + Yeni İçerik
            </button>
          </header>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 p-1 rounded-2xl bg-panel2/50 border border-borderc w-fit">
            <button
              onClick={() => setActiveTab("lore")}
              className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === "lore" ? "bg-crimson text-white shadow-lg shadow-crimson/20" : "text-muted hover:text-textc"}`}
            >
              Karakter Lore
            </button>
            <button
              onClick={() => setActiveTab("songs")}
              className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === "songs" ? "bg-crimson text-white shadow-lg shadow-crimson/20" : "text-muted hover:text-textc"}`}
            >
              Şarkı & Sözler
            </button>
            <button
              onClick={() => setActiveTab("instructions")}
              className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === "instructions" ? "bg-crimson text-white shadow-lg shadow-crimson/20" : "text-muted hover:text-textc"}`}
            >
              Kullanım Kılavuzu
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === "lore" && (
              <div className="grid gap-6 sm:grid-cols-2">
                {lore.map((item) => (
                  <div key={item.id} className="p-6 rounded-2xl border border-borderc bg-panel/60 backdrop-blur-sm group hover:border-purple-500/40 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        {item.category}
                      </span>
                      <button onClick={() => setEditingLore(item)} className="text-muted hover:text-textc">✎</button>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-4">{item.content}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "songs" && (
              <div className="grid gap-6">
                {songs.map((song) => (
                  <div key={song.id} className="p-8 rounded-2xl border border-borderc bg-panel/60 backdrop-blur-sm hover:border-crimson/40 transition-all">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{song.title}</h3>
                        <p className="text-xs text-muted">Mood: <span className="text-crimson text-medium">{song.mood}</span></p>
                      </div>
                      <button onClick={() => setEditingSong(song)} className="text-muted hover:text-textc">✎ Düzenle</button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3">Lyrics Snippet</p>
                        <pre className="text-sm text-text-secondary font-mono leading-relaxed bg-black/20 p-4 rounded-xl whitespace-pre-wrap italic">
                          &quot;{song.lyrics}&quot;
                        </pre>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3">Meaning & Atmosphere</p>
                        <p className="text-sm text-text-secondary leading-relaxed">{song.meaning}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "instructions" && (
              <div className="p-10 rounded-3xl border border-borderc bg-panel/40 prose prose-invert max-w-none">
                <div 
                  className="[&>h3]:text-crimson [&>h3]:mt-0 [&>p]:text-text-secondary [&>ul]:text-text-secondary"
                  dangerouslySetInnerHTML={{ __html: LORE_INSTRUCTIONS.replace(/### (.*)/g, '<h3>$1</h3>').replace(/(\d\..*)/g, '<li>$1</li>').replace(/\n\n/g, '<p>').replace(/\n/g, '<br>') }} 
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Content Modal */}
      {(isAdding || editingLore || editingSong) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => { setIsAdding(false); setEditingLore(null); setEditingSong(null); }} />
          <div className="relative w-full max-w-2xl bg-panel border border-borderc rounded-3xl p-8 shadow-2xl">
            <h2 className="text-xl font-bold mb-6">
              {editingLore || editingSong ? "Düzenle" : (activeTab === "lore" ? "Lore Ekle" : "Şarkı Ekle")}
            </h2>
            
            {activeTab === "lore" ? (
              <LoreForm item={editingLore} onSave={handleSaveLore} onCancel={() => { setIsAdding(false); setEditingLore(null); }} />
            ) : (
              <SongForm item={editingSong} onSave={handleSaveSong} onCancel={() => { setIsAdding(false); setEditingSong(null); }} />
            )}
          </div>
        </div>
      )}
    </main>
  );
}

function LoreForm({ item, onSave, onCancel }: { item: LoreItem | null, onSave: (d: any) => void, onCancel: () => void }) {
  const [title, setTitle] = useState(item?.title || "");
  const [category, setCategory] = useState(item?.category || "backstory");
  const [content, setContent] = useState(item?.content || "");

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave({ title, category, content }); }} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-muted uppercase mb-2">Başlık</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required className="w-full bg-panel2 border border-borderc rounded-xl px-4 py-3 text-sm focus:border-crimson/50" />
        </div>
        <div>
          <label className="block text-xs font-bold text-muted uppercase mb-2">Kategori</label>
          <select value={category} onChange={e => setCategory(e.target.value as any)} className="w-full bg-panel2 border border-borderc rounded-xl px-4 py-3 text-sm [color-scheme:dark]">
            <option value="backstory">Geçmiş (Backstory)</option>
            <option value="personality">Kişilik</option>
            <option value="mystery">Gizemler</option>
            <option value="trivia">Yan Bilgiler</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-muted uppercase mb-2">İçerik</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} rows={6} required className="w-full bg-panel2 border border-borderc rounded-xl px-4 py-3 text-sm focus:border-crimson/50 resize-none" />
      </div>
      <div className="flex gap-3 pt-4">
        <button type="button" onClick={onCancel} className="flex-1 py-3 rounded-xl bg-panel2 text-muted hover:text-textc">İptal</button>
        <button type="submit" className="flex-1 py-3 rounded-xl bg-crimson text-white font-bold">Kaydet</button>
      </div>
    </form>
  );
}

function SongForm({ item, onSave, onCancel }: { item: SongItem | null, onSave: (d: any) => void, onCancel: () => void }) {
  const [title, setTitle] = useState(item?.title || "");
  const [lyrics, setLyrics] = useState(item?.lyrics || "");
  const [meaning, setMeaning] = useState(item?.meaning || "");
  const [mood, setMood] = useState(item?.mood || "");

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave({ title, lyrics, meaning, mood }); }} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-muted uppercase mb-2">Şarkı Adı</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required className="w-full bg-panel2 border border-borderc rounded-xl px-4 py-3 text-sm focus:border-crimson/50" />
        </div>
        <div>
          <label className="block text-xs font-bold text-muted uppercase mb-2">Ruh Hali (Mood)</label>
          <input value={mood} onChange={e => setMood(e.target.value)} className="w-full bg-panel2 border border-borderc rounded-xl px-4 py-3 text-sm focus:border-crimson/50" placeholder="örn: Melankolik, Agresif..." />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-muted uppercase mb-2">Lirik Snippet (Kısa bir bölüm)</label>
        <textarea value={lyrics} onChange={e => setLyrics(e.target.value)} rows={3} required className="w-full bg-panel2 border border-borderc rounded-xl px-4 py-3 text-sm font-mono focus:border-crimson/50 resize-none" placeholder="En vurucu mısraları buraya yazın..." />
      </div>
      <div>
        <label className="block text-xs font-bold text-muted uppercase mb-2">Anlam &amp; Atmosfer</label>
        <textarea value={meaning} onChange={e => setMeaning(e.target.value)} rows={4} required className="w-full bg-panel2 border border-borderc rounded-xl px-4 py-3 text-sm focus:border-crimson/50 resize-none" placeholder="Şarkının arkasındaki hikaye..." />
      </div>
      <div className="flex gap-3 pt-4">
        <button type="button" onClick={onCancel} className="flex-1 py-3 rounded-xl bg-panel2 text-muted hover:text-textc">İptal</button>
        <button type="submit" className="flex-1 py-3 rounded-xl bg-crimson text-white font-bold">Kaydet</button>
      </div>
    </form>
  );
}
