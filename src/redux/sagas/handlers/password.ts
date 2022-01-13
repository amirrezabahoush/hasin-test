import { call, put } from "redux-saga/effects";
import { setMessage } from "../../slices/notification/slice";
import { sendPassword } from "services/Auth/SignUp";
import { sleep } from "utils/helpers";

export function* handleSetPassword(action: any) {
  try {
    const response = call(() => sendPassword(action.payload));
    const { data } = yield response;
    yield put(setMessage({message: data.message, isSuccessful: data.isSuccessful}));
    sleep(500);
		yield put(setMessage({ message: "", isSuccessful: false }));
  } catch (error) {
    console.log(error);
  }
}
