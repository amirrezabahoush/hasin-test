import { call, put } from "redux-saga/effects";
import { setUser } from "../../slices/user/slice";
import { setMessage } from "../../slices/notification/slice";
import { getUser } from "services/Dashboard";
import { sleep } from "utils/helpers";

export function* handleGetUser(action: any) {
  try {
    const response = call(() => getUser());
    const { data } = yield response;
    yield put(setUser(data.payload));
    yield put(setMessage({message: data.message, isSuccessful: data.isSuccessful}));
    sleep(1500);
		yield put(setMessage({ message: "", isSuccessful: false }));
  } catch (error) {
    console.log(error);
  }
}
