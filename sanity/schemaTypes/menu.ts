import { defineField, defineType, DocumentDefinition} from 'sanity';

interface CustomDocumentDefinition extends DocumentDefinition {
  __experimental_actions?: string[];
}

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Restrict to one menu entry
  fields: [
    defineField({
      name: 'title',
      title: 'Title Section',
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
          ],
        },
      ],
    }),
    defineField({
      name: 'menuBlurb',
      title: 'Menu Blurb',
      type: 'text',
    }),
    defineField({
      name: 'sections',
      title: 'Menu Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'items',
              title: 'Menu Items',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'drinksMenu',
      title: 'Drinks Menu (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
  ],
} as CustomDocumentDefinition);
