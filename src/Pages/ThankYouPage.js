import React from 'react';
import { Link } from "@reach/router"
import styled from 'styled-components';

import imgSuccess from '../Assets/img/img-success.png';

const Container = styled.div`
  align-items: center; 
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const H1 = styled.h1`
  font-size: 28px;
  line-height: 42px;
  margin: 0 0 8px;
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 24px;
  margin: ${({ className }) => (className === 'link' ? '8px 0 48px' : '8px 0')};
  & > a {
    color: #0500FF;
    text-decoration: none;
  }
`;

const ThankYouPage = () => {
  return (
    <Container>
      <H1>Thank you</H1>
      <Text>Your order <b>P0001</b> has been registered</Text>
      <Text className='link'>
        <Link to='/'>Continue shopping</Link>
      </Text>
      <div>
        <img alt='success' src={imgSuccess} />
      </div>
    </Container>
  )
}

export default ThankYouPage