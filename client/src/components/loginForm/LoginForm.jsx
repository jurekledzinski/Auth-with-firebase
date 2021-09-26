import React, { useContext, useState } from "react";

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

  const handleSubmitFormLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential, " log in");
        setIsOpenModalSignIn(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
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

  return (
    <Modal isOpenModal={isOpenModalSignIn}>
      <div className="login">
        <h2 className="login__title">Sing In</h2>
        <form className="login__form" onSubmit={handleSubmitFormLogin}>
          <div className="login__wrapper-input">
            <label className="login__label">Name:</label>
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
