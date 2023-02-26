import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import UserAccount from "./components/userAccount/UserAccount";

const Home = lazy(() => import("./pages/home/Home"));
const Profile = lazy(() => import("./pages/profile/Profile"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/user/account" element ={<UserAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
