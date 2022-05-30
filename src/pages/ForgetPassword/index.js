import React from "react";
import "./index.css";
import CoffeeLogo from "../../assets/sign up images/coffee-1.png";
import FacebookLogo from "../../assets/sign up images/facebook-logo.png";
import TwitterLogo from "../../assets/sign up images/twitter-logo.png";
import InstagramLogo from "../../assets/sign up images/instagram-logo.png";

const index = () => {
  return (
    <>
      <div className="container-forget-password">
        <aside className="left-content"></aside>

        <main className="content">
          {/* header */}
          <header>
            <div className="main-header">
              <img src={CoffeeLogo} alt="logo-coffee-shop" />
              <p className="name-coffee-shop">Coffee Shop</p>
            </div>
          </header>

          {/* main content */}
          <div className="main-content">
            <p className="title">Forgot your password?</p>
            <p className="solution">Don't worry, we get you back!</p>
            <input
              type="email"
              placeholder="Enter your email address to link"
            />
            <button className="send-btn">Send</button>
            <p className="receive-link">
              Click here if you didn't receive any link in 2 minutes
            </p>
            <p className="time-receive-link">
              <b>01:52</b>
            </p>
            <button className="resend-btn">Resend Link</button>
          </div>

          {/* footer */}
          <footer>
            <div className="left-footer">
              <div className="logo">
                <img src={CoffeeLogo} alt="coffee-logo" />
                <p>Coffee shop</p>
              </div>
              <div className="about">
                <p>
                  Coffee Shop is a store that sells some good meals, and
                  especially coffee. We provide high quality beans
                </p>
              </div>
              <div className="social-media">
                <div className="facebook">
                  <img src={FacebookLogo} alt="fb" />
                </div>
                <div className="twitter">
                  <img src={TwitterLogo} alt="tw" />
                </div>
                <div className="instagram">
                  <img src={InstagramLogo} alt="ig" />
                </div>
              </div>
              <p className="copyright">©2020CoffeeStore</p>
            </div>
            <div className="right-footer">
              <div className="product">
                <p className="bold">Product</p>
                <div className="nav">
                  <div className="left">
                    <p>Download</p>
                    <p>Locations</p>
                    <p>Blog</p>
                  </div>
                  <div className="right">
                    <p>Pricing</p>
                    <p>Countries</p>
                  </div>
                </div>
              </div>
              <div className="engage">
                <p className="bold">Engage</p>
                <div className="nav">
                  <div className="left">
                    <p>Coffee Shop ?</p>
                    <p>FAQ</p>
                    <p>Terms of Service</p>
                  </div>
                  <div className="right">
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default index;
