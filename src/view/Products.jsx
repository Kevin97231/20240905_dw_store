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
    <>
      <div>
        <Titre>Mes produits</Titre>

        {loading ? <p>CHARGEMENT</p> : <ProductList products={products} />}
        <div className="flex m-auto my-5 w-fit">
          <Pagination
            handleClick={clickOnPaginationButton}
            nbrButton={responseObject.pages}
          />
          <Select
            options={tableSelect}
            value={perPage}
            onChangeFunction={selectOnChange}
          >
            Nbr de produits à afficher:
          </Select>
        </div>
      </div>
    </>
  );
};
