import React from "react";
// import Swiper core and required components
import SwiperCore, { Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper components
SwiperCore.use([Navigation]);

import countries from "../../countries.js";
import Card from "../Card/index.jsx";

export default () => (
  <Swiper
    spaceBetween={50}
    slidesPerView={3}
    navigation
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {countries
      .reduce((acc, country) => {
        country.cities.forEach((city) => {
          acc.push(
            <SwiperSlide>
              <Card
                country={country.name}
                city={city.name}
                description={city.description}
                img={city.img}
              />
            </SwiperSlide>
          );
          return acc;
        });
        return acc;
      }, [])
      .sort(() => Math.random() - 0.5)}
  </Swiper>
);
