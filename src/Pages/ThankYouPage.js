import React from 'react';

import imgSuccess from '../Assets/img/img-success.png';

const ThankYouPage = () => {
    return (
        <div>
          <h1>Thank you</h1>
          <p>Your order P0001 has been registered</p>
          <a href='#'>Continue shopping</a>
          <div>
            <img alt='success' src={imgSuccess} />
          </div>
        </div>
    )
}

export default ThankYouPage