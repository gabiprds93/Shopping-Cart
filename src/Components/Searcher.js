import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  & input {
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: Open Sans;
    font-size: 16px;
    height: 48px;
    line-height: 24px;
    padding: 12px 16px;
  }
`;

const Searcher = () => {
  return (
    <InputContainer>
      <input type='text' placeholder='Search Products'/>
    </InputContainer>
  )
}

export default Searcher