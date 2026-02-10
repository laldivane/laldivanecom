import { defineField, defineType } from 'sanity'

export const track = defineType({
  name: 'track',
  title: 'Discography Track',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'ID (Slug)',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'catalogId',
      title: 'Catalog ID',
      type: 'string',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverArt',
      title: 'Cover Art',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
        })
      ]
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Distributing', value: 'distributing' },
          { title: 'Live', value: 'live' },
        ],
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
     defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single', value: 'single' },
          { title: 'Album', value: 'album' },
          { title: 'EP', value: 'ep' },
        ],
      },
      initialValue: 'single',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'visualizerId',
      title: 'YouTube Visualizer ID',
      type: 'string',
      description: 'The ID of the visualizer video on YouTube (e.g., dQw4w9WgXcQ)',
    }),
    defineField({
      name: 'platforms',
      title: 'Platform Links',
      type: 'object',
      fields: [
        defineField({ name: 'spotify', type: 'url', title: 'Spotify' }),
        defineField({ name: 'appleMusic', type: 'url', title: 'Apple Music' }),
        defineField({ name: 'itunes', type: 'url', title: 'iTunes' }),
        defineField({ name: 'youtube', type: 'url', title: 'YouTube' }),
        defineField({ name: 'youtubeMusic', type: 'url', title: 'YouTube Music' }),
        defineField({ name: 'soundcloud', type: 'url', title: 'SoundCloud' }),
        defineField({ name: 'tidal', type: 'url', title: 'Tidal' }),
        defineField({ name: 'amazonMusic', type: 'url', title: 'Amazon Music' }),
        defineField({ name: 'deezer', type: 'url', title: 'Deezer' }),
        defineField({ name: 'anghami', type: 'url', title: 'Anghami' }),
        defineField({ name: 'qobuz', type: 'url', title: 'Qobuz' }),
        defineField({ name: 'boomplay', type: 'url', title: 'Boomplay' }),
        defineField({ name: 'audiomack', type: 'url', title: 'Audiomack' }),
        defineField({ name: 'genius', type: 'url', title: 'Genius' }),
        defineField({ name: 'kugou', type: 'url', title: 'Kugou' }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'releaseDate',
      media: 'coverArt',
    },
  },
})
