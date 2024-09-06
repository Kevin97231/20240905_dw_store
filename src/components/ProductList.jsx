import { Fragment } from "react";
import { ProductCard } from "./ProductCard";

/* eslint-disable react/prop-types */
export const ProductList = ({
  products,
  title,
  onClickFunction,
  displayButton = false,
}) => {
  // const handleClick = (product) => {
  //   onClickFunction(product);
  // };

  return (
    <>
      <div className="grid w-full grid-cols-4 gap-4">
        {products &&
          products.map((product) => (
            <Fragment key={product.id}>
              {displayButton && (
                <button onClick={() => onClickFunction(product)}>
                  {title}
                </button>
              )}
              <ProductCard key={product.id} product={product}></ProductCard>
            </Fragment>
          ))}
      </div>
    </>
  );
};
