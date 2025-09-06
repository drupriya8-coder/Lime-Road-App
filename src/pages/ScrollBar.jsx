// src/components/ScrollBar.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper ki default styles
import "swiper/css";

// Agar pagination dots chahiye
import "swiper/css/pagination";

// Agar navigation arrows chahiye to
import "swiper/css/navigation";


const ScrollBar = () => {
  const banners = [
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240701/8WBg/6682b69f1d763220fa91874a/-473Wx593H-466888101-gold-MODEL.jpg",
      alt: "Ethnic Wear Women",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240701/L2YZ/6682b69f1d763220fa918764/-473Wx593H-466888104-olive-MODEL.jpg",
      alt: "Men Fashion",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240701/fYIC/6682b69f1d763220fa918765/-473Wx593H-466888107-purple-MODEL.jpg",
      alt: "Jewellery",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-[300px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScrollBar;
