import React from "react";
import "./index.css";
import { index as Navbar } from "../../components/Navbar/index";
import { index as Footer } from "../../components/Footer/index";
import MenuImage from "../../assets/product-menu/1. veggie.png";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="background-payment-method">
        <div className="container">
          <div className="content-payment">
            <div className="left-content">
              <p className="title">
                Checkout your <br /> item now!
              </p>
              <div className="display-box"></div>
            </div>
            <div className="right-content">
              <div className="adress">
                <p className="title">Adress details</p>
                <div className="display-box"></div>
              </div>
              <div className="payment">
                <p className="title">Payment method</p>
                <div className="display-box"></div>
              </div>
              <button className="btn-confirm">Confirm and Pay</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
