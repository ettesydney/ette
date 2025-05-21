import { defineField, defineType, DocumentDefinition } from 'sanity';

interface CustomDocumentDefinition extends DocumentDefinition {
  __experimental_actions?: string[];
}

export default defineType({
  name: 'functions',
  title: 'Functions',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Restrict to one functions entry
  fields: [
    defineField({
      name: 'sections',
      title: 'Function Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
            defineField({
              name: 'callToAction',
              title: 'Call to Action or Link',
              type: 'string',
            }),
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      description: 'Describe the image for accessibility.',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
} as CustomDocumentDefinition);
