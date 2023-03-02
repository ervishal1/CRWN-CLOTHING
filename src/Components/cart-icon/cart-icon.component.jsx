import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.actions';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import './cart-icon.style.jsx'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.style.jsx';

const CartIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon />
        <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon