import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import imgCart from '../Assets/img/img-cart.png'

const Container = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  text-align: center;
`;

const H2 = styled.h2`
  line-height: 32px;
  margin: 17px 0 8px;
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 24px;
`;

const ProductsQuery = () => {
  return (
    <Query query={gql`
      {
        products {
          id
          name
        }
      }
    `}
    >
      {({ loading, error, data }) => {
        if(loading) return <p>Loading...</p>
        if(error) return <p>Error</p>

        return data.products.map(product => {
          return <p key={product.id}>{product.name}</p>
        })
      }}
    </Query>
  );
};

const Cart = ({ value }) => {
  console.log(value)
  return (
    <Container>
      <img alt='cart' src={imgCart} />
      <H2>Your cart is empty</H2>
      <Text>Seems like you haven’t chosen what to buy...</Text>
      <ProductsQuery/>
    </Container>
  )
}

export default Cart