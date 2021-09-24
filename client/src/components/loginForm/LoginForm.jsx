import React, { useContext, useState } from "react";

import "./LoginForm.scss";

import { StoreContext } from "../../store/Store";
import Modal from "../modal/Modal";

const LoginForm = () => {
  const { isOpenModalSignIn, setIsOpenModalSignIn } = useContext(StoreContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitFormLogin = (e) => {
    e.preventDefault();
    if (!name || !password) return;

    const dataLogin = {
      name,
      password,
    };

    console.log("Data login ", dataLogin);
    setName("");
    setPassword("");
  };

  const handleCloseModal = () => {
    setIsOpenModalSignIn(false);
    setName("");
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <button className="login__button-signIn">Sign in</button>

          <button className="login__button-close" onClick={handleCloseModal}>
            <i className="fas fa-times"></i>
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginForm;
