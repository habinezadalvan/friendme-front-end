import "./search.css";
import { Search, ArrowCircleRight } from "@mui/icons-material";
type Props = {
  onClick?: () => void;
};

export default function SearchBar({ onClick }: Props) {
  return (
    <div className="searchBarContainer">
      <div className="searchBarWrapper">
        <Search className="searchBarIcon" />
        <input type="text" className="searchBarInput" placeholder="Search" />
        <ArrowCircleRight className="searchBarIcon arrowCircle" />
      </div>
      <button className="cancelSearchButton" onClick={onClick}>
        Cancel
      </button>
    </div>
  );
}
