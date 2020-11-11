import React, { useState } from "react";

import Header from "../Header/index.jsx";
import Swiper from "../Swiper/index.jsx";
import countries from "../../countries.js";
import getAllCountries from "../../utils/getAllCountries.js";
import "./styles.scss";

let cards = getAllCountries();
console.log(cards);

const App = () => {
  const [swiper, setSwiper] = useState(null);

  const state = getAllCountries();

  const [, setCardsHook] = useState(cards);
  const setCards = (newCards) => {
    cards = newCards;
    setCardsHook(newCards);
  };

  const updateCards = (swiper) => {
    console.log("updateCards");
    if (!swiper) return;
    console.log("swiper.slidesPerView = ");
    const cardsPerLine =
      cards.length > 6 * 2 ? Math.round(cards.length / 2) - 1 : 5;
    setCards(
      cards.map((card, index) => ({
        ...card,
        isRight:
          index % (cardsPerLine + 1) < swiper.activeIndex + 6 &&
          index % (cardsPerLine + 1) >= swiper.activeIndex + 4
            ? true
            : false,
      }))
    );
    console.log(
      cards.map((card, index) => ({
        ...card,
        isRight:
          index % (cardsPerLine + 1) < swiper.activeIndex + 6 &&
          index % (cardsPerLine + 1) >= swiper.activeIndex + 4
            ? true
            : false,
      }))
    );
  };

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
    console.log(name);
    if (name === "Все страны") {
      const newCards = state.map((city) => ({ ...city }));
      setCards(newCards);
      updateCards(swiper);
      return;
    }
    const newCards = state
      .filter((city) => city.country === name)
      .map((city) => ({ ...city }));
    setCards(newCards);
    updateCards(swiper);
    //console.log(cards);
  };

  const onCloseCard = (city) => {
    const newCards = cards.map((card) => {
      if (card.name === city) {
        return { ...card, isOpen: false };
      } else return { ...card };
    });

    setCards(newCards);
  };

  const onMouseEnterCard = (city) => {
    const newCards = cards.map((card) => {
      if (card.name === city) {
        return { ...card, isOpen: true };
      } else return { ...card, isOpen: false };
    });

    setCards(newCards);
  };
  console.log("Render App");

  const onMouseLeaveCard = (city) => {
    const newCards = cards.map((card) => {
      if (card.name === city) {
        return { ...card, isOpen: false };
      } else return { ...card, isOpen: false };
    });

    setCards(newCards);
  };

  const onSlideChange = (swiper) => {
    console.log("slider:");
    console.log(cards);
    console.log("after slider:");
    updateCards(swiper, cards);
    console.log(cards);
  };

  const onSwiper = (swiper) => {
    setSwiper(swiper);
  };

  return (
    <div className="main">
      <Header buttons={buttons} onClick={onClick} />
      <Swiper
        onSwiper={onSwiper}
        cards={cards}
        onChange={onSlideChange}
        onCloseCard={onCloseCard}
        onMouseEnterCard={onMouseEnterCard}
        onMouseLeaveCard={onMouseLeaveCard}
      />
    </div>
  );
};

export default App;
