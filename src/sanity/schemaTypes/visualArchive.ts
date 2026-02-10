import { defineField, defineType } from 'sanity'

export const visualArchive = defineType({
  name: 'visualArchive',
  title: 'Cover Arts Archive',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Release Date',
      type: 'string',
      description: 'Format: MON YYYY (e.g., FEB 2026)',
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
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
