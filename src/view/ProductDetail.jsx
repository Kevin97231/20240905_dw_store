import { useParams } from "react-router-dom";
import { Titre } from "../components/Titre";
import { useAxios } from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlice";

// TO DO: Remplacer le composant <ProductCard/> par une composant qui affiche les détails d'un produit

export const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;
  console.log("params", params);

  const { getById } = useAxios();

  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    getById(productId).then((response) => {
      setProduct(response);
      console.log(response);
    });
  }, []);

  const addProductToCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <div className="flex">
      <Titre>Détail du produit: </Titre>
      {/* TO DO: Remplacer le composant <ProductCard/> par une composant quiaffiche les détails d'un produit */}
      <div className="pt-20 mt-20">
        <ProductCard
          product={product}
          displayButton={true}
          onClickFunction={addProductToCart}
          title={"Ajouter au panier"}
        />
      </div>
    </div>
  );
};
