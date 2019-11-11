import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ disabled }) => (disabled ? '#F7F7F7' : '#FF8000')};
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 4px;
  color: ${({ disabled }) => (disabled ? '#C1C1C1' : '#FFFFFF')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}
  font-weight: 600;
  font-size: 16px;
  height: 48px;
  line-height: 24px;
  outline: none;
  width: 100%;

  &:hover {
    background: ${({ disabled }) => (disabled ? '#F7F7F7' : '#C76400')};
  }
`;

const SubmitButton = ({ disabled }) => {
  const handleClick = () => {
    window.location.pathname = '/thanks'
  }
  
  return (
    <Button type='button' disabled={disabled} onClick={handleClick}>COMPLETE ORDER</Button>
  )
}

export default SubmitButton