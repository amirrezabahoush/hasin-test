import { call, put } from "redux-saga/effects";
import { setMessage } from "../../slices/notification/slice";
import { sendLoginData } from "services/Auth/SignUp";
// import { sleep } from "utils/helpers";

export function* handleLogin(action: any) {
	try {
		const response = call(() => sendLoginData(action.payload));
		const { data } = yield response;
		if (data.accessToken) {
			localStorage.setItem("token", data.accessToken);
			yield put(
				setMessage({ message: "ورود موفقیت آمیز", isSuccessful: true })
			);
		}
		// sleep(2000);
		// yield put(setMessage({ message: "", isSuccessful: false }));
	} catch (error) {
		console.log(error);
	}
}
