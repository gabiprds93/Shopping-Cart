import React from 'react';
import styled from 'styled-components';

import Searcher from '../Components/Searcher';
import Cart from '../Components/Cart';
import DeliveryDate from '../Components/DeliveryDate';
import Pricing from '../Components/Pricing';
import SubmitButton from '../Components/SubmitButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const InputContainer = styled.div`
  margin: 0 0 16px;
  width: 45%;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;

  & > div {
    width: 45%;
  }

  & > div:first-child {
    margin: 0 5% 0 0;
  }

  & > div:last-of-type {
    & > div {
      margin: 0 0 16px;
    }
  }
`;

const OrderPage = () => {
  const [searchText, setSearchText] = React.useState('')
  const [productsPrice, setProductsPrice] = React.useState(0)

  const inputHandleChange = (text) => {
    setSearchText(text)
  }
  const addProduct = (price) => {
    setProductsPrice(productsPrice + price)
  }

  return (
    <Container>
      <InputContainer>
        <Searcher inputValue={searchText} inputHandleChange={inputHandleChange}/>
      </InputContainer>
      <Wrapper>
        <Cart searchText={searchText} addProduct={addProduct}/>
        <div>
          <DeliveryDate />
          <Pricing productsPrice={productsPrice}/>
        </div>
      </Wrapper>
    </Container>
  )
}

export default OrderPage