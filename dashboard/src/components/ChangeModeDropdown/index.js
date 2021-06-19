import React from "react";

import arrowRight from "../../assets/dropdown/arrow-right.svg";

import "./index.css";

const ChangeModeDropdown = ({ isDropdownOpen }) => {
  return (
    <section
      id="change-mode-dropdown"
      style={{ display: isDropdownOpen ? "flex" : "none" }}
    >
      <button id="change-mode-dropdown-container">
        <p id="change-mode-text">CHANGE TEACHER MODE</p>
        <img src={arrowRight} alt="" />
      </button>
    </section>
  );
};

export default ChangeModeDropdown;
