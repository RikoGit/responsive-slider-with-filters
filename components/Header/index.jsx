import React from "react";

import "./styles.scss";

const Header = ({ buttons, onClick }) => (
  <header classname="header">
    <h2 className="header__title">Наши направления</h2>
    <div className="header__menu">
      <ul className="countries">
        {buttons.map((button) => {
          return (
            <li
              className={`countries__item${
                button.isSelected ? " countries__item_selected" : ""
              }`}
            >
              <button
                type="button"
                className={`countries__button${
                  button.isSelected ? " countries__button_disabled" : ""
                }`}
                key={button.text}
                onClick={() => onClick(button.text)}
                disabled={button.isSelected}
              >
                {button.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </header>
);

export default Header;
