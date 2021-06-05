import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { FETCH_PRODUCT } from "./types";

const initialSate = {
  items: [],
  loading: false,
};

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOADING":
      return { items: {}, loading: true };
    case "LOADING_DONE":
      return { items: {}, loading: false };
    case FETCH_PRODUCT:
      return { items: action.payload, loading: false };
    default:
      return state;
  }
};

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
