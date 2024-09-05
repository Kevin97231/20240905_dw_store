import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./src/features/counterSlice";
import cartSlice from "./src/features/cartSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    myCart: cartSlice,
  },
});
