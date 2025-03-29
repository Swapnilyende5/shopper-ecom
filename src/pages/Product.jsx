import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductDisplayPage from "../components/ProductDisplayPage/ProductDisplayPage";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import all_product from "../components/assets/all_product"

const Product = () => {
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplayPage product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
