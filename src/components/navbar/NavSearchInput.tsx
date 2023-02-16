import { Search } from "@mui/icons-material";
interface Props {
    classname: string,
    onClick?: () => void,
}
export default function NavSearchInput({classname, onClick}: Props) {
  return (
    <div className= {`searchContainer ${classname}`} onClick={onClick}>
      <Search className="seachIcon" />
      <input placeholder="Search" className="searchInput" type="text" />
    </div>
  );
}
