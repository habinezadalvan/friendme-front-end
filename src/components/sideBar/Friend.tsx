import { UserType } from "../../helpers/types";

interface FriendProps {
  user: UserType;
}
export default function Friend({user}: FriendProps) {
  return (
    <li className="sidebarFriend">
      <div className="sidebarProfileImage">
        <img
          src={user.profilePicture}
          alt="profile"
          className="sidebarFriendImg"
        />
      </div>
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
