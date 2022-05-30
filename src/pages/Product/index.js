import React from "react";
import { index as Navbar } from "../../components/Navbar";
import "./index.css";
import { index as Footer } from "../../components/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="product-wrapper">
        <div className="promo-title">
          <p className="promo-today">Promo Today</p>
          <p className="coupons-will">
            Coupons will be updated every weeks.
            <br /> Check them out!
          </p>
        </div>

        <div className="promo-title">
          <div className="promo-1">
            <img
              src="assets/products-images/icon-customers/cus-1.png"
              alt="cus-1"
            />
            <p className="mothers-day-1">
              <b>HAPPY MOTHERS DAY!</b>
              <br />
              Get one of our favorite
              <br />
              menu for free!
            </p>
          </div>
          <div className="promo-2">
            <img
              src="assets/products-images/icon-customers/cus-2.png"
              alt="cus-2"
            />
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
            <img
              src="assets/products-images/icon-customers/cus-1.png"
              alt="cus-3"
            />
            <p className="mothers-day-2">
              <b>HAPPY MOTHERS DAY!</b>
              <br />
              Get one of our favorite
              <br />
              menu for free!
            </p>
          </div>
          <div className="promo-4">
            <img
              src="assets/products-images/icon-customers/cus-3.png"
              alt="cus-4"
            />
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
      </div>
      <Footer />
    </>
  );
};

export default index;
