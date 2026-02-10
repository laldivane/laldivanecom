import { defineField, defineType } from 'sanity'

export const brandKit = defineType({
  name: 'brandKit',
  title: 'Brand Kit Assets',
  type: 'document',
  fields: [
    defineField({
      name: 'colors',
      title: 'Brand Colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Color Name' },
            { name: 'hex', type: 'string', title: 'Hex Code' },
            { name: 'usage', type: 'string', title: 'Usage Description' },
          ]
        }
      ]
    }),
    defineField({
        name: 'fonts',
        title: 'Typography',
        type: 'array',
        of: [
            {
                type: 'object',
                fields: [
                    { name: 'name', type: 'string', title: 'Font Name' },
                    { name: 'type', type: 'string', title: 'Type (Sans/Display)' },
                    { name: 'description', type: 'text', title: 'Description' },
                    { name: 'googleFontLink', type: 'url', title: 'Google Fonts Link' }
                ]
            }
        ]
    }),
    defineField({
        name: 'downloads',
        title: 'Downloadable Assets',
        type: 'array',
        of: [
            {
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'file', type: 'file', title: 'File Upload' }
                ]
            }
        ]
    })
  ],
})
