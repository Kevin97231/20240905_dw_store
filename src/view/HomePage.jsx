import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import { Titre } from "../components/Titre";
import { ProductList } from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { saveOrUpadateProduct } from "../features/productsSlice";

export const HomePage = () => {
  //  Ce composant charge les données en envoyant une requete vers
  // notre json server, enregistre les données dans le store redux.
  // Sur l'affichage, on utilise un 'selector' pour s'abonner' à 'products'
  // On aura le meme effet qu'avec un useState ==> quand 'product' changera,
  // le rendu sera reclaculé

  const { getPaginate, perPage, setPerPage } = useAxios();

  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    setPerPage(4);
    getPaginate().then((response) => {
      dispatch(saveOrUpadateProduct(response.data));
    });
  }, [perPage]);

  return (
    <div>
      <Titre>Nos produits</Titre>
      {products && <ProductList products={products} />}
    </div>
  );
};
