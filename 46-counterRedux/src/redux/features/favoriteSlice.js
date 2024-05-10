import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};
export const favoriteSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    hellofavorite: (state, action) => {
      console.log(state.basket);
    },
  },
});

export const { hellofavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
