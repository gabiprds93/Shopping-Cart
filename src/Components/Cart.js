import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import imgCart from '../Assets/img/img-cart.png'
import Product from './Product'

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

const ProductsQuery = ({value}) => {
  return (
    <Query query={gql`
      {
        products {
          id
          image
          name
          price
        }
      }
    `}
    >
      {({ loading, error, data }) => {
        if(loading) return <p>Loading...</p>
        if(error) return <p>Error</p>

        let filterProducts = data.products.filter(product => {
          return product.name.toLowerCase().includes(value.toLowerCase()) 
        }).map(product => {
          return <Product key={product.id} values={product} />
        })
        console.log(filterProducts)
        if(filterProducts.length){
          return filterProducts
        }
        else{
          return <p>No results</p>
        }
      }}
    </Query>
  );
};

const Cart = ({ value }) => {
  console.log(value)
  return (
    <Container>
      {value !== '' ? 
        <ProductsQuery value={value}/>
      :
        <React.Fragment>
          <img alt='cart' src={imgCart} />
          <H2>Your cart is empty</H2>
          <Text>Seems like you haven’t chosen what to buy...</Text>
        </React.Fragment>
      }
      
    </Container>
  )
}

export default Cart