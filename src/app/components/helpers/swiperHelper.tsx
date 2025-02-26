"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import leftArrow from "../../../../public/left-arrow.svg";
import rightArrow from "../../../../public/right-arrow.svg";
import { useRef } from "react";

interface SwiperHelperProps {
  children: React.ReactNode;
}

export default function SwiperHelper({ children }: SwiperHelperProps) {
  const swiperRef = useRef<any>(null);

  return (
    <div>
      {/* Swiper Component */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="flex justify-between">
        {/* Left Arrow */}
        <button
          className="flex items-center border-none"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image src={leftArrow} alt="Left Arrow" width={20} height={20} />
        </button>

        {/* Right Arrow */}
        <button
          className="flex items-center border-none"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image src={rightArrow} alt="Right Arrow" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
