// src/app/page.tsx (Home page - remains a server component)
import { client } from '@/sanity/lib/client';
import { HOMEPAGE_QUERY } from '@/sanity/lib/queries';
import { HomepageData } from '@/types/homepage';



export default async function Home() {
  const homepageData: HomepageData = await client.fetch(HOMEPAGE_QUERY);

  return (
    <div className="home w-full h-screen bg-black bg-center">
     <h1>hello</h1>
    </div>
  );
}
