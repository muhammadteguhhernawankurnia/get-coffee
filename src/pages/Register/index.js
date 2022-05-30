import React from "react";
import "../Register/index.css";
import CoffeLogo from "../../assets/sign up images/coffee-1.png";
import GoogleLogo from "../../assets/sign up images/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png";
import FacebookLogo from "../../assets/sign up images/facebook-logo.png";
import TwitterLogo from "../../assets/sign up images/twitter-logo.png";
import InstagramLogo from "../../assets/sign up images/instagram-logo.png";

const index = () => {
  return (
    <>
      <div className="register-content">
        <div className="left-content"></div>
        <div className="right-content">
          {/* Nav */}
          <nav>
            <div className="logo">
              <img src={CoffeLogo} alt="coffee-logo" />
              <p>Coffee Shop</p>
            </div>
            <div className="logo-sign-up">
              <p>Sign Up</p>
            </div>
          </nav>

          {/* form   */}
          <div className="sign-up-wrapper">
            <form className="sign-up">
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
              <label htmlFor="phone-number" className="phone-number">
                Phone Number :
              </label>
              <input
                id="phone-number"
                type="number"
                placeholder="Enter your phone number"
              />
              <button className="sign-up-btn">Sign Up</button>
              <button className="sign-up-with-google-btn">
                <img src={GoogleLogo} alt="GoogleLogo" />
                Sign Up with Google
              </button>
              <div className="question">
                <div className="line" />
                <div className="text">
                  <p>Already have an account?</p>
                </div>
              </div>
              <button className="login-here-btn">Login here</button>
            </form>
          </div>

          {/* footer */}
          <div className="footer">
            <div className="left-footer">
              <div className="logo">
                <img src={CoffeLogo} alt="coffee-logo" />
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

export default index;
