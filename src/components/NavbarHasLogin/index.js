import React from "react";
import "./index.css";
import CoffeeLogo from "../../assets/home-images/icon/coffee-1.png";
import { Link } from "react-router-dom";
// import Profil from "../../assets/profile-images/photo-profil.png";

export const index = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={CoffeeLogo} alt="coffe-shop-logo" />
        <p className="coffee-shop">Coffee Shop</p>
      </div>
      <div className="navigation-list">
        <Link className="navigation" to="/">
          <p>Home</p>
        </Link>
        <Link className="navigation" to="/product">
          <p>Product</p>
        </Link>
        <Link className="navigation" to="/paymentmethod">
          <p>Your Cart</p>
        </Link>
        <Link className="navigation" to="/history">
          <p>History</p>
        </Link>
      </div>
      <div className="authorized">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="sign-up-btn">Sign Up</button>
        </Link>
        {/* <img src={Profil} alt="profil"></img> */}
      </div>
    </nav>
  );
};
