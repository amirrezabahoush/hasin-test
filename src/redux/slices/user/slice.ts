import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "types";

export const state: UserSchema = {
	id: "",
	details: {
		cellphone: "",
		isValidCellphone: 0,
		isValidMail: 0,
		mail: "",
		mrcCode: "",
		residentCode: 0,
		userStatus: 0,
		userType: 0,
	},
};

const userSlice = createSlice({
	name: "user",
	initialState: state,
	reducers: {
		login(state, action) {},
		setPassword(state, action) {},
		sendUserData(state, action) {},
		getUser() {},
		setUserID(state, action) {
			return { ...state, id: action.payload };
		},
		setUser(state, action) {
			return { ...state, details: action.payload };
		},
	},
});

export const { sendUserData, setUserID, setPassword, login, setUser, getUser } =
	userSlice.actions;

export default userSlice.reducer;
