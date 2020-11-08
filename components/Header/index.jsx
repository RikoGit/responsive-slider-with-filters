import React from "react";

import Nav from "../Nav/index.jsx";

const Header = ({ onClick }) => (
  <header>
    <h2>Наши направления</h2>
    <Nav onClick={onClick} />
  </header>
);

export default Header;
