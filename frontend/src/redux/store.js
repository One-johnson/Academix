// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./studentSlice";
import classReducer from "./classSlice";

const store = configureStore({
  reducer: {
    students: studentsReducer,
    classes: classReducer,
  },
});

export default store;
