import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
import ToastMessage from "../../common/ToastMessage";
import MainButton from "../../utils/MainButton/MainButton";

const CartItems = () => {
  const { cart, removeFromCart, getSubTotal } = useContext(ShopContext);
  const [toast, setToast] = useState("");

  const handleCheckout = () => {
    const message = getSubTotal()
      ? "Your order has been confirmed! 🚀 Expect delivery soon."
      : "⚠️ Oops! No items in your cart. Start shopping now!";

    setToast(message);
    const button = document.getElementById("toast");
    button.classList.add("show");
    setTimeout(() => {
      button.classList.remove("show");
    }, 3000);
  };

  return (
    <div className="cartitems">
      {!!getSubTotal() && (
        <div className="cartitems-format-mobile">
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>size</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
        </div>
      )}
      {cart?.map(({ id, name, image, size, new_price, quantity }, index) => {
        return (
          <div key={index}>
            <div className="cartitems-format cartitems-format-main">
              <img className="carticon-product-icon" src={image} alt="" />
              <p>{name}</p>
                <p>{size}</p>
                <p>${new_price}</p>
                <button className="cartitems-quantity">{quantity}</button>
                <p>${new_price * quantity}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(id, size);
                  }}
                  alt=""
                />
            </div>
            <hr />
          </div>
        );
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getSubTotal()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getSubTotal()}</h3>
            </div>
          </div>
          <MainButton
            btnTitle="PROCEED TO CHECKOUT"
            handleClick={handleCheckout}
            isHomeButton
          />
          <ToastMessage message={toast} />
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
