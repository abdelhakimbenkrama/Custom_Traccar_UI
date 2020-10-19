import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import devicesReducer from "../features/devicesSlice";
import loginReducer from "../features/loginSlice";

export default configureStore({
  reducer: {
    App: appReducer,
    Devices: devicesReducer,
    Login : loginReducer,
  },
});
