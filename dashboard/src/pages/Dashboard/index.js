import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import WelcomeMessage from "../../components/WelcomeMessage";
import Footer from "../../components/Footer";
import CoursesGrid from "../../components/CoursesGrid";
import ChangeModeDropdown from "../../components/ChangeModeDropdown";

import "./styles/index.css";

const Dashboard = () => {
  const [screenType, setScreenType] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (window.outerWidth < 1000) setScreenType("mobile");
    else setScreenType("desktop");
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.outerWidth < 1000) setScreenType("mobile");
      else {
        setScreenType("desktop");
        setIsDropdownOpen(false); // In case the user resizes the page while the dropdown was open.
      }
    });
  });

  const handleToggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <section id="dashboard">
      <Header
        screenType={screenType}
        isDropdownOpen={isDropdownOpen}
        handleToggleDropdown={handleToggleDropdown}
      />
      <section id="main-section-dashboard">
        <ChangeModeDropdown isDropdownOpen={isDropdownOpen} />
        <WelcomeMessage screenType={screenType} />
        <CoursesGrid />
      </section>
      <Footer screenType={screenType} />
    </section>
  );
};

export default Dashboard;
