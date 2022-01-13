import { createSlice } from "@reduxjs/toolkit";

export const state = {
  code: {}
};

const AcceptCode = createSlice({
  name: "code",
  initialState: state,
  reducers: {
    getCode(state, action) {},
    sendCode(state, action) {
      const userData = action.payload;
      return { ...state, user:{...userData} };
    }
  }
});

export const { getCode, sendCode } = AcceptCode.actions;

export default AcceptCode.reducer;
