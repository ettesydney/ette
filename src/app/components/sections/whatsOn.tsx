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
    <div className="flex flex-col items-center justify-center text-center bg-primarylight w-full mb-[5rem] lg:mb-0 mt-[5rem] lg:mt-0 lg:py-[4rem] min-h-[400px]" id='whats-on'>

    {/* Section Title */}
      <h2 className="title mb-4 lg:mb-[2rem] pt-[4rem] md:pt-0 mt-[2rem] lg:mt-[3rem]">{whatsOnData.title}</h2>

      {/* Section Blurb */}
      <p className="max-w-3xl px-8 lg:ml-auto lg:mr-auto mb-[5rem]">{whatsOnData.blurb}</p>
      
      {/* Events Grid (Visible on lg and above) - Updated to max 2 per row */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px] justify-center mb-[2rem]">
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