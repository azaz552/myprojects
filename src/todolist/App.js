import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import Home from "./pages/Home";
import Done from "./pages/Done";
import Pending from "./pages/Pending";
import "./App.css";

export default function App() {
  return (
    <TodoProvider>
      <Router>
        <nav className="navbar">
          <Link to="/">Accueil</Link>
          <Link to="/done">Terminées</Link>
          <Link to="/pending">À faire</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/done" element={<Done />} />
          <Route path="/pending" element={<Pending />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}
