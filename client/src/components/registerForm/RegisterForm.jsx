import React, { useContext, useState } from "react";

import "./RegisterForm.scss";

import { StoreContext } from "../../store/Store";
import Modal from "../modal/Modal";

import {
  auth,
  createUserWithEmailAndPassword,
  db,
} from "../../firebase/ConfigFirebase";

const RegisterForm = () => {
  const { isOpenModalSignUp, setIsOpenModalSignUp } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth);
  console.log(db);

  const handleSubmitFormRegister = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    const dataRegister = {
      email,
      password,
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });

    setEmail("");
    setPassword("");
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsOpenModalSignUp(false);
    setEmail("");
    setPassword("");
  };

  return (
    <Modal isOpenModal={isOpenModalSignUp}>
      <div className="register">
        <h2 className="register__title">Sing Up</h2>
        <form className="register__form" onSubmit={handleSubmitFormRegister}>
          <div className="register__wrapper-input">
            <label className="register__label">Email:</label>
            <input
              type="text"
              className="register__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="register__wrapper-input">
            <label className="register__label">Password:</label>
            <input
              type="text"
              className="register__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="register__button-signIn">Sign in</button>

          <button className="register__button-close" onClick={handleCloseModal}>
            <i className="fas fa-times"></i>
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterForm;
