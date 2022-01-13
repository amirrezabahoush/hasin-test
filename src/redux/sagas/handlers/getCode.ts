import { call, put } from "redux-saga/effects";
import { setMessage } from "../../slices/notification/slice";
import { resendCode } from "services/Auth/Register";

export function* handleGetCode(action: any) {
  try {
    const response = call(() => resendCode(action.payload));
    const { data } = yield response;
    yield put(setMessage({message: data.message, isSuccessful: data.isSuccessful}));
  } catch (error) {
    console.log(error);
  }
}