/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import closeIcon from "../../assets/images/close.svg";

import "./index.css";

const ModalMenu = ({
  show,
  eduickLogo,
  handleClickCloseMenu,
  handleClickGetStarted,
}) => {
  return (
    <>
      {show ? (
        <section id="modal-menu">
          <header id="menu-mobile-header">
            <img src={eduickLogo} alt="" id="eduick-logo" />
            <button id="close-menu-btn" onClick={handleClickCloseMenu}>
              <img src={closeIcon} alt="" />
            </button>
          </header>
          <section id="menu-mobile-center-content">
            <nav id="links-mobile-menu">
              <a href="#" className="link-mobile-menu">
                How it works
              </a>
              <a href="#" className="link-mobile-menu">
                About us
              </a>
            </nav>
            <button
              id="get-started-mobile-menu"
              onClick={handleClickGetStarted}
            >
              Get Started
            </button>
          </section>
        </section>
      ) : null}
    </>
  );
};

export default ModalMenu;
