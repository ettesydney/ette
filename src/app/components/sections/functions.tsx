import { client } from '@/sanity/lib/client';
import { FUNCTIONS_QUERY } from '@/sanity/lib/queries';
import SwiperHelper from '../helpers/swiperHelper';
import Image from 'next/image';

export default async function Functions() {
  const functionsData = await client.fetch(FUNCTIONS_QUERY);

  if (!functionsData) {
    return <p className="text-center text-red-500">No function data found.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center text-center mx-[2rem] mt-[3rem] lg:mt-[10rem]" >
      {/* Function Sections */}
      {functionsData.sections?.map((section: any, index: number) => (
        <div key={index} className="w-full mt-[2rem] md:mt-0"> {/* Full width container */}
          {/* Swiper Container - Ensuring Visibility */}
          <div className="w-full lg:mx-auto max-w-[800px] lg:mb-[6rem] md:ml-auto md:mr-auto"> {/* Adjusted for better responsiveness */}
            <SwiperHelper>
              {section.images?.map((image: any, index: number) => (
                <div key={index} className="w-full">
                  <Image
                    src={image.asset.url}
                    alt={image.alt || "Image"}
                    width={800}
                    height={300}
                    className="w-full h-auto object-cover" // Ensures proper scaling
                  />
                </div>
              ))}
            </SwiperHelper>
          </div>

          {/* Content Below Swiper */}
          <div className="mt-8 px-4 md:px-0"> {/* Added spacing and padding */}
            <h2 className="title mb-4 lg:mb-[2rem]">{section.title}</h2>
            <p className=" mb-6 max-w-3xl md:ml-auto md:mr-auto">{section.blurb}</p>
            {section.callToAction && (
              <a 
                href={section.callToAction} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 lg:mt-8 button inline-block transition px-4 py-2 w-[200px] text-center"
              >
                Enquire
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
