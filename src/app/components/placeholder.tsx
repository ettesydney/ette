import Image from 'next/image';
import tomatoes from '../../../public/tomatoes.png';
import etteLogo from '../../../public/Ette_Logo_Pink.png';

export default function PlaceHolder() {
  return (
    <div className="h-screen flex flex-col justify-between items-center relative text-primary p-4">
      {/* Centered Content */}
      <div className="container mx-auto grid grid-cols-12 gap-4 flex-grow text-center items-center lg:pb-12">
        {/* Main Content (Offset on Large Screens) */}
        <div className="col-span-12 lg:col-start-5 lg:col-span-4 flex flex-col items-center justify-center gap-16">
          <div className="w-full h-auto relative flex justify-center items-center">
            <Image src={tomatoes} alt="Placeholder Image" width={300} height={300} />
          </div>
          <div className="w-full h-auto relative flex justify-center items-center">
            <Image src={etteLogo} alt="ette Logo" width={500} height={300} objectFit="contain" />
          </div>
          <div>
            <p className="text-lg mt-2 uppercase">Opening Soon</p>
            <p className="text-lg uppercase">10 Bridge St. Sydney 2000</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Buttons */}
      <div className="w-full grid grid-cols-12 absolute bottom-4 left-0 px-4 uppercase">
        <div className="col-span-1 lg:col-span-1 col-span-6">
          <a>Subscribe</a>
        </div>
        <div className="lg:col-start-11 lg:col-span-2 col-span-6 text-right">
          <a className="uppercase">@ettesydney</a>
        </div>
      </div>
    </div>
  );
}