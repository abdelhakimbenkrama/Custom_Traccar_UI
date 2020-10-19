import { createSlice } from "@reduxjs/toolkit";

export const DevicesSlice = createSlice({
  name: "Devices",
  initialState: {
    data: null,
    activeDevices: null,
    tochange: null,
  },
  reducers: {
    pushJsonData: (state, action) => {
      state.data = action.payload;
    },
    pushActiveDevices: (state, action) => {
      state.activeDevices = action.payload;
    },
    tochangedevice: (state, action) => {
      state.tochange = action.payload;
    },
  },
});

export const {
  tochangedevice,
  pushActiveDevices,
  pushJsonData,
} = DevicesSlice.actions;

export const Data = (state) => state.Devices.data;
export const ActiveDevices = (state) => state.Devices.activeDevices;
export const TochangeData = (state) => state.Devices.tochange;

export default DevicesSlice.reducer;
