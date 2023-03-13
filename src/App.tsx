import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import UserAccount from "./components/userAccount/UserAccount";
import { useAppSelector } from "./hooks/hooks";

const Home = lazy(() => import("./pages/home/Home"));
const Profile = lazy(() => import("./pages/profile/Profile"));

function App() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Router>
      {
        !isLoggedIn ? ( <UserAccount />) :
         (
          <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/auth" element={<UserAccount />} />
        </Routes>
         )
      }
    
    </Router>
  );
}

export default App;
