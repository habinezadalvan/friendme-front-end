import { HomeRightBar } from "./HomeRightBar";
import ProfileRightBar from "./ProfileRightBar";
import "./rightbar.css";

type RightBarProps = {
  profile?: boolean;
};

export default function RightBar({ profile }: RightBarProps) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
