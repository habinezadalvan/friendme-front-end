import "./navbar.css";
import {
  Person,
  Chat,
  Notifications,
  Home,
  Timeline,
} from "@mui/icons-material";
import NavSearchInput from "./NavSearchInput";
import SearchBar from "./SearchBar";
import { useState, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Spinner from "../spinner/Spinner";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="navBar">
        <div className="navBarTop">
          <div className="navBarLeft">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">Lovine</span>
            </Link>
          </div>
          <div className="navBarCenter">
            <NavSearchInput classname="largeScreen" />
            {!isVisible && (
              <NavSearchInput
                classname="smallScreen"
                onClick={() => setIsVisible(true)}
              />
            )}
          </div>
          <div className="navBarRight">
            <div className="navBarLinks navBarRightCommon">
              <Link to="/" className="navBarLink">
                Home page
              </Link>
              <div className="iconContainer hiddenIconContainer">
                <Home className="icon " />
                <span className="hiddenSpan">Home page</span>
              </div>
              <Link to="/" className="navBarLink">
                Timeline
              </Link>
              <div className="iconContainer hiddenIconContainer">
                <Timeline className="icon " />
                <span className="hiddenSpan">Timeline</span>
              </div>
            </div>
            <div className="navBarIcons navBarRightCommon">
              <div className="navBarItem">
                <div className="iconContainer">
                  <Person className="icon" />
                  <span className="hiddenSpan">People</span>
                </div>
                <span className="navBarIconBadge">1</span>
              </div>
              <div className="navBarItem">
                <div className="iconContainer">
                  <Chat className="icon" />
                  <span className="hiddenSpan">Messages</span>
                </div>
                <span className="navBarIconBadge">4</span>
              </div>
              <div className="navBarItem">
                <div className="iconContainer">
                  <Notifications className="icon" />
                  <div className="hiddenSpan">Notifications</div>
                </div>
                <span className="navBarIconBadge">3</span>
              </div>
            </div>
            <div className="profileContainer navBarRightCommon">
              <img
                className="navBarImg"
                src="/assets/people/profile4.jpeg"
                alt="profile"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {isVisible && <SearchBar onClick={() => setIsVisible(false)} />}
        <div className="searchResults"></div>
      </div>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}
