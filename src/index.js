import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";

import OrderPage from './Pages/OrderPage';
import ThankYouPage from './Pages/ThankYouPage';

const App = (
  <Router>
    <OrderPage path='/' />
    <ThankYouPage path='thanks' />
  </Router>
)

ReactDOM.render(App, document.getElementById('root'));