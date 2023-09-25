import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

/**
 * Data posibile in searchSlice
 * {
 *  "ip": ["iphone", "iphone 11", "ip address"],
 *  "iphon: ["iphone", "iphone 11", "iphone 15 pro max"],
 *  "iphone": ["iphone", "iphone 12", "iphone 14", "iphone 15 pro max"]
 * }
 */

export default searchSlice.reducer;
export const { cacheResults } = searchSlice.actions;
