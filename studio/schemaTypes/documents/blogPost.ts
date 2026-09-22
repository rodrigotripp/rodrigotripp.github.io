import {defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}, validation: (r) => r.required()}),
    defineField({name: 'excerpt', type: 'text', rows: 3, validation: (r) => r.required()}),
    defineField({name: 'content', type: 'array', of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]}),
    defineField({name: 'tags', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}}),
    defineField({name: 'publishedAt', type: 'datetime', validation: (r) => r.required()}),
    defineField({name: 'order', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Order', name: 'orderDesc', by: [{field: 'order', direction: 'desc'}]}],
})
