import React, { useEffect, createContext, useState } from "react";

import {
  auth,
  collection,
  db,
  doc,
  getDoc,
  query,
  onAuthStateChanged,
  onSnapshot,
} from "../firebase/ConfigFirebase";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [dataBooks, setDataBooks] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogInUser, setIsLogInUser] = useState(null);
  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState(false);
  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState(false);
  const [isOpenBookForm, setIsOpenBookForm] = useState(false);
  const [isOpenModalProfile, setIsOpenModalProfile] = useState(false);
  const [userName, setUserName] = useState("");

  const fetchDataBooks = async () => {
    const queryAll = query(collection(db, "books"));
    onSnapshot(
      queryAll,
      (items) => {
        let allBooksLiveUpdate = [];
        items.forEach((doc) => {
          const id = doc.id;
          allBooksLiveUpdate = [...allBooksLiveUpdate, { ...doc.data(), id }];
        });
        setDataBooks(allBooksLiveUpdate);
      },
      (error) => {
        setErrorMessage(error.message);
      }
    );
  };

  const fetchUserBio = async (userId) => {
    const docRef = doc(db, "bio", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserName(docSnap.data().name);
    } else {
      setErrorMessage("No such document!");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLogInUser(user.email);
        fetchDataBooks();
        fetchUserBio(uid);
      } else {
        setIsLogInUser(false);
        setDataBooks([]);
      }
    });
  }, []);

  return (
    <StoreContext.Provider
      value={{
        dataBooks,
        isLogInUser,
        isOpenBookForm,
        setIsOpenBookForm,
        isOpenModalSignIn,
        setIsOpenModalSignIn,
        isOpenModalSignUp,
        setIsOpenModalSignUp,
        isOpenModalProfile,
        setIsOpenModalProfile,
        userName,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
