import React, { useContext, useState } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
import ToastMessage from "../../common/ToastMessage";
import "./ProductDisplayPage.css";

const ProductDisplayPage = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectSize, setSelectSize] = useState("M");

  const handleSize = (size) => {
    setSelectSize(size);
  };

  const getStyle = (size) => ({
    background: selectSize === size ? "black" : "",
    color: selectSize === size ? "white" : "",
  });

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-left-img">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={product.image}
              alt=""
            />
          </div>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => {
              return (
                <button
                  type="button"
                  style={getStyle(size)}
                  onClick={() => handleSize(size)}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          <h4>About this item</h4>
          <p>
            all-day comfort with this classic cotton t-shirt, crafted from
            breathable fabric for a soft and lightweight feel. Featuring a
            relaxed fit and versatile design, it's perfect for layering or
            wearing on its own for a laid-back look. Available in a variety of
            colors to suit your style.
          </p>
        </div>
        <button type="button" onClick={() => addToCart(product.id, selectSize)}>
          <span className="button__text">ADD TO CART</span>
          <span className="button__icon">+</span>
        </button>
        <ToastMessage message="This item has been added to cart!" />
        <p className="productdisplay-right-category">
          <span>Category: </span>Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplayPage;
