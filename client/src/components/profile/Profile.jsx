import React, { useContext } from "react";

import "./Profile.scss";

import { StoreContext } from "../../store/Store";
import Modal from "../modal/Modal";

const Profile = () => {
  const { isLogInUser, isOpenModalProfile, setIsOpenModalProfile, userName } =
    useContext(StoreContext);

  const handleCloseModal = (e) => {
    setIsOpenModalProfile(false);
  };

  return (
    <Modal isOpenModal={isOpenModalProfile}>
      <div className="profile">
        <h2 className="profile__title">Profile user</h2>
        <p className="profile__email">{isLogInUser}</p>
        <p className="profile__name">Welcome {userName}</p>
        <button className="profile__button-close" onClick={handleCloseModal}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </Modal>
  );
};

export default Profile;
