import api from "../../api";

export const register = (data: object) => {
  return api({url: 'auth/register', method: 'POST', data})
}

export const resendCode = (data: object) => {
  return api({url: 'auth/register/retry', method: 'POST', data})
}

export const submitCode = (data: object) => {
  return api({url: 'auth/register/verify-otp', method: 'POST', data})
}

export const sendPassword = (data: object) => {
  return api({url: 'auth/register/apply-password', method: 'POST', data})
}

export const sendLoginData = (data: object) => {
  return api({url: 'auth/login', method: 'POST', data})
}
