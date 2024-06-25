import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateTodo from "./pages/create-todo";
import Home from "./pages/home";
import Todos from "./pages/todos";

function App() {
  return (
    <Router>
      <nav>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/todos"}>Todos</Link>
        </li>
        <li>
          <Link to={"/create-todo"}>Contact</Link>
        </li>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todos" element={<Todos />} />
        <Route exact path="/create-todo" element={<CreateTodo />} />
      </Routes>
    </Router>
  );
}

export default App;
