import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { RootState } from "../../app/store";
import { UserResponse } from "../../helpers/types";

interface authType {
  isLoading: boolean;
  user: UserResponse | null;
  error: AxiosError | null,
  isLoggedIn: boolean,
}

const initialState: authType = {
  isLoading: false,
  user: null,
  error: null,
  isLoggedIn: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state){
        state.isLoading = true,
        state.error = null
    },
    loginSuccess(state, action: PayloadAction<UserResponse>) {
        state.isLoading = false
      state.user = action.payload;
      state.isLoggedIn = true
    },
    loginFailure(state, action: PayloadAction<any>){
        state.isLoading = false,
        state.error = action.payload,
        state.isLoggedIn = false
    },
    logOut(state) {
      state.user = null;
      state.isLoggedIn = false
    },
  },
});

export const { loginSuccess, loginRequest, loginFailure, logOut} = authSlice.actions;
export default authSlice.reducer;
export const selectUser =  (state: RootState) => state.auth.user;
