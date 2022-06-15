import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducers from "./reducers";
import reduxPromise from "redux-promise-middleware";

const middleware = applyMiddleware(reduxPromise);

const store = createStore(reducers, middleware);

export default store;
