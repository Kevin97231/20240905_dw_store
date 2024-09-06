import { Fragment } from "react";
import { ProductCard } from "./ProductCard";

/* eslint-disable react/prop-types */
export const ProductList = ({
  products,
  title,
  onClickFunction,
  displayButton = false,
  buttonType = "primary",
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-4 gap-4">
        {products &&
          products.map((product) => (
            <Fragment key={product.id}>
              <ProductCard
                product={product}
                onClickFunction={onClickFunction}
                title={title}
                displayButton={displayButton}
                buttonType={buttonType}
              ></ProductCard>
            </Fragment>
          ))}
      </div>
    </>
  );
};
