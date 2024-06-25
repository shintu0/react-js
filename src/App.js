import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import CreateTodo from "./pages/create-todo";
import Home from "./pages/home";
import Todos from "./pages/todos";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <nav style={{display:'flex', flexDirection:"row", justifyContent:'space-around'}} >
            <div>
              <Link to={"/"}>Home</Link>
            </div>
            <div>
              <Link to={"/todos"}>Todos</Link>
            </div>
            <div>
              <Link to={"/create-todo"}>Create Todo</Link>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/todos" element={<Todos />} />
            <Route exact path="/create-todo" element={<CreateTodo />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
