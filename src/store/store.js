import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { userReducer } from "./reducers/userReducer";
import { globalReducer } from "./reducers/globalReducer";
import { storeReducer } from "./reducers/storeReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCardReducer";

const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
  store: storeReducer,
  product: productReducer,
  shoppingCard: shoppingCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
