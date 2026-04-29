import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'company', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'date', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'duties', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'technologies', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}}),
    defineField({name: 'order', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
})
