# 🔴 Lal Divane - Official Website

> **AI Artist & Digital Entity** - Tragic Dark-Pop from the Void

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![Sanity](https://img.shields.io/badge/Sanity-3-F03E2F?style=flat-square&logo=sanity)

---

## 🌐 Live Demo

**[laldivane.com](https://laldivane.com)**

---

## � Project Overview

**Lal Divane** is a conceptual AI musician and digital artist entity. This repository hosts the official web platform, built to serve as a "digital transmission" hub for her discography, visual narratives, and manifesto.

The project is a high-performance, visually immersive web application designed with a focus on **dark aesthetics, fluid animations, and headless content management**.

---

## ⚡ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components)
- **CMS:** [Sanity.io](https://www.sanity.io/) (Headless Content Management)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Typography:** [Google Fonts](https://fonts.google.com/) (Syne & Outfit)
- **Language:** TypeScript
- **Deployment:** Vercel (Recommended)

---

## 🌟 Key Features

### 1. **Dynamic Content Management (Sanity CMS)**

The entire application is powered by Sanity.io, allowing for real-time updates without code changes:

- **Discography:** Manage tracks, albums, release dates, and platform links.
- **Visual Archive:** A timeline of cover arts and visual assets.
- **Story & Manifesto:** Editable lore and narrative sections with Portable Text support.
- **Brand Kit:** Manage official colors, typography, and downloadable assets (Press Kit).
- **Global Settings:** Control site title, SEO descriptions, and social media links.
- **Home Page:** Featured releases and lore snippets are fully dynamic.

### 2. **Immersive UI/UX**

- **Cinematic Hero Sections:** Full-screen visuals with parallax and fade effects.
- **Fluid Transitions:** Page-to-page transitions and scroll-triggered animations using Framer Motion.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop experiences.
- **Custom Audio Player:** (Planned) for previewing tracks.

### 3. **Smart Components**

- **Automatic Platform Icons:** Social links automatically resolve to the correct brand icon.
- **Optimized Images:** Next.js Image component integration with Sanity's CDN.

---

## � Project Structure

```bash
├── public/                 # Static assets (favicons, local images)
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── (main)/         # Main layout group (public pages)
│   │   ├── studio/         # Sanity Studio embedded route
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable UI components (Header, Footer, Hero, etc.)
│   ├── data/               # Static fallbacks & constants
│   ├── sanity/             # Sanity configuration & schemas
│   │   ├── lib/            # Sanity client & image builders
│   │   ├── schemaTypes/    # Content schemas (track, visualArchive, settings, etc.)
│   │   └── structure.ts    # Desk structure customization
│   └── styles/             # Global CSS and Tailwind directives
├── scripts/                # Utility scripts (e.g., data migration)
└── sanity.config.ts        # Sanity Studio configuration
```

---

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/laldivane/laldivanecom.git
   cd laldivanecom
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory and add your Sanity credentials:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-02-10
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.
   Open [http://localhost:3000/studio](http://localhost:3000/studio) to access the CMS.

---

## 🎨 Design Philosophy

The design language revolves not around a human persona, but a **"digital entity"** synthesized from melancholy.

- **Colors:** Obsidian (`#050508`) & Crimson (`#B00020`).
- **Typography:** `Syne` for display headers (mechanical, distinct), `Outfit` for body text (clean, digital).

---

## 🔗 Links

- [Spotify](https://open.spotify.com/artist/3fjP5gZnfxdVVnW7mufudD)
- [YouTube](https://www.youtube.com/channel/UCdZxDgQmilzTqDobXse6Bwg)
- [Instagram](https://instagram.com/laldivanemusic)
- [Twitter/X](https://x.com/laldivanemusic)

---

© 2026 Lal Divane. All Rights Reserved.
