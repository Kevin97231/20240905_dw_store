import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "myCart",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload;

      if (!state.value.some((product) => product.id === productToAdd.id)) {
        state.value.push(productToAdd);
      }
    },
    deleteProduct: (state, action) => {
      // Payload est l'id du produit à supprimer
      const productIdToDelete = action.payload;

      state.value = state.value.filter(
        (product) => product.id !== productIdToDelete
      );
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
