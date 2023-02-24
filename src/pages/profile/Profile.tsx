import Feed from "../../components/feed/Feed";
import ProfileRightTop from "../../components/ProfileRightTop/ProfileRightTop";
import RightBar from "../../components/rightBar/RightBar";
import SideBar from "../../components/sideBar/SideBar";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <SideBar />
      <div className="profileRight">
        <ProfileRightTop />
        <div className="profileRightBottom">
          <Feed />
          <RightBar profile />
        </div>
      </div>
    </div>
  );
}
