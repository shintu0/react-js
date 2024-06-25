import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./pages/todo-form";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <div style={{display:"flex",alignItems:'center',flexDirection:"column"}} >
      <TodoForm />
      <TodoList />
      </div>
    </div>
  );
}

export default App;
