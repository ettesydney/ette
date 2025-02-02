// src/app/page.tsx (Home page - remains a server component)
import { client } from '@/sanity/lib/client';
import { HOMEPAGE_QUERY } from '@/sanity/lib/queries';
import { HomepageData } from '@/types/homepage';
import PlaceHolder from './components/placeholder';


export default async function Home() {
  const homepageData: HomepageData = await client.fetch(HOMEPAGE_QUERY);

  return (
    <div className="min-h-[var(--vh)] home w-full">
     <PlaceHolder />
    </div>
  );
}
