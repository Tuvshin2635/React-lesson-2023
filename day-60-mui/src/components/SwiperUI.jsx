import { useState } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../data/data";

const SwiperUI = function () {
  const swiperRef = useRef;
  const [thumsSwiper, setThumsSwiper] = useState;

  const slides = images.map((images) => {
    return (
      <SwiperSlide>
        hi
        <img src={images.url} alt="slider" />
      </SwiperSlide>
    );
  });

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onBeforeInit={(swiperRef.current = Swiper)}
        // thumbs={{ swiper: thumsSwiper }}
      >
        {slides}
      </Swiper>
      <h1> day60 SWIPER</h1>
    </div>
  );
};

export { SwiperUI };
