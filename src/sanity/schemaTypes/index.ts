import { type SchemaTypeDefinition } from 'sanity'
import {eventType} from './eventType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType],
}

// create the specific schema (ie eventType.ts) in the schemaTypes folder
// import it and add it to the array.
// need to figure out how to make sections of the schema modular