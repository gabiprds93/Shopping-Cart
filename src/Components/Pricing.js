import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
`;

const PriceLine = styled.div`
  align-items: center;
  background: ${({ className }) => (className === 'shippingCost' ? '#FFE200' : '#fff')};
  display: flex;
  font-weight: ${({ className }) => (className === 'total' ? '600' : 'normal')};
  justify-content: space-between;
  padding: 3px 0; 
  & span:first-child {
    font-weight: ${({ className }) => (className ? '600' : 'normal')};
  }
  & span:last-of-type {
    color: ${({ className }) => (className === 'total' ? '#FF2D55' : '#000')};
  }
`;

const Pricing = () => {
  return (
    <Container>
      <PriceLine>
        <span>Products</span>
        <span>$0.00</span>
      </PriceLine>
      <PriceLine className='shippingCost'>
        <span>Shipping cost</span>
        <span>$0.00</span>
      </PriceLine>
      <PriceLine>
        <span>Taxes</span>
        <span>$0.00</span>
      </PriceLine>
      <PriceLine className='total'>
        <span>Total</span>
        <span>$0.00</span>
      </PriceLine>
    </Container>
  )
}

export default Pricing