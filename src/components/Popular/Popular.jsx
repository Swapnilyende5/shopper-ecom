import React from "react";
import data_product from "../assets/data";
import Item from "../Item/Item";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map(
          ({ id, name, image, new_price, old_price, rating }, i) => {
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
          }
        )}
      </div>
    </div>
  );
};

export default Popular;
