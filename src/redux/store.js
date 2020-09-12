import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createReducer from "./index";

const initialState = {};
const enhancers = [];
const middleware = [thunk];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension({ latency: 0 }));
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(createReducer(), initialState, composedEnhancers);
store.asyncReducers = {};

export default store;
