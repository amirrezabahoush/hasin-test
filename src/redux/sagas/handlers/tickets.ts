import { call, put } from "redux-saga/effects";
import { setTickets } from "../../slices/tickets/slice";
import { setMessage } from "../../slices/notification/slice";
import { sleep } from "utils/helpers";
import { getAllTickets } from "services/Tickets";

export function* handleGetTickets(action: any) {
  try {
    const response = call(() => getAllTickets());
    const { data } = yield response;
    yield put(setTickets(data.payload));
    yield put(setMessage({message: data.message, isSuccessful: data.isSuccessful}));
    sleep(1500);
		yield put(setMessage({ message: "", isSuccessful: false }));
  } catch (error) {
    console.log(error);
  }
}
