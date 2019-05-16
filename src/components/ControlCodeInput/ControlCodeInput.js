import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { inputStyles } from 'components/Input';

const StyledInput = styled(({ hasError, ...props }) => (
  <InputMask {...props} />
))`
  ${inputStyles}
  width: 100px;
  margin-left: 10px;
`;

const ControlCodeInput = props => (
  <StyledInput {...props} mask="999" maskChar="X" />
);

export default ControlCodeInput;
