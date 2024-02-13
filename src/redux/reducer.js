import {  UPDATE_CART, RESET_CART,CLEAR_CART } from "./actions/types";
const initialState = {
    cartItems:[]
  };
  console.log("Initial State is", initialState);
  const cartReducer = (state = initialState, action) => {
     
    switch (action.type) {      
        case UPDATE_CART:
      return {...state,
        cartItems:[...state.cartItems, ...action.payload]
    }
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
      case RESET_CART:
        return {
          ...state,
          cartItems: [...action.payload],
        };
      default:
        return state;
    }
   
  };

  export default cartReducer;
  