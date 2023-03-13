import { ArrowRightAlt } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useLogin from "../../hooks/useLogin";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loginRequest } from "../../features/auth/authSlice";
import { LoginInput } from "../../helpers/types";

type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Login({ setShow }: Props) {

  // creates yup schema object
  const loginSchema = object().shape({
    username: string().required("Username is required").max(50),
    password: string().required("Password is required"),
  });

  // use useForm from react-hook-form to access the register, handleSubmit functions, and resolves the yup schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: yupResolver(loginSchema),
  });

  // calls the login, useDispatch, and useSelector custom hooks
  const { mutateAsync } = useLogin();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);

  // this function get the user input from the handleSubmit and submits the form.
  const onSubmit = (data: LoginInput) => {
    dispatch(loginRequest());
    mutateAsync(data);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="userAccountForm">
        <input
          type="text"
          placeholder="Username"
          className="userAccountInput"
          {...register("username")}
        />
        {errors?.username && <p className="errorMessage">{`${errors?.username.message}`}</p>}
        <input
          type="password"
          placeholder="Password"
          className="userAccountInput"
          {...register("password")}
        />
        {(errors?.password && <p className="errorMessage">{`${errors?.password.message}`}</p>) ||
          (error && <p className="errorMessage">{`${error}`}</p>)}

        <button type="submit" className="userAccountSubmitButton">
          {isLoading ? "Logging..." : "Login"}
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
