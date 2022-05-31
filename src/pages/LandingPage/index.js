import React from "react";
import { index as NavbarHasLogin } from "../../components/NavbarHasLogin";
import { index as Footer } from "../../components/Footer";
import "./index.css";
import Staff from "../../assets/home-images/icon/staff.png";
import Location from "../../assets/home-images/icon/location.png";
import Love from "../../assets/home-images/icon/love.png";
import Image2 from "../../assets/home-images/home-img-2.jpg";
import Hazelnut from "../../assets/home-images/product/hazelnut-latte.png";
import Pinky from "../../assets/home-images/product/pinky-promise.png";
import Chicken from "../../assets/home-images/product/chicken wings.png";
import Map from "../../assets/home-images/world-map.png";
import Netflix from "../../assets/home-images/company-logo/netflix.png";
import Reddit from "../../assets/home-images/company-logo/reddit.png";
import Amazon from "../../assets/home-images/company-logo/amazon.png";
import Discord from "../../assets/home-images/company-logo/discord.png";
import Spotify from "../../assets/home-images/company-logo/spotify.png";
import Viez from "../../assets/home-images/photo-profil/viez-robert.png";

const index = () => {
  return (
    <>
      <NavbarHasLogin />
      <div className="LP-main">
        <div className="LP-content">
          <div className="container">
            <p className="start-your">
              Start Your Day with <br /> Coffee and Good Meals
            </p>
            <p className="we-provide">
              We provide high quality beans, good taste and healthy <br />
              meals made by love just for you. Start your day with us <br /> for
              a bigger smile!
            </p>
            <button className="get-started-btn">Get Started</button>

            {/* Content 2 */}
            <div className="content-2">
              <div className="staff">
                <img src={Staff} alt="staff" />
                <div className="staff-text">
                  <p>90+</p>
                  <p>Staff</p>
                </div>
              </div>
              <div className="location">
                <img src={Location} alt="location" />
                <div className="location-text">
                  <p>30+</p>
                  <p>Stores</p>
                </div>
              </div>
              <div className="love">
                <img src={Love} alt="love" />
                <div className="love-text">
                  <p>800+</p>
                  <p>Customers</p>
                </div>
              </div>
            </div>

            {/* Content 3  */}
            <div className="content-3">
              <div className="content-3-image">
                <img src={Image2} alt="img-2" />
              </div>
              <div className="content-3-text">
                <p className="we-provide-good">
                  We Provide Good Coffee <br />
                  and Healthy Meals
                </p>
                <p className="you-can">
                  You can explore the menu that we provide that fun and have
                  their own taste and make your day better.
                </p>
                <div className="specification">
                  <div className="specification-1">
                    <i className="fa-solid fa-circle-check text-green" />
                    <p className="pl-5">High quality beans.</p>
                  </div>
                  <div className="specification-1">
                    <i className="fa-solid fa-circle-check text-green" />
                    <p className="pl-5">
                      Healty meals, you can request the ingridients.
                    </p>
                  </div>
                  <div className="specification-1">
                    <i className="fa-solid fa-circle-check text-green" />
                    <p className="pl-5">
                      Chat with our staff to get better experience for ordering.
                    </p>
                  </div>
                  <div className="specification-1">
                    <i className="fa-solid fa-circle-check text-green" />
                    <p className="pl-5">
                      Free member card with a minimum purchase of IDR 200.000.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content 4 */}
            <div className="content-4">
              <p className="here-is">Here is People's Favorite</p>
              <p className="lets-choose">
                Let's choose and have a bit taste of people's favorite. It might
                be yours too!
              </p>
            </div>

            {/* Content 5 */}
            <div className="content-5">
              <div className="content-5-hazelnut">
                <img src={Hazelnut} alt="hazelnut" />
                <p className="hazelnut-title">Hazelnut Latte</p>
                <p className="hazelnut">
                  <i className="fa-solid fa-check text-green" /> Hazelnut Syrup
                </p>
                <p className="hazelnut">
                  <i className="fa-solid fa-check text-green" /> Vanilla Whipped
                  Cream
                </p>
                <p className="hazelnut">
                  <i className="fa-solid fa-check text-green" /> Ice / Hot
                </p>
                <p className="hazelnut">
                  <i className="fa-solid fa-check text-green" /> Sliced Banana
                  on Top
                </p>
                <div className="price-hazelnut">
                  <p className="hazelnut-price">IDR 25.000</p>
                  <button className="hazelnut-btn">Order Now</button>
                </div>
              </div>
              <div className="content-5-pinky">
                <img src={Pinky} alt="pinky" />
                <p className="pinky-title">Pinky Promise</p>
                <p className="pinky">
                  <i className="fa-solid fa-check text-green" /> 1 Shoot of
                  Coffee
                </p>
                <p className="pinky">
                  <i className="fa-solid fa-check text-green" /> Vanilla Whipped
                  Cream
                </p>
                <p className="pinky">
                  <i className="fa-solid fa-check text-green" /> Chocolatte
                  Biscuits
                </p>
                <p className="pinky">
                  <i className="fa-solid fa-check text-green" /> Strawberry
                  Syrup
                </p>
                <p className="pinky">
                  <i className="fa-solid fa-check text-green" /> Sliced
                  Strawberry on Top
                </p>
                <div className="price-pinky">
                  <p className="pinky-price">IDR 30.000</p>
                  <button className="pinky-btn">Select</button>
                </div>
              </div>
              <div className="content-5-chicken">
                <img src={Chicken} alt="chicken" />
                <p className="chicken-title">Pinky Promise</p>
                <p className="chicken">
                  <i className="fa-solid fa-check text-green" /> Wings
                </p>
                <p className="chicken">
                  <i className="fa-solid fa-check text-green" /> Drum Sticks
                </p>
                <p className="chicken">
                  <i className="fa-solid fa-check text-green" /> Mayonaise and
                  Lemon
                </p>
                <p className="chicken">
                  <i className="fa-solid fa-check text-green" /> Hot Fried
                </p>
                <p className="chicken">
                  <i className="fa-solid fa-check text-green" /> Secret Recipe
                </p>
                <p className="chicken">
                  <i className="fa-solid fa-check text-green" /> Buy 1 Get 1
                  only for Dine in{" "}
                </p>
                <div className="price-chicken">
                  <p className="chicken-price">IDR 4.000</p>
                  <button className="chicken-btn">Select</button>
                </div>
              </div>
            </div>

            {/* Content 6 */}
            <div className="content-6">
              <p className="visit-our">
                Visit Our Store in the <br /> Spot on The Map Below{" "}
              </p>
              <p className="see-our">
                See our store in every city on the spot and spen your good day
                there. See <br />
                you soon!
              </p>
              <img src={Map} alt="map" />
            </div>

            {/* Content 7 */}
            <div className="content-7">
              <p className="our-partner">Our Partner</p>
              <div className="content-7-partner">
                <img src={Netflix} alt="netflix" />
                <img src={Reddit} alt="reddit" />
                <img src={Amazon} alt="amazon" />
                <img src={Discord} alt="discord" />
                <img src={Spotify} alt="spotify" />
              </div>
            </div>

            {/* Content 8 */}
            <div className="content-8">
              <div className="content-8-loved-of">
                <p className="loved-of">
                  Loved of Thousands of <br /> Happy Customer
                </p>
              </div>
              <div className="content-8-these-are">
                <p className="these-are">
                  These are the strories of our customers who have visited us
                  with great <br /> plesure
                </p>
              </div>
            </div>

            {/* Content 9 */}
            <div className="content-9">
              <img src={Viez} alt="viez" />
              <p className="name-customers">Viezh Robert</p>
              <p className="country-customer">Warsaw, Poland</p>
              <p className="ratting">
                4.5
                <i className="fa-solid fa-star text-yellow" />
              </p>
              <p className="comment">
                "Wow...I am very happy to spend my whole <br /> day here, the
                wifi is good, and <br /> the coffee and meals tho. I like it
                here! Very Recomemended"
              </p>
              <div className="content-9-slider">
                <i className="fa-solid fa-circle-arrow-left text-chocolatte" />
                <i className="fa-solid fa-circle-arrow-right text-chocolatte" />
              </div>
            </div>

            {/* Content 10 */}
            <div className="content-10">
              <div className="promo-today-lets-see">
                <p className="promo-today-content-10">
                  Check our promo <br /> today!
                </p>
                <p className="lets-see">Let's see the deals and picks yours!</p>
              </div>
              <button className="see-promo-btn">See Promo</button>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
