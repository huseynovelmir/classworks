import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import basketSlice from "./features/basketSlice";
import favoriteSlice from "./features/favoriteSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    basket: basketSlice,
    favorite: favoriteSlice,
  },
});
