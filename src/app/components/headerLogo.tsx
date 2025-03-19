import ImageHelper from "./helpers/imageHelper";


type HeaderLogoProps = {
  imageData: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
}

export default function HeaderLogo( { imageData }: HeaderLogoProps) {
  console.log('imageData', imageData);

  return (
    <div className="logo w-1/4 pl-4 pt-[18px] z-[11] lg:text-left max-w-[150px]">
      <ImageHelper 
      img={imageData.asset?.url} 
      alt='ette Sydney logo' 
      width={200} 
      height={100} 
      />
    </div>
  );
}
