import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import GlobalStyles from 'style/global';
import Checkbox from 'components/Checkbox';
import GiftCardForm from 'containers/GiftCardFormContainer';
import GiftCardList from 'components/GiftCard';

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

function App() {
  const [hasGiftCard, setHasGiftCard] = useState(false);
  const toggleGiftCardForm = useCallback(
    () => setHasGiftCard(state => !state),
    [setHasGiftCard],
  );

  const [giftCards, setGiftCards] = useState([]);
  const addGiftCard = useCallback(
    giftCard => setGiftCards(state => [...state, giftCard]),
    [setGiftCards],
  );

  return (
    <AppContainer>
      <GlobalStyles />
      <Title>Gift Cards</Title>
      <Checkbox
        isChecked={hasGiftCard}
        onChange={toggleGiftCardForm}
        label="Do you have a gift card?"
      />
      {hasGiftCard && (
        <div>
          <Instruction>
            Please enter the 19-digit number and code from your gift card below
          </Instruction>
          <GiftCardList giftCards={giftCards} />
          <GiftCardForm onAddGiftCard={addGiftCard} />
        </div>
      )}
    </AppContainer>
  );
}

export default App;
