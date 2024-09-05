import { useSelector } from "react-redux";
import { Titre } from "../components/Titre";
import { ProductList } from "../components/ProductList";

export const Cart = () => {
  const cartProducts = useSelector((state) => state.myCart.value);

  return (
    <div>
      <Titre>Mon panier</Titre>
      <ProductList products={cartProducts} />
    </div>
  );
};
