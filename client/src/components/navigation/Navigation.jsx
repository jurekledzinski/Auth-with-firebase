import React from "react";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-menu">
          <li className="header__nav__link">Home</li>
          <li className="header__nav__link">Sign in</li>
          <li className="header__nav__link">Sign up</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
