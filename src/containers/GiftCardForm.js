import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import checkCode from 'api/api';
import Button from 'components/Button';
import GiftCardInput from 'components/GiftCardInput';
import ControlCodeInput from 'components/ControlCodeInput';

const InputHolder = styled.div`
  display: flex;
  margin: 10px 0;
`;

const ApplyButton = styled(Button)`
  width: 140px;
  flex-shrink: 0;
`;

const ButtonAndError = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Error = styled.div`
  flex-grow: 1;
  padding: 10px;
  text-align: center;
  color: #dc143c;
  font-weight: 400;
`;

const validateNumber = num => num.length === 19 && num.match(/^\d+$/);
const validateCode = code => code.length === 3 && code.match(/^\d+$/);

const GiftCardForm = ({ onAddGiftCard }) => {
  const [giftCardNum, setGiftCardNum] = useState('');
  const [giftCardNumHasError, setGiftCardNumHasError] = useState(false);
  const [giftCardCode, setGiftCardCode] = useState('');
  const [giftCardCodeHasError, setGiftCardCodeHasError] = useState(false);
  const [hasInvalidCode, setHasInvalidCode] = useState(false);
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
      setHasInvalidCode(false);
      if (isNumValid && isCodeValid) {
        checkCode(num, giftCardCode)
          .then(response => {
            onAddGiftCard({
              number: num,
              discount: response.data.discount,
            });
            setGiftCardNum('');
            setGiftCardCode('');
          })
          .catch(() => setHasInvalidCode(true));
      } else {
        if (!isNumValid) {
          setGiftCardNumHasError(true);
        }
        if (!isCodeValid) {
          setGiftCardCodeHasError(true);
        }
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
      <ButtonAndError>
        <ApplyButton label="Apply" />
        {hasInvalidCode && <Error>We can't find your code in our system</Error>}
      </ButtonAndError>
    </form>
  );
};

export default GiftCardForm;
