import { useContext, createContext, useEffect } from "react";
import ProductHook from "./ProductHook";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  // importing all data from custom product hook
  const data = ProductHook();
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

// custom hook

const ContextApiHook = () => useContext(AppContext);
export { AppContext, ContextProvider, ContextApiHook };
