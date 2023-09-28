import { createSlice } from "@reduxjs/toolkit";

const termSlice = createSlice({
  name: "term",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    addTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export default termSlice.reducer;
export const { addTerm } = termSlice.actions;
