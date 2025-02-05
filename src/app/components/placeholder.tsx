import Image from 'next/image';
import tomatoes from '../../../public/tomatoes.png';
import image from '../../../public/ETTE_WEB2.jpg';
import etteLogo from '../../../public/Ette_Logo_Pink.png';
import etteLogoSyd from '../../../public/Ette_Logo_Sydney_Pink.png';

export default function PlaceHolder() {
  return (
    <div className="h-dvh flex flex-col justify-between items-center relative text-primary p-4">
      {/* Centered Content */}
      <div className="mx-auto grid grid-cols-12 gap-4 flex-grow text-center items-center lg:pb-12">
        {/* Main Content (Offset on Large Screens) */}
        <div className="col-span-12 lg:col-start-4 lg:col-span-6 flex flex-col items-center justify-center gap-8 lg:gap-16">
            <div className="w-full h-auto relative flex justify-center items-center">
              <Image 
              src={image} 
              alt="Placeholder Image" 
              height={380} 
              width={290} 
              className="object-contain h-72 sm:h-72 md:h-80 lg:h-auto xl:h-auto" 
              />
            </div>
            <div className="w-full h-auto relative flex justify-center items-center mt-8">
            <Image 
              src={etteLogoSyd} 
              alt="ette Logo" 
              width={500} 
              height={300} 
              className="object-contain h-28 sm:h-48 md:h-60 lg:h-auto xl:h-auto" 
            />
            </div>
          <div>
            <p className="lg:text-lg mb-8 uppercase"> An intimate bar and restaurant nestled in the heart of the city, <br/> with a changing menu guided by quality produce and honest flavours.</p>
            <p className="lg:text-lg uppercase">Opening Late March</p>            
          </div>
        </div>
      </div>
      
      {/* Bottom Buttons */}
      <div className="w-full grid grid-cols-12 absolute bottom-4 left-0 px-4 uppercase">
        <div className="col-span-1 lg:col-span-1 col-span-6">
          <a href='https://www.sevenrooms.com/explore/ette/subscription' target='_blank'>Subscribe</a>
        </div>
        <div className="lg:col-start-11 lg:col-span-2 col-span-6 text-right">
          <a href='https://www.instagram.com/ette.sydney/#' target='_blank' className="uppercase">@ette.sydney</a>
        </div>
      </div>
    </div>
  );
}