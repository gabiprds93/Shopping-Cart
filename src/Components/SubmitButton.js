import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #F7F7F7;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 4px;
  color: #C1C1C1;
  font-weight: 600;
  font-size: 16px;
  height: 48px;
  line-height: 24px;
  width: 100%;
`;

const SubmitButton = () => {
  return (
    <Button type='button'>COMPLETE ORDER</Button>
  )
}

export default SubmitButton