import { client } from "./client";
import { GENERIC_QUERY } from "./queries";

export async function getSiteData() {
  return await client.fetch(GENERIC_QUERY, {}, { next: { revalidate: 86400 } }); // Fetch at build time and revalidate daily
}