import React, { useEffect, useState } from "react";

import FindTeacher from "../../components/FindTeacher";
import Header from "../../components/Header";
import WaterDrops from "../../components/WaterDrops";
import ModalMenu from "../../components/ModalMenu";
import GetStartedModal from "../../components/GetStartedModal";

import eduickLogo from "../../assets/images/logo.svg";

import "./styles/index.css";

export const LandingPageContext = React.createContext(null);

const LandingPage = () => {
  const [screenType, setScreenType] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);

  const handleClickOpenMenu = () => setShowMenu(true);
  const handleClickCloseMenu = () => setShowMenu(false);

  const handleClickGetStarted = () => {
    setShowMenu(false);
    setShowGetStartedModal(true);
  };

  const handleCloseGetStarted = () => setShowGetStartedModal(false);

  useEffect(() => {
    if (window.outerWidth <= 1050) setScreenType("mobile");
    else if (window.outerWidth <= 1440 || window.outerWidth < 1850)
      setScreenType("medium-desktop");
    else setScreenType("large-desktop");
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.outerWidth <= 1040) setScreenType("mobile");
      else if (window.outerWidth <= 1440 || window.outerWidth < 1850)
        setScreenType("medium-desktop");
      else setScreenType("large-desktop");
    });
  });

  return (
    <section id="landing-page">
      <LandingPageContext.Provider
        value={{ handleClickOpenMenu, handleClickGetStarted }}
      >
        <Header screenType={screenType} />

        {screenType === "mobile" && (
          <ModalMenu
            eduickLogo={eduickLogo}
            show={showMenu}
            handleClickCloseMenu={handleClickCloseMenu}
            handleClickGetStarted={handleClickGetStarted}
          />
        )}

        <section id="landing-page-center-part">
          {screenType === "mobile" ? (
            <>
              <FindTeacher screenType={screenType} />
              <WaterDrops mobileSize={true} />
            </>
          ) : (
            <>
              <WaterDrops containerSide="left" />
              <FindTeacher screenType={screenType} />
              {screenType === "large-desktop" ? <WaterDrops /> : null}
            </>
          )}
          <GetStartedModal
            show={showGetStartedModal}
            handleCloseGetStarted={handleCloseGetStarted}
          />
        </section>

        <footer id="landing-page-footer"></footer>
      </LandingPageContext.Provider>
    </section>
  );
};

export default LandingPage;
