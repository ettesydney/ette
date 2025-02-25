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
    <div className="flex flex-col items-center justify-center min-h-screen text-center dark-bg">
      <div className='flex justify-center w-full h-full relative'>

        {/* Primary Image (80% Height, Centered, Fixed Width) */}
        <div className="relative h-[80vh] w-1/2 flex items-center justify-center">
          <ImageHelper 
            img={introData.primaryImage?.asset?.url} 
            alt={introData.primaryImage?.alt || 'Primary Image'} 
            width={800} // Adjust width as needed
            height={600} 
            className="rounded-lg shadow-lg"
          />
        </div>
    
        {/* Mobile Image (Only Shown on Small Screens) */}
        <div className="md:hidden w-[80%] h-[50vh] flex items-center justify-center">
          <ImageHelper 
            img={introData.mobileImage?.asset?.url} 
            alt={introData.mobileImage?.alt || 'Mobile Image'} 
            width={400} 
            height={300} 
            className="rounded-md"
          />
        </div>
    
        {/* Blurb (Text Ticker Overlapping Image, 25% from Bottom) */}
        <div className="absolute bottom-[25%] left-0 right-0 text-primary w-full">
          {introData?.blurb && <TextTicker text={introData.blurb} />}
        </div>
      </div>
    </div>

  );
  
  
}
