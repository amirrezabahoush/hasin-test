import api from "../api";

export const getAllTickets = () => {
  return api({url: 'dashboard/crm/list', method: 'GET', headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }})
}