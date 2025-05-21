import { type SchemaTypeDefinition } from 'sanity'
import home from './home'
import about from './about'
import menu from './menu';
import functions from './functions'
import whatsOn from './whatsOn'
import generic from './generic';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [generic, home, about, menu, functions, whatsOn],
}

// create the specific schema (ie eventType.ts) in the schemaTypes folder
// import it and add it to the array.
// need to figure out how to make sections of the schema modular