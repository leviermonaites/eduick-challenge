import React from "react";

import "./styles/index.css";

const FindTeacherForm = ({ formState, handleChange, handleSubmit }) => {
  return (
    <form id="find-teacher-form" onSubmit={handleSubmit}>
      <input
        id="find-teacher-search-input"
        placeholder="Type here what are you looking for"
        value={formState.searchValue}
        onChange={(e) => handleChange("searchValue", e.target.value)}
      />
      <section id="find-teacher-bottom-buttons">
        <section id="find-teacher-checkboxes-container">
          <label
            htmlFor="teacher-checkbox"
            className="find-teacher-checkbox-label"
            style={{
              background: formState.teacherChecked
                ? "#7955E8"
                : "rgba(121, 85, 232, 0.3)",
            }}
          >
            <input
              type="checkbox"
              id="teacher-checkbox"
              className="find-teacher-checkbox"
              checked={formState.teacherChecked}
              value={formState.teacherChecked}
              onChange={(e) => handleChange("teacherChecked", e.target.value)}
            />
            I'M A TEACHER
          </label>
          <label
            htmlFor="student-checkbox"
            className="find-teacher-checkbox-label"
            style={{
              background: formState.studentChecked
                ? "#7955E8"
                : "rgba(121, 85, 232, 0.3)",
            }}
          >
            <input
              type="checkbox"
              id="student-checkbox"
              className="find-teacher-checkbox"
              checked={formState.studentChecked}
              value={formState.studentChecked}
              onChange={(e) => handleChange("studentChecked", e.target.value)}
            />
            I'M A STUDENT
          </label>
        </section>
        <button type="submit" id="find-teacher-search-button">
          SEARCH
        </button>
      </section>
    </form>
  );
};

export default FindTeacherForm;
