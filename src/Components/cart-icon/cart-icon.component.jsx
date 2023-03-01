import React, { useContext } from 'react'
import { CartContext } from '../../context/cart.context';
import './cart-icon.style.jsx'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.style.jsx';

const CartIcon = () => {
    const { setIsCartOpen,isCartOpen,cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon />
        <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon