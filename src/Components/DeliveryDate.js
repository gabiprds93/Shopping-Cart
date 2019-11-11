import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

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
  const deliveryDate = React.useMemo(() => {
    const isoCurrentDayOfWeek = moment().format('E')
    const isoFriday = 5
    if(parseInt(isoCurrentDayOfWeek) >= isoFriday){
      return moment().day(1).format('L')
    }
    else{
      return moment().add(1, 'days').format('L')
    }
  }, [])

  return (
    <Container>
      <img alt='car' src={imgCar} />
      <Text>Buy now and get it by <b>{deliveryDate}</b></Text>
    </Container>
  )
}

export default DeliveryDate