import React from "react";
import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

export default function TodoList() {
  const todoContext = useContext(TodoContext);
  const deleteTodo=(id)=>{
    todoContext.setTodos(prevTodos=>prevTodos.filter(todo=>todo.id!==id));
  }
  return (
    <div>
      {todoContext.todos.map((todo, index) => (
        <div key={todo.id}>
          <div
            style={{
              margin: 10,
              padding: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>
              {index + 1 + ". "}
              <u>{todo.title + ":"}</u>
            </h2>

            <h2>{todo.description}</h2>
            <button style={{margin:10}} onClick={()=>deleteTodo(todo.id)} >Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
