import React from "react";
import ProductItem from "./ProductItem";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ProductsSection = () => {
  return (
    <div className="gap-8 w-[70vw] overflow-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {array.map((id) => {
        return <ProductItem key={id} />;
      })}
    </div>
  );
};

export default ProductsSection;
