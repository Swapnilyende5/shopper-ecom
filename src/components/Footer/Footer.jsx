import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            At Shopper, we offer trendy, high-quality fashion for every
            occasion. Our collections combine style, comfort, and affordability,
            ensuring you look and feel your best. Shop confidently with our
            seamless online experience!
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/mens">Products</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@shopper.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Main Street, Delhi, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Shopper. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
