import { client } from '@/sanity/lib/client';
import { WHATS_ON_QUERY } from '@/sanity/lib/queries';
import WhatsOnCard from '../whatsOnCard';

export default async function WhatsOn() {
  const whatsOnData = await client.fetch(WHATS_ON_QUERY);

  if (!whatsOnData) {
    return <p className="text-center text-red-500">No events found.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-primarylight">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4">{whatsOnData.title}</h2>

      {/* Section Blurb */}
      <p className="text-lg text-gray-700 mb-6">{whatsOnData.blurb}</p>

      {/* Events Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,_25%)] gap-6 w-full justify-center">
        {whatsOnData.events?.map((event: any, index: number) => (
          <WhatsOnCard
            key={index}
            date={event.date}
            title={event.title}
            blurb={event.blurb}
            image={event.image ? { url: event.image.asset.url, alt: event.image.alt } : undefined}
            callToAction={event.callToAction}
          />
        ))}
      </div>
    </div>
  );
}
