import React, { useContext, useState } from "react";

import "./RegisterForm.scss";

import { StoreContext } from "../../store/Store";
import Modal from "../modal/Modal";

import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
} from "../../firebase/ConfigFirebase";

const RegisterForm = () => {
  const { isOpenModalSignUp, setIsOpenModalSignUp } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addBioToFireStore = async (userCredential) => {
    await setDoc(doc(db, "bio", userCredential), {
      name: name,
    });
  };

  const handleSubmitFormRegister = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        addBioToFireStore(userCredential.user.uid);
        setIsOpenModalSignUp(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
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
          <div className="register__wrapper-input">
            <label className="register__label">Bio:</label>
            <input
              type="text"
              className="register__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button className="register__button-submit">Sign up</button>

          <button className="register__button-close" onClick={handleCloseModal}>
            <i className="fas fa-times"></i>
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterForm;
