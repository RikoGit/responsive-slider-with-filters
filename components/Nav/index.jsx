import React from "react";

import countries from "../../countries.js";

const Nav = ({ onClick }) => (
  <nav>
    <ul>
      {countries.map((country) => (
        <li key={country.name} onClick={() => onClick(country.name)}>
          <a href="#">{country.name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
