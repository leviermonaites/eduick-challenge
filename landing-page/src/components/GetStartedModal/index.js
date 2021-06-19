import React, { useState } from "react";

import closeIcon from "../../assets/images/close.svg";
import showPasswordIcon from "../../assets/images/show-password.svg";
import hidePasswordIcon from "../../assets/images/hide-password.svg";

import "./styles/index.css";

const GetStartedModal = ({ show, handleCloseGetStarted }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowHidePassword = () => setShowPassword(!showPassword);

  const handleLoginSubmit = (e) => e.preventDefault();

  return (
    <>
      {show ? (
        <section id="get-started-modal">
          <section id="get-started-main-content">
            <button id="get-started-close" onClick={handleCloseGetStarted}>
              <img src={closeIcon} alt="" />
            </button>
            <header id="get-started-modal-header">
              <h1 id="get-started-title">Get Started</h1>
              <h1 id="just-login-title">JUST LOGIN</h1>
            </header>
            <form id="get-started-form" onSubmit={handleLoginSubmit}>
              <label
                htmlFor="username-input"
                className="get-started-input-wrapper"
              >
                <span className="get-started-form-input-label">Username:</span>
                <input id="username-input" className="get-started-input" />
              </label>

              <label
                htmlFor="password-input"
                className="get-started-input-wrapper"
              >
                <span className="get-started-form-input-label">Password:</span>
                <input
                  id="password-input"
                  type={showPassword ? "text" : "password"}
                  className="get-started-input"
                />
                <button
                  id="show-hide-password"
                  onClick={handleShowHidePassword}
                >
                  <img
                    src={showPassword ? hidePasswordIcon : showPasswordIcon}
                    alt=""
                  />
                </button>
              </label>
              <button id="get-started-login-btn">Login</button>
            </form>
          </section>
        </section>
      ) : null}
    </>
  );
};

export default GetStartedModal;
