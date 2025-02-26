import ImageHelper from "./helpers/imageHelper";
import { GENERIC_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

export default async function HeaderLogo() {

  const siteData = await client.fetch(GENERIC_QUERY)

  return (
    <div className="w-1/4 pl-2 pt-2 z-[11] lg:text-left logo">
      <ImageHelper 
      img={siteData.headerLogo?.asset?.url} 
      alt='ette Sydney logo' 
      width={200} 
      height={100} 
      />
    </div>
  );
}