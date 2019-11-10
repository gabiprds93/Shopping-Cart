import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  padding: 16px;
`;

const PriceLine = styled.div`
  align-items: center;
  background: ${({ className }) => (className === 'shippingCost' ? '#FFE200' : '#fff')};
  display: flex;
  font-weight: ${({ className }) => (className === 'total' ? '600' : 'normal')};
  justify-content: space-between;
  margin: ${({ className }) => (className === 'total' ? '16px 0 0' : '0 0 8px')};
  padding: 3px 0; 
  & span:first-child {
    font-weight: ${({ className }) => (className ? '600' : 'normal')};
  }
  & span:last-of-type {
    color: ${({ className }) => (className === 'total' ? '#FF2D55' : '#000')};
  }
`;

const Pricing = ({productsPrice}) => {
  const shippingCost = React.useMemo(() => {
    return (productsPrice * 0.10)
  }, [productsPrice]) 

  const taxes = React.useMemo(() => {
    return (productsPrice * 0.18)
  }, [productsPrice])

  const totalPrice = React.useMemo(() => {
    return (productsPrice + shippingCost)
  }, [productsPrice, shippingCost])

  return (
    <Container>
      <PriceLine>
        <span>Products</span>
        <span>${productsPrice.toFixed(2)}</span>
      </PriceLine>
      <PriceLine className='shippingCost'>
        <span>Shipping cost</span>
        <span>${shippingCost.toFixed(2)}</span>
      </PriceLine>
      <PriceLine>
        <span>Taxes</span>
        <span>${taxes.toFixed(2)}</span>
      </PriceLine>
      <PriceLine className='total'>
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </PriceLine>
    </Container>
  )
}

export default Pricing