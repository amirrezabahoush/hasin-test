import { call, put } from "redux-saga/effects";
import { setMessage } from "../../slices/notification/slice";
import { resendCode, submitCode } from "services/Auth/SignUp";
import { sleep } from "utils/helpers";

export function* handleGetCode(action: any) {
	try {
		const response = call(() => resendCode(action.payload));
		const { data } = yield response;
		yield put(
			setMessage({ message: data.message, isSuccessful: data.isSuccessful })
		);
    sleep(500);
		yield put(setMessage({ message: "", isSuccessful: false }));
	} catch (error) {
		console.log(error);
	}
}

export function* handleSendCode(action: any) {
	try {
		const response = call(() => submitCode(action.payload));
		const { data } = yield response;
		yield put(
			setMessage({ message: data.message, isSuccessful: data.isSuccessful })
		);
		sleep(500);
		yield put(setMessage({ message: "", isSuccessful: false }));
	} catch (error) {
		console.log(error);
	}
}
