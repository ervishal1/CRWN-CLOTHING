import {AnyAction} from 'redux';
import { CartItem } from './cart.type';
import { setIsCartOpen, setCartItems } from './cart.actions';

export type CartState = {
  isCartOpen: Boolean;
  cartItems: CartItem[];
}

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {} as AnyAction) : CartState => {
  if(setIsCartOpen.match(action)){
    return { ...state, isCartOpen: action.payload  };
  }

  if(setCartItems.match(action)){
    return { ...state, cartItems: action.payload };
  }
  return state;
};
