import React from "react";

import "./LoginForm.scss";

import Modal from "../modal/Modal";

const LoginForm = () => {
  return (
    <Modal isOpenModal={false}>
      <div className="login-form"></div>
    </Modal>
  );
};

export default LoginForm;
