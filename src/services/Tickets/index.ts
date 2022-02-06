import { FormValues } from "pages/Ticket/Ticket.types";
import api from "../api";

export const getAllTickets = () => {
  return api({url: 'dashboard/crm/list', method: 'GET', headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }})
}

export const addTicket = (data: FormValues) => {
  return api({url: 'dashboard/crm/add', method: 'POST', data: {messageType: 0, ...data}, headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }})
}

export const removeTicket = (suggestionId: number) => {
  return api({url: `dashboard/crm/${suggestionId}`, method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }})
}