"use client"; // Ensures the component runs on the client side

import Image from 'next/image';

interface ImageProps {
  img?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageHelper({ img, alt = '', width = 500, height = 300, className = '' }: ImageProps) {
  if (!img) return null; // Don't render anything if no image URL

  return (
    <Image 
      src={img} 
      alt={alt} 
      width={width} 
      height={height} 
      className={`mx-auto ${className}`} 
    />
  );
}
