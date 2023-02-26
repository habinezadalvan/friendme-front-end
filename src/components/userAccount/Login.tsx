import { ArrowRightAlt } from "@mui/icons-material";

type Props = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
  };

export default function Login({setShow}: Props) {
  return (
    <>
      <h1>Login</h1>
      <form action="" className="userAccountForm">
        <input
          type="text"
          placeholder="Username"
          className="userAccountInput"
        />
        <input
          type="password"
          placeholder="Password"
          className="userAccountInput"
        />

        <button type="submit" className="userAccountSubmitButton">
          Login
        </button>
      </form>
      <div className="userAccountAlt">
        <span className="userAccountInfo">If you don't have an account.</span>
        <button onClick={() => setShow(false)} className="redirectButton">
          <span>Sign up</span>
          <ArrowRightAlt className="userAccoutArrowRightAlt" />
        </button>
      </div>
    </>
  );
}
