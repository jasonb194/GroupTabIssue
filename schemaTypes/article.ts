import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  groups: [
    {
      name: 'basics',
      title: 'Basics',
      default: true,
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  initialValue: {
    body: [],
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'basics',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'basics',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}],
    }),
  ],
})
