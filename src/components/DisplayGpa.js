import React from "react";
import { useSelector } from "react-redux";
const DisplayGpa = () => {
  const subjects = useSelector((state) => state.subjects.subjects);
  // console.log(subjects);
  const arr = subjects
    .map((subject) => subject.grade / 20 - 1)
    .reduce((prev, curr) => prev + curr, 0);
  let gpa = arr / subjects.length;
  gpa < 1 ? (gpa = 0) : (gpa = arr / subjects.length);

  return (
    <div id="gpa">
      <h1>GPA</h1>
      <h1>{gpa ? gpa.toFixed(1) : 0}</h1>
    </div>
  );
};

export default DisplayGpa;
