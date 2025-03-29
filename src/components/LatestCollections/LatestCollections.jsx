import React from "react";
import ProductsBunch from "../../common/ProductsBunch";
import all_product from "../assets/all_product";

const LatestCollections = () => {
  return <ProductsBunch title="Latest Collections" data={all_product} />;
};

export default LatestCollections;
