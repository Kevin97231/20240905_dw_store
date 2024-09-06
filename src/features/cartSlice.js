import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "myCart",
  initialState: {
    value: [
      {
        title: "alienware aurora rdz",
        price: "150056",
        image:
          "https://imgs.search.brave.com/Yl_yoVIDCoyhz8sQ5bFTxrJ2kZdWqbPF3XUYDPVkXSw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmRl/bGwuY29tL2lzL2lt/YWdlL0RlbGxDb250/ZW50L2NvbnRlbnQv/ZGFtL3NzMi9wcm9k/dWN0LWltYWdlcy9w/YWdlL2FsaWVud2Fy/ZS9yZWQtMS1kZXNr/dG9wMS5wbmc_cWx0/PTk1JmZpdD1jb25z/dHJhaW4sMSZoZWk9/MTEyMCZ3aWQ9MTY4/MCZmbXQ9cG5nLWFs/cGhh",
        description:
          "L'Alienware Aurora R12 est un ordinateur de bureau de jeu haut de gamme",
        slug: "alienware-aurora-r12",
        category: "Ordinateur",
        id: "6",
      },
      {
        title: "Logitech G Driving Force Racing Wheel",
        price: "300",
        image:
          "https://imgs.search.brave.com/Um_OIUQbTCDMCj-ZwZdfWDOhBGW80yF5BBwdQRDoPN4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFPZzA1b1JuUkwu/anBn",
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
