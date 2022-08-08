import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSubject,
  deleteSubject,
  changeGrade,
} from "../features/subjectsSlice";

export const Slider = ({ label, grade = 0 }) => {
  const subjects = useSelector((state) => state.subjects.subjects);
  const dispatch = useDispatch();
  // dispatch(deleteSubject({ name: "math", grade: 80 }));

  const handleClick = () => {
    dispatch(addSubject({ name: "math", grade: 80 }));
    dispatch(addSubject({ name: "sciences", grade: 90 }));
  };

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      <button
        onClick={() => {
          dispatch(deleteSubject({ name: "math", grade: 80 }));
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          dispatch(changeGrade({ name: "math", grade: 50 }));
        }}
      >
        Change Grade to 50
      </button>
    </div>
  );
};
