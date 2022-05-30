import React from "react";
import "./index.css";
import { index as Navbar } from "../../components/Navbar/index";
import { index as Footer } from "../../components/Footer/index";
import ProductImage from "../../assets/product-menu/2. hazelnut.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content-product-detail">
          <div className="left-content">
            <p className="breadcrumb">{"Favorite & Promo > Cold Brew"}</p>
            <img src={ProductImage} alt="Product" />
          </div>
          <div className="right-content">
            <div className="progress-payment">
              <div className="line"></div>
              <div className="order">Order</div>
              <div className="checkout">Checkout</div>
              <div className="payment">Payment</div>
            </div>
            <p className="product-name">COLD BREW</p>
            <p className="price">IDR 30.000</p>
            <p className="description">
              Cold brewing is a method of brewing that combines ground coffee
              and cool water and uses time instead of heat to extract the
              falvour. It is brewed in small batches and steeped for as long as
              48 hours.
            </p>
            <div className="form">
              <select className="size">
                <option selected disabled>
                  Select Size
                </option>
                <option>R</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <select className="delivery">
                <option selected disabled>
                  Select Delivery Methods
                </option>
                <option>Dine in</option>
                <option>Door Delivery</option>
                <option>Pick up</option>
              </select>
              <div className="selection">
                <div className="count">
                  <p className="plus">+</p>
                  <p className="number">2</p>
                  <p className="minus">-</p>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
              <button className="checkout">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
