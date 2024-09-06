import { Fragment } from "react";
import { ProductCard } from "./ProductCard";
import { SkeletonCard } from "./SkeletonCard";

/* eslint-disable react/prop-types */
export const ProductList = ({
  products,
  title,
  onClickFunction,
  displayButton = false,
  buttonType = "primary",
}) => {
  const array = Array.from({ length: 8 });

  console.log("produclist", products);

  return (
    <>
      <div className="grid w-full grid-cols-4 gap-4">
        {products !== undefined && products.length > 0
          ? products.map((product) => (
              <Fragment key={product.id}>
                <ProductCard
                  product={product}
                  onClickFunction={onClickFunction}
                  title={title}
                  displayButton={displayButton}
                  buttonType={buttonType}
                ></ProductCard>
              </Fragment>
            ))
          : array.map((_, item) => <SkeletonCard key={item} />)}
      </div>
    </>
  );
};
