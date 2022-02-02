import { createSlice } from "@reduxjs/toolkit";
import { TicketTypes } from "types";

export const state: ({tickets: TicketTypes[]}) = {
	tickets: []
};

const ticketSlice = createSlice({
	name: "tickets",
	initialState: state,
	reducers: {
		getTickets() {},
		setTickets(state, action) {
      return {...state, tickets: action.payload};
    },
	},
});

export const { getTickets, setTickets } = ticketSlice.actions;

export default ticketSlice.reducer;
