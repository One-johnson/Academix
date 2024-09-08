// src/redux/studentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    list: [], // Array to hold all student records
    status: 'idle', // Status for tracking API calls, etc.
  },
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload); // Action to add a student
    },
    removeStudent: (state, action) => {
      state.list = state.list.filter(student => student.id !== action.payload); // Action to remove a student by ID
    },
    // Other actions like updating a student's information can go here
  },
});

export const { addStudent, removeStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
