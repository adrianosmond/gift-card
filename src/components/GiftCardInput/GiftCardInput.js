import React from 'react';
import styled from 'styled-components';
import MaskedInput from 'components/MaskedInput';

const StyledInput = styled(MaskedInput)`
  min-width: 175px;
`;

const GiftCardInput = props => (
  <StyledInput
    {...props}
    mask="9999 9999 9999 9999 999"
    maskChar="X"
    pattern="[0-9]*"
  />
);

export default GiftCardInput;
