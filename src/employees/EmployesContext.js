import React, { createContext, useReducer } from "react";
import { employesReducer } from "./EmployesReducer";

export const EmployesContext = createContext();

const initialState = { employes: [] };

export const EmployesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employesReducer, initialState);

  // Fonctions globales liées aux employés
  const remove = (id) => dispatch({ type: "remove", payload: id });
  const clearAll = () => dispatch({ type: "clear" });
  const add = (emp) => dispatch({ type: "add", payload: emp });
  const edit = (emp) => dispatch({ type: "edit", payload: emp });

  return (
    <EmployesContext.Provider value={{ state, add, edit, remove, clearAll }}>
      {children}
    </EmployesContext.Provider>
  );
};
