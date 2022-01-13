import { takeLatest, takeEvery } from "redux-saga/effects";
import { handleRegister } from "./handlers/register";
import { setUser } from "../slices/user/slice";

export function* watcherSaga() {
  yield takeLatest(setUser.type, handleRegister);
}
