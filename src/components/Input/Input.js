import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 5px;
  border: 1px solid ${props => (props.hasError ? '#dc143c' : '#cccccc')};
  border-radius: 0;
  appearance: none;
  font-size: inherit;
  font-weight: 400;
  color: inherit;
  outline: 0;

  &::placeholder {
    color: #cccccc;
  }
`;

const Input = props => <StyledInput {...props} />;

export default Input;
