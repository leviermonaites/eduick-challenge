import React from "react";

import yellowWaterDrops from "../../assets/welcome/yellow-water-drops.svg";
import peopleTalking from "../../assets/welcome/people-talking.svg";

import "./styles/index.css";

const WelcomeMessage = ({ screenType }) => {
  return (
    <section id="welcome-message-container">
      <img id="yellow-water-drops" src={yellowWaterDrops} alt="" />
      <section id="welcome-message-content">
        <section id="welcome-message-left-side">
          <h1 id="welcome-message-title">
            Hello <b id="student-highlight">Student</b>
          </h1>
          <p id="welcome-message-text">
            Whether you are a student trying to find your ideal private language
            teachers/tutors
          </p>
        </section>
        {screenType !== "mobile" ? (
          <img id="people-talking" src={peopleTalking} alt="" />
        ) : null}
      </section>
    </section>
  );
};

export default WelcomeMessage;
