import React from "react";

const Card = ({ country, city, description, img }) => (
  <div className="card">
    <div className="card__country">{country}</div>
    <div className="card__city">{city}</div>
    <div className="card__description">{description}</div>
  </div>
);

export default Card;
