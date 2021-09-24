import React from "react";

import "./RegisterForm.scss";

import Modal from "../modal/Modal";

const RegisterForm = () => {
  return (
    <Modal isOpenModal={false}>
      <div className="register-form"></div>
    </Modal>
  );
};

export default RegisterForm;
