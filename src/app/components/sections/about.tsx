import { client } from '@/sanity/lib/client';
import { ABOUT_QUERY } from '@/sanity/lib/queries';
import ImageHelper from '../helpers/imageHelper';

export default async function About() {
  const aboutData = await client.fetch(ABOUT_QUERY);


  console.log('about data', aboutData)

  if (!aboutData) {
    return <p className="text-center text-red-500">No about data found.</p>;
  }

  return (
    <div className="p-6 text-center">
      {/* About Image */}
      <div className="mb-4">
        <ImageHelper 
          img={aboutData.image?.asset?.url} 
          alt={aboutData.image?.alt || 'About Image'} 
          width={500} 
          height={300} 
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">{aboutData.title}</h2>

      {/* Blurb */}
      <p className="text-lg text-gray-700">{aboutData.blurb}</p>
    </div>
  );
}
