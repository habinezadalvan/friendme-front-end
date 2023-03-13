import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "./userAccount.css";


// this component uses toggling between login and sign up dages, instead of react-router-dom
export default function UserAccount() {
  const [show, setShow] = useState(false);
  return (
    <div className="userAccount"> 
    {/* Each child component receaves a setShow prop function that will modify show state when called */}
      <div className="userAccountWrapper">{!show ? <SignUp setShow = {setShow} /> : <Login setShow = {setShow} />}</div>
    </div>
  );
}
