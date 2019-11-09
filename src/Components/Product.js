import React from 'react';

import imgProduct from '../Assets/img/img-product.png'

const Product = () => {
  return (
    <div>
      <img alt='product' src={imgProduct} />
      <div>
        <p>Yogurt Laive</p>
        <p>$23.00</p>
      </div>
      <button type='button'>+</button>
    </div>
  )
}

export default Product