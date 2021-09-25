import React, { useContext, useState } from "react";

import "./Navigation.scss";

import { StoreContext } from "../../store/Store";

import { auth, signOut } from "../../firebase/ConfigFirebase";

const Navigation = () => {
  const {
    isOpenModalSignIn,
    setIsOpenModalSignIn,
    isOpenModalSignUp,
    setIsOpenModalSignUp,
  } = useContext(StoreContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = () => {
    if (!isOpenModalSignUp) setIsOpenModalSignIn(true);
  };
  const handleSignUp = () => {
    if (!isOpenModalSignIn) setIsOpenModalSignUp(true);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User wylogowany");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
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
          <li className="header__nav-link" onClick={handleLogOut}>
            Log out
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
