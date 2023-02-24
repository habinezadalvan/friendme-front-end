import "./online.css";
import { UserType } from "../../helpers/types";

export default function OnlineUser({ user }: { user: UserType }) {
  return (
    <li className="onlineFriend">
      <div className="onlineFriendImgContainer">
        <img
          src={user.profilePicture}
          alt="profile"
          className="onlineFriendImg"
          loading="lazy"
        />
        <span className="onlineFriendBadge"></span>
      </div>
      <span className="onlineFriendName">{user.username}</span>
    </li>
  );
}
