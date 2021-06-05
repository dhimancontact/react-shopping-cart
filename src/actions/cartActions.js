import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (product) => (disptach, getState) => {
  //   const cartItems = items.slice();
  const cartItems = getState().cart.cartItems.slice();
  let exist = false;
  cartItems.forEach((x) => {
    if (x._id === product._id) {
      exist = true;
      x.count++;
    }
  });

  if (!exist) {
    cartItems.push({ ...product, count: 1 });
  }

  disptach({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeCartItem = (product) => (dispatch, getState) => {
  //   const cartItems = items.slice();
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);

  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
