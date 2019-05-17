import React from 'react';
import styled from 'styled-components';
import MaskedInput from 'components/MaskedInput';

const StyledInput = styled(MaskedInput)`
  width: 100px;
  margin-left: 10px;
`;

const ControlCodeInput = props => (
  <StyledInput {...props} mask="999" maskChar="X" pattern="[0-9]*" />
);

export default ControlCodeInput;
