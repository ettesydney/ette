import { client } from '@/sanity/lib/client';
import { FUNCTIONS_QUERY } from '@/sanity/lib/queries';
// import ImageHelper from '../helpers/ImageHelper';

export default async function Functions() {
  const functionsData = await client.fetch(FUNCTIONS_QUERY);

  if (!functionsData) {
    return <p className="text-center text-red-500">No function data found.</p>;
  }

  return (
    <div className="p-6 text-center">
      {/* Function Sections */}
      {functionsData.sections?.map((section: any, index: number) => (
        <div key={index} className="mb-8">
          {/* Title */}
          <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>

          {/* Blurb */}
          <p className="text-lg text-gray-700 mb-4">{section.blurb}</p>

          {/* Call to Action */}
          {section.callToAction && (
            <a 
              href={section.callToAction} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          )}

          {/* Image Slider (Basic version) */}
          <div className="flex overflow-x-auto space-x-4 mt-4">
            Make your own image slider here, repeatable component
            {/* {section.images?.map((image: any, imgIndex: number) => (
              <div key={imgIndex} className="w-64 flex-shrink-0">
                <ImageHelper 
                  img={image.asset.url} 
                  alt={image.alt || 'Function Image'} 
                  width={250} 
                  height={150} 
                  className="rounded-lg"
                />
              </div>
            ))} */}
          </div>
        </div>
      ))}
    </div>
  );
}
