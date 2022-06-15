import React, { useEffect, useState } from "react";
import { index as Navbar } from "../../components/Navbar";
import "./index.css";
import { index as Footer } from "../../components/Footer";
import axios from "axios";
import Cust1 from "../../assets/products-images/icon-customers/cus-1.png";
import Cust2 from "../../assets/products-images/icon-customers/cus-2.png";
import Cust3 from "../../assets/products-images/icon-customers/cus-3.png";
import ProductCart from "../../components/ProductCart";

const Index = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/product/all?page=1&limit=4")
      .then((response) => setProduct(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const [product, setProduct] = useState([]);

  return (
    <>
      <Navbar />
      <div className="product-wrapper">
        <div className="promo-title">
          {/* title */}
          <p className="promo-today">Promo Today</p>
          <p className="coupons-will">
            Coupons will be updated every weeks.
            <br /> Check them out!
          </p>
          {/* title */}
          <div className="promo-1">
            <img src={Cust1} alt="cus-1" />
            <p className="mothers-day-1">
              <b>HAPPY MOTHERS DAY!</b>
              <br />
              Get one of our favorite
              <br />
              menu for free!
            </p>
          </div>
          <div className="promo-2">
            <img src={Cust2} alt="cus-2" />
            <p className="free-coffee">
              <b>
                Get a cup of coffee for free
                <br />
                on sunday morning
              </b>
              <br />
              Only 7 to 9 AM
            </p>
          </div>
          <div className="promo-3">
            <img src={Cust3} alt="cus-3" />
            <p className="mothers-day-2">
              <b>HAPPY MOTHERS DAY!</b>
              <br />
              Get one of our favorite
              <br />
              menu for free!
            </p>
          </div>
          <div className="promo-4">
            <img src={Cust3} alt="cus-4" />
            <p className="halloween-day">
              <b>HAPPY HALLOWEEN!</b>
              <br />
              Do you like chicken wings? Get 1<br />
              free only for you buy pinky promise
            </p>
          </div>
          <button className="apply-coupon-btn">Apply Coupon</button>
          <p className="terms-and-conditions">
            <b>Terms and Conditions</b>
            <br />
            1. You can only apply 1 coupon per day.
            <br />
            2. It only for dine in.
            <br />
            3. Buy 1 get 1 only for new user.
            <br />
            4. Should make member card to apply coupon.
          </p>
        </div>

        {product.map((item) => {
          return (
            <div key={item.id}>
              <ProductCart data={item} />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Index;
