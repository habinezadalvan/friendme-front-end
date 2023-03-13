import "./spinner.css";
import { ColorRing } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="spinnerContainer">
      <div className="spinnerWrapper">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#fff", "#fff", "#fff","#fff", "#fff"]}
        />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}
