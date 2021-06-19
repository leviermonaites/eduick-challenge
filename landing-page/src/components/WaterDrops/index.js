import purpleWaterDrop from "../../assets/images/purple-water-drop.svg";
import lightWaterDrop from "../../assets/images/light-water-drop.svg";
import studentWriting from "../../assets/images/student-writing.svg";
import yellowWaterDrop from "../../assets/images/yellow-water-drop.svg";
import rectangleCircles from "../../assets/images/rectangle-circles.svg";

import "./styles/index.css";

const WaterDrops = ({ containerSide, mobileSize }) => {
  console.log(window.outerWidth, mobileSize);
  return (
    <section
      className={`water-drops-container ${
        !mobileSize
          ? containerSide === "left"
            ? "left-side-water-drops"
            : "right-side-water-drops"
          : ""
      }`}
    >
      <img
        src={lightWaterDrop}
        alt=""
        className="water-drop light-water-drop"
      />
      <img
        src={purpleWaterDrop}
        alt=""
        className="water-drop purple-water-drop"
      />
      {containerSide === "left" || mobileSize ? (
        <>
          <img
            src={studentWriting}
            alt=""
            id="student-writing-water-drop"
            className="water-drop"
          />
          {!mobileSize && (
            <>
              <img
                src={yellowWaterDrop}
                alt=""
                id="yellow-water-drop"
                className="water-drop"
              />
              <img src={rectangleCircles} alt="" id="rectangle-circles" />
            </>
          )}
        </>
      ) : null}
    </section>
  );
};

export default WaterDrops;
