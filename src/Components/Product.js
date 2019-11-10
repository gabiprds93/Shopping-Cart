import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid #DDDDDD;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  text-align: left;

  & img {
    width: 80px;
  }
`

const Price = styled.p`
  color: #FF2D55;
  font-size: 21px;
  margin: 0;
`

const Button = styled.button`
  background: #FF8000;
  border: 0px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  height: 48px;
  outline: none;
  width: 48px;
`

const Product = ({values, addProduct}) => {
  return (
    <Container>
      <img alt='product' src={values.image} />
      <div>
        <p>{values.name}</p>
        <Price>${values.price}</Price>
      </div>
      <Button type='button' onClick={() => addProduct(values.price)}>+</Button>
    </Container>
  )
}

export default Product