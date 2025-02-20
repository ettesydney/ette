import { client } from '@/sanity/lib/client';
import { HOMEPAGE_QUERY } from '@/sanity/lib/queries';
import ImageHelper from '../helpers/imageHelper';

export default async function Intro() {
  const introData = await client.fetch(HOMEPAGE_QUERY);

  if (!introData) {
    return <p className="text-center text-red-500">No home data found.</p>;
  }

  return (
    <div className="p-6 text-center">
      {/* Logo */}
      <div className="mb-4">
        <ImageHelper 
          img={introData.logo?.asset?.url} 
          alt={introData.logo?.alt || 'Logo'} 
          width={150} 
          height={150} 
        />
      </div>

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
      <p className="text-lg text-gray-700">{introData.blurb}</p>
    </div>
  );
}
