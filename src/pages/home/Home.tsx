import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
import SideBar from "../../components/sideBar/SideBar";
import { useAppSelector } from "../../hooks/hooks";
import "./home.css";

export default function Home() {
  const user = useAppSelector((state) => state.auth.user);
  console.log('=====', user);
  return (
    <div className="homeContainer">
      <SideBar />
      <Feed />
      <RightBar />
    </div>
  );
}
