import React from "react";
import CoffeeLogo from "../../assets/home-images/icon/coffee-1.png";
import Facebook from "../../assets/home-images/icon/facebook.png";
import Instagram from "../../assets/home-images/icon/instagram.png";
import Twitter from "../../assets/home-images/icon/twitter.png";
import "./index.css";

export const index = () => {
  return (
    <div className="footer">
      <div className="coffee-shop-footer">
        <div className="logo-and-coffe-shop">
          <img src={CoffeeLogo} alt="coffe-logo-footer" />
          <p className="coffee-shop-footer">Coffee Shop</p>
        </div>
        <p className="about-us-footer">
          Coffe Shop is a store that sells some good <br />
          meals, and especially coffee. We provide <br />
          high quality beans.
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
          <img src={Twitter} alt="twitter" />
        </p>
        <p className="copyright">©2020CoffeeStore</p>
        <p />
      </div>
      <div className="product-footer">
        <p className="product-title">Product</p>
        <p className="details-product">Download</p>
        <p className="details-product">Pricing</p>
        <p className="details-product">Locations</p>
        <p className="details-product">Countries</p>
        <p className="details-product">Blog</p>
      </div>
      <div className="engage-footer">
        <p className="engage-title">Engage</p>
        <p className="details-engage">Coffee Shop?</p>
        <p className="details-engage">FAQ</p>
        <p className="details-engage">About Us</p>
        <p className="details-engage">Privacy Policy</p>
        <p className="details-engage">Terms of Services</p>
      </div>
    </div>
  );
};
