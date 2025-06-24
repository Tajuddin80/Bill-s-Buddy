import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ImageSwiper = ({ data }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 1000, disableOnInteraction: false }} 
      modules={[Autoplay]} 
    >
      {data.map((sinImg) => (
        <SwiperSlide key={sinImg.id}>
          <img className="h-[40vh]" src={sinImg.image} alt={sinImg.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
