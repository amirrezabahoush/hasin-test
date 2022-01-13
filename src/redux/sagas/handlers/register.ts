import { call, put } from "redux-saga/effects";
import { setUserID } from "../../slices/user/slice";
import { setMessage } from "../../slices/notification/slice";
import { register } from "services/Auth/SignUp";
import { sleep } from "utils/helpers";

export function* handleRegister(action: any) {
  try {
    const response = call(() => register(action.payload));
    const { data } = yield response;
    yield put(setUserID(data.payload.id));
    yield put(setMessage({message: data.message, isSuccessful: data.isSuccessful}));
    sleep(500);
		yield put(setMessage({ message: "", isSuccessful: false }));
  } catch (error) {
    console.log(error);
  }
}
