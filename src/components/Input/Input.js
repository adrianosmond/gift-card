import React from 'react';
import styled, { css } from 'styled-components';

export const inputStyles = css`
  width: 100%;
  height: 44px;
  padding: 5px;
  border: 1px solid ${props => (props.hasError ? 'red' : '#cccccc')};
  appearance: none;
  font-size: inherit;
  font-weight: 400;
  color: inherit;
  outline: 0;

  &::placeholder {
    color: #cccccc;
  }
`;

const StyledInput = styled.input`
  ${inputStyles}
`;

const Input = props => <StyledInput {...props} />;

export default Input;
