import React from "react";
import "./Breadcrumbs.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrumbs = (props) => {
  const { product } = props;

  return (
    <div className="breadcrumb">
      <span>HOME</span> <img src={arrow_icon} alt="" /> <span>SHOP</span>{" "}
      <img src={arrow_icon} alt="" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt="" />
      <span className="mobile-wrap">{product.name}</span>
    </div>
  );
};

export default Breadcrumbs;
