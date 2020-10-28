import React, { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const ContextProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
