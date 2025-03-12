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
    <div className="logo w-1/4 pl-4 pt-4 z-[11] lg:text-left max-w-[150px]">
      <ImageHelper 
      img={imageData.asset?.url} 
      alt='ette Sydney logo' 
      width={200} 
      height={100} 
      />
    </div>
  );
}

// import ImageHelper from "./helpers/imageHelper";

// type HeaderLogoProps = {
//   imageData: {
//     asset?: {
//       url: string;
//     };
//     alt?: string;
//   };
// };

// export default function HeaderLogo({ imageData }: HeaderLogoProps) {
//   console.log("imageData", imageData);

//   return (
//     <div className="logo-wrapper fixed top-4 left-4 z-[50] w-[150px] lg:w-[200px]">
//       {/* Main Logo */}
//       <div className="logo relative mix-blend-difference">
//         <ImageHelper
//           img={imageData.asset?.url}
//           alt={imageData.alt || "ette Sydney logo"}
//           width={200}
//           height={100}
//         />
//       </div>

//       {/* Overlay Layer */}
//       <div className="overlay absolute inset-0 bg-white mix-blend-difference pointer-events-none"></div>
//     </div>
//   );
// }
