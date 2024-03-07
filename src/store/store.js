import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import globalReducer from "./reducers/globalReducer";

export const store = createStore(globalReducer, applyMiddleware(thunk, logger));
