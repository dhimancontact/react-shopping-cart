import {
  FETCH_PRODUCT,
  FILTER_PRODUCT_BY_SIZE,
  ORDER_PRODUCT_BY_PRICE,
} from "../types";

const initialSate = {
  items: [],
  loading: false,
};

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_PRODUCT_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filterItems: action.payload.items,
      };
    case ORDER_PRODUCT_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filterItems: action.payload.items,
      };

    case "LOADING":
      return { items: {}, loading: true };
    case "LOADING_DONE":
      return { items: {}, loading: false };
    case FETCH_PRODUCT:
      return {
        items: action.payload,
        filterItems: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
