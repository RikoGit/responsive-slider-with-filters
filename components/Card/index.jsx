import React from "react";

import "./styles.scss";

const Card = ({
  country,
  city,
  description,
  img,
  isRight,
  isOpen,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className={`card${isOpen ? " card_open" : ""}${
      isRight ? " card_position_right" : ""
    }`}
    // onClick={() => onClick(city)}
    onMouseEnter={() => onMouseEnter(city)}
    onMouseLeave={() => onMouseLeave(city)}
  >
    <div className="card__container">
      <img className="card__img" alt={city} src={`images/${img}`} />
      <div className="card__country">{country}</div>
      <div className="card__city">{city}</div>
    </div>
    <div className="card__description">{description}</div>
  </div>
);

export default Card;
