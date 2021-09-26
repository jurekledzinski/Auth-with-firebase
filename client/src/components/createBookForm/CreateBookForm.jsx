import React, { useContext, useState } from "react";

import "./CreateBookForm.scss";

import { StoreContext } from "../../store/Store";
import Modal from "../modal/Modal";

import { addDoc, collection, db } from "../../firebase/ConfigFirebase";

const CreateBookForm = () => {
  const { isOpenBookForm, setIsOpenBookForm } = useContext(StoreContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateBook = async (e) => {
    e.preventDefault();
    if (!title || !author) return;

    const book = {
      title,
      author,
    };

    try {
      await addDoc(collection(db, "books"), book);
      setTitle("");
      setAuthor("");
      setIsOpenBookForm(false);
    } catch (error) {
      setErrorMessage(error.message);
    }

    setTitle("");
    setAuthor("");
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsOpenBookForm(false);
    setTitle("");
    setAuthor("");
  };

  return (
    <Modal isOpenModal={isOpenBookForm}>
      <div className="book-form">
        <h2 className="book-form__title">Create book</h2>
        <form className="book-form__form" onSubmit={handleCreateBook}>
          <div className="book-form__wrapper-input">
            <label className="book-form__label">Title:</label>
            <input
              type="text"
              className="book-form__input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="book-form__wrapper-input">
            <label className="book-form__label">Author:</label>
            <input
              type="text"
              className="book-form__input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button className="book-form__button-submit">Create book</button>

          <button
            className="book-form__button-close"
            onClick={handleCloseModal}
          >
            <i className="fas fa-times"></i>
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateBookForm;
