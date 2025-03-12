"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import Image from "next/image";
import leftArrow from "../../../../public/left-arrow.svg";
import rightArrow from "../../../../public/right-arrow.svg";
import { useRef } from "react";

interface SwiperHelperProps {
  children: React.ReactNode;
  showNav?: boolean;
  startAutoPlay?: boolean;
  effectFade?: boolean;
}

export default function SwiperHelper({ children, showNav = true, startAutoPlay = false, effectFade = false }: SwiperHelperProps) {
  const swiperRef = useRef<any>(null);

  return (
    <div>
      {/* Swiper Component */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect={effectFade ? "fade" : "slide"}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={startAutoPlay ? {
          delay: 7000,
          disableOnInteraction: false,
        } : false}
        modules={[Navigation, Autoplay, EffectFade]}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}
      </Swiper>

      {showNav && (
        <div className="flex justify-between">
          <button
            className="flex items-center border-none"
            onClick={() => swiperRef.current?.slidePrev()}
            >
            <Image src={leftArrow} alt="Left Arrow" width={20} height={20} />
          </button>

          <button
            className="flex items-center border-none"
            onClick={() => swiperRef.current?.slideNext()}
            >
            <Image src={rightArrow} alt="Right Arrow" width={20} height={20} />
          </button>
        </div>
        )}
    </div>
  );
}
