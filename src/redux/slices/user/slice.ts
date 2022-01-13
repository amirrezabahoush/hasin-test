import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser() {},
    setUser(state, action) {
      debugger
      const userData = action.payload;
      return { ...state, user:{...userData} };
    }
  }
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
