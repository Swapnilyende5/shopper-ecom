import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import "./Navbar.css";

const Navbar = () => {
  const { totalAddedItems } = useContext(ShopContext);

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? "X" : "☰"}
      </div>
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        {["/", "/mens", "/womens", "/kids"].map((path, index) => (
          <>
            <Link
              className="nav-menu-link"
              to={path}
              key={index}
              onClick={() => setIsOpen(false)}
            >
              <li>
                {path === "/"
                  ? "Shop"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                {location.pathname === path && <hr />}
              </li>
            </Link>
          </>
        ))}
        <Link className="nav-menu-desktop nav-menu-link" to="/login">
          <li>Login</li>
        </Link>
        <Link className="nav-menu-desktop nav-menu-link" to="/cart">
          <li>
            Cart
            {totalAddedItems > 0 && (
              <span className="nav-cart-count">{totalAddedItems}</span>
            )}
          </li>
        </Link>
      </ul>
      <div className="nav-login-cart mobile">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        {totalAddedItems > 0 && (
          <div className="nav-cart-count">{totalAddedItems}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
