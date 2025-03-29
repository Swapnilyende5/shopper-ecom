import React from "react";
import { Link } from "react-router-dom";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <form class="form">
        <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input placeholder="Enter email" type="email" />
        </div>
        <div class="input-container">
          <input placeholder="Enter password" type="password" />
        </div>
        <button class="submit" type="submit">
          Sign in
        </button>
        <p class="signup-link">
          No account? <Link to="">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginSignup;
