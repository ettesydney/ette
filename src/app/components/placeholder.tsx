import Image from 'next/image';
import tomatoes from '../../../public/tomatoes.png';

export default function PlaceHolder() {
  return (
    <div className="h-screen flex flex-col justify-between items-center relative text-primary">
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <Image src={tomatoes} alt="Placeholder Image" width={200} height={200} />
        <h1 className="text-8xl font-bold mt-4 italic">ette</h1>
        <p className="text-lg mt-2 uppercase">Opening Soon</p>
        <p className="text-lg uppercase">10 Bridge St. Sydney 2000</p>
      </div>
      
      {/* Bottom Buttons */}
      <div className="w-full flex justify-between absolute bottom-4 left-0 px-4 uppercase">
        <a>Sign up for updates</a>
        <a className="uppercase">Instagram</a>
      </div>
    </div>
  );
}
