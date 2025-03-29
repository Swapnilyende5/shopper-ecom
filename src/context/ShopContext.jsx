import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [totalAddedItems, setTotalAddedItems] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (productId, size) => {
    setTotalAddedItems(() => totalAddedItems + 1);
    const button = document.getElementById("toast");
    button.classList.add("show");
    setTimeout(() => {
      button.classList.remove("show");
    }, 3000);
    setCart((prevCart) => {
      const productExists = prevCart.find(
        (item) => item.id === productId && item.size === size
      );
      if (productExists) {
        return prevCart.map((item) =>
          item.id === productId && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const product = all_product.find((p) => p.id === productId);
        return [...prevCart, { ...product, size, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId, size) => {
    const deletQuantity = cart
      .filter((a) => a.id === itemId && a.size === size)
      .map((a) => a.quantity)[0];
    setTotalAddedItems(() => totalAddedItems - deletQuantity);
    return setCart((prev) =>
      prev.filter((item) => !(item.id === itemId && item.size === size))
    );
  };

  const getSubTotal = () => {
    let subtotal = 0;
    for (const item of cart) {
      subtotal += item.new_price * item.quantity;
    }
    return subtotal;
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    getSubTotal,
    totalAddedItems,
    cart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
