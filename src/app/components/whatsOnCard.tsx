'use client';

import ImageHelper from "./helpers/imageHelper";
import { useState } from 'react';

interface WhatsOnCardProps {
  date: string;
  title: string;
  blurb: string;
  image?: { url: string; alt?: string };
  callToAction?: string;
  callToActionText?: string;
}

export default function WhatsOnCard({ date, title, blurb, image, callToAction, callToActionText }: WhatsOnCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <div
        className="overflow-hidden border dark-bg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setTimeout(() => setIsHovered(false), 4000)} 
      >
        {/* Event Date (Always Visible) */}
        <p className="absolute top-5 text-sm text-primary w-full text-center z-10">
          {new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '.')}
        </p>

        {/* Event Image & Hover Effect */}
        <div className="relative w-full h-100">
          {image?.url && (
            <ImageHelper
              img={image.url}
              alt={image.alt || 'Event Image'}
              className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              width={350}
              height={300}
            />
          )}

          {/* Title (Large when not hovered, smaller when hovered) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-300">
            {!isHovered && (
              <div>
                {title.split(' ').map((word: string, index: number) => (
                  <h2 key={index} className="title  text-primary transition-transform duration-300 text-2xl mb-[1rem]">
                    {word}
                  </h2>
                ))}
              </div>
            )}
            {isHovered && <p className="text-primary max-w-[75%]">{blurb}</p>}
          </div>

          {/* Call to Action Button (Visible only on hover) */}
            {!isHovered && (

              <div className="absolute bottom-7 left-0 right-0 flex justify-center lg:hidden">
              <p
                className="mt-2 button text-primary px-4 py-2 w-[200px]"
                >
                View details
              </p>
            </div>
              )}

          {isHovered && callToAction && (
            <div className="absolute bottom-7 left-0 right-0 flex justify-center">
              <a
                href={callToAction}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 button text-primary px-4 py-2 w-[200px]"
              >
                {callToActionText ? callToActionText : 'View details'}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
