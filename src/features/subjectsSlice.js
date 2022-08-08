import { createSlice } from "@reduxjs/toolkit";

export const subjectsSlice = createSlice({
  name: "subjects",
  initialState: {
    subjects: [],
  },
  reducers: {
    //Add a new subject with a corresponding grade
    addSubject: (state, action) => {
      //if the subject is already in the array don't add it again, else add it to array
      const entry = state.subjects.find(
        (subject) => subject.name === action.payload.name
      );
      entry ? console.log("No can do") : state.subjects.push(action.payload);
    },
    deleteSubject: (state, action) => {
      //return a new array that doesn't contain the subject name that we want to delete
      state.subjects = state.subjects.filter(
        (subject) => subject.name !== action.payload.name
      );
    },
    changeGrade: (state, action) => {
      // find the subject that we want and change the grade to the action input grade
      const entry = state.subjects.find(
        (subject) => subject.name === action.payload.name
      );
      entry.grade = action.payload.grade;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSubject, deleteSubject, changeGrade } = subjectsSlice.actions;
export default subjectsSlice.reducer;
