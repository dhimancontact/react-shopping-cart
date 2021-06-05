import { FETCH_PRODUCT } from "../types";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
