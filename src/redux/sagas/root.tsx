import { takeLatest } from "redux-saga/effects";
import { handleRegister } from "./handlers/register";
import { handleGetCode } from "./handlers/getCode";
import { sendUserData } from "redux/slices/user/slice";
import { getCode } from "redux/slices/code/slice";

export function* watcherSaga() {
  yield takeLatest(sendUserData.type, handleRegister);
  yield takeLatest(getCode.type, handleGetCode);
  // yield takeLatest('user/setUser', handleRegister);
}
