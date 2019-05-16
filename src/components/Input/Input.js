import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 5px;
  border: 1px solid #cccccc;
  appearance: none;

  &::placeholder {
    color: #cccccc;
  }
`;

const Input = props => <StyledInput {...props} />;

export default Input;
