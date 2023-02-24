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
import { Outlet } from "react-router-dom";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="navBar">
        <div className="navBarTop">
          <div className="navBarLeft">
            <span className="logo">Lovine</span>
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
              <span className="navBarLink">Home page</span>
              <div className="iconContainer hiddenIconContainer">
                <Home className="icon " />
                <div className="hiddenSpan">Home page</div>
              </div>
              <span className="navBarLink">Timeline</span>
              <div className="iconContainer hiddenIconContainer">
                <Timeline className="icon " />
                <div className="hiddenSpan">Timeline</div>
              </div>
            </div>
            <div className="navBarIcons navBarRightCommon">
              <div className="navBarItem">
                <div className="iconContainer">
                  <Person className="icon" />
                  <div className="hiddenSpan">People</div>
                </div>
                <span className="navBarIconBadge">1</span>
              </div>
              <div className="navBarItem">
                <div className="iconContainer">
                  <Chat className="icon" />
                  <div className="hiddenSpan">Messages</div>
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
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}
