import { createSlice } from "@reduxjs/toolkit";

export const DevicesSlice = createSlice({
  name: "Devices",
  initialState: {
    data: [],
    activeDevices: [],
    tochange: null,
    queryData: [],
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
    runquery: (state, action) => {
      state.queryData = action.payload;
    },
  },
});

export const {
  tochangedevice,
  pushActiveDevices,
  pushJsonData,
  runquery,
} = DevicesSlice.actions;

export const Data = (state) => state.Devices.data;
export const ActiveDevices = (state) => state.Devices.activeDevices;
export const TochangeData = (state) => state.Devices.tochange;
export const QueryData = (state) => state.Devices.queryData;

export default DevicesSlice.reducer;
