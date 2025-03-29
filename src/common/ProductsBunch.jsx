import React from "react";
import Item from "../components/Item/Item";
import "./ProductsBunch.css";

const ProductsBunch = ({ title, data }) => {
  return (
    <div className="productsbunch">
      <h1>{title}</h1>
      <hr />
      <div className="productsbunch-item">
        {data.map(({ id, name, image, new_price, old_price, rating }, i) => {
          return (
            <Item
              key={i}
              id={id}
              name={name}
              image={image}
              new_price={new_price}
              old_price={old_price}
              rating={rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsBunch;
