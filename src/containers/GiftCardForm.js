import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import GiftCardInput from 'components/GiftCardInput';
import ControlCodeInput from 'components/ControlCodeInput';

const InputHolder = styled.div`
  display: flex;
  margin: 10px 0;
`;

const ApplyButton = styled(Button)`
  width: 140px;
`;

const validateNumber = num => num.length === 19 && num.match(/^\d+$/);
const validateCode = code => code.length === 3 && code.match(/^\d+$/);

const GiftCardForm = ({ onAddGiftCard }) => {
  const [giftCardNum, setGiftCardNum] = useState('');
  const [giftCardNumHasError, setGiftCardNumHasError] = useState(false);
  const [giftCardCode, setGiftCardCode] = useState('');
  const [giftCardCodeHasError, setGiftCardCodeHasError] = useState(false);
  const updateGiftCardNum = useCallback(
    e => {
      const num = e.target.value;
      setGiftCardNum(e.target.value);
      if (giftCardNumHasError) {
        setGiftCardNumHasError(!validateNumber(num.replace(/\s/g, '')));
      }
    },
    [setGiftCardNum, giftCardNumHasError, setGiftCardNumHasError],
  );
  const updateGiftCardCode = useCallback(
    e => {
      const code = e.target.value;
      setGiftCardCode(code);
      if (giftCardCodeHasError) setGiftCardCodeHasError(!validateCode(code));
    },
    [setGiftCardCode, giftCardCodeHasError, setGiftCardCodeHasError],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const num = giftCardNum.replace(/\s/g, '');
      const isNumValid = validateNumber(num);
      const isCodeValid = validateCode(giftCardCode);
      if (isNumValid && isCodeValid) {
        onAddGiftCard({
          number: num,
          discount: 20,
        });
        setGiftCardNum('');
        setGiftCardCode('');
      } else {
        if (!isNumValid) {
          setGiftCardNumHasError(true);
        }
        if (!isCodeValid) {
          setGiftCardCodeHasError(true);
        }
        console.log('No');
      }
    },
    [giftCardNum, giftCardCode, onAddGiftCard],
  );

  return (
    <form onSubmit={onSubmit}>
      <InputHolder>
        <GiftCardInput
          hasError={giftCardNumHasError}
          placeholder="Gift Card Number"
          value={giftCardNum}
          onChange={updateGiftCardNum}
        />
        <ControlCodeInput
          hasError={giftCardCodeHasError}
          placeholder="Control Code"
          value={giftCardCode}
          onChange={updateGiftCardCode}
        />
      </InputHolder>
      <ApplyButton label="Apply" />
    </form>
  );
};

export default GiftCardForm;
