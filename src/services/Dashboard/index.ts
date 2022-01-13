import api from '../api';

export const getUser = () => {
  return api({url: 'user/whoAmI', method: 'GET', withCredentials: true})
  // return api({url: 'user/whoAmI', method: 'GET', headers: {'Authorization': `JWT ${localStorage.getItem('token')}`}})
}
