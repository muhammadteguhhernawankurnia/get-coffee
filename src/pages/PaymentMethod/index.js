import React from "react";
import "./index.css";
import { index as Navbar } from "../../components/Navbar/index";
import { index as Footer } from "../../components/Footer/index";
import MenuImage1 from "../../assets/payment-images/image 36.png";

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
              <div className="display-box">
                <p className="order-summary">Order Summary</p>

                <img src={MenuImage1} alt="menu-img-1" />
                <p className="menu-title">Hazelnut Latte</p>
                <p className="menu-piece">1x</p>
                <p className="menu-size">Reguler</p>
              </div>
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
