import api from "../../api";
import { ChangePasswordTypes, RegisterTypes } from "./types";

export const register = (data: RegisterTypes) => {
  return api({url: 'auth/register', method: 'POST', data})
}

export const resendCode = (data: {id: string}) => {
  return api({url: 'auth/register/retry', method: 'POST', data})
}

export const submitCode = (data: object) => {
  return api({url: 'auth/register/verify-otp', method: 'POST', data})
}

export const sendPassword = (data: object) => {
  return api({url: 'auth/register/apply-password', method: 'POST', data})
}

export const changePassword = (data: ChangePasswordTypes) => {
  return api({url: 'user/change/password/lite', method: 'PUT', data})
}

export const sendLoginData = (data: object) => {
  return api({url: 'auth/login', method: 'POST', data})
}
