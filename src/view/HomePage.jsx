import { useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { Titre } from "../components/Titre";
import { ProductList } from "../components/ProductList";

export const HomePage = () => {
  const { getPaginate, perPage, setPerPage } = useAxios();

  const [products, setProducts] = useState();

  useEffect(() => {
    setPerPage(4);
    getPaginate().then((response) => setProducts(response.data));
  }, [perPage]);

  return (
    <div>
      <Titre>Nos produits</Titre>
      {products && <ProductList products={products} />}
    </div>
  );
};
