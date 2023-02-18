import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
export default function Share() {
  return (
    <div className="share">
      <div className="shareContainer">
        <div className="shareTop">
          <img
            src="assets/people/profile5.jpeg"
            alt="share profile"
            className="shareImg"
          />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="#440b73" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="#fc04f8" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="#fac010" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
