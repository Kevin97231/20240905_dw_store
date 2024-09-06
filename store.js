import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./src/features/counterSlice";
import cartSlice from "./src/features/cartSlice";
import productsSlice from "./src/features/productsSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    myCart: cartSlice,
    products: productsSlice,
  },
});
