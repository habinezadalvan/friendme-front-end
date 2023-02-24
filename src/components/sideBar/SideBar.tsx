import "./sidebar.css";
import {
  RssFeed,
  Chat,
  School,
  Event,
  WorkOutline,
  HelpOutline,
  Bookmark,
  VideocamRounded,
} from "@mui/icons-material";
import Friend from "./Friend";
import { useBoolean } from "../../hooks/useBoolean";
import { Users } from "../../dummyData";


export default function SideBar() {
  const [{ isVisible, setToTrue, setToFalse }] = useBoolean();
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideocamRounded className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        {!isVisible && (
          <button onClick={setToTrue} className="sidebarButton">
            Show more
          </button>
        )}
        {isVisible && <hr className="sidebarHr" />}

        {isVisible && (
          <ul className="sidebarFriendList">
            {Users.map((user) => (
              <Friend key={user.id} user={user} />
            ))}
          </ul>
        )}
        {isVisible && (
          <button className="sidebarButton" onClick={setToFalse}>
            Show less
          </button>
        )}
      </div>
    </div>
  );
}
