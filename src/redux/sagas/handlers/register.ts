import { call, put } from "redux-saga/effects";
import { setUser } from "../../slices/user/slice";
import { setMessage } from "../../slices/notification/slice";
import { register } from "services/Auth/Register";

export function* handleRegister(action: any) {
  try {
    const response = call(() => register(action.payload.user));
    const { data } = yield response;
    yield put(setUser(data.payload.id));
    yield put(setMessage({message: data.message, isSuccessful: data.isSuccessful}));
  } catch (error) {
    console.log(error);
  }
}
