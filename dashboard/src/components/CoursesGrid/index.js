import React from "react";
import courses from "./courses";

import filledStar from "../../assets/courses/filled-star.svg";
import unfilledStar from "../../assets/courses/unfilled-star.svg";
import circle from "../../assets/courses/circle.svg";

import "./styles/index.css";

const CoursesGrid = () => {
  const getStarsRatingComponent = (rating) => {
    // Maybe there is a better way to do so, but this is what I came up with!
    // I created an array with its size being the max rating of the course, and then just applied some logic according to the rating of the course itself.

    const ratingArray = new Array(5);
    for (let i = 0; i < 5; i++) {
      if (i < rating) ratingArray[i] = true;
      else ratingArray[i] = false;
    }

    return (
      <>
        {ratingArray.map((value, index) => (
          <React.Fragment key={index}>
            <img
              className="star-rating-item"
              src={value ? filledStar : unfilledStar}
              alt=""
            />
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <section id="courses-container">
      <section id="courses-grid-container">
        {/* Implement dinamic rendering based on courses array */}
        {courses.length > 0
          ? courses.map((course) => (
              <section key={course.id} className="course-item">
                <img
                  className="course-item-thumbnail"
                  src={course.img}
                  alt=""
                />
                <section className="course-item-middle-container">
                  <section className="stars-rating-container">
                    {getStarsRatingComponent(course.rating)}
                  </section>
                  <section className="course-lessons-quantity-container">
                    10 Lessons
                  </section>
                </section>
                <h1 className="course-item-title">{course.title}</h1>
              </section>
            ))
          : null}
      </section>
      {/* In a real case, this thing would be dynamic */}
      <section id="page-selector-container">
        <button className="page-selector">
          <img src={circle} alt="" />
        </button>
        <button className="page-selector">
          <img src={circle} alt="" />
        </button>
        <button className="page-selector">
          <img src={circle} alt="" />
        </button>
      </section>
    </section>
  );
};

export default CoursesGrid;
