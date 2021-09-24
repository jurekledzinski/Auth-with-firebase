import React, { Fragment } from "react";

import "./Modal.scss";

const Modal = ({ children, isOpenModal }) => {
  return (
    <Fragment>
      {isOpenModal && <div className="modal">{children}</div>}
    </Fragment>
  );
};

export default Modal;
