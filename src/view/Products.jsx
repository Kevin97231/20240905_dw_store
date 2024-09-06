import { useEffect, useState } from "react";
import { Titre } from "../components/Titre";
import { useAxios } from "../hooks/useAxios";
import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/Pagination";
import { Select } from "../components/Select";

export const Products = () => {
  const { loading, getPaginate, page, perPage, setPage, setPerPage } =
    useAxios();

  const [products, setProducts] = useState();
  const [responseObject, setResponseObject] = useState({ pages: 0, items: 0 });
  const [tableSelect, setTableSelect] = useState([]);

  useEffect(() => {
    getPaginate().then((response) => {
      setProducts(response.data);
      setResponseObject({ pages: response.pages, items: response.items });
    });
  }, [page, perPage]);

  const clickOnPaginationButton = (number) => {
    setPage(number);
    console.log(number);
  };

  useEffect(() => {
    if (responseObject.items) {
      const array = Array.from(
        { length: responseObject.items },
        (_, index) => ({
          value: index + 1,
          label: index + 1,
        })
      );
      setTableSelect(array);
    }
  }, [responseObject]);

  const selectOnChange = (number) => {
    setPerPage(number);
  };

  return (
    <div className="w-full">
      <Titre>Mes produits</Titre>
      {loading ? <p>chargement</p> : <ProductList products={products} />}
      <div className="m-auto my-5 w-fit">
        <Pagination
          handleClick={clickOnPaginationButton}
          nbrButton={responseObject.pages}
        />
      </div>
      <div className="m-auto my-5 w-fit">
        <Select
          options={tableSelect}
          value={perPage}
          onChangeFunction={selectOnChange}
        >
          Nb de produits à afficher
        </Select>
      </div>
    </div>
  );
};
