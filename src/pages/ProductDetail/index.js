import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { index as Navbar } from "../../components/Navbar/index";
import { index as Footer } from "../../components/Footer/index";
import ProductImage from "../../assets/product-menu/2. hazelnut.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const Index = () => {
  const route = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);

  // fungsinya untuk identifikasi aksi yang akan dilakukan
  const productDetailPatch = (param) => {
    return {
      type: "GET_PRODUCT_DETAIL",
      payload: new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:8080/product/${param}`)
          .then((response) => {
            resolve(response.data.data[0]);
          })
          .catch((err) => {
            reject(err);
          });
      }),
    };
  };

  useEffect(() => {
    dispatch(productDetailPatch(route.id));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Navbar />
      {data.isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {data.isError ? (
            <div>Error</div>
          ) : (
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
                  <p className="product-name">{data.product.product}</p>
                  <p className="price">IDR {data.product.price}</p>
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
                        <p className="number">1</p>
                        <p className="minus">-</p>
                      </div>
                      <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <button className="checkout">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <Footer />
    </>
  );
};

export default Index;
