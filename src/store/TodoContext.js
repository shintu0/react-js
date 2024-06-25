import { createContext, useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = function (props) {
  const [todos, setTodos] = useState([]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};
