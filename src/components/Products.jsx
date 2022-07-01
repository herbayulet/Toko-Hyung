import React from "react";
import { TopProductApi } from "../API/TopProductApi";
import Product from "./Product";

function Products() {
  return (
    <div className="flex flex-wrap p-5 items-center justify-center">
      {TopProductApi.map((product, i) => {
        return <Product item={product} key={i} />;
      })}
    </div>
  );
}

export default Products;
