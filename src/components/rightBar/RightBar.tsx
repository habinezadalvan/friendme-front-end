import "./rightbar.css";
import {Users } from '../../dummyData';
import OnlineUser from "../online/Online";

export default function RightBar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarBirthdayContainer">
          <img src="assets/gift.png" alt="" className="rightbarBirthdayImg" />
          <span className="birthdayText">
            <b>Kevin heart</b> and <b>4 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.jpeg" alt="ad" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="onlineFriendsContainer">
          {Users.map(user => (
            <OnlineUser key={user.id} user={user} />
          ))}
          
        </ul>
      </div>
    </div>
  );
}
