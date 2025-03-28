import { defineField, defineType, DocumentDefinition } from 'sanity';

interface CustomDocumentDefinition extends DocumentDefinition {
  __experimental_actions?: string[];
}

export default defineType({
  name: 'whatsOn',
  title: "What's On",
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Restrict to one "What's On" entry
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
      name: 'events',
      title: "What's On Events",
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'date',
              title: 'Date',
              type: 'date',
              options: {
                dateFormat: 'YYYY-MM-DD',
              },
            }),
            defineField({
              name: 'title',
              title: 'Event Title',
              type: 'string',
            }),
            defineField({
              name: 'blurb',
              title: 'Event Blurb',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Event Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Describe the image for accessibility.',
                }),
              ],
            }),
            defineField({
              name: 'callToAction',
              title: 'Call to Action or Link',
              type: 'string',
            }),
            defineField({
              name: 'callToActionText',
              title: 'Call to Action Text',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
} as CustomDocumentDefinition);
