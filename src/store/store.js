import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

export const store = createStore(reducers, applyMiddleware(thunk, logger));
