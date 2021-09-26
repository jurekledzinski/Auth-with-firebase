import React, { useEffect, createContext, useState } from "react";

import {
  auth,
  collection,
  db,
  getDocs,
  onAuthStateChanged,
} from "../firebase/ConfigFirebase";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [dataBooks, setDataBooks] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogInUser, setIsLogInUser] = useState(null);
  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState(false);
  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState(false);
  const [isOpenBookForm, setIsOpenBookForm] = useState(false);

  const fetchDataBooks = async () => {
    let arrData = [];
    const querySnapshot = await getDocs(collection(db, "books"));

    querySnapshot.forEach((doc) => {
      const id = doc.id;
      arrData = [...arrData, { ...doc.data(), id }];
    });

    setDataBooks(arrData);
  };

  console.log(isLogInUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogInUser(Boolean(user.email));
        fetchDataBooks();

        const uid = user.uid;
        console.log("User zalogowany", uid);
        console.log(user, " user dane");

        //   Pobieram dane books z firestore
      } else {
        console.log("User wylogowany", user);
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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
