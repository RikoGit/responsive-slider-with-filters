import React from "react";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "../Card/index.jsx";
import "./styles.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

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
      spaceBetween={20}
      slidesPerColumn={2}
      slidesPerColumnFill={"row"}
      breakpoints={{
        // when window width is >= 375 and <= 767
        0: {
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
      navigation
      pagination={{ clickable: true }}
      watchOverflow
      onInit={(swiper) => {
        onChange(swiper);
      }}
      onResize={(swiper) => {
        onChange(swiper);
      }}
      onSlideChange={(swiper) => {
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
