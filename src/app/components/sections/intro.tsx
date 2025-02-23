import { client } from '@/sanity/lib/client';
import { HOMEPAGE_QUERY } from '@/sanity/lib/queries';
import ImageHelper from '../helpers/imageHelper';
import TextTicker from '../helpers/textTicker';

export default async function Intro() {
  const introData = await client.fetch(HOMEPAGE_QUERY);

  if (!introData) {
    return <p className="text-center text-red-500">No home data found.</p>;
  }

  return (
    <div className="text-center dark-bg min-h-screen">
      {/* Primary Image */}
      <div className="mb-4">
        <ImageHelper 
          img={introData.primaryImage?.asset?.url} 
          alt={introData.primaryImage?.alt || 'Primary Image'} 
          width={500} 
          height={300} 
        />
      </div>

      {/* Mobile Image (for mobile views) */}
      <div className="md:hidden mb-4">
        <ImageHelper 
          img={introData.mobileImage?.asset?.url} 
          alt={introData.mobileImage?.alt || 'Mobile Image'} 
          width={300} 
          height={200} 
        />
      </div>

      {/* Blurb */}
      <div className='text-primary w-full'>
        {introData?.blurb && <TextTicker text={introData.blurb} /> }
      </div>
    </div>
  );
}
