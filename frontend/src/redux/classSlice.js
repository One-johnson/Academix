// src/redux/classSlice.js
import { createSlice } from '@reduxjs/toolkit';

const classSlice = createSlice({
  name: 'classes',
  initialState: {
    list: [], // Array to hold all class records
    status: 'idle', // Status for API call tracking
  },
  reducers: {
    addClass: (state, action) => {
      state.list.push(action.payload); // Action to add a class
    },
    removeClass: (state, action) => {
      state.list = state.list.filter(classItem => classItem.id !== action.payload); // Action to remove a class by ID
    },
    // Actions for updating or fetching class details
  },
});

export const { addClass, removeClass } = classSlice.actions;
export default classSlice.reducer;
