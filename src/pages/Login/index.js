import React, { useEffect, useState } from "react";
import "../Login/index.css";
import CoffeeLogo from "../../assets/sign up images/coffee-1.png";
import GoogleLogo from "../../assets/sign up images/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png";
import FacebookLogo from "../../assets/sign up images/facebook-logo.png";
import TwitterLogo from "../../assets/sign up images/twitter-logo.png";
import InstagramLogo from "../../assets/sign up images/instagram-logo.png";
import axios from "axios";

// handle axios
const Index = () => {
  useEffect(() => {
    axios
      .post("http://localhost:8080/auth", {
        email: "teskoneksi@gmail.com",
        pass: "tes",
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="login-content">
        <div className="left-content"></div>
        <div className="right-content">
          <nav>
            <div className="logo">
              <img src={CoffeeLogo} alt="coffee-logo" />
              <p>Coffee Shop</p>
            </div>
            <div className="logo-login">
              <p>Login</p>
            </div>
          </nav>

          {/* form */}
          <div className="login-wrapper">
            <form className="login">
              <label htmlFor="email" className="email">
                Email Address :
              </label>
              <input
                id="email"
                type="mail"
                placeholder="Enter your email address"
              />
              <label htmlFor="password" className="password">
                Password :
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
              <p className="forgot-password">Forgot password?</p>
              <button className="login-btn">Login</button>
              <button className="login-with-google-btn">
                <img src={GoogleLogo} alt="GoggleLogo" />
                Login with Google
              </button>
              <div className="question">
                <div className="line" />
                <div className="text">
                  <p>Don't have an account?</p>
                </div>
              </div>
              <button className="sign-up-here-btn">Sign Up here</button>
            </form>
          </div>

          {/* footer */}
          <div className="footer">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
