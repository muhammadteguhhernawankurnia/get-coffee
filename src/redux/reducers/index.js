import { combineReducers } from "redux";

import productReducer from "./productDetail";

const reducers = combineReducers({
  product: productReducer,
});

export default reducers;
