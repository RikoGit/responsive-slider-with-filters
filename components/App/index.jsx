import React, { useState } from "react";

import Header from "../Header/index.jsx";
import Swiper from "../Swiper/index.jsx";
import countries from "../../countries.js";

import "./styles.scss";

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

  const [buttons, setButtons] = useState(
    countries.reduce((acc, country, index) => {
      if (index === 0) acc.push({ text: "Все страны", isSelected: true });
      acc.push({ text: country.name, isSelected: false });

      return acc;
    }, [])
  );

  const onClick = (name) => {
    setButtons(
      buttons.map((button) => {
        if (button.text === name) return { ...button, isSelected: true };
        else return { ...button, isSelected: false };
      })
    );
    if (name === "Все страны") {
      setCards(cities);

      return;
    }
    setCards(cities.filter((city) => city.country === name));
  };

  return (
    <div className="main">
      <Header buttons={buttons} onClick={onClick} />
      <Swiper cards={cards} />
    </div>
  );
};

export default App;
