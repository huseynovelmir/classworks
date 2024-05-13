import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: "1", color: "red", title: "Red" },
    { id: "2", color: "dodgerblue", title: "Blue" },
    { id: "3", color: "dodgerblue", title: "Blue" },
    { id: "4", color: "red", title: "Red" },
    { id: "5", color: "green", title: "Green" },
    { id: "6", color: "dodgerblue", title: "Blue" },
    { id: "7", color: "green", title: "Green" },
  ],
  redArr: [],
  greenArr: [],
  blueArr: [],
};

export const colorSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filteredBox: (state, actions) => {
      if (actions.payload.color == "red") {
        state.redArr.push(actions.payload);
      } else if (actions.payload.color == "green") {
        state.greenArr.push(actions.payload);
      } else {
        state.blueArr.push(actions.payload);
      }
      state.data = [
        ...state.data.filter((elem) => elem.id != actions.payload.id),
      ];
    },
  },
});

export const { filteredBox } = colorSlice.actions;

export default colorSlice.reducer;
