import React from "react";

import "./styles.scss";

const Card = ({ country, city, description, img }) => (
  <div className="card">
    <div className="card__container">
      <img
        className="card__img"
        alt={city}
        src={`images/${img}`}
        widht="170"
        height="250"
      />
      <div className="card__country">{country}</div>
      <div className="card__city">{city}</div>
      <div className="card__description">{description}</div>
    </div>
  </div>
);

export default Card;
