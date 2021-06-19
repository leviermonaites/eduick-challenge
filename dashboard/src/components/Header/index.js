import React from "react";

import rectangleCircles from "../../assets/header/rectangle-circles.svg";
import logo from "../../assets/header/logo.svg";
import userPhoto from "../../assets/header/user-photo.png";
import chevronDown from "../../assets/header/chevron-down.svg";
import chevronUp from "../../assets/header/chevron-up.svg";

import "./styles/index.css";

const Header = ({ screenType, isDropdownOpen, handleToggleDropdown }) => {
  return (
    <header id="header">
      <section id="inner-container-header">
        <section id="left-side-header">
          <section id="logo-wrapper-header">
            {/* Show the rectangle full of circles based on screen size. */}
            {screenType !== "mobile" ? (
              <img src={rectangleCircles} alt="" id="rectangle-circles-shape" />
            ) : null}

            <img src={logo} alt="" id="eduick-logo" />
          </section>

          {/* Show this "link" based on screen size */}
          {screenType !== "mobile" ? <p id="my-classes">My classes</p> : null}
        </section>

        <section id="right-side-header">
          {/* Implement change to teacher mode or dropdown based on screen size. */}
          {screenType !== "mobile" ? (
            <button id="change-mode">CHANGE TO TEACHER MODE</button>
          ) : (
            <button id="toggle-dropdown" onClick={handleToggleDropdown}>
              <img src={isDropdownOpen ? chevronUp : chevronDown} alt="" />
            </button>
          )}

          <section id="user-photo-wrapper">
            <img src={userPhoto} alt="" id="user-photo" />
            <section id="notification-alert"></section>
          </section>
        </section>
      </section>
    </header>
  );
};

export default Header;
