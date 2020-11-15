import React from "react";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
//import "swiper/swiper.scss";
//import "swiper/navigation.scss";
//import "swiper/pagination.scss";

import "./styles.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

import Card from "../Card/index.jsx";

export default ({
  cards,
  onChange,
  onCloseCard,
  onSwiper,
  onMouseEnterCard,
  onMouseLeaveCard,
}) => {
  return (
    <Swiper
      onSwiper={(swiper) => {
        onSwiper(swiper);
      }}
      spaceBetween={10}
      slidesPerColumn={2}
      slidesPerColumnFill={"row"}
      breakpoints={{
        // when window width is >= 375 and <= 767
        375: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
        // when window width is >= 768 and <= 1439
        768: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        // when window width is >= 1440px
        1440: {
          spaceBetween: 30,
          slidesPerView: 6,
        },
      }}
      onBreakpoint={(swiper) => console.log(swiper.breakpoint)}
      navigation
      pagination={{ clickable: true }}
      watchOverflow
      onInit={(swiper) => {
        console.log("ddd");
        onChange(swiper);
      }}
      onSlideChange={(swiper) => {
        console.log("silderchange");
        console.log(swiper.params);
        onChange(swiper);
      }}
      grabCursor
    >
      {cards.map((card) => (
        <SwiperSlide>
          <Card
            key={card.name}
            country={card.country}
            city={card.name}
            description={card.description}
            img={card.img}
            isLeft={card.isLeft}
            isRight={card.isRight}
            isOpen={card.isOpen}
            onClose={onCloseCard}
            onMouseEnter={onMouseEnterCard}
            onMouseLeave={onMouseLeaveCard}
          ></Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
