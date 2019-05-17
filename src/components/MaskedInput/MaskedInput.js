import React from 'react';
import InputMask from 'react-input-mask';
import Input from 'components/Input';

const MaskedInput = props => (
  <InputMask {...props}>{inputProps => <Input {...inputProps} />}</InputMask>
);

export default MaskedInput;
