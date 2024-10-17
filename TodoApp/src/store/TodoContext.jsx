import { createContext, useReducer, useState } from "react";
import HandleRaducer from "./HandleRaducer";

export const todoItemContext = createContext();

export const ItemProviderAPI = ({ children }) => {
  const [currentitem, dispatch] = useReducer(HandleRaducer, []);
  const HandleItemAdd = (id, todoText, todoData) => {
    console.log(id, todoText, todoData);
    dispatch({
      type: "ADD",
      paylod: {
        id,
        todoText,
        todoData,
      },
    });
  };
  const deleteTodoItem = (id) => {
    dispatch({
      type: "DELETE",
      paylod: {
        id,
      },
    });
  };

  return (
    <todoItemContext.Provider
      value={{ currentitem, HandleItemAdd, deleteTodoItem }}
    >
      {children}
    </todoItemContext.Provider>
  );
};
