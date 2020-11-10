import React, { useState } from "react";

import Header from "../Header/index.jsx";
import Swiper from "../Swiper/index.jsx";
import countries from "../../countries.js";

import "./styles.scss";

const App = () => {
  const state = countries
    .reduce((acc, country) => {
      country.cities.forEach((city) => {
        acc.push({
          ...city,
          country: country.name,
          isRight: false,
          isOpen: false,
        });
        return acc;
      });
      return acc;
    }, [])
    .sort(() => Math.random() - 0.5);

  const [cards, setCards] = useState(state);

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
      setCards(state);

      return;
    }
    setCards(state.filter((city) => city.country === name));
    console.log(cards);
  };

  const onClickCard = (city) => {
    const newCards = cards.map((card) => {
      if (card.name === city) {
        return { ...card, isOpen: !card.isOpen };
      } else return { ...card, isOpen: card.name === city };
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

  const onMouseLeaveCard = (city) => {
    const newCards = cards.map((card) => {
      if (card.name === city) {
        return { ...card, isOpen: false };
      } else return { ...card, isOpen: false };
    });

    setCards(newCards);
  };

  const onSlideChange = (swiper) => {
    const cardsPerLine = Math.floor(cards.length / 2);
    setCards(
      cards.map((card, index) => {
        return {
          ...card,
          isRight:
            index % (cardsPerLine + 1) < swiper.activeIndex + 6 &&
            index % (cardsPerLine + 1) >= swiper.activeIndex + 4
              ? true
              : false,
        };
      })
    );
  };

  return (
    <div className="main">
      <Header buttons={buttons} onClick={onClick} />
      <Swiper
        cards={cards}
        onSlideChange={onSlideChange}
        onClickCard={onClickCard}
        onMouseEnterCard={onMouseEnterCard}
        onMouseLeaveCard={onMouseLeaveCard}
      />
    </div>
  );
};

export default App;
