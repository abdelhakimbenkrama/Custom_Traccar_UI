import { createSlice } from '@reduxjs/toolkit';

export const AppSlice = createSlice({
  name: 'App',
  initialState: {
    stat: 0,
  },
  reducers: {
    home : (state) => {
      state.stat = 0;
    },
    newdevice : (state) =>{
      state.stat = 1;
    },
    alldevices : (state) =>{
        state.stat = 2;
      },
    devicedetails : (state) =>{
        state.stat = 3;
      },
  },
});

export const { home , newdevice ,alldevices , devicedetails} = AppSlice.actions;


export const selectApp = state => state.App.stat;

export default AppSlice.reducer;