import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    session: null,
  },
  reducers: {
    HandleLogin: (state) => {
      state.session = true;
    },
    HandleLogout: (state) => {
      state.session = null;
    },
  },
});

export const { HandleLogin, HandleLogout } = LoginSlice.actions;

export const Session = (state) => state.Login.session;

export default LoginSlice.reducer;
