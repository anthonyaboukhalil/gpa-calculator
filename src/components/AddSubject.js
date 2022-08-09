import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addSubject,
  deleteSubject,
  changeGrade,
} from "../features/subjectsSlice";

const AddSubject = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSubject({ name: name, grade: 50 }));
  };
  return (
    <>
      <button
        className="btn btn-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-square m-2"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        Add a new Subject
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control form-control-lg "
              type="text"
              value={name}
              maxLength="12"
              placeholder="Enter Course Name"
              aria-label=".form-control-lg example"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <button type="submit" className="d-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSubject;
