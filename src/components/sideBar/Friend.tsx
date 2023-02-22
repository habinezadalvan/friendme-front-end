import { UserType } from "../../helpers/types";

interface FriendProps {
  user: UserType;
  loading?: 'lazy';
}
export default function Friend(props: FriendProps) {
  const {user, loading } = props;
  return (
    <li className="sidebarFriend">
      <div className="sidebarProfileImage">
        <img
          src={user.profilePicture}
          loading={loading}
          alt="profile"
          className="sidebarFriendImg"
        />
      </div>
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
