import "./profileRightBar.css";

export default function ProfileRightBar() {
  return (
    <>
      <h4 className="profileRightBarTittle">User information</h4>
      <div className="profileRightBarInfo">
        <span className="profileRightBarInfoItem">
          <b>City:</b> New york
        </span>
        <span>
          <b>From:</b> Kigali
        </span>
        <span>
          <b>Relationship:</b> Married
        </span>
      </div>
      <h4 className="profileRightBarTittle">User friends</h4>
      <div className="userFriends">
        <div className="userFriendsWrapper">
          <div className="userFriendsItem">
            <img
              src="assets/people/profile3.avif"
              alt="profile"
              className="userFriendImg"
            />
            <span className="profileRightBarFollowingName">Kevin heart</span>
          </div>
          <div className="userFriendsItem">
            <img
              src="assets/people/profile4.jpeg"
              alt="profile"
              className="userFriendImg"
            />
            <span className="profileRightBarFollowingName">Kevin Deblin</span>
          </div>
          <div className="userFriendsItem">
            <img
              src="assets/people/profile5.jpeg"
              alt="profile"
              className="userFriendImg"
            />
            <span className="profileRightBarFollowingName">Diane smith</span>
          </div>
          <div className="userFriendsItem">
            <img
              src="assets/people/profile6.jpeg"
              alt="profile"
              className="userFriendImg"
            />
            <span className="profileRightBarFollowingName">Kety bashabe</span>
          </div>
        </div>
      </div>
    </>
  );
}
