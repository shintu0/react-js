import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducer';
import { v4 as uuid } from "uuid";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(addTodo({
      id:uuid(),
      title,
      description
    }))
    setTitle("");
    setDescription("");
    alert("Successfully Added!!")
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
