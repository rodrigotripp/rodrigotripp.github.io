import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one document of this type should exist
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({name: 'name', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'bio', type: 'text', rows: 4}),
    defineField({name: 'currentEmployer', title: 'Current Employer', type: 'string'}),
    defineField({name: 'location', type: 'string'}),
  ],
})
