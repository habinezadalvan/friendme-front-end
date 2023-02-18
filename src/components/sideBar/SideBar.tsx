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

export default function SideBar() {
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
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarProfileImage">
              <img
                src="/assets/people/profile6.jpeg"
                alt="profile picture"
                className="sidebarFriendImg"
              />
            </div>
            <span className="sidebarFriendName">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
