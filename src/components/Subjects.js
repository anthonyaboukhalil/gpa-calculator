import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSubject,
  deleteSubject,
  changeGrade,
} from "../features/subjectsSlice";

const Subjects = () => {
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subjects.subjects);

  const handleChange = (event) => {
    // console.log(event.target);
    dispatch(
      changeGrade({ name: event.target.name, grade: event.target.value })
    );
  };

  const renderSubjects = () => {
    const renderedSubjects = subjects.map((subject) => {
      return (
        <div key={subject.name}>
          <label className="form-label">
            {subject.name}
            {subject.grade}
          </label>
          <input
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

export default Subjects;
