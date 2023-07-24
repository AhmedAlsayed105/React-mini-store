import { configureStore } from "@reduxjs/toolkit";
import prodcut_slice from "./prodcut_slice";
import   cardSlice  from "./card_slice";
export const store = configureStore({
  reducer: {
    product: prodcut_slice,
    cart: cardSlice,
  },
});
