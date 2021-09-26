import React, { useContext, useState } from "react";

import "./Navigation.scss";

import { StoreContext } from "../../store/Store";

import { auth, signOut } from "../../firebase/ConfigFirebase";

const Navigation = () => {
  const {
    isLogInUser,
    isOpenModalSignIn,
    setIsOpenModalSignIn,
    isOpenModalSignUp,
    setIsOpenModalSignUp,
    setIsOpenBookForm,
  } = useContext(StoreContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpenSignInForm = () => {
    if (!isOpenModalSignUp) setIsOpenModalSignIn(true);
  };
  const handleOpenSignUpForm = () => {
    if (!isOpenModalSignIn) setIsOpenModalSignUp(true);
  };

  const handleOpenCreateBookForm = () => {
    setIsOpenBookForm(true);
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

  console.log(isLogInUser === false, "isLogInUser nav");

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-menu">
          {isLogInUser ? (
            <li
              className={
                isLogInUser && "header__nav-link header__nav-link--visible"
              }
              onClick={handleOpenCreateBookForm}
            >
              Add proverb
            </li>
          ) : null}
          {!isLogInUser ? (
            <li
              className={
                isLogInUser === null
                  ? "header__nav-link"
                  : "header__nav-link header__nav-link--visible"
              }
              onClick={handleOpenSignInForm}
            >
              Sign in
            </li>
          ) : null}
          {!isLogInUser ? (
            <li
              className={
                isLogInUser === null
                  ? "header__nav-link"
                  : "header__nav-link header__nav-link--visible"
              }
              onClick={handleOpenSignUpForm}
            >
              Sign up
            </li>
          ) : null}
          {isLogInUser ? (
            <li
              className={
                isLogInUser && "header__nav-link header__nav-link--visible"
              }
              onClick={handleLogOut}
            >
              Log out
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
