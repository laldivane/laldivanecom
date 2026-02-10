import { defineField, defineType } from 'sanity'

export const story = defineType({
  name: 'story',
  title: 'Manifesto & Story',
  type: 'document',
  fields: [
    defineField({
      name: 'manifestoTitle',
      title: 'Manifesto Title',
      type: 'string',
      initialValue: 'THE MANIFESTO'
    }),
    defineField({
      name: 'manifestoSubtitle',
      title: 'Manifesto Subtitle',
      type: 'string',
      initialValue: 'LORE TRANSMISSION 0.1'
    }),
    defineField({
        name: 'heroImage',
        title: 'Story Hero Image',
        type: 'image',
        options: { hotspot: true }
    }),
    defineField({
      name: 'quote',
      title: 'Main Quote',
      type: 'text',
      description: 'The large italic quote in the story page.'
    }),
    defineField({
        name: 'section1',
        title: 'Content Section 1',
        type: 'array', 
        of: [{type: 'block'}]
    }),
    defineField({
        name: 'section2title',
        title: 'Section 2 Title',
        type: 'string',
        initialValue: 'The Ritual'
    }),
    defineField({
        name: 'section2',
        title: 'Content Section 2',
        type: 'array', 
        of: [{type: 'block'}]
    })
  ],
})
