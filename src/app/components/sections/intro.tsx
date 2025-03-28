import { client } from '../../../../sanity/lib/client';
import { HOMEPAGE_QUERY } from '../../../../sanity/lib/queries';
import ImageHelper from '../helpers/imageHelper';
import TextTicker from '../helpers/textTicker';
import SwiperHelper from '../helpers/swiperHelper';
import SneakyLogo from '../sneakyLogo';

export default async function Intro() {
  const introData = await client.fetch(HOMEPAGE_QUERY);

  if (!introData) {
    return <p className="text-center text-red-500">No home data found.</p>;
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-dvh text-center dark-bg w-full dark-section">
      <SneakyLogo />

      {/* Fullscreen Swiper */}
      <div className="hidden lg:block relative w-full h-screen">
        <SwiperHelper showNav={false} startAutoPlay={true} effectFade={true}>
          {introData.primaryImages?.map((image: any, index: number) => (
            <div key={index} className="relative w-full h-screen">
              <ImageHelper 
                img={image?.asset?.url}
                alt={image?.alt || `Primary Image ${index}`} 
                width={1920} 
                height={1080} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </SwiperHelper>
      </div>
      
      {/* Mobile Image (md and below) */}
      <div className="lg:hidden flex relative w-full h-screen">
        <ImageHelper 
          img={introData.mobileImage?.asset?.url} 
          alt={introData.mobileImage?.alt || 'Mobile Image'} 
          width={375} 
          height={550} 
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Blurb (Text Ticker Overlapping Image) */}
      <div className="absolute lg:bottom-[25%] bottom-[20%] left-0 right-0 text-primary w-full">
        {introData?.blurb && <TextTicker text={introData.blurb} />}
      </div>
    </div>
  );
}
