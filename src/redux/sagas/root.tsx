import { takeLatest } from "redux-saga/effects";
import { handleRegister } from "./handlers/register";
import { handleGetCode, handleSendCode } from "./handlers/code";
import { handleSetPassword } from "./handlers/password";
import { sendUserData, setPassword, login, getUser } from "redux/slices/user/slice";
import { getCode, sendCode } from "redux/slices/code/slice";
import { handleLogin } from "./handlers/login";
import { handleGetUser } from "./handlers/user";

export function* watcherSaga() {
  yield takeLatest(sendUserData.type, handleRegister);
  yield takeLatest(getCode.type, handleGetCode);
  yield takeLatest(sendCode.type, handleSendCode);
  yield takeLatest(setPassword.type, handleSetPassword);
  yield takeLatest(login.type, handleLogin);
  yield takeLatest(getUser.type, handleGetUser);
}
