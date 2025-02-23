import ImageHelper from "./helpers/imageHelper";
import { GENERIC_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

export default async function HeaderLogo() {

  const siteData = await client.fetch(GENERIC_QUERY)

  return (
    <div>
      <ImageHelper 
        img={siteData.headerLogo?.asset?.url} 
        alt='ette Sydney logo' 
        width={300} 
        height={200} 
      />
    </div>
  );
}