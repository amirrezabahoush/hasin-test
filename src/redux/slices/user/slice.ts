import { createSlice } from "@reduxjs/toolkit";

export const state = {
    id: '',
    details: {
      
    }
};

const userSlice = createSlice({
  name: "user",
  initialState: state,
  reducers: {
    login(state, action)  {},
    setPassword(state, action)  {},
    sendUserData(state, action) {},
    getUser() {},
    setUserID(state, action) {
      return { ...state, id: action.payload };
    },
    setUser(state, action) {
      return { ...state, details: action.payload };
    }
  }
});

export const { sendUserData, setUserID, setPassword, login, setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
