import { createSlice } from "@reduxjs/toolkit";

export const DevicesSlice = createSlice({
  name: "Devices",
  initialState: {
    data: null,
  },
  reducers: {
    pushJsonData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { pushJsonData } = DevicesSlice.actions;

export const Data = (state) => state.Devices.data;

export default DevicesSlice.reducer;
