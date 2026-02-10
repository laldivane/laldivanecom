import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of the website for SEO (e.g. Lal Divane | AI Artist)',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'SEO description meta tag',
    }),
    defineField({
        name: 'socialLinks',
        title: 'Social Media Links',
        type: 'object',
        fields: [
            defineField({ name: 'spotify', title: 'Spotify URL', type: 'url' }),
            defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
            defineField({ name: 'x', title: 'X (Twitter) URL', type: 'url' }),
            defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
            defineField({ name: 'youtubeMusic', title: 'YouTube Music URL', type: 'url' }),
            defineField({ name: 'appleMusic', title: 'Apple Music URL', type: 'url' }),
            defineField({ name: 'tiktok', title: 'TikTok URL', type: 'url' }),
            defineField({ name: 'soundcloud', title: 'SoundCloud URL', type: 'url' }),
            defineField({ name: 'deezer', title: 'Deezer URL', type: 'url' }),
            defineField({ name: 'genius', title: 'Genius URL', type: 'url' }),
            defineField({ name: 'anghami', title: 'Anghami URL', type: 'url' }),
            defineField({ name: 'boomplay', title: 'Boomplay URL', type: 'url' }),
            defineField({ name: 'audiomack', title: 'Audiomack URL', type: 'url' }),
            defineField({ name: 'amazonMusic', title: 'Amazon Music URL', type: 'url' }),
            defineField({ name: 'tidal', title: 'Tidal URL', type: 'url' }),
            defineField({ name: 'qobuz', title: 'Qobuz URL', type: 'url' }),
            defineField({ name: 'kugou', title: 'Kugou URL', type: 'url' }),
        ]
    }),
    defineField({
        name: 'footerText',
        title: 'Footer Text',
        type: 'string',
        description: 'Copyright text or small footer note',
    })
  ],
})
