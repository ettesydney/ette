import { GENERIC_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

export default async function Footer() {

  console.log('***')
  const siteData = await client.fetch(GENERIC_QUERY)

  return (
    <footer className="bottom-0 w-full z-10 p-4 dark-bg min-h-screen">
      <div className="grid grid-cols-12 items-center gap-4">
        {/* Project Inquiries */}
       FOOTER       
      </div>
    </footer>
  );
}

