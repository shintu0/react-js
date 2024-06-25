import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/reducer";

export default function TodoList() {
  const todos = useSelector((state) =>state.todos.value);
  const dispatch = useDispatch();
  const deleteTodoById=(id)=>{
    dispatch(deleteTodo({id}));
  }
  return (
    <div>
      {todos.map((todo, index) => (
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
            <button style={{margin:10}} onClick={()=>deleteTodoById(todo.id)} >Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}