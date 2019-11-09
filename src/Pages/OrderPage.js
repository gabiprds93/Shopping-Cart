import React from 'react';

import Searcher from '../Components/Searcher';
import Cart from '../Components/Cart';
import DeliveryDate from '../Components/DeliveryDate';
import Pricing from '../Components/Pricing';
import SubmitButton from '../Components/SubmitButton';

const OrderPage = () => {
  return (
    <div>
      <Searcher />
      <div>
        <Cart />
        <div>
          <DeliveryDate />
          <Pricing />
          <SubmitButton />
        </div>
      </div>
    </div>
  )
}

export default OrderPage