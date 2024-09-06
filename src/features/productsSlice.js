import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    saveOrUpadateProduct: (_, action) => {
      const products = action.payload ?? [];
      return products;
    },
  },
});

export const { saveOrUpadateProduct } = productsSlice.actions;
export default productsSlice.reducer;
