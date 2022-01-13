import { call, put } from "redux-saga/effects";
import { setMessage } from "../../slices/notification/slice";
import { sendLoginData } from "services/Auth/SignUp";
import Notification from "components/container/Notification";

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
		const notificationProps = {
			type: "success",
			description: "ورود موفقیت آمیز",
			key: "message",
			config: {
				duration: 5,
				rtl: true,
				placement: "topLeft",
			},
		};
		Notification(notificationProps);
	} catch (error) {
		console.log(error);
	}
}
