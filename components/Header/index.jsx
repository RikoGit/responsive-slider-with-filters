import React from "react";

import countries from "../../countries.js";

const Header = () => (
  <header>
    <h2>Наши направления</h2>
    <nav>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <a href="#">{country.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
