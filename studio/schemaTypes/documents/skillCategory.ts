import {defineField, defineType} from 'sanity'

export const skillCategory = defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'skills', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}, validation: (r) => r.required()}),
    defineField({name: 'order', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
})
