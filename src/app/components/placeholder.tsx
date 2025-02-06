import Image from 'next/image';
import etteLogoSyd from '../../../public/Ette_Logo_Sydney_Pink.png';
import facebook from '../../../public/facebook-svgrepo-com.svg';
import instagram from '../../../public/instagram-svgrepo-com.svg';

export default function PlaceHolder() {
  return (
    <div className="h-dvh flex flex-col justify-center items-center relative text-primary p-4 text-center">
      <div className="relative w-full flex flex-col items-center lg:max-w-[600px]">
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-center items-center w-full">
          <Image 
            src={etteLogoSyd} 
            alt="ette Logo" 
            width={600} 
            height={400} 
            className="object-contain h-32 sm:h-48 md:h-60 lg:h-auto xl:h-auto" 
          />
        </div>
        <div className="relative mt-[calc(100%+1rem)] lg:mt-[calc(100%+2rem)] text-center">
          <p className="lg:text-lg mb-8 uppercase">
            An intimate bar and restaurant nestled in the heart of the city, with a changing menu guided by quality produce and honest flavours.
          </p>
          <p className="lg:text-lg uppercase">Opening Late March</p>
        </div>
      </div>
      
      <div className="w-full grid grid-cols-12 absolute bottom-4 left-0 px-4 uppercase">
        <div className="col-span-1 lg:col-span-1 col-span-6 text-center custom-box-border">
          <a href='https://www.sevenrooms.com/explore/ette/subscription' target='_blank'>Subscribe</a>
        </div>
        <div className="lg:col-start-11 lg:col-span-2 col-span-6 text-right flex items-center justify-end gap-2">
          <a href="#">
            <Image src={facebook} alt="Facebook" width={20} height={20} className="fill-current text-primary" />
          </a>
          <a href="https://www.instagram.com/ette.sydney/#" target='_blank'>
            <Image src={instagram} alt="Instagram" width={20} height={20} className="fill-current text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
}
