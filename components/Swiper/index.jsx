import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";

import countries from "../../countries.js";
import Card from "../Card/index.jsx";

export default () => (
  <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {countries.map((country) =>
      country.cities.map((city) => (
        <SwiperSlide>
          <Card
            country={country.name}
            city={city.name}
            description={city.description}
            img={city.img}
          />
        </SwiperSlide>
      ))
    )}
  </Swiper>
);
