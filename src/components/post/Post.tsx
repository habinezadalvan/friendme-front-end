import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="assets/people/profile4.jpeg"
              alt="user profile"
              className="postTopUserImg"
            />
            <span className="postUserName">Lavee Habineza</span>
            <span className="postTime">5 days ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="moreVertIcon" />
          </div>
        </div>
        <div className="postCenter">
            <span className="postCenterDescription">This is my amazing post:)</span>
            <img src="assets/posts/post1.jpeg" alt="post" className="postCenterImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" alt="like icon" className="likeIcon" />
                <img src="assets/heart.png" alt="like icon" className="likeIcon" />
                <span className="postCounter">54 likes</span>
            </div>
            <div className="postBottomRight">
                <span className="postComments">32 comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
