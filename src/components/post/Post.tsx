import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

type PostType = {
  id: number;
  description?: string;
  img: string;
  userId: number;
  likes: number;
  comments: number;
  createdAt: string;
};
type UserType = {
  id: number;
  username: string;
  profilePicture: string;
};
type PostProps = {
  post: PostType;
};
export default function Post({ post }: PostProps) {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const user: UserType[] = Users.filter((user) => user.id === post.userId);

  const handleLikes = () => {
    setIsLiked((prev) => !prev);

    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user[0]?.profilePicture}
              alt="user profile"
              className="postTopUserImg"
              loading="lazy"
            />
            <span className="postUserName">{user[0]?.username}</span>
            <span className="postTime">{post.createdAt}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="moreVertIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterDescription">{post?.description}</span>
          <img src={post.img} loading="lazy" alt="post" className="postCenterImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="assets/like.png"
              onClick={handleLikes}
              alt="like icon"
              className="likeIcon"
              loading="lazy"
            />
            <img
              src="assets/heart.png"
              onClick={handleLikes}
              alt="like icon"
              className="likeIcon"
              loading="lazy"
            />
            <span className="postCounter">{likes} likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postComments">{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
