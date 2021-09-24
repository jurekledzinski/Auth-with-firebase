import React, { useContext } from "react";

import "./Navigation.scss";

import { StoreContext } from "../../store/Store";

const Navigation = () => {
  const {
    isOpenModalSignIn,
    setIsOpenModalSignIn,
    isOpenModalSignUp,
    setIsOpenModalSignUp,
  } = useContext(StoreContext);

  const handleSignIn = () => {
    if (!isOpenModalSignUp) setIsOpenModalSignIn(true);
  };
  const handleSignUp = () => {
    if (!isOpenModalSignIn) setIsOpenModalSignUp(true);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-menu">
          <li className="header__nav-link">Home</li>
          <li className="header__nav-link" onClick={handleSignIn}>
            Sign in
          </li>
          <li className="header__nav-link" onClick={handleSignUp}>
            Sign up
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
