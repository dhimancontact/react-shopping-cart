import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { productsReducer } from "./reducers/productReducer";
import { orderReducer } from "./reducers/orderReducer";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
