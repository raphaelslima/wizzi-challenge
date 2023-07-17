import React from "react";

import "./Header.scss";

import iconHeader from "../../assets/icon/icon-header.png";

const Header = () => {
  return (
    <header>
      <img src={iconHeader} alt="Icon" />
      <h1 className="header-title">Checkout</h1>
    </header>
  );
};

export default Header;
