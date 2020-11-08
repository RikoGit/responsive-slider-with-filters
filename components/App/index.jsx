import React, { useState } from "react";

import Header from "../Header/index.jsx";
import Swiper from "../Swiper/index.jsx";
import countries from "../../countries.js";

const App = () => {
  const cities = countries
    .reduce((acc, country) => {
      country.cities.forEach((city) => {
        acc.push({ ...city, country: country.name });
        return acc;
      });
      return acc;
    }, [])
    .sort(() => Math.random() - 0.5);

  const [cards, setCards] = useState(cities);

  const onClick = (name) =>
    setCards(cities.filter((city) => city.country === name));

  return (
    <div>
      <Header onClick={onClick} />
      <Swiper cards={cards} />
    </div>
  );
};

export default App;
