import { createSlice } from "@reduxjs/toolkit";

export const AppSlice = createSlice({
  name: "App",
  initialState: {
    stat: 0,
  },
  reducers: {
    home: (state) => {
      state.stat = 0;
    },
    newdevice: (state) => {
      state.stat = 1;
    },
    alldevices: (state) => {
      state.stat = 2;
    },
    devicedetails: (state) => {
      state.stat = 3;
    },
    events: (state) => {
      state.stat = 4;
    },
    editdevice: (state) => {
      state.stat = 5;
    },
    history: (state) => {
      state.stat = 6;
    },
    diagrmas: (state) => {
      state.stat = 7;
    },
    rapports: (state) => {
      state.stat = 8;
    },
  },
});

export const {
  home,
  newdevice,
  alldevices,
  devicedetails,
  events,
  history,
  editdevice,
  diagrmas,
  rapports,
} = AppSlice.actions;

export const selectApp = (state) => state.App.stat;

export default AppSlice.reducer;
