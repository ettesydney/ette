import { defineField, defineType, DocumentDefinition } from 'sanity';

interface CustomDocumentDefinition extends DocumentDefinition {
  __experimental_actions?: string[];
}

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Prevents multiple About entries
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
    }),
  ],
} as CustomDocumentDefinition);
