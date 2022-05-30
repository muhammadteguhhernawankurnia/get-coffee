import React from "react";
import "./index.css";
import { index as Navbar } from "../../components/Navbar/index";
import { index as Footer } from "../../components/Footer/index";
import ProductItemImg from "../../assets/product-menu/1. veggie.png";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="background-history">
        <div className="container">
          <div className="content-history">
            <div className="title">
              <p className="title-history">Let's see what you have bought!</p>
              <p className="sub-title-history">Select item to delete</p>
            </div>
            <p className="delete-btn">Delete</p>
          </div>

          <div className="product-item">
            <img src={ProductItemImg} alt="ProductItemImg"></img>
            <div className="product-history">
              <p className="product-history-title">Veggie tomato mix</p>
              <p className="product-history-price">IDR 34.000</p>
              <p className="product-history-status">Delivered</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
