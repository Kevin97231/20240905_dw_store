import { ProductCard } from "./ProductCard";

/* eslint-disable react/prop-types */
export const ProductList = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-full">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </>
  );
};
