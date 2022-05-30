import React from "react";
import { index as Navbar } from "../../components/Navbar";
import PhotoProfile from "../../assets/profile-images/photo-profil.png";
import "./index.css";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="profile-content">
        <div className="main-content">
          <div className="container">
            <p className="title">User Profile</p>
            <div className="display-box">
              <div className="left-content">
                <img
                  className="photo-profil"
                  src={PhotoProfile}
                  alt="profil3"
                />
                <p className="user-name">Zulaikha</p>
                <p className="user-email">zulaikha17@gmail.com</p>
                <button className="choose-photo-btn">Choose Photo</button>
                <button className="remove-photo-btn">Remove Photo</button>
                <button className="edit-password-btn">Edit Password</button>
                <button className="do-you-btn">
                  Do you want to save <br />
                  the changes?
                </button>
                <button className="save-change-btn">Save Change</button>
                <button className="cancel-btn">Cancel</button>
                <button className="logout-btn">Log out</button>
              </div>
              <div className="right-content">
                <div className="contact">
                  <p className="title">Contact</p>
                  <form>
                    <div className="left-form">
                      <label htmlFor="email">Email Address :</label>
                      <input id="email" type="mail" />
                      <label htmlFor="delivery-address">
                        Delivery address :
                      </label>
                      <input id="delivery-address" type="text" />
                    </div>
                    <div className="right-form">
                      <label htmlFor="mobile-number">Mobile number : </label>
                      <input id="mobile-number" type="number" />
                    </div>
                  </form>
                </div>
                <div className="details">
                  <p className="title">Details</p>
                  <form>
                    <div className="left-form">
                      <label htmlFor="display">Display name :</label>
                      <input id="display" type="text" />
                      <label htmlFor="first-name">First name :</label>
                      <input id="first-name" type="text" />
                      <label htmlFor="last-name">Last name :</label>
                      <input id="last-name" type="text" />
                    </div>
                    <div className="right-form">
                      <label htmlFor="birth">DD/MM/YY : </label>
                      <input id="birth" type="date" />
                    </div>
                  </form>
                </div>
                <div className="radio-gender">
                  <input
                    type="radio"
                    id="male-id"
                    name="male-gender"
                    defaultValue="Male"
                  />
                  <label htmlFor="male">Male</label>
                  <br />
                  <input
                    type="radio"
                    id="female-id"
                    name="female-gender"
                    defaultValue="Female"
                  />
                  <label htmlFor="female">Female</label>
                  <br />
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
