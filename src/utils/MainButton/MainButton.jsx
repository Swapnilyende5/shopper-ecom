import React from "react";
import { Link } from "react-router-dom";
import "./MainButton.css";

const MainButton = ({ btnTitle,handleClick, isHomeButton = false }) => {
  return !isHomeButton ? (
    <button id="newBtn">
      <Link to="/latest-collections">
        <span>{btnTitle}</span>
      </Link>
    </button>
  ) : (
    <button id="newBtn" onClick={handleClick}>
      <span>{btnTitle}</span>
    </button>
  );
};

export default MainButton;
