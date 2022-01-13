import { createSlice } from "@reduxjs/toolkit";

export const state = {
    id: ''
};

const userSlice = createSlice({
  name: "user",
  initialState: state,
  reducers: {
    sendUserData(state, action) {},
    setUser(state, action) {
      return { ...state, id: action.payload };
    }
  }
});

export const { sendUserData, setUser } = userSlice.actions;

export default userSlice.reducer;
