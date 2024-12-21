import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination, Navigation } from "swiper/modules"; // Correct import path for modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageCarousel = () => {
  const images = [
    "/heroimage.jpg",
    "/betting1.jpg",
    "/betting2.jpg",
  ];

  return (
    <div className="py-8 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="w-full max-w-7xl mx-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-75 object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
