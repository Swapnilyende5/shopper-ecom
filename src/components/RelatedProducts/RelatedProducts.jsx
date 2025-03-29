import React from "react";
import data_product from "../assets/data";
import ProductsBunch from "../../common/ProductsBunch";

const RelatedProducts = () => {
  return <ProductsBunch title="Related Products" data={data_product} />;
};

export default RelatedProducts;
