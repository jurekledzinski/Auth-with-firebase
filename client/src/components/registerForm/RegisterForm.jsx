import React, { useContext, useState } from "react";

import "./RegisterForm.scss";

import { StoreContext } from "../../store/Store";
import Modal from "../modal/Modal";

const RegisterForm = () => {
  const { isOpenModalSignUp, setIsOpenModalSignUp } = useContext(StoreContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitFormLogin = (e) => {
    e.preventDefault();
    if (!name || !password) return;

    const dataRegister = {
      name,
      password,
    };

    console.log("Data register ", dataRegister);
    setName("");
    setPassword("");
  };

  const handleCloseModal = () => {
    setIsOpenModalSignUp(false);
    setName("");
    setPassword("");
  };

  return (
    <Modal isOpenModal={isOpenModalSignUp}>
      <div className="register">
        <h2 className="register__title">Sing Up</h2>
        <form className="register__form" onSubmit={handleSubmitFormLogin}>
          <div className="register__wrapper-input">
            <label className="register__label">Name:</label>
            <input
              type="text"
              className="register__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
