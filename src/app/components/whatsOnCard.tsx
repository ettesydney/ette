'use client';

import ImageHelper from "./helpers/imageHelper";
import { useState } from 'react';

interface WhatsOnCardProps {
  date: string;
  title: string;
  blurb: string;
  image?: { url: string; alt?: string };
  callToAction?: string;
}

export default function WhatsOnCard({ date, title, blurb, image, callToAction }: WhatsOnCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <div
        className="overflow-hidden border rounded-lg shadow-lg dark-bg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)} // Keeps it visible briefly on mobile
      >
        {/* Event Date (Always Visible) */}
        <p className="absolute top-3 text-sm text-primary w-full text-center z-10">
          {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        {/* Event Image & Hover Effect */}
        <div className="relative w-full h-100">
          {image?.url && (
            <ImageHelper
              img={image.url}
              alt={image.alt || 'Event Image'}
              className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              width={250}
              height={200}
            />
          )}

          {/* Title (Large when not hovered, smaller when hovered) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-300">
            <h2 className={`text-xl text-primary transition-transform duration-300 ${isHovered ? 'text-lg' : 'text-2xl'}`}>
              {title}
            </h2>
            {isHovered && <p className="text-lg text-primary">{blurb}</p>}
          </div>

          {/* Call to Action Button (Visible only on hover) */}
          {isHovered && callToAction && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center">
              <a
                href={callToAction}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-blue-600 text-white px-4 py-2"
              >
                Learn More
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
