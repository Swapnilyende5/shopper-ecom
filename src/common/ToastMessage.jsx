import React from "react";
import "./ToastMessage.css";

const ToastMessage = ({ message }) => {
  return (
    <div id="toast" className="toast">
      {message}
    </div>
  );
};

export default ToastMessage;
