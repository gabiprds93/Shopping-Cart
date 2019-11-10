import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  height: 48px;
  line-height: 24px;
  padding: 12px 16px;
  width: 100%;
`;

const Searcher = () => {
  return (
    <Input type='text' placeholder='Search Products'/>
  )
}

export default Searcher