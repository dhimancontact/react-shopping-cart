import { FETCH_PRODUCT } from "../types";

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
  const result = await fetch("http://localhost:3001/api/products");
  const data = await result.json();

  dispatch({
    type: "LOADING_DONE",
    payload: false,
  });
  dispatch({
    type: FETCH_PRODUCT,
    payload: data,
  });
};
