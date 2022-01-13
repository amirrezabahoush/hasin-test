import api from "../../api";

export const register = (data: object) => {
  return api({url: 'auth/register', method: 'POST', data})
}
