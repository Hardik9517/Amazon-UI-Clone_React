import { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

export const StoreContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  user: JSON.parse(localStorage.getItem("user")) || null
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.cart, state.user]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
