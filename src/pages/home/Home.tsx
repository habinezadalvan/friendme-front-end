import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
import SideBar from "../../components/sideBar/SideBar";
import "./home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <SideBar />
      <Feed />
      <RightBar />
    </div>
  );
}
