import { useMutation } from "@tanstack/react-query";
import Axios from "../helpers/axios";
import { loginFailure, loginSuccess } from "../features/auth/authSlice";
import { useAppDispatch } from "../hooks/hooks";
import { LoginInput } from "../helpers/types";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom"; 

interface ErrorMessage {
  message: any;
}

export default function useLogin() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return useMutation({
    // gets user input from mutate function from useMutation and send the request to the server
    mutationFn: async (data: LoginInput) => {
      const res = await Axios.post("/api/auth/login", data, {
        withCredentials: true,
      });
      return res.data;
    },

    // onSuccess we get data and dispatch it to the login success action from authSlice
    onSuccess: (data) => {
      dispatch(loginSuccess(data?.user));
      navigate('/');
    },
    // onFailure we get the error and extract the message and dispatch it to login failure action from the authSlice
    onError: (error) => {
      const err = (error as AxiosError<ErrorMessage>).response?.data?.message;
      dispatch(loginFailure(err));
    },
  });
}
