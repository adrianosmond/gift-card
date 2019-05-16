import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import GlobalStyles from 'style/global';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import Button from 'components/Button';

const AppContainer = styled.section`
  padding: 10px;
  background-color: #ffffff;
  max-width: 100%;
  width: 440px;
`;

const Title = styled.h3`
  font-size: 14px;
  line-height: 1.142857;
  margin-bottom: 10px;
`;

const Instruction = styled.p`
  margin: 10px 0;
`;

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

function App() {
  const [hasGiftCard, setHasGiftCard] = useState(false);
  const [giftCardNum, setGiftCardNum] = useState('');
  const [giftCardCode, setGiftCardCode] = useState('');
  const toggleGiftCard = useCallback(() => setHasGiftCard(state => !state), [
    setHasGiftCard,
  ]);
  const updateGiftCardNum = useCallback(e => setGiftCardNum(e.target.value), [
    setGiftCardNum,
  ]);
  const updateGiftCardCode = useCallback(e => setGiftCardCode(e.target.value), [
    setGiftCardCode,
  ]);
  return (
    <AppContainer>
      <GlobalStyles />
      <Title>Gift Cards</Title>
      <Checkbox
        isChecked={hasGiftCard}
        onChange={toggleGiftCard}
        label="Do you have a gift card?"
      />
      {hasGiftCard && (
        <div>
          <Instruction>
            Please enter the 19-digit number and code from your gift card below
          </Instruction>
          <InputHolder>
            <Input
              placeholder="0000 1234 5678 9012 345"
              value={giftCardNum}
              onChange={updateGiftCardNum}
            />
            <CodeInput
              maxLength="3"
              placeholder="123"
              value={giftCardCode}
              onChange={updateGiftCardCode}
            />
          </InputHolder>
          <ApplyButton label="Apply" />
        </div>
      )}
    </AppContainer>
  );
}

export default App;
