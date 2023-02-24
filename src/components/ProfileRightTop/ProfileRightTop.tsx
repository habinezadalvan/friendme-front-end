import "./profileRightTop.css";

export default function ProfileRightTop() {
  return (
    <div className="profileRightTop">
      <div className="profileCover">
        <img
          src="assets/posts/post1.jpeg"
          alt="profile cover"
          className="profileCoverImg"
          loading="lazy"
        />
        <img
          src="assets/people/profile4.jpeg"
          alt="profile cover"
          className="profileUserImg"
          loading="lazy"
        />
      </div>
      <div className="profileInfo">
        <h4 className="profileUserInfo">Lee broski</h4>
        <span className="profileUserDesc">Hello my awesome friends!!!</span>
      </div>
    </div>
  );
}
