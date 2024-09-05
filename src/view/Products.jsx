import { useEffect, useState } from "react";
import { Titre } from "../components/Titre";
import { useAxios } from "../hooks/useAxios";
import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/Pagination";

export const Products = () => {
  let initialPage = {
    page: 1,
    perPage: 8,
  };

  const { get, loading } = useAxios();
  const [products, setProducts] = useState();

  const [page, setPage] = useState(initialPage.page);
  const [perPage, setPerPage] = useState(initialPage.perPage);

  useEffect(() => {
    // const endpoint = `?_page=${initialPage.page}&_per_page=${initialPage.perPage}`;
    const endpoint = `?_page=${page}&_per_page=${perPage}`;
    get(endpoint).then((response) => setProducts(response.data));
  }, [page, perPage]);

  const clickOnPaginationButton = (number) => {
    setPage(number);
    console.log(number);
  };

  return (
    <>
      <div>
        <Titre>Mes produits</Titre>

        {loading ? <p>CHARGEMENT</p> : <ProductList products={products} />}
        <div className="m-auto w-fit my-5">
          <Pagination handleClick={clickOnPaginationButton} />
        </div>
      </div>
    </>
  );
};
