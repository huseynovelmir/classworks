import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};
export const basketSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    hellobasket: (state) => {
      console.log(state.basket);
    },
  },
});

export const { hellobasket } = basketSlice.actions;
export default basketSlice.reducer;
