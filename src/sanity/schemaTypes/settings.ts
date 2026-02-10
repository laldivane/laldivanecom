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
            defineField({ name: 'twitter', title: 'Twitter (X) URL', type: 'url' }),
            defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
            defineField({ name: 'youtubeMusic', title: 'YouTube Music URL', type: 'url' }),
            defineField({ name: 'appleMusic', title: 'Apple Music URL', type: 'url' }),
             defineField({ name: 'tiktok', title: 'TikTok URL', type: 'url' }),
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
