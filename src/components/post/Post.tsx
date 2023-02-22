import "./post.css";
import { MoreVert } from "@mui/icons-material";
import {Users} from '../../dummyData';

type PostType = {
  id: number,
  description?: string,
  img: string,
  userId: number,
  likes:  number,
  comments: number,
  createdAt: string,
}
type UserType = {
  id: number,
  username: string,
  profilePicture: string,
}
export default function Post({post}: {post:  PostType}) {

  const user: UserType[] = Users.filter(user => user.id === post.userId);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user[0]?.profilePicture}
              alt="user profile"
              className="postTopUserImg"
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
            <img src={post.img} alt="post" className="postCenterImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" alt="like icon" className="likeIcon" />
                <img src="assets/heart.png" alt="like icon" className="likeIcon" />
                <span className="postCounter">{post.likes} likes</span>
            </div>
            <div className="postBottomRight">
                <span className="postComments">{post.comments} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
