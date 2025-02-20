import ImageHelper from "./helpers/imageHelper";

interface WhatsOnCardProps {
  date: string;
  title: string;
  blurb: string;
  image?: { url: string; alt?: string };
  callToAction?: string;
}

export default function WhatsOnCard({ date, title, blurb, image, callToAction }: WhatsOnCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      {/* Event Date */}
      <p className="text-sm text-gray-500 mb-1">
        {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </p>

      {/* Event Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Event Image */}
      {image?.url && (
        <ImageHelper
          img={image.url} 
          alt={image.alt || 'Event Image'} 
          width={400} 
          height={250} 
          className="mx-auto mb-4 rounded-md"
        />
      )}

      {/* Event Blurb */}
      <p className="text-lg text-gray-600">{blurb}</p>

      {/* Call to Action Button */}
      {callToAction && (
        <div className="mt-4">
          <a 
            href={callToAction} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      )}
    </div>
  );
}
