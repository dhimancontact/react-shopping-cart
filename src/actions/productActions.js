import {
  ADD_TO_CART,
  FETCH_PRODUCT,
  FILTER_PRODUCT_BY_SIZE,
  ORDER_PRODUCT_BY_PRICE,
} from "../types";

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

export const filterProducts = (products, size) => async (dispatch) => {
  dispatch({
    type: FILTER_PRODUCT_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(
              (product) => product.availableSizes.indexOf(size) >= 0
            ),
    },
  });
};

export const sortProducts = (filteredProducts, sort) => async (dispatch) => {
  let sortedProducts = filteredProducts.slice();

  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : -1
    );
  }

  dispatch({
    type: ORDER_PRODUCT_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
