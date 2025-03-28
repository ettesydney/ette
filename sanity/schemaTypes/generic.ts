import { defineType, defineField, DocumentDefinition } from 'sanity';

interface CustomDocumentDefinition extends DocumentDefinition {
  __experimental_actions?: string[];
}

export default defineType({
  name: 'generic',
  title: 'Site Information',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Restrict to one entry
  fields: [
    defineField({
      name: 'headerLogo',
      title: 'Header Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'footerImage',
      title: 'Footer Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bookNowLink',
      title: 'Book Now Link',
      type: 'url',
    }),
    defineField({
      name: 'subscribeLink',
      title: 'Subscribe Link',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
} as CustomDocumentDefinition);
