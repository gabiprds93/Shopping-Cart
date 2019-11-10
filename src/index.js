import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";
import styled from 'styled-components';

import './Assets/css/styles.css'
import OrderPage from './Pages/OrderPage';
import ThankYouPage from './Pages/ThankYouPage';

const Container = styled.div`
  background: #E5E5E5;
  color: #333333;
  height: 100vh;
  & > div {
    box-sizing: border-box;
    height: 100%;
    padding: 68px 120px 48px;
  }
`
const App = (
  <Container>
    <Router>
      <OrderPage path='/' />
      <ThankYouPage path='thanks' />
    </Router>
  </Container>
)

ReactDOM.render(App, document.getElementById('root'));