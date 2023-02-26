import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "./userAccount.css";



export default function UserAccount() {
  const [show, setShow] = useState(false);
  return (
    <div className="userAccount">
      
      <div className="userAccountWrapper">{!show ? <SignUp setShow = {setShow} /> : <Login setShow = {setShow} />}</div>
    </div>
  );
}
