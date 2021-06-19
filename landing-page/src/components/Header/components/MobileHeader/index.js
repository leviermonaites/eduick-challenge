import React, { useContext } from "react";
import { LandingPageContext } from "../../../../pages/LandingPage";

import "./index.css";

const MobileHeader = ({ eduickLogo, hamburguerIcon }) => {
  const { handleClickOpenMenu } = useContext(LandingPageContext);
  return (
    <header id="landing-page-header">
      <button id="hamburger-btn-header" onClick={handleClickOpenMenu}>
        <img src={hamburguerIcon} alt="" />
      </button>
      <img src={eduickLogo} alt="" />
    </header>
  );
};

export default MobileHeader;
