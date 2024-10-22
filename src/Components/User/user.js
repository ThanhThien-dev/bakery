import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./user.css";

function User() {
  const location = useLocation();
  console.log(location);

  return (
    <section className="login-container">
      <div className="login-wrap">
        {/* Left */}
        <div className="login-block-left">
          <div className="login-block-inner">
            <div className="login-block-left__logo">
              <img src={require("../../Images/Bakin.png")} alt="text-logo" />
            </div>
            <div className="login-block-left__description">
              <div className="block-left__sub-title">Welcome To</div>
              <h1 className="block-left__main-title">
                We're a Bakery Cake Shop.
              </h1>
              <p className="block-left__description">
                We are glad to see you again! Get access to your Orders,
                Wishlist and Recommendations.
              </p>
            </div>

            <div className="login-block-inner__account">
              <div>Don't have an account?</div>
              {location.pathname === "/login" ? (
                <Link
                  to="/register"
                  style={{ fontWeight: "bold", color: "#fff" }}
                >
                  Register
                </Link>
              ) : (
                <Link to="/login" style={{ fontWeight: "bold", color: "#fff" }}>
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="login-block-right">
          <div className="container-login-right">
            <div className="fxt-inner-wrap">
              {location.pathname === "/login" ? (
                <div>
                  <h2 className="login-block-right__title">Log In</h2>
                  <p className="title-description">
                    Log In to try our amazing servuces
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="login-block-right__title">Sign Up</h2>
                  <p className="title-description">
                    Sign Up to try our amazing services
                  </p>
                </div>
              )}

              <form className="login-block-right__form">
                <div className="form-group">
                  {location.pathname === "/login" ? (
                    <div></div>
                  ) : (
                    <div className="form-group">
                      <label htmlFor="email" className="fxt-label">
                        Full Name
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                  )}
                  <label htmlFor="email" className="fxt-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="fxt-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                {location.pathname === "/login" ? (
                  <div
                    className="form-group forgot-password"
                    style={{ flexDirection: "row" }}
                  >
                    <a
                      href="/forgot-password"
                      className="login-forgot-password"
                    >
                      Forgot Password
                    </a>
                    <Link to="/" className="login-forgot-password">
                      Return to Home
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
                {location.pathname === "/login" ? (
                  <div className="form-group">
                    <button className="fxt-btn">Log In</button>
                  </div>
                ) : (
                  <div className="form-group">
                    <button className="fxt-btn">Sign Up</button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;
