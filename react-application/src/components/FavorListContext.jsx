// FavorListContext.js
import React, { createContext, useState } from "react";

export const FavorListContext = createContext();

export const FavorListProvider = ({ children }) => {
  const [favorList, setFavorList] = useState([]);

  return (
    <FavorListContext.Provider value={{ favorList, setFavorList }}>
      {children}
    </FavorListContext.Provider>
  );
};
