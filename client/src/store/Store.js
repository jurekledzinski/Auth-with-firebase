import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState(false);
  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState(false);
  return (
    <StoreContext.Provider
      value={{
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
