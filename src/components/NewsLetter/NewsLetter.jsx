import React, { useState } from "react";
import ToastMessage from "../../common/ToastMessage";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = () => {
    if (!email) {
      alert("Please enter your email!");
    } else {
      const button = document.getElementById("toast");
      button.classList.add("show");
      setTimeout(() => {
        button.classList.remove("show");
      }, 3000);
      setEmail("")
    }
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <ToastMessage message="You have subscribed the newsletter!" />
      <div className="input-group">
        <input
          type="email"
          className="input"
          id="Email"
          name="Email"
          placeholder="john@shopper.com"
          autocomplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="button--submit"
          onClick={handleNewsletter}
          value="Subscribe"
          type="submit"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
