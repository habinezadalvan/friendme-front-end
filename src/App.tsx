import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";

const Home = lazy(() => import("./pages/home/Home"));

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
