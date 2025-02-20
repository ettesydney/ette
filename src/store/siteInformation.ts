import { atom } from 'jotai';
import { client } from '@/sanity/lib/client';
import { GENERIC_QUERY } from '@/sanity/lib/queries';

export const siteInformation = atom(async () => {
  return await client.fetch(GENERIC_QUERY);
});
