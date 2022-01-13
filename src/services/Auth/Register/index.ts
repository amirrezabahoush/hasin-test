import api from "../../api";

export const register = (data: object) => {
  return api({url: 'auth/register', method: 'POST', data})
}

export const resendCode = (data: object) => {
  return api({url: 'auth/register/retry', method: 'POST', data})
}

