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
      const productIdToDelete = action.payload;

      // Filtrer pour garder uniquement les produits qui n'ont pas l'ID à supprimer
      state.value = state.value.filter(
        (product) => product.id !== productIdToDelete
      );
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
