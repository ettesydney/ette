import { defineField, defineType, DocumentDefinition } from 'sanity';

interface CustomDocumentDefinition extends DocumentDefinition {
  __experimental_actions?: string[];
}

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Prevents "Create" & "Delete"
  fields: [
    defineField({
      name: 'primaryImages',
      title: 'Primary Images',
      type: 'array', // Make it an array to allow multiple images
      of: [
        {
          type: 'image',
          options: { hotspot: true }, // Enable hotspot for each image
        },
      ],
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
    }),
  ],
} as CustomDocumentDefinition);
