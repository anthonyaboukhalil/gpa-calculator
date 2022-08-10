import React from "react";
import { useSelector, useDispatch } from "react-redux";
const DisplayGpa = () => {
  const subjects = useSelector((state) => state.subjects.subjects);
  // console.log(subjects);
  const arr = subjects
    .map((subject) => subject.grade / 20 - 1)
    .reduce((prev, curr) => prev + curr, 0);
  let gpa = arr / subjects.length;
  gpa < 1 ? (gpa = 0) : (gpa = gpa);

  return <div id="gpa">{gpa ? gpa.toFixed(1) : 0}</div>;
};

export default DisplayGpa;
