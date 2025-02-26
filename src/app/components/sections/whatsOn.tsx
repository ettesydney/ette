import { client } from '@/sanity/lib/client';
import { WHATS_ON_QUERY } from '@/sanity/lib/queries';
import WhatsOnCard from '../whatsOnCard';
import SwiperHelper from '../helpers/swiperHelper';

export default async function WhatsOn() {
  const whatsOnData = await client.fetch(WHATS_ON_QUERY);

  if (!whatsOnData) {
    return <p className="text-center text-red-500">No events found.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-primarylight w-full">
      {/* Section Title */}
      <h2 className="title mb-4 mx-[2rem]">{whatsOnData.title}</h2>

      {/* Section Blurb */}
      <p className="mb-6 mx-[2rem]">{whatsOnData.blurb}</p>

      {/* Events Grid (Visible on lg and above) */}
      <div className="hidden lg:grid grid-cols-[repeat(auto-fit,_25%)] gap-6 w-full justify-center">
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

       {/* Mobile Swiper (Visible on md and below) */}
       <div className="lg:hidden flex justify-center w-full px-4">
        <div className="w-full max-w-[600px]">
          <SwiperHelper>
            {whatsOnData.events?.map((event: any, index: number) => (
              <WhatsOnCard
                key={index}
                date={event.date}
                title={event.title}
                blurb={event.blurb}
                image={event.image ? { url: event.image.asset.url, alt: event.image.alt } : undefined}
                callToAction={event.callToAction}
                callToActionText={event.callToActionText}
              />
            ))}
          </SwiperHelper>
        </div>
      </div>
    </div>
  );
}

