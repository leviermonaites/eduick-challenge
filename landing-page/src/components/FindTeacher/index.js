import React, { useReducer } from "react";
import FindTeacherForm from "./components/FindTeacherForm";
import FindTeacherHeader from "./components/FindTeacherHeader";
import reducer, { initialState } from "./helpers/reducer";
import "./styles/index.css";

const FindTeacher = ({ screenType }) => {
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleChange = (prop, value) =>
    dispatch({ type: "HANDLE_CHANGE", payload: { prop, value } });

  console.log(screenType);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <section id="find-teacher-container">
      <FindTeacherHeader />
      {screenType === "large-desktop" || screenType === "medium-desktop" ? (
        <section id="find-teacher-search-description">
          <p>
            Whether you are a student trying to find your ideal private language
            teachers/tutors or a teacher trying to find great students for your
            customised private lessons!
          </p>
        </section>
      ) : null}
      <FindTeacherForm
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default FindTeacher;
