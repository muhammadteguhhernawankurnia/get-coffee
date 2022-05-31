import React, { useState } from "react";
import "../Login/index.css";
import CoffeeLogo from "../../assets/sign up images/coffee-1.png";
import GoogleLogo from "../../assets/sign up images/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png";
import FacebookLogo from "../../assets/sign up images/facebook-logo.png";
import TwitterLogo from "../../assets/sign up images/twitter-logo.png";
import InstagramLogo from "../../assets/sign up images/instagram-logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// handle axios
const Index = () => {
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState({
    email: "",
    pass: "",
  });

  const Login = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/auth", formLogin)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        navigate("/");
      })
      .catch((err) => console.log(err));

    setFormLogin({
      email: "",
      pass: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="login-content">
        <div className="left-content"></div>
        <div className="right-content">
          <nav>
            <div className="logo">
              <Link className="navigation" to="/">
                <img src={CoffeeLogo} alt="coffee-logo" />
              </Link>
              <p>Coffee Shop</p>
            </div>
            <div className="logo-login">
              <p>Login</p>
            </div>
          </nav>

          {/* form */}
          <div className="login-wrapper">
            <form className="login" onSubmit={(e) => Login(e)}>
              <label htmlFor="email" className="email">
                Email Address :
              </label>
              <input
                type="email"
                required
                name="email"
                value={formLogin.email}
                onChange={handleChange}
                placeholder="Input your email address"
              />
              <label htmlFor="password" className="password">
                Password :
              </label>
              <input
                type="password"
                required
                value={formLogin.pass}
                onChange={handleChange}
                name="pass"
                placeholder="Input Password"
              />
              <Link className="navigation" to="/forgetpassword">
                <p className="forgot-password">Forgot password?</p>
              </Link>
              <button type="submit" className="login-btn">
                Login
              </button>
              <button className="login-with-google-btn">
                <img src={GoogleLogo} alt="GoogleLogo" />
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
