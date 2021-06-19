/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { LandingPageContext } from "../../../../pages/LandingPage";
import "./styles/index.css";

const DesktopHeader = ({ eduickLogo }) => {
  const { handleClickGetStarted } = useContext(LandingPageContext);

  return (
    <header id="landing-page-header">
      <section id="left-side-header">
        <img id="eduick-logo" src={eduickLogo} alt="" />
        <nav id="header-links">
          <a href="#" className="header-link">
            How it works
          </a>
          <a href="#" className="header-link">
            About us
          </a>
        </nav>
      </section>
      <button id="get-started" onClick={handleClickGetStarted}>
        Get Started
      </button>
    </header>
  );
};

export default DesktopHeader;
