// Lore & Lyrics Types and Utilities

export interface LoreItem {
  id: string;
  title: string;
  category: "backstory" | "personality" | "mystery" | "trivia";
  content: string;
  createdAt: number;
}

export interface SongItem {
  id: string;
  title: string;
  lyrics: string;
  meaning: string;
  mood: string;
  createdAt: number;
}

// LocalStorage Keys
const LORE_KEY = "lal-lore-v1";
const SONGS_KEY = "lal-songs-v1";

// Helper to load from local storage
export function loadLore(): LoreItem[] {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem(LORE_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function saveLore(items: LoreItem[]) {
  localStorage.setItem(LORE_KEY, JSON.stringify(items));
}

export function loadSongs(): SongItem[] {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem(SONGS_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function saveSongs(items: SongItem[]) {
  localStorage.setItem(SONGS_KEY, JSON.stringify(items));
}

// Instructions on how to use Lore/Lyrics in prompts
export const LORE_INSTRUCTIONS = `
### 📝 Lore & Lyrics Nasıl Kullanılır?

Lal Divane'nin dünyasını derinleştirmek için bu bilgileri promptlara şu şekilde yedirebilirsiniz:

1. **Atmosferik Dokunuşlar:** Şarkı sözlerindeki metaforları (örn: "Huzursuz bir gölgeyim") sahne öğesi olarak ekleyin.
2. **Karakter Derinliği:** Lore kısmındaki kişilik özelliklerini (örn: "İçe kapanık ama sahne ışığında hipnotik") promptun "vibe" kısmına ekleyin.
3. **Sembolizm:** Lore'daki gizemli objeleri (örn: "Taşıdığı gümüş mühür") aksesuarlara dahil edin.
4. **Renk Paleti:** Lore'daki ruh haline göre renk paletini belirleyin (Melankolik lore = koyu kömür ve soluk kırmızı).
`;
