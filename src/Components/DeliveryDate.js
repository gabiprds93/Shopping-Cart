import React from 'react';
import styled from 'styled-components';

import imgCar from '../Assets/img/img-car.png'

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 24px;
  padding: 0 0 0 12px;
`;

const DeliveryDate = () => {
  return (
    <Container>
      <img alt='car' src={imgCar} />
      <Text>Buy now and get it by <b>05/24/19</b></Text>
    </Container>
  )
}

export default DeliveryDate