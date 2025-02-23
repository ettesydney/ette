import { client } from '@/sanity/lib/client';
import { FUNCTIONS_QUERY } from '@/sanity/lib/queries';
import ImageSlider from '../helpers/imageSlider';

export default async function Functions() {
  const functionsData = await client.fetch(FUNCTIONS_QUERY);

  if (!functionsData) {
    return <p className="text-center text-red-500">No function data found.</p>;
  }

  return (
    <div className="p-6 text-center min-h-screen">
      {/* Function Sections */}
      {functionsData.sections?.map((section: any, index: number) => (
        <div key={index} className="mb-16">
          
          {/* Centered Image Slider - 6 columns wide */}
          <div className="mx-auto w-full md:w-1/2 lg:w-1/2" style={{ height: '300px' }}>
            <ImageSlider images={section.images} />
          </div>

          <h3 className="text-2xl font-semibold mt-6 mb-2">{section.title}</h3>

          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">{section.blurb}</p>

          {section.callToAction && (
            <a 
              href={section.callToAction} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
