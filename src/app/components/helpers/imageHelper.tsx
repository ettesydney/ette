"use client"; // Ensures the component runs on the client side

import Image from 'next/image';

interface ImageProps {
  img?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  layout?: 'fill' | 'responsive' | 'intrinsic' | 'fixed';
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

export default function ImageHelper({
  img,
  alt = '',
  width,
  height,
  className = '',
  layout,
  objectFit
}: ImageProps) {
  if (!img) return null; // Don't render anything if no image URL

  // Determine dynamic props based on provided values
  const imageProps: Record<string, any> = { className: `${className}` };

  if (layout) {
    imageProps.layout = layout;
  } else {
    imageProps.width = width;
    imageProps.height = height;
  }

  if (objectFit) {
    imageProps.objectFit = objectFit;
  }

  return <Image src={img} alt={alt} {...imageProps} />;
}
