import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Top Badge', type: 'string', initialValue: 'Sinyal Onaylandı' }),
        defineField({ name: 'titleMain', title: 'Main Title', type: 'string', initialValue: 'LAL DIVANE' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'ctaPrimary', title: 'Primary Button Text', type: 'string' }),
        defineField({ name: 'ctaSecondary', title: 'Secondary Button Text', type: 'string' }),
      ]
    }),
    defineField({
        name: 'featuredSignal',
        title: 'Featured Release',
        type: 'object',
        fields: [
            defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Öne Çıkan Sinyal' }),
            defineField({ name: 'title', title: 'Title Override', type: 'string', description: 'Leave empty to use latest track title' }),
            defineField({ 
                name: 'customImage', 
                title: 'Custom Feature Image', 
                type: 'image', 
                options: { hotspot: true },
                description: 'Leave empty to use latest track cover'
            }),
             defineField({ name: 'description', title: 'Description Override', type: 'text' })
        ]
    }),
    defineField({
        name: 'loreSection',
        title: 'Lore Teaser Section',
        type: 'object',
        fields: [
            defineField({ name: 'badge', title: 'Badge', type: 'string', initialValue: 'Lore Transmission 0.1' }),
            defineField({ name: 'quote', title: 'Quote Text', type: 'text' }),
            defineField({ name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Boşlukla bağlantı kurun' })
        ]
    })
  ],
})
