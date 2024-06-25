import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoContext } from "../store/TodoContext";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const todoContext = useContext(TodoContext);
  const handleSubmit = (event) => {
    todoContext.setTodos((prev) => [
      ...prev,
      { id: uuid(), title, description },
    ]);
    setTitle("");
    setDescription("");
  };
  return (
    <div
      style={{
        borderColor: "grey",
        borderWidth: 1,
        borderStyle: "solid",
        width: "50%",
      }}
    >
      <h1>
        <u>Create Todo</u>
      </h1>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <br />
      <br />
      <textarea
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
