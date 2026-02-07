# 🎭 Lal Divane Prompt Engine

> **Character Design Studio & AI Visual Generation Toolkit**

Lal Divane Prompt Engine, AI influencer/müzisyen karakteri için görsel prompt üretim ve yönetim sistemidir. Modern, premium bir arayüz ile karakter görselleri, album cover'ları ve YouTube thumbnail'ları için optimize edilmiş promptlar oluşturur.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)

---

## ✨ Özellikler

### 🎨 Core Modules

| Modül               | Açıklama                                                   |
| ------------------- | ---------------------------------------------------------- |
| **Character Forge** | Base karakter prompt editörü - JSON tree view & raw editor |
| **Media Forge**     | Album cover & YouTube thumbnail prompt üretici             |
| **Wardrobe**        | Kıyafet koleksiyonu yönetimi                               |
| **Environments**    | Ortam & lokasyon kütüphanesi                               |
| **Asset Manager**   | Üretilen görsel arşivi & prompt eşleştirme                 |

### 🤖 AI Platform Desteği

- **Generic** - Genel prompt formatı
- **GROK (xAI)** - Grok Imagine için optimize
- **SDXL** - Stable Diffusion XL formatı (negative prompt dahil)
- **Midjourney** - MJ parametreleri desteği

### 🎯 Temel Özellikler

- ✅ **Tree View Editor** - Görsel JSON düzenleme
- ✅ **Preset Yönetimi** - Kaydet, yükle, paylaş
- ✅ **Safe Mode** - Otomatik içerik sanitizasyonu
- ✅ **LocalStorage Persistence** - Veriler tarayıcıda saklanır
- ✅ **Responsive Tasarım** - Mobil uyumlu arayüz
- ✅ **Premium Dark Theme** - Crimson accent, glass morphism

---

## 🚀 Kurulum

### Gereksinimler

- Node.js 18+
- npm veya yarn

### Kurulum Adımları

```bash
# Clone
git clone https://github.com/laldivane/lal-prompt-gen.git
cd lal-prompt-gen

# Bağımlılıkları yükle
npm install

# Development server
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

---

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── base/             # Character Forge
│   ├── media/            # Media Forge
│   ├── wardrobe/         # Kıyafet Yönetimi
│   ├── environments/     # Ortam Kütüphanesi
│   └── assets/           # Asset Manager
├── components/
│   ├── JsonTreeEditor    # Tree view JSON editör
│   ├── PromptEditor      # Raw JSON editör
│   ├── PromptOutput      # Prompt görüntüleme
│   ├── SidebarControls   # Kontrol paneli
│   ├── AccordionSection  # Katlanır bölümler
│   └── ArrayEditor       # Dizi düzenleyici
└── lib/
    ├── template.ts       # Base karakter şablonu
    ├── promptEngine.ts   # Prompt render engine
    ├── promptProfiles.ts # AI platform profilleri
    ├── promptPipeline.ts # Cover/Thumbnail pipeline
    ├── wardrobe.ts       # Kıyafet storage
    ├── environments.ts   # Ortam storage
    ├── assets.ts         # Asset storage
    └── presets.ts        # Environment/Outfit presets
```

---

## 🎭 Karakter: Lal Divane

Lal Divane, AI-generated Turkish music artist persona'sıdır:

- **Yaş**: 24
- **Görünüm**: Ethereal, Turkish-Middle Eastern features
- **Stil**: Dark feminine mystique, melancholic elegance
- **Signature**: Burned texture on left side of face, silver nose ring
- **Aesthetic**: Crimson & charcoal, cinematic lighting

---

## 📸 Modül Detayları

### Character Forge (`/base`)

Base karakter prompt'unu düzenlemek için:

- **Tree View**: Görsel JSON navigasyonu
- **Raw JSON**: Direkt kod düzenleme
- **Profile Selector**: Generic, Grok, SDXL
- **Preset Management**: Kaydet/Yükle

### Media Forge (`/media`)

Medya içerik promptları:

- **Output Types**: Album Cover, YouTube Thumbnail
- **Typography Settings**: Font, style, intensity
- **Aspect Ratio**: 1:1, 9:16, 16:9
- **Text Overlay**: Şarkı adı, artist adı

### Wardrobe (`/wardrobe`)

Kıyafet koleksiyonu:

- **Kategoriler**: Cozy, Stage, Dark, Casual, Romantic, Street
- **Parts**: Top, Bottom, Footwear, Accessories
- **Mood/Vibe**: Her kıyafet için mood tanımı

### Environments (`/environments`)

Lokasyon kütüphanesi:

- **Kategoriler**: Indoor, Outdoor, Abstract, Stage, Urban, Nature
- **Time of Day**: Dawn, Day, Dusk, Night
- **Weather**: Clear, Cloudy, Rain, Fog, Snow
- **Elements**: Sahne öğeleri listesi

### Asset Manager (`/assets`)

Görsel arşivi:

- **Upload**: Görsel yükleme (base64)
- **Prompt Linking**: Hangi prompt ile üretildi
- **Rating**: 5 yıldızlı puanlama
- **Tags**: Etiketleme ve arama
- **Type Filter**: Cover, Thumbnail, Portrait, BTS, Promo

---

## 💾 Veri Depolama

Tüm veriler LocalStorage'da saklanır:

| Key                   | İçerik                    |
| --------------------- | ------------------------- |
| `lal-template-v1`     | Active character template |
| `lal-presets-v1`      | Kaydedilen presetler      |
| `lal-wardrobe-v1`     | Kıyafet koleksiyonu       |
| `lal-environments-v1` | Ortam kütüphanesi         |
| `lal-assets-v1`       | Asset arşivi              |

---

## 🎨 Tasarım Sistemi

Premium dark theme:

- **Background**: `#0a0a0c` (deep charcoal)
- **Panel**: `#111114` (elevated surface)
- **Accent**: `#dc2626` (crimson)
- **Text**: `#f5f5f7` (off-white)

Özellikler:

- Glass morphism (backdrop-blur)
- Subtle crimson glow effects
- Smooth transitions & animations
- Custom scrollbars

---

## 📋 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

---

## 🛣️ Roadmap

- [ ] Supabase entegrasyonu (cloud sync)
- [ ] Cloudinary görsel hosting
- [ ] Lyrics Forge modülü
- [ ] Keyboard shortcuts
- [ ] Export/Import presets
- [ ] Multi-character support

---

## 📄 Lisans

Private repository - All rights reserved.

---

<p align="center">
  <strong>🎭 Lal Divane Prompt Engine</strong><br>
  <em>Character Design Studio</em>
</p>
