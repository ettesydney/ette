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
    <div className="flex flex-col items-center justify-center min-h-screen lg:h-[80dvh] text-center px-4 md:px-8 lg:px-16" id='functions'>
      {/* Function Sections */}
      {functionsData.sections?.map((section: any, index: number) => (
        <div key={index} className="w-full "> {/* Full width container */}
          {/* Swiper Container - Ensuring Visibility */}
          <div className="w-full lg:mx-auto max-w-[800px] lg:mb-[3rem]"> {/* Adjusted for better responsiveness */}
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
            <h2 className="title lg:mb-[1rem]">{section.title}</h2>
            <p className=" mb-6 max-w-3xl lg:ml-auto lg:mr-auto">{section.blurb}</p>
            {section.callToAction && (
              <a 
                href={section.callToAction} 
                target="_blank" 
                rel="noopener noreferrer"
                className="lg:mt-[1rem] button inline-block transition px-4 py-2 w-[200px]"
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
