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
  return (
    <Container>
      <InputContainer>
        <Searcher />
      </InputContainer>
      <Wrapper>
        <Cart />
        <div>
          <DeliveryDate />
          <Pricing />
          <SubmitButton />
        </div>
      </Wrapper>
    </Container>
  )
}

export default OrderPage