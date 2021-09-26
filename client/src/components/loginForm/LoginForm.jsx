import React, { useContext, useEffect, useRef, useState } from "react";

import "./LoginForm.scss";

import { StoreContext } from "../../store/Store";
import Modal from "../modal/Modal";

import {
  auth,
  signInWithEmailAndPassword,
} from "../../firebase/ConfigFirebase";

const LoginForm = () => {
  const { isOpenModalSignIn, setIsOpenModalSignIn } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const idTimeOut = useRef(null);

  const handleSubmitFormLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsOpenModalSignIn(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });

    setEmail("");
    setPassword("");
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsOpenModalSignIn(false);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    errorMessage && setTimeout(() => setErrorMessage(""), 1000);
    return () => clearTimeout(idTimeOut);
  }, [errorMessage]);

  return (
    <Modal isOpenModal={isOpenModalSignIn}>
      <div className="login">
        <h2 className="login__title">Sing In</h2>
        {errorMessage && <p className="login__message">{errorMessage}</p>}
        <form className="login__form" onSubmit={handleSubmitFormLogin}>
          <div className="login__wrapper-input">
            <label className="login__label">Email:</label>
            <input
              type="text"
              className="login__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__wrapper-input">
            <label className="login__label">Password:</label>
            <input
              type="text"
              className="login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login__button-submit">Sign in</button>

          <button className="login__button-close" onClick={handleCloseModal}>
            <i className="fas fa-times"></i>
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginForm;
