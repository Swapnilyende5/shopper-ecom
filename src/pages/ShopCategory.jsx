import React, { useEffect, useState } from "react";
import Item from "../components/Item/Item";
import MainButton from "../utils/MainButton/MainButton";
import all_product from "../components/assets/all_product";
import "./CSS/ShopCategory.css";

const ShopCategory = ({ banner, category }) => {
  const [addItem, setAddItem] = useState(8);
  const filteredByCategory = all_product.filter(
    (products) => products.category === category
  );
  const [sortedItems, setSortedItems] = useState(filteredByCategory);

  const handleExplore = () => {
    setAddItem(addItem + 4);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    const sortByRating = filteredByCategory.filter((item) => {
      if (value === "five") {
        return item.rating === 5;
      } else if (value === "above4") {
        return item.rating > 4;
      } else if (value === "above3") {
        return item.rating > 3;
      } else {
        return item;
      }
    });
    setAddItem(sortByRating.length);
    setSortedItems(sortByRating);
  };

  useEffect(() => {
    const filtered = all_product.filter(
      (products) => products.category === category
    );
    setSortedItems(filtered);
    setAddItem(8);
  }, [category]);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{addItem}</span> out of {sortedItems.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by Rating:
          <select name="rating" id="rating" onChange={handleSort}>
            <option value="select">Select</option>
            <option value="five">5</option>
            <option value="above4">4 and above</option>
            <option value="above3">3 and above</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedItems
          .slice(0, addItem)
          .map(({ id, name, image, new_price, old_price, rating }, i) => {
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
      {sortedItems.length > addItem && (
        <div className="shopcategory-loadmore">
          <MainButton
            btnTitle="Explore More"
            handleClick={handleExplore}
            isHomeButton
          />
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
