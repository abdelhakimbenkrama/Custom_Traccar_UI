import { createSlice } from "@reduxjs/toolkit";

export const AppSlice = createSlice({
  name: "App",
  initialState: {
    stat: 0,
    mainStat: 0,
    ondisplayid: null,
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
    devicedetails: (state, action) => {
      state.stat = 3;
      state.ondisplayid = action.payload;
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
    mainMap: (state) => {
      state.mainStat = 0;
    },
    mainEvents: (state) => {
      state.mainStat = 1;
    },
    mainHistory: (state) => {
      state.mainStat = 2;
    },
    mainStops: (state) => {
      state.mainStat = 3;
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
  mainMap,
  mainEvents,
  mainHistory,
  mainStops,
} = AppSlice.actions;

export const selectApp = (state) => state.App.stat;
export const selectMainApp = (state) => state.App.mainStat;
export const onDisplayId = (state) => state.App.ondisplayid;

export default AppSlice.reducer;
