import { useDispatch, useSelector } from "react-redux";
import { Titre } from "../components/Titre";
import { ProductList } from "../components/ProductList";
import { deleteProduct } from "../features/cartSlice";
// import { decrement, increment } from "../features/counterSlice";

export const Cart = () => {
  const cartProducts = useSelector((state) => state.myCart.value);

  const dispatch = useDispatch();

  // Pour supprimer un produit du panier
  const handleDeleteProduct = (product) => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <div>
      <Titre>Mon panier</Titre>
      <ProductList
        products={cartProducts}
        title={"supprimer du panier"}
        onClickFunction={handleDeleteProduct}
        displayButton="true"
      />
    </div>
  );
};
