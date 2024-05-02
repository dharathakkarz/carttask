

import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../../constant/ActionType";

export const fetchProducts = () => {
  return dispatch => {
    const sampleProducts = [
      {
        id: 'p1',
        price: 126,
        title: 'Man Perfume',
        description: 'Denver - Hamilton',
      },
      {
        id: 'p2',
        price: 125,
        title: 'Man Deo',
        description: 'Navia - 24 hours refreshment',
      },
    ];
 
    dispatch({
      type: FETCH_PRODUCTS,
      payload: sampleProducts,
    });
  };
};

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity,
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const incrementQuantity = (productId) => ({
  type: INCREMENT_QUANTITY,
  payload: productId,
});

export const decrementQuantity = (productId) => ({
  type: DECREMENT_QUANTITY,
  payload: productId,
});
