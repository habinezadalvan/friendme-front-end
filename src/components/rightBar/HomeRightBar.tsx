import { Users } from "../../dummyData";
import OnlineUser from "../online/Online";
export const HomeRightBar = () => {
  return (
    <>
      <div className="rightbarBirthdayContainer">
        <img
          src="assets/gift.png"
          alt="profile"
          loading="lazy"
          className="rightbarBirthdayImg"
        />
        <span className="birthdayText">
          <b>Kevin heart</b> and <b>4 other friends</b> have a birthday today.
        </span>
      </div>
      <img
        src="assets/ad.jpeg"
        loading="lazy"
        alt="ad"
        className="rightbarAd"
      />
      <h4 className="rightbarTitle">Online friends</h4>
      <ul className="onlineFriendsContainer">
        {Users.map((user) => (
          <OnlineUser key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};
