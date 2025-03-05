import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { useState } from 'react'
import { addTodo, deleteTodo } from './redux/reducer';

function App() {

  const [todo, setTodo] = useState("");

  const todos = useSelector((state) => state.todos?.value)
  const dispatch = useDispatch()

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo({id:index}));
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todos)
    dispatch(addTodo({id:todos.length,title:todo}));
    setTodo("");

  }

  return (
    <>
      <h1>Todo App</h1>
      <p>My first React App</p>
      <form  style={{display: "flex", justifyContent:'space-between',flex:'row',}} onSubmit={handleAddTodo} action="" >
        <input type="text" placeholder="Add todo" name={"todo"} value={todo} onChange={e => setTodo(e.target.value)} />
        <button type="submit" onSubmit={handleAddTodo} >Add</button>
      </form>
      <br/>
      <h1>TODOS</h1>
      <hr />
      <div>
        {todos && todos.map((todo, index) => (
          <div style={{display: "flex", justifyContent:'space-between',flex:'row',}} key={todo.id}>
            <p>{index+1}. {todo.title}</p>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))

        }
      </div>
    </>
  )
}

export default App
