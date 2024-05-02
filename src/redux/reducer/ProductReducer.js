


import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../../constant/ActionType";

const initialState = {
  products: [],
  cart: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      case ADD_TO_CART:
        const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.product.id);
        if (existingItemIndex !== -1) {
          const updatedCart = [...state.cart];
          updatedCart[existingItemIndex].quantity += action.payload.quantity;
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          const newItem = {
            ...action.payload.product,
            quantity: action.payload.quantity,
          };
          return {
            ...state,
            cart: [...state.cart, newItem],
          };
        }
      
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload && item.quantity < 10) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default ProductReducer;
 