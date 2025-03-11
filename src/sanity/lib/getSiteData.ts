import { client } from "@/sanity/lib/client";
import { GENERIC_QUERY } from "@/sanity/lib/queries";

export async function getSiteData() {
  return await client.fetch(GENERIC_QUERY, {}, { next: { revalidate: 86400 } }); // Fetch at build time and revalidate daily
}