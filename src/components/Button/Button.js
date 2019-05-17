import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 44px;
  padding: 5px;
  border: 0;
  outline: 0;
  appearance: none;
  background-color: #333333;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
  }
`;

const Button = ({ label, ...props }) => (
  <StyledButton {...props}>{label}</StyledButton>
);

export default Button;
