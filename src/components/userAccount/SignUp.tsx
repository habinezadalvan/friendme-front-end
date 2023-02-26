import {ArrowRightAlt} from '@mui/icons-material';

type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function SignUp({setShow}: Props) {

  return (
    <>
    <h1>Sign up</h1>
     <form action="" className="userAccountForm">
      <input type="text" placeholder='Username' className="userAccountInput" />
      <input type="email" placeholder='Email' className="userAccountInput" />
      <input type="password" placeholder='Password' className="userAccountInput" />
      <input type="password" placeholder='Comfirm Password' className="userAccountInput" />
      <input type="date" placeholder='Date of birth' className="userAccountInput" />
      <button type='submit' className="userAccountSubmitButton">Create account</button>
     </form>
      <div className="userAccountAlt">
        <span className="userAccountInfo">Already have an account?</span>
        <button onClick={() => setShow(true)} className="redirectButton"><span>Sign in</span> <ArrowRightAlt className='userAccoutArrowRightAlt'/></button>
      </div>
    </>
  )
}
