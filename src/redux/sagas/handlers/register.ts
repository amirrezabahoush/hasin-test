import { call, put } from "redux-saga/effects";
import { setUser } from "../../slices/user/slice";
import { register } from "services/Auth/Register";

export function* handleRegister(action: any) {
  try {
    const response = call(() => register({a: ''}));
    const { data } = yield response;
    yield put(setUser({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
