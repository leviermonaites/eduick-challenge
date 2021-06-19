import React from "react";
import DesktopHeader from "./components/DesktopHeader";
import MobileHeader from "./components/MobileHeader";
import eduickLogo from "../../assets/images/logo.svg";
import hamburgerIcon from "../../assets/images/hamburger.svg";

const Header = ({ screenType }) => {
  return screenType === "mobile" ? (
    <MobileHeader eduickLogo={eduickLogo} hamburguerIcon={hamburgerIcon} />
  ) : (
    <DesktopHeader eduickLogo={eduickLogo} />
  );
};

export default Header;
