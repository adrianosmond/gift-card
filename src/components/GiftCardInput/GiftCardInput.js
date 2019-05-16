import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { inputStyles } from 'components/Input';

const StyledInput = styled(({ hasError, ...props }) => (
  <InputMask {...props} />
))`
  ${inputStyles}
  min-width: 175px;
`;

const GiftCardInput = props => (
  <StyledInput {...props} mask="9999 9999 9999 9999 999" maskChar="X" />
);

export default GiftCardInput;
