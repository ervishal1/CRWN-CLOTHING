import { createAction,ActionWithPayload,withMatcher } from "../../utils/reducer.util";
import { CART_ACTION_TYPES,CartItem } from "./cart.type";
import {CategoryItem} from '../categories/categories.types';


const addCartItem = (cartItems :CartItem[], productToAdd : CategoryItem) : CartItem[] => {
  const found = cartItems.find((item) => item.id === productToAdd.id);

  if (found) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems :CartItem[], productToRemove : CategoryItem): CartItem[] => {
  const found = cartItems.find((item) => item.id === productToRemove.id);

  if (found && found.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  } else {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};

const clearCartItem = (cartItems : CartItem[], cartItemToClear: CategoryItem) :CartItem[]  =>
  cartItems.filter((item) => item.id !== cartItemToClear.id);

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean>;

export type SetCartItems  = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS,CartItem[]>;

export const setIsCartOpen = withMatcher( (toggle:boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, toggle));

export const setCartItems = withMatcher((cartItems: CartItem[]) =>
createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

export const addItemToCart = (cartItems : CartItem[], productToAdd : CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove : CategoryItem) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear : CategoryItem) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
