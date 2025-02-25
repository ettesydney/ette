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
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-red-200">
      {/* Function Sections */}
      {functionsData.sections?.map((section: any, index: number) => (
        <div key={index} className="mb-24"> {/* Increased margin-bottom for more spacing */}
          {/* Centered Image Slider - 6 columns wide */}
          <div className="mx-auto w-full md:w-1/2 lg:w-1/2">
            <SwiperHelper>
              {section.images?.map((image: any, index: number) => (
                <div key={index}>
                  <Image
                    src={image.asset.url}
                    alt={image.alt || "Image"}
                    width={800}
                    height={300}
                  />
                </div>
              ))}
            </SwiperHelper>
          </div>
  
          {/* Added more vertical spacing below Swiper */}
          <div> {/* Increased top margin for better separation */}
            <h3 className="text-2xl font-semibold mt-6 mb-4">{section.title}</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">{section.blurb}</p>
            {section.callToAction && (
              <a 
                href={section.callToAction} 
                target="_blank" 
                rel="noopener noreferrer"
                className="button inline-block transition"
              >
                Learn More
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
  
}
