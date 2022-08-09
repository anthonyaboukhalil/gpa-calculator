import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSubject,
  deleteSubject,
  changeGrade,
} from "../features/subjectsSlice";

const DisplaySubjects = () => {
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subjects.subjects);

  const handleChange = (event) => {
    dispatch(
      changeGrade({ name: event.target.name, grade: event.target.value })
    );
  };

  const renderSubjects = () => {
    const renderedSubjects = subjects.map((subject) => {
      return (
        <div
          key={subject.name}
          className="position-relative mt-3 border border-dark border-1 rounded p-3
          "
        >
          <label className="form-label" id="subject-label">
            {subject.name.toUpperCase()}
            <br />
            {subject.grade}%
          </label>
          <svg
            id="delete-btn"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash3 position-absolute end-0 me-1 
            "
            viewBox="0 0 16 16"
            onClick={() => {
              dispatch(deleteSubject({ name: subject.name, grade: 80 }));
            }}
            cursor="pointer"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg>
          <input
            id="slider"
            className="form-range"
            type="range"
            min="0"
            max="100"
            value={subject.grade}
            onChange={handleChange}
            step={0.25}
            name={subject.name}
          />
        </div>
      );
    });
    return renderedSubjects;
  };
  return <div>{renderSubjects()}</div>;
};

export default DisplaySubjects;
