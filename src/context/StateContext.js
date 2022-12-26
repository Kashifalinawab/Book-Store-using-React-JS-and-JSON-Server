import React, { createContext, useState } from "react";
export const Context = createContext();
function StateContext({ children }) {
  const [store, setSore] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(Number);

  return (
    <Context.Provider
      value={{ store, setSore, cart, setCart, price, setPrice }}
    >
      {children}
    </Context.Provider>
  );
}

export default StateContext;
