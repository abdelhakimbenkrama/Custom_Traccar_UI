import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import devicesReducer from "../features/devicesSlice";

export default configureStore({
  reducer: {
    App: appReducer,
    Devices: devicesReducer,
  },
});
