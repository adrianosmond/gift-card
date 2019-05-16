import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import Button from 'components/Button';

const InputHolder = styled.div`
  display: flex;
  margin: 10px 0;
`;

const CodeInput = styled(Input)`
  margin-left: 10px;
  width: 100px;
`;

const ApplyButton = styled(Button)`
  width: 140px;
`;

const GiftCardForm = ({ onAddGiftCard }) => {
  const [giftCardNum, setGiftCardNum] = useState('');
  const [giftCardCode, setGiftCardCode] = useState('');
  const updateGiftCardNum = useCallback(e => setGiftCardNum(e.target.value), [
    setGiftCardNum,
  ]);
  const updateGiftCardCode = useCallback(e => setGiftCardCode(e.target.value), [
    setGiftCardCode,
  ]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (
        giftCardNum.length === 19 &&
        giftCardNum.match(/\d+/) &&
        giftCardCode.length === 3 &&
        giftCardCode.match(/\d+/)
      ) {
        onAddGiftCard({
          number: giftCardNum,
          discount: 20,
        });
      } else {
        console.log('No');
      }
    },
    [giftCardNum, giftCardCode],
  );

  return (
    <form onSubmit={onSubmit}>
      <InputHolder>
        <Input
          placeholder="Gift Card Number"
          value={giftCardNum}
          onChange={updateGiftCardNum}
        />
        <CodeInput
          maxLength="3"
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
