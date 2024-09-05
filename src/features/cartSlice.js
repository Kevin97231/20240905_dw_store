import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "myCart",
  initialState: {
    value: [
      {
        title: "alienwareauroraRdz",
        price: "150056",
        image: "",
        description:
          "L'Alienware Aurora R12 est un ordinateur de bureau de jeu haut de gamme",
        slug: "alienware-aurora-r12",
        category: "Ordinateur",
        id: "6",
      },
      {
        title: "Logitech G Driving Force Racing Wheel",
        price: "300",
        image: "",
        description:
          "Le Logitech G29 Driving Force Racing Wheel est un volant de course pour les jeux de simulation de conduite.",
        slug: "logitech-g29-driving-force-racing-wheel",
        category: "Jeux video",
        id: "7",
      },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload;

      if (!state.value.some((product) => product.id === productToAdd.id)) {
        state.value.push(productToAdd);
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
