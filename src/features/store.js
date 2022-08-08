import { configureStore } from "@reduxjs/toolkit";
import subjectsReducer from "./subjectsSlice";
export default configureStore({
  reducer: {
    subjects: subjectsReducer,
  },
});
