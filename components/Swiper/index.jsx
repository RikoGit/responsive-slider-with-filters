import React from "react";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

import Card from "../Card/index.jsx";

export default ({ cards }) => (
  <Swiper
    spaceBetween={50}
    breakpoints={{
      // when window width is >= 375 and <= 767
      375: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      // when window width is >= 768 and <= 1439
      768: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      // when window width is >= 1440px
      1440: {
        spaceBetween: 40,
        slidesPerView: 6,
      },
    }}
    navigation
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {cards.map((card) => (
      <SwiperSlide>
        <Card
          key={card.name}
          country={card.country}
          city={card.name}
          description={card.description}
          img={card.img}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);
