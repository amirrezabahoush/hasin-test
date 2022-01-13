import { createSlice } from "@reduxjs/toolkit";

export const state = {
  message: '',
  isSuccessful: false
};

const messageSlice = createSlice({
  name: "messages",
  initialState: state,
  reducers: {
    setMessage(state, action) {
      return { ...action.payload };
    }
  }
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
