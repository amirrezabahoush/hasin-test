import { createLogger } from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/root";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import user from 'redux/slices/user/slice';
import notification from 'redux/slices/notification/slice';
import ticket from 'redux/slices/tickets/slice';

const sagaMiddleware = createSagaMiddleware();

const defaultMiddlewares = [...getDefaultMiddleware({serializableCheck: false, thunk: false}), sagaMiddleware];

let middleware = [];
const logger = createLogger();
if (process.env.NODE_ENV === "development") {
  middleware = [...defaultMiddlewares, logger];
} else {
  middleware = [...defaultMiddlewares];
}

const reducers = combineReducers({
  user,
  notification,
  ticket
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<DispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
