import React from 'react';

import imgCart from '../Assets/img/img-cart.png'

const Cart = () => {
  return (
      <div>
        <img alt='cart' src={imgCart} />
        <h2>Your cart is empty</h2>
        <p>Seems like you haven’t chosen what to buy...</p>
      </div>
  )
}

export default Cart