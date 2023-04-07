import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: false,
  message: "",
  type: true, // alert is by default for success
};

export const alertReducer = createSlice({
  name: "alert",
  initialState,
  reducers: {
    displayAlert: (state, action) => {
      const { type, message } = action.payload;

      state.type = type;
      state.message = message;
      state.display = true;
    },
    hideAlert: (state) => {
      state.display = false;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { displayAlert, hideAlert, setMessage } = alertReducer.actions;
export const selectAlert = (state) => state.alert;

export default alertReducer.reducer;
