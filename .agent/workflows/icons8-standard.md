---
description: Using Icons8 for all icons in the project
---

# Icon Standards - Icons8

All icons in this project should be sourced from **Icons8** (https://icons8.com).

## Implementation Guidelines

### 1. Icon Source

- Use Icons8 CDN for all icons: `https://img.icons8.com/`
- Prefer the "fluency" or "color" style for colorful icons
- Use "ios-glyphs" or "material-outlined" for monochrome icons

### 2. Icon Formats

- **Preferred**: PNG via CDN URL
- **Alternative**: SVG download (for custom styling)

### 3. CDN URL Pattern

```
https://img.icons8.com/{style}/{size}/{icon-name}.png
```

Examples:

- Spotify: `https://img.icons8.com/fluency/48/spotify.png`
- YouTube: `https://img.icons8.com/fluency/48/youtube-play.png`
- Instagram: `https://img.icons8.com/fluency/48/instagram-new.png`
- X (Twitter): `https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v1.png`

### 4. Usage in Next.js

```tsx
import Image from "next/image";

<Image
  src="https://img.icons8.com/fluency/48/spotify.png"
  alt="Spotify"
  width={24}
  height={24}
/>;
```

### 5. Adding Icons8 Domain to next.config.ts

Ensure the following domain is added to `next.config.ts`:

```ts
images: {
  domains: ["img.icons8.com", ...otherDomains],
}
```

### 6. Attribution

Icons8 requires attribution for free usage. Add the following to the footer:

```html
<a href="https://icons8.com" target="_blank" rel="noopener noreferrer"
  >Icons by Icons8</a
>
```

## Common Icons Reference

| Icon        | URL                                                            |
| ----------- | -------------------------------------------------------------- |
| Spotify     | `https://img.icons8.com/fluency/48/spotify.png`                |
| YouTube     | `https://img.icons8.com/fluency/48/youtube-play.png`           |
| Instagram   | `https://img.icons8.com/fluency/48/instagram-new.png`          |
| X (Twitter) | `https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v1.png` |
| Apple Music | `https://img.icons8.com/fluency/48/apple-music.png`            |
| SoundCloud  | `https://img.icons8.com/fluency/48/soundcloud.png`             |
| Deezer      | `https://img.icons8.com/fluency/48/deezer.png`                 |
| TikTok      | `https://img.icons8.com/fluency/48/tiktok.png`                 |
| Facebook    | `https://img.icons8.com/fluency/48/facebook-new.png`           |
| Email       | `https://img.icons8.com/fluency/48/email.png`                  |
| Link        | `https://img.icons8.com/fluency/48/link.png`                   |
