"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { GalleryImage } from '@/types/homepage';

interface ImageSliderProps {
  images: GalleryImage[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        modules={[Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.asset.url}
              alt={image.alt || "Image"}
              width={1000}
              height={300}
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
   </div>

  );
};

export default ImageSlider;
